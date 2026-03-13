export const useTrainingData = async (selectedProgram) => {
  return useAsyncData(
    "training-data",
    () => $fetch(`/api/programs/${selectedProgram}`),
    {
      staleTime: 7200000,
      transform: (data) => {
        return {
          ...data,
          fetchedAt: new Date(),
        };
      },
    },
  );
};
