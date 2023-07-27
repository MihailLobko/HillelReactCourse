import "../App.css";

import { Delete, Edit } from "@mui/icons-material";

const TableComponent = ({ posts, onEdit, onDelete }) => {
  return (
    <tbody>
      {posts.map((post) => (
        <tr key={post.id}>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>
            <button onClick={() => onEdit(post)}>
              <Edit />
            </button>
            <button onClick={() => onDelete(post)}>
              <Delete />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableComponent;
