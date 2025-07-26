import heroimg2 from "../assets/Hero_img2.png";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";

const TopWoodSection = () => {
  return (
   <div className="py-10  md:px-4 rounded-2xl bg-white w-full flex flex-col gap-12  " >
      <h2 className="text-main text-xl md:text-3xl font-semibold text-center " > Every day is a new creative journey </h2>
      <div className=" w-full flex-wrap justify-center flex gap-5 " >
        <ImgCard img={img1} />
        <ImgCard img={img2} />
        <ImgCard img={img3} />
        <ImgCard img={img4} />
        
      </div>
   </div>
  );
};

function ImgCard({img}){
  return (
    <div className="w-full md:w-64 h-72 cursor-pointer flex justify-center items-center  " >
      <img src={img} alt="Hero" className=" hover:scale-105 hover:brightness-100 transition w-full h-full object-cover rounded-lg " />
    </div>
  )
}

export default TopWoodSection;
