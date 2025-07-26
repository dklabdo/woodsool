import newWood from "../assets/NewWood.png";

const PromoBannerSection = () => {
  return (
    <div className="scroll-animate flex flex-col md:flex-row items-center mb-16 md:mb-24 bg-white px-6 md:px-12 py-8 md:py-12 min-h-[400px] md:min-h-[500px]">
      <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center mb-6 md:mb-0">
        <img
          src={newWood}
          alt="Interior design"
          className="w-full h-full object-cover rounded-lg"
          style={{ minHeight: "250px", maxHeight: "350px" }}
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center h-full text-center md:text-left">
       
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Discover Handcrafted Wood Art at Unbeatable Prices
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
          Discover Handcrafted Wood Art at Unbeatable Prices
        </p>
       
      </div>
    </div>
  );
};

export default PromoBannerSection;
