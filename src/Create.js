import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Jeff");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    setIsPending(true);

    fetch(
      "https://www.toptal.com/developers/postbin/1709935161380-4939724996220", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)

      }
    ).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Jeff">Jeff</option>
          <option value="Ofori">Ofori</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
