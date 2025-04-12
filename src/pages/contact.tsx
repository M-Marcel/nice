import { useState } from "react";
import Header from "../components/Header"
import Heading from "../components/Heading"
import Hero from "../components/Hero"
import { useModal } from "../context/ModalContext";
import Modals from "../components/Modals";
import ContactForm from "../components/ContactForm";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import CommunityJoin from "../components/CommunityJoin";



const Contact = () => {
    const [email, setEmail] = useState<string>("");
    const { setActiveModal } = useModal()

    return (
        <>
            <div className="mb-[180px] lg:mb-[240px]">
                <Hero>
                    <Header
                        openSignUpModal={() => setActiveModal("signup")}
                        openLoginModal={() => setActiveModal("login")}
                    />
                    <Heading className="">
                        <div className="relative top-[150px]">
                            <div className='flex flex-col items-center justify-center '>
                                <div className='flex flex-col items-center max-w-lg justify-center px-2 lg:px-0'>
                                    <h2 className='font-title text-4xl lg:text-5xl mb-3 text-black-300 text-center leading-[48px]'>
                                        We’re Here to Help
                                    </h2>

                                    <p className='text-center w-auto lg:w-[80%] text-black-400 mb-1'>
                                        Have questions or feedback? Get in touch with us, and we’ll get back to you as soon as possible
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>

                    </Heading>

                </Hero>
            </div>
            <Modals email={email} setEmail={setEmail} />
            <div className="p-4 ">
            <Questions />
            </div>
            <CommunityJoin />
            <Footer />
        </>

    )
}

export default Contact