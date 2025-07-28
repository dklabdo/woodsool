import { HeartIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import modele1 from "../assets/Modele1.png";
import modele2 from "../assets/Modele2.png";
import modele3 from "../assets/Modele3.png";
import PopupOrderForm from "./PopupOrderForm";
import { getProducts } from "../lib/productService";
import toast from "react-hot-toast";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const NewArrivalsSection = () => {
  const [favoriteArrivals, setFavoriteArrivals] = useState(
    Array(6).fill(false)
  );
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollRef = useRef(null);
  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add("cursor-grabbing");
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      console.log(data);
      setProducts(data);
      setIsLoading(false);
      toast.success("Products loaded successfully");
    });
    console.log(products);
  }, []);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleToggleFavorite = (idx) => {
    setFavoriteArrivals((favs) => favs.map((f, i) => (i === idx ? !f : f)));
  };

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
  };

  return (
    <>
      <div id="categories" className="scroll-animate mt-12 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:pl-4 font-bold text-main mb-4 md:mb-0">
            New Models
          </h2>
          <button
            onClick={handleScrollRight}
            className="text-main/80 hover:text-main flex items-center gap-1 text-sm md:text-base"
          >
            More <span>→</span>
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide cursor-grab"
          style={{ scrollbarWidth: "none" }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {isloading ? (
            <p className="w-full py-12 text-center ">loading ...</p>
          ) : (
            products.map((product, index) => {
              console.log(product);

              return (
                product.isActivate && (
                  <div
                    key={index}
                    className="scale-105  min-w-[280px] md:min-w-[350px] max-w-[320px] md:max-w-[400px]  rounded-xl shadow p-4 flex flex-col items-center relative"
                  >
                    <button
                      onClick={() => handleToggleFavorite(index)}
                      className="absolute top-4 right-4 z-10"
                    >
                      <HeartIcon
                        className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-200 ${
                          favoriteArrivals[index]
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                        fill={favoriteArrivals[index] ? "red" : "none"}
                      />
                    </button>
                    <p className="text-sm max-w-48 overflow-x-hidden text-gray-500 bg-gray-100 px-3 py-1 rounded-md  absolute top-4 left-4 z-10">
                      {product.category}
                    </p>

                    <ProductCarousel key={index} images={product.images} />
                    <h3 className="font-semibold w-full text-gray-800 text-sm md:text-base ">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 my-2 text-justify w-full text-xs ">
                      {product.description}
                    </p>
                    <p className="text-main font-semibold mt-2 w-full text-sm   ">
                      {product.price} DA
                    </p>
                    <button
                      className="w-full bg-main mt-3 text-white py-2 rounded-md text-xs md:text-sm font-semibold mb-2 hover:bg-orange-500 transition"
                      onClick={() => handleAddToCartClick(product)}
                    >
                      Commander
                    </button>
                  </div>
                )
              );
            })
          )}
        </div>
      </div>
      <PopupOrderForm
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        product={selectedProduct}
      />
    </>
  );
};

export function ProductCarousel({ images }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
      origin: "center",
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    (images.length > 1 && (
      <div
        ref={sliderRef}
        className="keen-slider w-full mt-16  h-28 md:h-36  mb-6"
      >
        {images?.map((img, index) => (
          <img
            src={img}
            alt="......"
            className="w-full  keen-slider__slide h-full object-contain rounded-lg"
          />
        ))}
      </div>
    )) ||
    (images.length === 1 && (
      <div className=" w-full mt-12 h-28 md:h-36  mb-4">
        <img
          src={images[0]}
          alt="......"
          className="w-full   h-full object-contain rounded-lg"
        />
      </div>
    ))
  );
}

export default NewArrivalsSection;
