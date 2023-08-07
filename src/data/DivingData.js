export const PRESSURE_GROUP = {
  10: [
    10, 20, 26, 30, 34, 37, 41, 45, 50, 54, 59, 64, 70, 75, 82, 88, 95, 104,
    112, 122, 133, 145, 160, 178, 199, 219,
  ],
  12: [
    9, 17, 23, 26, 29, 32, 35, 38, 42, 45, 49, 53, 57, 62, 66, 71, 76, 82, 88,
    94, 101, 108, 116, 125, 134, 147,
  ],
  14: [
    8, 15, 19, 22, 24, 27, 29, 32, 35, 37, 40, 43, 47, 50, 53, 57, 61, 64, 68,
    73, 77, 82, 87, 92, 98,
  ],
  16: [
    7, 13, 17, 19, 21, 23, 25, 27, 29, 32, 34, 37, 39, 42, 45, 48, 50, 53, 56,
    60, 63, 67, 70, 72,
  ],
  18: [
    6, 11, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 39, 41, 43, 46, 48,
    51, 53, 55, 56,
  ],
  20: [
    6, 10, 13, 15, 16, 18, 20, 21, 23, 25, 26, 28, 30, 32, 34, 36, 38, 40, 42,
    44, 45,
  ],
  22: [
    5, 9, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 27, 29, 30, 32, 34, 36, 37,
  ],
  25: [4, 8, 10, 11, 13, 14, 15, 17, 18, 19, 21, 22, 23, 25, 26, 28, 29],
  30: [3, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20],
  35: [3, 5, 7, 8, "SKIP", 9, 10, 11, 12, 13, 14],
  40: ["SKIP", 5, 6, "SKIP", 7, 8, 9],
  42: ["SKIP", 4, "SKIP", 6, 7, 8],
};

const SURFACE_INTERVAL_TABLE = {
  Z: [
    0, 3, 6, 9, 12, 15, 18, 21, 25, 29, 32, 36, 41, 45, 50, 55, 60, 66, 72, 78,
    85, 92, 101, 110, 132, 180, 360,
  ],
  Y: [
    0, 3, 6, 9, 12, 15, 19, 22, 26, 30, 34, 38, 42, 47, 52, 57, 63, 69, 75, 82,
    90, 98, 107, 129, 177, 357,
  ],
  X: [
    0, 3, 6, 9, 12, 15, 19, 23, 27, 31, 35, 40, 44, 49, 54, 60, 66, 72, 79, 87,
    95, 104, 206, 174, 354,
  ],
  W: [
    0, 3, 6, 9, 13, 16, 20, 24, 28, 32, 37, 41, 46, 51, 57, 63, 69, 76, 84, 92,
    101, 123, 171, 351,
  ],
  V: [
    0, 3, 6, 10, 13, 17, 21, 25, 29, 34, 38, 43, 48, 54, 60, 66, 73, 81, 89, 98,
    120, 168, 348,
  ],
  U: [
    0, 3, 7, 10, 14, 18, 22, 26, 30, 35, 40, 45, 51, 57, 63, 70, 78, 86, 95,
    117, 165, 345,
  ],
  T: [
    0, 3, 7, 11, 14, 18, 23, 27, 32, 37, 42, 48, 54, 60, 67, 74, 83, 92, 114,
    162, 342,
  ],
  S: [
    0, 4, 7, 11, 15, 19, 24, 28, 33, 39, 44, 50, 57, 64, 71, 79, 88, 110, 159,
    339,
  ],
  R: [
    0, 4, 8, 12, 16, 20, 25, 30, 35, 41, 47, 53, 60, 68, 76, 85, 107, 155, 335,
  ],
  Q: [0, 4, 8, 12, 17, 21, 26, 31, 37, 43, 49, 56, 64, 72, 81, 103, 151, 331],
  P: [0, 4, 8, 13, 17, 22, 28, 33, 39, 46, 52, 60, 68, 77, 99, 148, 328],
  O: [0, 4, 9, 13, 18, 24, 29, 35, 42, 48, 56, 64, 73, 95, 144, 324],
  N: [0, 4, 9, 14, 19, 25, 31, 37, 44, 52, 60, 69, 91, 139, 319],
  M: [0, 5, 10, 15, 20, 26, 33, 40, 47, 56, 65, 86, 135, 315],
  L: [0, 5, 10, 16, 22, 28, 35, 43, 51, 60, 82, 130, 310],
  K: [0, 5, 11, 17, 23, 30, 38, 46, 55, 77, 125, 305],
  J: [0, 6, 12, 18, 25, 32, 41, 50, 72, 120, 300],
  I: [0, 6, 12, 19, 27, 35, 44, 66, 114, 294],
  H: [0, 6, 13, 21, 29, 38, 60, 108, 288],
  G: [0, 7, 14, 23, 32, 54, 102, 282],
  F: [0, 8, 16, 25, 47, 95, 275],
  E: [0, 8, 17, 39, 88, 268],
  D: [0, 9, 31, 79, 259],
  C: [0, 22, 70, 250],
  B: [0, 48, 228],
  A: [0, 180],
};
export const VALID_DEPTHS = [10, 12, 14, 16, 18, 20, 22, 25, 30, 35, 40, 42];

export const depthCorrection = function (depth) {
  console.log("WRONT DEPTH = ", depth);
  if (depth < VALID_DEPTHS[0]) {
    return VALID_DEPTHS[0];
  }

  if (depth > VALID_DEPTHS[VALID_DEPTHS.length - 1]) {
    throw new Error("Maximal recreational diving depth is 42 meters.");
  }

  if (
    VALID_DEPTHS.indexOf(depth) === -1 &&
    depth > VALID_DEPTHS[0] &&
    depth < VALID_DEPTHS[VALID_DEPTHS.length - 1]
  ) {
    for (let i = 0; i < VALID_DEPTHS.length - 1; i++) {
      if (depth > VALID_DEPTHS[i] && depth < VALID_DEPTHS[i + 1]) {
        depth = VALID_DEPTHS[i + 1];
        break;
      }
    }
  }
  return depth;
};

export const timeCorrection = function (depth, time) {
  if (depth === 40 && time < 5) {
    time = 5;
  } else if (depth === 42 && time < 4) {
    time = 4;
  } else if (depth === 42 && time === 5) {
    time = 6;
  } else if (
    time > PRESSURE_GROUP[depth][0] &&
    time <= PRESSURE_GROUP[depth][PRESSURE_GROUP[depth].length - 1] &&
    PRESSURE_GROUP[depth].indexOf(time) === -1
  ) {
    for (
      let i = 0;
      i < PRESSURE_GROUP[depth][PRESSURE_GROUP[depth].length - 1];
      i++
    ) {
      if (
        time > PRESSURE_GROUP[depth][i] &&
        time < PRESSURE_GROUP[depth][i + 1]
      ) {
        time = PRESSURE_GROUP[depth][i + 1];
        break;
      }
    }
  }
  return time;
};

export const pressureGroupAfterDive = function (depth, time) {
  // correction for depth if depth is valid
  depth = depthCorrection(depth);

  if (!PRESSURE_GROUP[depth]) {
    return "NOT FOUND";
  }

  // correction to time in the group
  time = timeCorrection(depth, time);

  if (PRESSURE_GROUP[depth].indexOf(time) === -1) {
    return "NOT FOUND";
  }

  return String.fromCharCode(
    "A".charCodeAt(0) + PRESSURE_GROUP[depth].indexOf(time)
  );
};

export const pressureGroupAfterSurfaceInt = function (
  pressureGroup,
  surfaceInterval
) {
  if (!SURFACE_INTERVAL_TABLE[pressureGroup]) {
    return "NOT FOUND";
  }
  let surfIntervalSectionCount = SURFACE_INTERVAL_TABLE[pressureGroup].length;

  if (
    surfaceInterval >
    SURFACE_INTERVAL_TABLE[pressureGroup][surfIntervalSectionCount - 1]
  ) {
    return "CLEAR";
  }

  if (
    surfaceInterval ===
    SURFACE_INTERVAL_TABLE[pressureGroup][surfIntervalSectionCount - 1]
  ) {
    return "A";
  }

  for (let i = 0; i < surfIntervalSectionCount; i++) {
    if (
      SURFACE_INTERVAL_TABLE[pressureGroup][i] <= surfaceInterval &&
      SURFACE_INTERVAL_TABLE[pressureGroup][i + 1] >= surfaceInterval
    ) {
      return String.fromCharCode(pressureGroup.charCodeAt(0) - i);
    }
  }
};

try {
  depthCorrection(45);
} catch (e) {
  console.log(e.message === "Maximal recreational diving depth is 42 meters.");
}

console.log(depthCorrection(8) === 10);
console.log(pressureGroupAfterDive(42, 3) === "B");
console.log(pressureGroupAfterDive(42, 5) === "D");
console.log(pressureGroupAfterDive(15, 35) === "L");

console.log(pressureGroupAfterSurfaceInt("Z", 34) === "P");
console.log(pressureGroupAfterSurfaceInt("P", 35) === "I");
console.log(pressureGroupAfterSurfaceInt("A", 181) === "CLEAR");
console.log(pressureGroupAfterSurfaceInt("A", 180) === "A");
console.log(pressureGroupAfterSurfaceInt("L", 310) === "A");
console.log(pressureGroupAfterSurfaceInt("L", 65) === "C");
