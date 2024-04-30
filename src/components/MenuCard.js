import { imgURL } from "../constant";
import placeHolder from "../asset/img/phimg.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../app/cartSlice";

const EmptyFoodList = () => {
  return (
    <div className="flex items-center justify-center h-[250px]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">No Food List</h1>
        <p className="text-gray-500">Sorry food list is currently empty.</p>
      </div>
    </div>
  );
};

const Card = (item) => {
  const { name, id, imageId, category, description, price } = item;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div
      className="mr-3 my-3 flex flex-row p-2 rounded-lg shadow border border-solid border-[#ccc]"
      key={id}
    >
      <div>
        <div className="mr-5 rounded-[50%] w-20 h-20 flex justify-center self-baseline items-center bg-[lightgrey]">
          {imageId ? (
            <img
              className="rounded-[50%] w-20 h-20"
              src={imgURL + imageId}
              alt={name}
            />
          ) : (
            <img
              className="rounded-[50%] w-20 h-20"
              src={placeHolder}
              alt={name}
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="w-full">
          <h2 className="text-xl text-[#333] mb-2">
            {name} -{" "}
            <span className="text-red-600 font-bold">{price / 100}₹</span>
          </h2>
          <h3 className="text-lg text-[#555] mb-1">{category}</h3>
          <p className="text-base text-[#777]">
            {description ? description?.slice(0, 60) + "..." : ""}
          </p>
        </div>
        <div className="w-40 flex justify-center items-center">
          <button
            className="text-white text-semibold px-4 py-2 bg-blue-600 hover:bg-blue-300 rounded-md"
            onClick={() => handleAddItem(item)}
          >
            AddItem
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ listItems }) => {
  const findRec = () => {
    let rec = listItems.find((list) => list.card.card?.itemCards);
    return rec;
  };
  const [foodList, setFoodList] = useState(findRec()?.card?.card);

  return !foodList ? (
    <EmptyFoodList />
  ) : (
    <section className="flex flex-col my-2">
      <div className=" w-auto border flex flex-row flex-wrap rounded-md mr-3 p-2 ">
        {listItems.map((list, i) => {
          const { title, itemCards } = list?.card?.card;

          return !listItems ? (
            <>
              <h1>No Items</h1>
            </>
          ) : !itemCards ? (
            ""
          ) : (
            <button
              className="text-nowrap text-left font-semibold border text-gray-700 hover:underline px-2 py-1 rounded-lg m-1"
              key={i}
              onClick={() => setFoodList(list?.card?.card)}
            >
              {title.length > 20 ? title.slice(0, 17) + "..." : title}
              {" " + itemCards.length}
            </button>
          );
        })}
      </div>

      <div className="w-auto">
        <h2 className="text-2xl text-green-700 text-bold mt-3 mb-4">
          {foodList?.title}
        </h2>
        {foodList?.itemCards.map((item, i) => {
          const { name, id, imageId, category, description, price } =
            item?.card?.info;
          return <Card {...item?.card?.info} key={i} />;
        })}
      </div>
    </section>
  );
};

export default MenuCard;
