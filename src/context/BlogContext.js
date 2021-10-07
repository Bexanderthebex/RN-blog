import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (blogPost, action) => {
  switch (action.type) {
    case 'add_blogpost': 
      return [...blogPost, { title: `Blog Post #${blogPost.length + 1}`}]
    default:
      return blogPost
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' })
  }

  return <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>
};

export default BlogContext;
