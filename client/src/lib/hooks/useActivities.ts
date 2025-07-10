import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

export const useActivities = () =>{
    const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await apiClient.get<Activity[]>("/activities");
      return response.data;
    },
  });

  return {activities, isPending}
}