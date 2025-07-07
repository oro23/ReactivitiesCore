import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  activity?: Activity;
  closeForm: () => void;
};

const ActivityForm = ({ activity, closeForm }: Props) => {
  console.log(activity);
  return (
    <>
      <Paper sx={{ padding: 3, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Create activity
        </Typography>

        <Box component="form" display="flex" flexDirection="column" gap={3}>
          <TextField label="Title" value={activity?.title} />
          <TextField label="Description" multiline rows={3} />
          <TextField label="Category" />
          <TextField label="Date" type="date" />
          <TextField label="City" />
          <TextField label="Venue" />
          <Box display="flex" justifyContent="end" gap={3}>
            <Button color="inherit" onClick={closeForm}>
              Cancel
            </Button>
            <Button color="inherit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ActivityForm;
