import * as React from 'react';
import { getBlogs } from '../services/blogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = React.useState([]);
}
