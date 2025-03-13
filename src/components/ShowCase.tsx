import portfolioImg from "../assets/portfolio-frame.png";

const ShowCase = () => {
  return (
      <div className="flex flex-col items-center text-center justify-center pt-8 ">
        <h2 className="font-title mb-3 text-xl w-[70%] lg-w-[100%] lg:text-4xl text-black-300 leading-[25px] text-center font-medium ">
          Showcase your work with beautifully crafted templates
        </h2>
        <img src={portfolioImg} alt="" className="pt-5  " />
      </div>
  );
};

export default ShowCase;
