import BlogPostCard from "./BlogPostCard";
import blogs from "../data/blogs";

function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogPostCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
}

export default BlogGrid;