const ErrorApi = ({ msg }) => {
  return (
    <div className="flex justify-center items-center h-[471px]">
      <div className="bg-[#ffcccc] border border-solid rounded-lg border-[#ff6666] p-4 text-center shadow">
        <span className="text-2xl mb-2">⚠️</span>
        <p className="text-[#ff3333] font-bold">{msg}</p>
      </div>
    </div>
  );
};

export default ErrorApi;
