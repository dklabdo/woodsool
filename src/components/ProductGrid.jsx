import modele1 from "../assets/Modele1.png";
import modele2 from "../assets/Modele2.png";
import modele3 from "../assets/Modele3.png";
import React, { useState } from "react";
import PopupOrderForm from "./PopupOrderForm";

const ProductGrid = () => {
  const products = [
    { img: modele1, name: "Module 1", price: "30000DA" },
    { img: modele3, name: "Module 3", price: "35000DA" },
    { img: modele2, name: "Module 2", price: "32000DA" },
  ];
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="scroll-animate-stagger bg-white rounded-xl  cursor-pointer hover:shadow-lg transition"
            onClick={() => handleProductClick(product)}
          >
            <div className="w-full h-48 md:h-64  bg-[#EFEFEF] rounded-xl flex items-center justify-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
