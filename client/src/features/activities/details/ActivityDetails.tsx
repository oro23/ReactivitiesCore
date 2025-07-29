import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id?: string) => void;
};

const ActivityDetails = ({
  selectedActivity,
  cancelSelectActivity,
  openForm,
}: Props) => {
  const { activities } = useActivities();
  const activity = activities?.find((a) => a.id === selectedActivity.id);
  if (!activity)
    return <Typography variant="h6">Activity not found</Typography>;

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1">{activity.date}</Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => openForm(activity.id)}>
          Edit
        </Button>
        <Button color="inherit" onClick={cancelSelectActivity}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetails;
