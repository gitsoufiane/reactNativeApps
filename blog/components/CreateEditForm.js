import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export function CreateEditForm({
  onSave,
  postToEdit = { title: "", content: "" },
}) {
  const [post, setPost] = React.useState(postToEdit);
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 16 }}>Title</Text>
      <TextInput
        value={post.title}
        onChangeText={(txt) => setPost({ ...post, title: txt })}
        placeholder="title"
        style={{ borderWidth: 1, borderColor: "gray", padding: 5 }}
      />
      <Text style={{ fontSize: 16 }}>Content</Text>
      <TextInput
        value={post.content}
        onChangeText={(txt) => setPost({ ...post, content: txt })}
        placeholder="content"
        style={{ borderWidth: 1, borderColor: "gray", padding: 5 }}
      />
      <Button title="save" onPress={() => onSave(post)} />
    </View>
  );
}
