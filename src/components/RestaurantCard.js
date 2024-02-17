import { imgURL } from "../constant";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // Object Destructuring
  return (
    <div className="mx-auto w-72 min-h-80 m-3 p-4 border border-solid border-[#ccc] shadow-md rounded-lg ">
      <img
        className="h-[200px] w-full object-cover rounded-lg"
        src={imgURL + cloudinaryImageId}
        alt={name}
      />
      <h2 className="my-2 text-xl text-[#555]">
        {name.length > 20 ? name.slice(0, 20) + "..." : name}
      </h2>
      <h3 className="italic text-[#e44d26]">
        {cuisines?.join(", ").slice(0, 30) + "..."}
      </h3>
      <p className="text-[#333] font-semibold">{avgRating + " stars"}</p>
    </div>
  );
};

export default RestaurantCard;
