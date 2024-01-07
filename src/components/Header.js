import logo from "../asset/img/fv.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <img className="w-[56px] h-[56px]" src={logo} alt="Food Villa" />
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const handleLog = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };
  const btnClass = `font-semibold min-w-24 py-2 px-5  rounded-md text-white ${
    !isLoggedIn ? "bg-myBtn" : "bg-red-500"
  }`;
  return (
    <>
      <header className="bg-myBg p-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Title />
            <nav className="flex flex-row">
              <ul className="flex flex-row">
                <Link className="hover:" to="/">
                  <li className="py-2 px-4 cursor-pointer  text-white  hover:text-sky-400">
                    Home
                  </li>
                </Link>
                <Link className="" to="/about">
                  <li className="py-2 px-4 cursor-pointer text-white hover:text-sky-400">
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="py-2 px-4 cursor-pointer text-white hover:text-sky-400">
                    Contact
                  </li>
                </Link>
                <Link to="/cart">
                  <li className="py-2 px-4 cursor-pointer text-white hover:text-sky-400">
                    Cart
                  </li>
                </Link>
              </ul>

              <span className="flex items-center">
                <button
                  type="button"
                  className={btnClass}
                  onClick={() => {
                    handleLog();
                  }}
                >
                  {!isLoggedIn ? "LogIn" : "LogOut"}
                </button>
              </span>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
