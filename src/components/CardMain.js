const CardMain = ({ image, alt, label }) => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-56 m-4 p-4 bg-slate-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-100 cursor-pointer">
        <img
          className="w-full h-36 rounded-lg object-cover mb-3"
          alt={alt}
          src={image}
        />
        <h3 className="font-bold text-lg mb-1">{label}</h3>
        <h5 className="text-sm text-gray-600 mb-1"></h5>
        <h5 className="text-sm text-gray-600 mb-1"></h5>
        <div className="flex justify-between items-center text-sm mt-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-lg"></span>
        </div>
        <h4 className="mt-2 font-semibold">{"₹200 for two"}</h4>
      </div>
    </div>
  );
};

export default CardMain;
