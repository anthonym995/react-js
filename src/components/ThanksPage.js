import { Link } from "react-router-dom";
import thanks from "../asset/thanks.jpg";

const ThanksPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-106px)] text-center">
      <h1 className="text-4xl font-bold mb-8">Thank You for Your Order!</h1>
      <p className="text-lg mb-4">Your food will be delivered shortly.</p>
      <img src={thanks} alt="Thank You" className="w-64 h-auto mb-8" />
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Place Another Order
        </button>
      </Link>
    </section>
  );
};

export default ThanksPage;
