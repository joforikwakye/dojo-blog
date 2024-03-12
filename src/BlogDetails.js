import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const {data, isPending, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);


  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && 
        <article>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>written by ${data.username}</p>
        </article>
      }
      
    </div>
  );
};

export default BlogDetails;
