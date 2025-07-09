import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
  activity?: Activity;
  closeForm: () => void;
  submitForm: (activity: Activity) => void;
};

const ActivityForm = ({ activity, closeForm, submitForm }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) data.id = activity.id;
    console.log(data);
    submitForm(data as unknown as Activity);
  };

  return (
    <>
      <Paper sx={{ padding: 3, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Create activity
        </Typography>

        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap={3}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Title"
            name="title"
            defaultValue={activity?.title}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={3}
            defaultValue={activity?.description}
          />
          <TextField
            label="Category"
            name="category"
            defaultValue={activity?.category}
          />
          <TextField
            label="Date"
            type="date"
            name="date"
            defaultValue={activity?.date}
          />
          <TextField label="City" name="city" defaultValue={activity?.city} />
          <TextField
            label="Venue"
            name="venue"
            defaultValue={activity?.venue}
          />
          <Box display="flex" justifyContent="end" gap={3}>
            <Button color="inherit" onClick={closeForm}>
              Cancel
            </Button>
            <Button color="inherit" variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ActivityForm;
