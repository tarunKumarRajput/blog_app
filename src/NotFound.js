import { Link } from "react-router-dom"

const NotFound = () => {
  return (
      <div className="not-found">
        <h2 className="cntrHeading">Sorry!!!</h2>
        <p className="errP">That page cannot be found.</p>
        <Link to="/" className="homeLink">Back to the homepage...</Link>
      </div>
  );
}

export default NotFound;