import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imgURL } from "../constant";
import { clearCart } from "../app/cartSlice";

const NoItems = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[520px] text-center">
      <h1 className="text-3xl text-[#e74c3c] mb-3">
        Oops it seems like no items in your cart
      </h1>
      <Link to="/" className="text-[orange] hover:underline">
        <h2 className="text-2xl">Please choose your favorite items..</h2>
      </Link>
    </section>
  );
};

const FoodList = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <section className="grid justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-3">
      {cartItems.map((item) => {
        const { name, id, imageId, category, description, price } = item;
        return (
          <div
            key={id}
            className="w-72 min-h-80 m-3 p-4 border border-solid border-[#ccc] shadow-md rounded-lg "
          >
            <img
              className="h-[200px] w-full object-cover rounded-lg"
              src={imgURL + imageId}
              alt={name}
            />
            <h2 className="text-xl text-[#333] mb-2">
              {name} -{" "}
              <span className="text-red-600 font-bold">{price / 100}₹</span>
            </h2>
            <h3 className="text-lg text-[#555] mb-1">{category}</h3>
            <p className="text-base text-[#777]">
              {description ? description?.slice(0, 60) + "..." : ""}
            </p>
          </div>
        );
      })}
    </section>
  );
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((total, item) => {
    return total += item.price
  }, 0 );

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div className="container mx-auto">
        {cartItems.length === 0 ? (
          <NoItems />
        ) : (
          <>
            <section className="flex flex-row">
              <h1 className="w-full text-left text-2xl text-green-600 mt-4 mb-5">
                Total Items {cartItems.length}
              </h1>
              <div className="flex items-center">
                <button className="text-nowrap bg-red-500 hover:bg-red-600 text-white rounded-md py-1 px-2 font-semibold" onClick={()=> handleClearCart()}>
                  Clear cart
                </button>
              </div>
            </section>
            <FoodList />
            <section>
              <h1 className="w-full text-center text-2xl text-green-600 mt-4 mb-5">
                Total Amount {totalAmount / 100}₹
              </h1>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
