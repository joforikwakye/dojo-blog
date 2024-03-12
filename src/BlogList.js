import { Link } from "react-router-dom/cjs/react-router-dom.min";


const BlogList = ({blogs, title}) => {

   
    
    return (
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <Link to={`/blog-details/${blog.id}`}>
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.name}</h2>
              <p>written by {blog.username}</p>
             
            </div>
          </Link>
        ))}
      </div>
    );
}
 
export default BlogList;