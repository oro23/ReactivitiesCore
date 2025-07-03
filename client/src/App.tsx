import { List, Typography, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5148/api/activities")
      .then((response) => setActivities(response.data));
    return () => {};
  }, []);

  return (
    <>
      <Typography variant="h5">Reactivities</Typography>
      <List>
        {activities.map((actvity) => {
          return (
            <ListItem key={actvity.id}>
              <ListItemText>{actvity.title}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default App;
