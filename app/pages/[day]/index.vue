<template>
  <main class="h-full">
    <div class="flex items-center justify-center gap-5 flex-col h-screen">
      <ul class="text-center" v-if="exercises">
        <li v-for="exercise in exercises" :key="exercise.id">
          <NuxtLink
            v-if="exercise.superset"
            :to="`/${day}/${exercise.superset.charAt(0)}`"
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
