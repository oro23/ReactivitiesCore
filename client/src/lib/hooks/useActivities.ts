import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

export const useActivities = () => {
  const queryClient = useQueryClient();

  const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await apiClient.get<Activity[]>("/activities");
      return response.data;
    },
  });

  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      // const response = await apiClient.put<Activity>(
      //   `/activities/${activity.id}`,
      //   activity
      // );
      // return response.data;
      await apiClient.put("/activities/", activity);
    },
    onSuccess: async () => {
      // Invalidate the query to refetch the activities
      await queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      // const response = await apiClient.put<Activity>(
      //   `/activities/${activity.id}`,
      //   activity
      // );
      // return response.data;
      await apiClient.post("/activities/", activity);
    },
    onSuccess: async () => {
      // Invalidate the query to refetch the activities
      await queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  const deleteActivity = useMutation({
    mutationFn: async (id: string) => {
      // const response = await apiClient.put<Activity>(
      //   `/activities/${activity.id}`,
      //   activity
      // );
      // return response.data;
      await apiClient.delete(`/activities/${id}`);
    },
    onSuccess: async () => {
      // Invalidate the query to refetch the activities
      await queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity,
  };
};
