import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const{ data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs!"  />
      )}
      {/* To show blog props with filter can use like in search etc */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Tarun')} title="Tarun's blogs"/> */}
    </div>
  );
}


export default Home;