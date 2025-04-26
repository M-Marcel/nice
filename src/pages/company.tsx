import { useModal } from "../context/ModalContext";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Heading from "../components/Heading";
import companyImg from "../assets/companyImg.png";
import creatorImg from "../assets/creatorImg.png";
import botBuild from "../assets/bot build 1.png";
import CommunityJoin from "../components/CommunityJoin";
import Footer from "../components/Footer";

const Company = () => {
  const { setActiveModal } = useModal();
  return (
    <>
      <div className="">
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />
          <Heading className="">
            <div className="flex flex-wrap w-[100%] items-center justify-between  lg:ps-16 lg:mx-[0] pt-32 lg:pt-4  ">
              <div className="left w-[100%] lg:w-[55%] p-4 ">
                <h1 className=" text-2xl lg:text-4xl  font-medium w-[50%] lg:w-[10%]  text-black-990">
                  About Lanepact
                </h1>
                <p className="w-[100%]  lg:w-[70%] text-black-940 text-justify text-sm leading-7 pt-4 ">
                  At Lanepact, we believe the future belongs to the creators,
                  the thinkers, the doers, and the everyday people with bold
                  ideas. That’s why we’ve built the Lanepact Unified Platform, a
                  powerful, all-in-one digital ecosystem designed to help
                  individuals, startups, and businesses bring their ideas to
                  life with ease, speed, and smart technology. Lanepact unites
                  no-code automation, AI-driven insights, seamless financial
                  tools, and cross-border capabilities into one intuitive
                  platform. Whether you're launching a business, managing teams,
                  or building your digital presence, we equip you with tools
                  that break down complexity and boost what matters most, your
                  impact.
                </p>
              </div>
              <div className="right w-[100%] lg:w-[40%] pt-24  ">
                <img src={companyImg} width={500} height={500} alt="" />
              </div>
            </div>

            <div className="w-[100%]  p-4 lg:ps-16 relative top-[-50px] justify-between  ">
              <h2 className="flex flex-col lg:flex text-gray-500 text-md lg:text-lg w-[60%] lg:w-[80%] font-medium ">
                OUR CORE PRODUCT
                <span className="text-black-990 text-2xl lg:text-4xl font-semibold py-2   ">
                  Portfolio creator
                </span>
              </h2>
              <div className="flex flex-wrap w-[100%] justify-between items-center ">
                <div className="text-[16px] text-black-600 w-[100%] lg:w-[30%] ">
                  <p className="w-[100%] text-sm leading-7 ">
                    At the heart of Lanepact lies our flagship product, The
                    Lanepact Portfolio Creator, a beautiful, flexible tool
                    designed to help anyone showcase their skills, ideas, or
                    business most professional and dynamic way possible. Built
                    for creators of all kinds, designers, entrepreneurs,
                    developers, professionals, freelancers, students, and even
                    small businesses, the Portfolio Creator makes it easy to:
                  </p>
                  <ul className="list-disc py-8 text-sm leading-7  p-4">
                    <li>
                      Tell your story in a way that feels authentic and
                      impactful.
                    </li>
                    <li>
                      Customize your layout with sleek, ready-made templates
                      tailored to every profession
                    </li>
                    <li>
                      Stand out professionally with a digital portfolio that
                      lives online and speaks for your brand
                    </li>
                  </ul>
                  <p className="text-sm leading-7 ">
                    Whether you're applying for a job, showcasing a product, or
                    building your brand, the Portfolio Creator helps you build a
                    polished, powerful presence, without needing to code a
                    single line.
                  </p>
                  <p className="text-sm leading-7">
                    And yes, it's designed to be fun, creative, and accessible
                    to absolutely everyone.
                  </p>
                </div>
                <div className="w-[100%] lg:w-[67%]">
                  <img src={creatorImg} alt="" width={700} height={700} />
                </div>
              </div>
            </div>

            <div className=" w-[100%] p-4 lg:ps-16 justify-between relative top-[40px] ">
              <h2 className=" text-gray-500 text-sm lg:text-lg font-medium ">
                SMARTER WITH AI
              </h2>
              <h1 className="text-black-990 text-2xl lg:text-3xl font-semibold py-1 ">
                Simpler with No-Code
              </h1>
              <div className="flex flex-wrap w-[100%]">
                <div className="w-[100%] lg:w-[60%]  lg:py-4 ">
                  <div className=" lg:w-[56%] text-black-600 py-4 ">
                    <span className="text-lg font-semibold  ">
                      AI-Powered Insights
                    </span>
                    <p className="text-sm leading-7">
                      Lanepact gives you access to AI tools that help you make
                      faster, more informed decisions—from trend analysis to
                      optimization suggestions, without the learning curve.
                    </p>
                  </div>
                  <div className="lg:w-[56%] text-black-600 py-4 ">
                    <span className="text-lg font-semibold  ">
                      No-Code Automation
                    </span>
                    <p className="text-sm leading-7">
                      Launch apps, workflows, and digital experiences with just
                      a few clicks. You bring the idea, we bring the structure.
                    </p>
                  </div>
                  <div className="lg:w-[60%] text-black-600 py-4 ">
                    <span className="text-lg font-semibold  ">
                      Stablecoin Payments & Cross-Border Remittance
                    </span>
                    <p className="text-sm leading-7">
                      Send and receive money globally, instantly, and securely,
                      right inside the platform.
                    </p>
                  </div>
                </div>

                <div className="w-[100%] lg:w-[32%] ">
                  <img src={botBuild} alt="" width={450} height={300} />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-[100%] gap-5 lg:w-[90%] p-6 lg:px-8 lg:py-7 mt-10 lg:mt-20 items-start justify-between bg-gray-700 mx-auto rounded-2xl  ">
              <div className="w-[100%] lg:w-[48%]  ">
                <h2 className="text-2xl lg:text-4xl text-black-990 font-medium  ">
                  Our Vision
                </h2>
                <p className="w-[100%]  lg:w-[70%] text-sm text-black-600 leading-7 pt-4 ">
                  To empower individuals and businesses to create, grow, and
                  thrive with cutting-edge, no-barrier technology, bridging
                  creativity, data, and financial tools into one beautiful
                  experience.
                </p>
              </div>
              <div className="w-[100%] lg:w-[48%]">
                <h2 className="text-2xl lg:text-4xl text-black-990 font-medium ">
                  Our Mission
                </h2>
                <p className="w-[100%] lg:w-[80%] text-sm  text-black-600 leading-7 pt-4">
                  To bring Web2 simplicity and Web3 power together,
                  democratizing digital innovation with easy-to-use tools
                  powered by AI and automation. We're here to help you build
                  faster, smarter, and bolder.
                </p>
              </div>
            </div>
          </Heading>
        </Hero>
      </div>

      <div className="lg:mt-[1850px]">
        <CommunityJoin />
      </div>
      <Footer />
    </>
  );
};

export default Company;
