import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Tarun');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title , body , author };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() =>{
      console.log('New blog added.');
      setIsPending(false);
      // history.go(-1)   // -> to go one step backward in history
      history.push('/');   // -> will send to home
    })

  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Tarun">Tarun</option>
          <option value="Navpreet">Navpreet</option>
        </select>
       { !isPending && <button>Add Blog</button>}
       { isPending && <button>Adding blog....</button>}
      </form>
    </div>
  );
}

export default Create;