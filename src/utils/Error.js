import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] text-center">
      <h1 className="text-8xl text-[#e74c3c] mb-3">{status}</h1>
      <p className="text-2xl text-[#555]">{statusText}</p>
      <p className="text-2xl text-[#555]">Oops somthing went wrong!!</p>
      <br />
      <br />
      <Link to="/" className="text-[orange] hover:underline">
        <h2 className="text-2xl">Go back to home</h2>
      </Link>
    </div>
  );
};

export default Error;
