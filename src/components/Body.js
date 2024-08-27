import CardTop from "./CardTop";
import CardMain from "./CardMain";
import TopCard from "../TopCard.json";
import MainCard from "../MainCard.json";

const Body = () => {
  return (
    <div className="p-6 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          What's on your mind?
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {TopCard.map((ele) => (
            <CardTop
              key={ele.id}
              image={ele.src}
              alt={ele.alt}
              label={ele.label}
            />
          ))}
        </div>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Menu</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {MainCard.map((ele) => (
            <CardMain
              key={ele.id}
              image={ele.src}
              alt={ele.alt}
              label={ele.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
