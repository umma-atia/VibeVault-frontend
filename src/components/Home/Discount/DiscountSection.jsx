import bgImg from "../../../assets/images/bg.jpg";
import DiscountTimer from "./DiscountTimer";
const DiscountSection = () => {
  return (
    <section
      className="w-full h-[600px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container w-full flex flex-col md:flex-row items-center justify-end px-4 md:px-8">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            30% Discount On All Items. Hurry Up !!!
          </h1>
          {/* CountDown Timer  */}
          <DiscountTimer />
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;