import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {

    const {data:blogs, pending, error} = useFetch("https://jsonplaceholder.typicode.com/users");
 

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
