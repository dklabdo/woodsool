import { EnvelopeIcon } from "@heroicons/react/24/outline";
import BgJoinUs from "../assets/bg-JoinUS.png";
import { User } from "lucide-react";
import { useState } from "react";
import { addNewsletterSubscriber } from "../lib/productService";
import toast from "react-hot-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    addNewsletterSubscriber(name , email).then(() => {
      toast.success("Subscription successful!");
    })
    .catch((error) => {
      console.error("Subscription failed:", error);
      toast.error("Subscription failed. Please try again.");
    });
  }
  return (
    <div
      id="contact"
      className="scroll-animate p-6 md:p-12 text-center relative overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-[300px]"
      style={{
        backgroundImage: `url(${BgJoinUs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          Sign up for deals, new products and promotions
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center w-full max-w-lg mx-auto">
          <div className="flex w-full items-center border-b border-gray-300 py-2 bg-transparent">
            <User className="w-4 h-4 md:w-5 md:h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 px-2 py-1 text-sm md:text-base"
            />
          </div>
          <div className="flex w-full items-center border-b border-gray-300 py-2 bg-transparent">
            <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 px-2 py-1 text-sm md:text-base"
            />
          </div>
          <button type="submit" className="w-full bg-main  mt-4 text-gray-800 font-medium hover:text-orange-400 bg-transparent border-none shadow-none px-2 py-1 text-sm md:text-base">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
