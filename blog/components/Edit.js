import React from "react";

import { CreateEditForm } from "./CreateEditForm";
import { BlogContext } from "../context/BlogContext";

export function Edit({ route, navigation }) {
  const { id } = route.params;
  const { editPost, state } = React.useContext(BlogContext);

  const postToEdit = state.find((st) => st.id === id);

  return (
    <CreateEditForm
      onSave={(post) => {
        editPost(post, () => navigation.navigate("Index"));
      }}
      postToEdit={postToEdit}
    />
  );
}
