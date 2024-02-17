import { useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ServiceContext from "../context/ServiceContext";

const ServiceCard = ({ title, content, isVisible, visibleHandler, index }) => {
  return (
    <>
      <div className="flex flex-row border-b last:border-b-0 border-solid border-gray-600 ">
        <h3 className="w-full font-semibold p-2 text-xl">{title}</h3>
        <span className="flex flex-row">
          <button
            className="text-black hover:text-white hover:bg-gray-400  font-semibold py-1 px-4 rounded"
            onClick={() => visibleHandler(isVisible ? "" : index)}
          >
            {isVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </span>
      </div>
      {isVisible ? (
        <div className="border-b border-black last:border-b-0">
          <p className="mx-4 mt-2 mb-4 text-lg">{content}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const Service = () => {
  const [isVisible, setIsVisible] = useState(0);
  const { serviceData } = useContext(ServiceContext);
  console.log(serviceData)

  const visibleHandler = (data) => {
    return setIsVisible(data);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl text-green-600 mt-4 mb-5">
        Our Service
      </h2>
      <div className="max-w-[800px] border border-solid border-black mx-auto mb-28 bg-gray-200">
        {serviceData.map((data, i) => {
          const { title, content } = data;
          return (
            <ServiceCard
              key={i}
              title={title}
              content={content}
              isVisible={isVisible === i}
              visibleHandler={visibleHandler}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
