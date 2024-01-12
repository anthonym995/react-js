import { imgURL } from "../constant";
import placeHolder from "../asset/img/phimg.png";

const ListItems = ({ listItems }) => {
  return (
    <>
      {listItems.map((list, i) => {
        const { title, itemCards } = list?.card?.card;
        console.log(itemCards);
        return !listItems ? (
          <>
            <h1>No Items</h1>
          </>
        ) : !itemCards ? (
          ""
        ) : (
          <div key={i}>
            <div className="m-3 border p-2 rounded bg-sky-200">
              <h1 className="font-bold text-slate-600">{title}-{itemCards.length} items</h1>
            </div>

            {itemCards?.map((item, i) => {
              const { name, id, imageId, category, description, price } =
                item?.card?.info;
              return (
                <div
                  className="flex flex-row p-2 m-3 rounded-lg shadow border border-solid border-[#ccc]"
                  key={id}
                >
                  <div className="mr-5 rounded-[50%] w-[160px] h-[160px] flex justify-center items-center bg-[lightgrey]">
                    {imageId ? (
                      <img
                        className="rounded-[50%] !w-[160px] h-[160px]"
                        src={imgURL + imageId}
                        alt={name}
                      />
                    ) : (
                      <img
                        className="rounded-[50%] w-[160px] h-[160px] object-cover"
                        src={placeHolder}
                        alt={name}
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl text-[#333] mb-2">{name}</h2>
                    <h3 className="text-lg text-[#555] mb-2">{price}</h3>
                    <p className="text-base text-[#777] mb-1">{category}</p>
                    <p className="text-md text-[#777]">
                      {description ? description?.slice(0, 50) + "..." : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default ListItems;
