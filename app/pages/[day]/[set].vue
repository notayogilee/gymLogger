<template>
  <main class="h-full">
    <div class="flex items-center justify-center gap-5 flex-col h-full">
      <ul class="text-center" v-if="exercises">
        <li v-for="exercise in superSet" :key="exercise.id">
          <h3>{{ exercise.superset }} - {{ exercise.name }}</h3>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
const { data, pending, error } = await useTrainingData();

const training = data.value?.training;

const route = useRoute();
const { day, set } = route.params;

const { exercises } = training.filter(
  (trainingDay) => trainingDay.day === parseInt(day),
)[0];

const superSet = exercises.filter((exercise) => {
  return (
    (exercise.superset && exercise.superset.charAt(0) === set) ||
    exercise.id.at(-1) === set
  );
});
</script>
