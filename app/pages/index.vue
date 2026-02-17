<script setup>
const { user, isLoggedIn, logout } = useAuth();
const { data } = await useTrainingData();
const router = useRouter();

onMounted(async () => {
  if (!isLoggedIn.value) {
    navigateTo("/login");
  }
});

const error = ref("");
const training = data.value?.training;

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
    class="flex items-center justify-center flex-col h-screen"
  >
    <div class="flex items-center justify-center">
      <h3>Welcome {{ user?.username }}</h3>
      <button
        class="rounded-lg p-2 mt-4 mx-auto bg-red-500 text-bold text-white w-1/2"
        @click="handleLogout"
      >
        Logout
      </button>
      <p v-if="error" class="text-red-700">{{ error }}</p>
    </div>

    <main class="h-full">
      <div class="flex items-center justify-center gap-5 flex-col h-full">
        <ul class="text-center" v-if="training">
          <li v-for="day in training" :key="training.day">
            <NuxtLink :to="`/${day.day}`">
              <h3>{{ day.day }} - {{ day.title }}</h3>
              <h3>{{ day.focus }}</h3>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
