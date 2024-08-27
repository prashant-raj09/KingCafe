const CardTop = ({ image, alt, label }) => {
  return (
    <div className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 text-center">
      <a href="#" className="block">
        <img
          src={image}
          alt={alt}
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <h3 className="mt-2 text-sm font-semibold text-gray-700">{label}</h3>
      </a>
    </div>
  );
};

export default CardTop;
