import { Link } from "react-router-dom";

const BlogList = ( { blogs, title }) => {
  // -> We can directly destructure properties above from the props and can get what properties i want from them
  // const blogs = props.blogs;
  // const title = props.title;
return (
  <div className="blog-list">
    <h2 className="cntr">{title}</h2>
    {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>written by: {blog.author}</p>
        </Link>
      </div>
    ))}
  </div>
);
}

export default BlogList;