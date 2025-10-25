import bgImg from "../../../assets/images/banner1.jpg";

const CarouselSlide = ({ title, subtitle }) => {
  return (
    <section
      className="w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${bgImg})` }}
      >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Content  */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-600 my-4">{subtitle}</p>
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
            Shop Product
          </button>
        </div>

        {/* Right Image  */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="max-w-full md:max-w-md drop-shadow-lg"
            alt=""
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;