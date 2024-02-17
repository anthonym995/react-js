const Card = () => {
  return (
    <>
      <div className="w-72 min-h-80 m-3 p-4 border border-solid border-[#ccc] shadow-md rounded-lg bg-[ rgb(248, 246, 246)]">
        <div className="h-[200px] w-full object-cover rounded-lg bg-[#d3d3d3] mb-3"></div>
        <h2 className="py-3 h-[24px] w-full bg-[#d3d3d3] mb-3"></h2>
        <h3 className="h-[16px] w-full bg-[#d3d3d3]"></h3>
        <p className="h-[16px] w-full bg-[#d3d3d3]"></p>
      </div>
    </>
  );
};

const Shimmer = () => {
  const mapped = Array(8)
    .fill("")
    .map((e, i) => {
      return <Card key={i} />;
    });

  return (
    <div className="container flex flex-col mx-auto">
      <div className="flex flex-row py-2">
        <div className="h-[34px] w-full py-2 border border-solid bg-[#ccc] rounded-md mr-3"></div>
        <div className="h-[34px] w-[150px] py-2 border border-solid bg-[#ccc] rounded-md"></div>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">{mapped}</div>
    </div>
  );
};

export default Shimmer;
