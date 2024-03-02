import React from "react";

import { CreateEditForm } from "./CreateEditForm";
import { BlogContext } from "../context/BlogContext";

export function Create({ navigation }) {
  const { addPost } = React.useContext(BlogContext);

  return (
    <CreateEditForm
      onSave={(post) => addPost(post, () => navigation.goBack())}
    />
  );
}
