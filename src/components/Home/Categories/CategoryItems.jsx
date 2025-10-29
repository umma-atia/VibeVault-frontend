import { FaAngleRight } from "react-icons/fa6";
import women from "../../../assets/images/cate-2.jpg"
import men from "../../../assets/images/cate-1.jpg"
import kid from "../../../assets/images/kid.jpg"

const CategoryItems = ({ index, category }) => {
  const backgroundImages = [women, men, kid];

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      style={backgroundImageStyle}
    >
      <div className="p-6 flex flex-col h-full bg-opacity-30">
        {/* overlay to make text visible on background image */}
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl">
            {category.name.charAt(0)}
          </div>
          <span className="text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full">
            {category.product_count} Items
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
        <p className="text-gray-200 text-sm mb-4 flex-grow">
          {category.description}
        </p>
        <button className="text-pink-500 font-bold hover:text-pink-600 transition-colors flex items-center">
          Explore
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;