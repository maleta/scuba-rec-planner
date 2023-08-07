<template>
  <div v-if="show" :class="['notification', `is-${type}`]">
    {{ message }}
    <button class="delete" @click="closeNotification"></button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
const type = ref("");
const message = ref("");

const closeNotification = () => {
  show.value = false;
};
</script>

<style>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.is-primary {
  background-color: #3273dc;
}

.is-success {
  background-color: #23d160;
}

.is-danger {
  background-color: #ff3860;
}
</style>
