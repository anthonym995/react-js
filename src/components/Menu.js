import { imgURL } from "../constant";
import placeHolder from "../asset/img/phimg.png";

const Menu = ({ items }) => {
  return (
    <>
      <div>
        {!items ? (
          <>
            <h1>No Items</h1>
          </>
        ) : (
          Object.values(items).map((item) => {
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
                      className="rounded-[50%] !w-[160px] h-[160px]"
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
          })
        )}
      </div>
    </>
  );
};

export default Menu;
