export const useTrainingData = async () => {
  return useAsyncData("training-data", () => $fetch("/api/programs/training"), {
    staleTime: 7200000,
    transform: (data) => {
      return {
        ...data,
        fetchedAt: new Date(),
      };
    },
  });
};
