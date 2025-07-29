import { Box, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useState } from "react";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  // Use React Query thats why.
  // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  const { activities, isPending } = useActivities();

  const openForm = (id?: string) => {
    if (id) {
      setSelectedActivity(activities!.find((x) => x.id === id));
    } else {
      setSelectedActivity(undefined);
    }
    setEditMode(true);
  };

  const closeForm = () => {
    setEditMode(false);
  };

  const selectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
    setEditMode(false);
  };

  const cancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleSubmit = (activity: Activity) => {
    // if (activity.id)
    //   setActivities(
    //     activities.map((x) => (x.id === activity.id ? activity : x))
    //   );
    // else {
    //   const newActivity = { ...activity, id: activities.length.toString() };
    //   setSelectedActivity(newActivity);
    //   setActivities([...activities, newActivity]);
    // }
    console.log(activity);
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    console.log(id);
    // setActivities(activities.filter((x) => x.id !== id));
  };

  // useEffect(() => {
  //   axios
  //     .get<Activity[]>("http://localhost:5148/api/activities")
  //     .then((response) => setActivities(response.data));
  // }, []);

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar openForm={() => openForm()} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading....</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={selectActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
            closeForm={closeForm}
            editMode={editMode}
            //submitForm={handleSubmit}
            //deleteActivity={handleDelete}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
