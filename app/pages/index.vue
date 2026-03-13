<script setup>
import { ref } from "vue";
const { user, isLoggedIn, logout } = useAuth();

const router = useRouter();

onMounted(async () => {
  if (!isLoggedIn.value) {
    navigateTo("/login");
  }
});

const error = ref("");

const selectedProgram = ref(null);
const training = ref(null);
const exercises = ref(null);
const selectedDay = ref(null);
const exercise = ref(null);

const fetchSelectedProgram = async (program) => {
  try {
    selectedProgram.value = program;
    const { trainingData } = await $fetch(`/api/programs/${program}`);

    training.value = trainingData;
  } catch (error) {
    console.error("An error occured fetching training data: ", error);
  }
};

const setSelectedDay = (day) => {
  selectedDay.value = day;
  const exercisesForSelectedDay = training.value.filter(
    (trainingDay) => trainingDay.day === parseInt(day),
  )[0];
  exercises.value = exercisesForSelectedDay.exercises;
};

const setSelectedExercise = (e) => {
  // exercise.value = e;
  const selectedExerciseData = exercises.value.filter(
    (exercise) => exercise.name === e,
  )[0];
  exercise.value = selectedExerciseData;
  console.log(exercise.value);
};

const handleLogout = async () => {
  try {
    error.value = "";
    await logout();
    router.push("/login");
    routerKey.push;
  } catch (error) {
    error.value = "There was an error logging out";
  }
};
</script>

<template>
  <div
    v-if="isLoggedIn"
    class="flex items-center justify-center flex-col h-screen p-4"
  >
    <div class="flex items-center justify-between w-full md:px-24 py-6">
      <h3 class="text-2xl font-bold">Welcome {{ user?.username }}</h3>
      <button
        class="rounded-lg py-2 px-4 bg-red-500 font-bold text-white max-w-fit"
        @click="handleLogout"
      >
        Logout
      </button>
      <p v-if="error" class="text-red-700">{{ error }}</p>
    </div>

    <main class="h-full">
      <div class="flex items-center justify-center gap-5 flex-col h-full">
        <ul
          class="text-center"
          v-if="selectedProgram && training && !selectedDay && !exercise"
        >
          <li
            v-for="day in training"
            :key="training.day"
            class="bg-white rounded my-2 py-2"
          >
            <button @click="setSelectedDay(day.day)">
              <div class="flex items-center">
                <h3 class="px-4">{{ day.day }}</h3>
                <div
                  class="px-4 flex flex-col justify-center items-center w-full"
                >
                  <h3 class="text-center">{{ day.title }}</h3>
                  <h3>{{ day.focus }}</h3>
                </div>
              </div>
            </button>
          </li>
        </ul>
        <ul v-else-if="selectedProgram && training && selectedDay && !exercise">
          <li v-for="exercise in exercises">
            <button
              v-if="exercise.superset"
              @click="setSelectedExercise(exercise.name)"
            >
              <div
                class="flex items-center bg-white py-2"
                :class="{
                  'rounded-t-md': exercise.superset.charAt(1) === '1',
                  'rounded-b-md mb-2': exercise.superset.charAt(1) === '2',
                }"
              >
                <h3 class="px-4">{{ exercise.superset }}</h3>
                <div
                  class="px-4 flex flex-col justify-center items-center w-full"
                >
                  <h3>{{ exercise.name }}</h3>
                </div>
              </div>
            </button>
            <button v-else>
              <div class="flex items-center bg-white py-2 rounded mb-2">
                <div
                  class="px-4 flex flex-col justify-center items-center w-full"
                >
                  <h3>{{ exercise.name }}</h3>
                </div>
              </div>
            </button>
          </li>
        </ul>
        <ul v-else-if="selectedProgram && training && selectedDay && exercise">
          <div class="" v-for="e in exercise">
            <p>{{ e.name }}</p>
          </div>
        </ul>
        <ul v-else>
          <li @click="fetchSelectedProgram('phaseOneProgram')">
            Phase One Program
          </li>
          <li @click="fetchSelectedProgram('phaseTwoProgram')">
            Phase Two Program
          </li>
          <li @click="fetchSelectedProgram('phaseThreeProgram')">
            Phase Three Program
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
