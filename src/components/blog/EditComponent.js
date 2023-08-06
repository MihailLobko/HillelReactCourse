import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputLabel,
} from "@mui/material";

const EditComponent = ({ open, post, onClose, onSave, onInputChange }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit {post.title}</DialogTitle>
      <DialogContent>
        <InputLabel>Title</InputLabel>
        <TextField
          name="title"
          value={post.title}
          onChange={onInputChange}
          fullWidth
        />
        <InputLabel>Content</InputLabel>
        <TextField
          name="body"
          value={post.body}
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

export default EditComponent;
