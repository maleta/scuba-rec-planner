<script setup>
import { ref, watch } from "vue";
import {
  depthCorrection,
  PRESSURE_GROUP,
  pressureGroupAfterDive,
  pressureGroupAfterSurfaceInt,
} from "@/data/DivingData";
const maxDepth = ref(null);
const bottomTime = ref(null);
const surfaceInterval = ref(null);

const nextDiveBottomTime = ref(null);
const nextDiveDepth = ref(null);

const dives = ref([]);
const infoMessages = ref([]);

const addDive = function () {
  if (!maxDepth?.value || !bottomTime?.value || !surfaceInterval?.value) {
    return;
  }

  dives.value.push({
    maxDepth: Math.ceil(maxDepth.value),
    bottomTime: bottomTime.value,
    surfaceInterval: surfaceInterval.value,
  });
  maxDepth.value = bottomTime.value = surfaceInterval.value = 0;
};
const removeDive = function (diveIndex) {
  dives.value.splice(diveIndex, 1);
};
const doCalculation = function (dives) {
  let newPressureGroup = "";
  let pressureGroupAfterPause = "";
  let residualNitrogenTime = 0;
  for (let i = 0; i < dives.length; i++) {
    if (pressureGroupAfterPause !== "") {
      residualNitrogenTime =
        PRESSURE_GROUP[depthCorrection(dives[i].maxDepth)][
          pressureGroupAfterPause.charCodeAt(0) - "A".charCodeAt(0)
        ];
    }
    newPressureGroup = pressureGroupAfterDive(
      dives[i].maxDepth,
      dives[i].bottomTime + residualNitrogenTime
    );
    pressureGroupAfterPause = pressureGroupAfterSurfaceInt(
      newPressureGroup,
      dives[i].surfaceInterval
    );
  }
  if (nextDiveDepth.value) {
    residualNitrogenTime =
      PRESSURE_GROUP[depthCorrection(Math.ceil(nextDiveDepth.value))][
        pressureGroupAfterPause.charCodeAt(0) - "A".charCodeAt(0)
      ];
  }

  infoMessages.value = [];
  if (dives.length) {
    if (pressureGroupAfterPause === "CLEAR") {
      infoMessages.value.push(`You do not have residual Nitrogen! 🎉`);
    } else {
      infoMessages.value.push(
        `Pressure group after entered dives is ${pressureGroupAfterPause}`
      );
    }

    if (nextDiveDepth.value) {
      infoMessages.value.push(
        `Residual Nitrogen Time for planned dive at ${nextDiveDepth.value} meters is ${residualNitrogenTime} minutes.`
      );
      infoMessages.value.push(
        `NO DECOMPRESSION LIMIT for next dive at ${
          nextDiveDepth.value
        } meters is ${
          PRESSURE_GROUP[depthCorrection(nextDiveDepth.value)][
            PRESSURE_GROUP[depthCorrection(nextDiveDepth.value)].length - 1
          ] - residualNitrogenTime
        } minutes!`
      );
      if (nextDiveBottomTime.value) {
        infoMessages.value.push(
          `Total Bottom Time after planned dive will be ${
            nextDiveBottomTime.value + residualNitrogenTime
          } minutes.`
        );
      }
    }
  }
};
watch(nextDiveDepth, () => {
  if (nextDiveDepth?.value > 42) {
    nextDiveDepth.value = 42;
  }
});
watch(maxDepth, () => {
  if (maxDepth?.value > 42) {
    maxDepth.value = 42;
  }
});
watch(
  () => dives.value,
  (newDive) => {
    doCalculation(newDive);
  },
  { deep: true }
);

watch(
  [nextDiveDepth, nextDiveBottomTime],
  () => {
    doCalculation(dives.value);
  },
  { deep: true }
);
</script>

<template>
  <div class="width-limit-ma">
    <section class="section">
      <div class="block">
        <h1 class="title margin-bottom-50">Dive planner</h1>

        <div class="block">
          This planner currently works only in Metric System.
        </div>
        <div class="block">
          Planner is implemented following
          <a href="@/recreational-dive-planner-PADI.pdf">PADI Dive Table</a>
        </div>
        <h2 class="subtitle">Add your dives</h2>

        <div>
          <div class="columns is-vcentered is-centered">
            <div class="column">
              <label class="label">Max depth(m)</label>
              <input
                class="input is-small"
                type="number"
                placeholder="Max depth"
                max="42"
                min="10"
                v-model="maxDepth"
              />
            </div>
            <div class="column">
              <label class="label">Bottom time(min)</label>
              <input
                class="input is-small"
                type="number"
                placeholder="Bottom time"
                min="1"
                v-model="bottomTime"
              />
            </div>
            <div class="column">
              <label class="label">Surface interval(min)</label>
              <input
                class="input is-small"
                type="number"
                placeholder="Surface interval"
                v-model="surfaceInterval"
                min="1"
              />
            </div>
            <div class="column is-1">
              <button
                @click="addDive"
                class="button is-small is-primary margin-bottom-20"
              >
                ADD DIVE
              </button>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <table class="table table-limit-2">
            <thead>
              <tr>
                <th>Dive#</th>
                <th>Max depth</th>
                <th>Bottom time</th>
                <th>Surface Interval</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dive, index) in dives" :key="index">
                <td>{{ index + 1 }}.</td>
                <td>{{ dive.maxDepth }}</td>
                <td>{{ dive.bottomTime }}</td>
                <td>
                  {{ dive.surfaceInterval }}
                  <img
                    src="@/assets/delete.png"
                    @click="removeDive(index)"
                    class="delete-dive"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-half is-centered">
          <label class="label">Planned max depth of the next dive (m)</label>
          <input
            class="input is-small"
            type="number"
            placeholder="Max depth of the next dive"
            v-model="nextDiveDepth"
            min="1"
            max="42"
          />
        </div>
        <div class="column is-half is-centered">
          <label class="label">Planned bottom time of the next dive(min)</label>
          <input
            class="input is-small"
            type="number"
            placeholder="Bottom time of the next dive"
            v-model="nextDiveBottomTime"
            min="1"
          />
        </div>
      </div>
    </section>
    <section>
      <article
        v-for="(infoMessage, index) in infoMessages"
        :key="index"
        class="message is-info"
      >
        <div class="message-body">
          {{ infoMessage }}
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.width-limit-ma {
  margin: auto;
  max-width: 800px;
}
.delete-dive {
  width: 17px;
  height: 17px;
  cursor: pointer;
  position: relative;
  top: 3px;
  right: -20px;
}
.margin-bottom-20 {
  margin-bottom: 20px;
}
.margin-bottom-50 {
  margin-bottom: 50px;
}
</style>
