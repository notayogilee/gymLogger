<template>
  <main class="h-full">
    <div class="flex items-center justify-center gap-5 flex-col h-full">
      <ul class="text-center" v-if="exercises">
        <li v-for="exercise in exercises" :key="exercise.id">
          <NuxtLink
            v-if="exercise.superset"
            :to="`/${day}/${exercise.superset.charAt(0)}`"
          >
            <h3>{{ exercise.superset }} - {{ exercise.name }}</h3>
          </NuxtLink>
          <NuxtLink v-else :to="`/${day}/${exercise.id.at(-1)}`">
            <h3>{{ exercise.superset }} - {{ exercise.name }}</h3>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
const { data, pending, error } = await useTrainingData();

const training = data.value?.training;

const route = useRoute();
const { day } = route.params;

const { exercises } = training.filter(
  (trainingDay) => trainingDay.day === parseInt(day),
)[0];
</script>
