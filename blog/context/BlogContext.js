import React from "react";

export const BlogContext = React.createContext(null);

const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete":
      return state.filter((st) => st.id !== action.payload);
    case "edit": {
      return state.map((pst) => {
        if (pst.id === action.payload.post.id)
          return { ...pst, ...action.payload.post };
        return pst;
      });
    }
    default:
      return state;
  }
};
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, []);

  const addPost = ({ title, content }, callback) => {
    dispatch({ type: "add", payload: { title, content } });
    callback();
  };

  const deletePost = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const editPost = (post, callback) => {
    dispatch({ type: "edit", payload: { post } });
    callback();
  };

  return (
    <BlogContext.Provider value={{ state, addPost, deletePost, editPost }}>
      {children}
    </BlogContext.Provider>
  );
};
