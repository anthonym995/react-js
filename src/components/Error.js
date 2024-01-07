import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="not-found-container">
      <h1 className="not-found-text">{status}</h1>
      <p className="not-found-description">{statusText}</p>
      <p className="not-found-description">Oops somthing went wrong!!</p>
      <br />
      <br />
      <Link to="/" className="goback">
        <h2>Go back to home</h2>
      </Link>
    </div>
  );
};

export default Error;
