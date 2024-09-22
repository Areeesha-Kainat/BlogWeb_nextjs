"use client"

import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingBlogId, setEditingBlogId] = useState<number | null>(null);

  // Add a new blog
  const addBlog = () => {
    if (title.trim() === "" || content.trim() === "") return;

    if (editingBlogId) {
      // Update blog if editing
      setBlogs(
        blogs.map((blog) =>
          blog.id === editingBlogId
            ? { ...blog, title, content }
            : blog
        )
      );
      setEditingBlogId(null); // Clear edit state
    } else {
      // Add new blog
      setBlogs([
        ...blogs,
        { id: Date.now(), title, content },
      ]);
    }

    setTitle("");
    setContent("");
  };

  // Edit blog
  const editBlog = (id: number) => {
    const blog = blogs.find((b) => b.id === id);
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setEditingBlogId(blog.id);
    }
  };

  // Delete blog
  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-neutral-500 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-semibold">
            Blog Manager
          </h1>
          <p className="font-serif mt-3">Create and manage your blogs</p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-slate-300 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border-grey-400 rounded-lg"
                placeholder="Blog Title"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="p-2 border-grey-400 rounded-lg"
                placeholder="Blog Content"
                rows={5}
              />
              <button
                onClick={addBlog}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-sky-400"
              >
                {editingBlogId ? "Update Blog" : "Add Blog"}
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {blogs.map((blog) => (
              <li
                key={blog.id}
                className="p-4 border border-slate-400 rounded-lg bg-sky-100"
              >
                <h2 className="font-bold text-lg">{blog.title}</h2>
                <p>{blog.content}</p>
                <div className="mt-2">
                  <button
                    onClick={() => editBlog(blog.id)}
                    className="text-white px-2 py-1 text-sm bg-yellow-500 rounded-lg hover:bg-blue-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="ml-2 text-white px-2 py-1 text-sm bg-red-900 rounded-lg hover:bg-[#FD4B6B]"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default BlogList;
