import axios from "axios";
import FolderList from "../../components/FolderList/FolderList";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const folder = e.target.name.value;

    const data = { folder };
    axios
      .post("http://localhost:5000/folders", data)
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <FolderList></FolderList>
      <form className="folder-form" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Home;
