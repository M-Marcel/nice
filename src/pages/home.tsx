import { useState } from "react";
import CommunityBot from "../components/communityBot";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Purpose from "../components/Purpose";
import Modals from "../components/Modals";
import { useModal } from "../context/ModalContext";
import Button from "../components/Button";
import Zero from '../assets/zero.png'
import BotDesign from '../assets/zrobot.png'
import Avatar from "../components/avatar";

const Home = () => {
    const { setActiveModal } = useModal()
    const [email, setEmail] = useState<string>("");



    return (
        <>
            <div className="home">
                <Hero>
                    <Header
                        openSignUpModal={() => setActiveModal("signup")}
                        openLoginModal={() => setActiveModal("login")}
                    />
                    <Heading className="">
                        <div className="relative top-[150px]">
                            <div className='flex flex-col items-center justify-center '>
                                <Avatar className="">
                                    2k+ bots built
                                </Avatar>
                                <div className='flex flex-col items-center max-w-sm justify-center'>
                                    <h2 className='font-title text-5xl mb-3 text-black-300 text-center  leading-none'>
                                        Build bots and mini apps with
                                    </h2>
                                    <div className='mb-3'>
                                        <img src={Zero} alt='zero' width={250} height={80} />
                                    </div>
                                    <p className='text-center w-auto lg:w-[70%] text-black-400 mb-3'>
                                        Start building bots and mini apps before we fully launch
                                    </p>
                                    <div>
                                        <Button className='custom-bg text-white font-bold text-sm px-6 py-3 rounded-lg'>
                                           Start building
                                        </Button>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <img src={BotDesign} alt='botDesign' width={1000} height={1000} />
                                </div>
                            </div>
                        </div>
                    </Heading>
                </Hero>
                <Purpose />
                <CommunityBot />
                <Join />
                <Footer />
            </div>

            {/* Modals */}
            <Modals email={email} setEmail={setEmail} />
        </>
    );
};

export default Home;
