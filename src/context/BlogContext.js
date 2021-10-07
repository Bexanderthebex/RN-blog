import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (blogPost, action) => {
  switch (action.type) {
    case 'add_blogpost': 
      return [...blogPost, { title: `Blog Post #${blogPost.length + 1}`}]
    default:
      return blogPost
  }
}

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' })
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);

