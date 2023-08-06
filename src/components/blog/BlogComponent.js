import "../App.css";

import React, { useState } from "react";
import { Button } from "@mui/material";
import CreateComponent from "./CreateComponent";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";
import TableComponent from "./TableComponent";

const BlogComponent = ({ posts, onDelete, onEdit, onCreate }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({ userId: "", title: "", body: "" });
  const [selectedPost, setSelectedPost] = useState({});

  const handleOpenDeleteDialog = (post) => {
    setSelectedPost(post);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setSelectedPost({});
    setDeleteDialogOpen(false);
  };

  const handleDelete = () => {
    onDelete(selectedPost);
    handleCloseDeleteDialog();
  };

  const handleOpenEditDialog = (post) => {
    setSelectedPost(post);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setSelectedPost({});
    setEditDialogOpen(false);
  };

  const handleSaveEdit = () => {
    onEdit(selectedPost);
    handleCloseEditDialog();
  };

  const handleInputChangeEdit = (e) => {
    const { name, value } = e.target;
    setSelectedPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleOpenCreateDialog = () => {
    setCreateDialogOpen(true);
  };

  const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
    setNewPost({ title: "", body: "", userId: "" });
  };

  const handleInputChangeCreate = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSaveNewPost = () => {
    onCreate({ ...newPost, id: new Date().getTime() });
    handleCloseCreateDialog();
  };

  return (
    <div>
      <DeleteComponent
        open={deleteDialogOpen}
        post={selectedPost}
        onClose={handleCloseDeleteDialog}
        onDelete={handleDelete}
      />
      <EditComponent
        open={editDialogOpen}
        post={selectedPost}
        onClose={handleCloseEditDialog}
        onSave={handleSaveEdit}
        onInputChange={handleInputChangeEdit}
      />
      <CreateComponent
        open={createDialogOpen}
        onClose={handleCloseCreateDialog}
        onSave={handleSaveNewPost}
        onInputChange={handleInputChangeCreate}
      />
      <Button
        className="create-button"
        variant="contained"
        color="primary"
        onClick={handleOpenCreateDialog}
      >
        Create New Post
      </Button>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <TableComponent
          posts={posts}
          onEdit={handleOpenEditDialog}
          onDelete={handleOpenDeleteDialog}
        />
      </table>
    </div>
  );
};

export default BlogComponent;
