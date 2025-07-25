import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

const ActivityCard = ({ activity, selectActivity, deleteActivity }: Props) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5">{activity.title}</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            {activity.date}
          </Typography>
          <Typography variant="body2">{activity.description}</Typography>
          <Typography variant="subtitle1">{activity.venue}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
        >
          <Chip label={activity.category} variant="outlined"></Chip>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              size="medium"
              variant="contained"
              onClick={() => selectActivity(activity.id)}
            >
              View
            </Button>
            <Button
              size="medium"
              color="error"
              variant="contained"
              onClick={() => deleteActivity(activity.id)}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default ActivityCard;
