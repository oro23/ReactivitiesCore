import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

const ActivityDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5148/api/activities")
      .then((response) => setActivities(response.data));
    return () => {};
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList
            activities={activities}
            selectActivity={handleSelectActivity}
          />
          {/* <List>
            {activities.map((actvity) => {
              return (
                <ListItem key={actvity.id}>
                  <ListItemText>{actvity.title}</ListItemText>
                </ListItem>
              );
            })}
          </List> */}
        </Grid>
        <Grid size={5}>
          {selectedActivity && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={handleCancelSelectActivity}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ActivityDashboard;
