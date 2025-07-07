import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
  editMode: boolean;
};

const ActivityDashboard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  openForm,
  closeForm,
  editMode,
}: Props) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
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
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />
          )}
          {editMode && (
            <ActivityForm closeForm={closeForm} activity={selectedActivity} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ActivityDashboard;
