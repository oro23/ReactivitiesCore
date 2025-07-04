import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  //cancelSelectActivity: () => void;
  //   selectedActivity: Activity | undefined;
  selectedActivity?: Activity;
};

const ActivityList = ({ activities, selectActivity }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {activities.map((activity) => {
          return (
            <ActivityCard
              key={activity.id}
              activity={activity}
              selectActivity={selectActivity}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ActivityList;
