import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputLabel,
} from "@mui/material";

const CreateComponent = ({ open, onClose, onSave, onInputChange }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Post</DialogTitle>
      <DialogContent>
        <InputLabel>User Id</InputLabel>
        <TextField name="userId" onChange={onInputChange} fullWidth />
        <InputLabel>Title</InputLabel>
        <TextField name="title" onChange={onInputChange} fullWidth />
        <InputLabel>Content</InputLabel>
        <TextField
          name="body"
          onChange={onInputChange}
          fullWidth
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateComponent;