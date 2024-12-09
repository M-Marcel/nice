
import Header from "../components/Header";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import featuresFrame from "../assets/featuresframe.png";
import Join from "../components/Join";
import Footer from "../components/Footer";
import FeaturesHeader from "../components/FeaturesHeader";

const Features = () => {
  function setActiveModal(arg0: string): void {
    throw new Error("Function not implemented.");
  }
  

  return (
    <>
      <div className="">
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />

          <Heading className="">
            <div className="relative top-[220px] w-5/6 mx-auto">
              <div className="  flex flex-row gap-3  items-center justify-center  ">
                <div className="flex flex-col items-start max-w-lg mb-[350px]">
                  <h1 className="font-title lg:text-5xl mb-3 text-black-300 text-center leading-[48px]  ">
                    Request a feature
                  </h1>
                  <p className="text-center text-lg w-auto lg:w-[70%] text-black-400 mb-1">
                    We are always looking for ways to make Lanepact better for
                    you
                  </p>
                </div>
                <div className="mt-2 sm:mb-[200px] gap-5">
                  <img
                    src={featuresFrame}
                    alt="featuresFrame"
                    width={900}
                    height={900}
                  />
                </div>
              </div>
              
            </div>
          </Heading>
        </Hero>
        <FeaturesHeader />
      </div>
      <Join />
      <Footer />
    </>
  );
};

export default Features;
