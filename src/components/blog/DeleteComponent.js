import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const DeleteComponent = ({ open, post, onClose, onDelete }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Delete Post " + post.title + "?"}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onDelete} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteComponent;
