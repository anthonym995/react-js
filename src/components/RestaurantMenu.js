import { useParams } from "react-router-dom";
import { imgURL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import Menu from "./Menu";
import Spinner from "./Spinner";
import ListItems from "./listItems";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, items,listItems] = useRestaurant(id);

  const {
    name,
    cloudinaryImageId,
    locality,
    cuisines,
    areaName,
    totalRatingsString,
  } = restaurant;

  return Object.values(restaurant).length === 0 ? (
    <Spinner />
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-row h-[450]">
        <div className="w-[30%] border m-2 p-3 rounded-lg flex items-center flex-col">
          <div>
            <img
              className="w-[250px] h-[250px] rounded-lg mb-3"
              src={imgURL + cloudinaryImageId}
              alt={name}
            />
          </div>
          <div>
            <h2 className="text-[#333] mb-2 text-xl">{name}</h2>
            <h3 className="text-[#555] mb-1">
              Cuisines: {cuisines?.join(", ")}
            </h3>
            <p className="text-[#777]">
              Locality: {locality}, {areaName}
            </p>
            <p className="text-[#777]">Ratings: {totalRatingsString}</p>
          </div>
        </div>
        <div className="w-[70%] border m-2 p-3 rounded-lg overflow-y-scroll scrollbar">
          {/* <Menu items={items} /> */}
          <ListItems listItems={listItems} />
        </div>
      </div>
      {/* <div className="container mx-auto">
        <ListItems listItems={listItems} />
      </div> */}
    </div>
  );
};
export default RestaurantMenu;
