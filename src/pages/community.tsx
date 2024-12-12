import { useState } from "react"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Hero from "../components/Hero"
import { useModal } from "../context/ModalContext"
import Modals from "../components/Modals"
import CommunityFrame from '../assets/communityFrame.png'
import Footer from "../components/Footer"
import Join from "../components/Join"
import { communityBots} from "../constants"
import Button from "../components/Button"
import Dropdown from "../components/Dropdown"

const Community = () => {
    

    const [email, setEmail] = useState<string>("");
    const { setActiveModal } = useModal()
    const BlockOptions = ["Block1", "Block2", "Block3"];
    const TagOptions = ["Tag1", "Tag2", "Tag3"];
    return (
        <>
            <div className="">
                <Hero>
                    <Header
                        openSignUpModal={() => setActiveModal("signup")}
                        openLoginModal={() => setActiveModal("login")}
                    />
                    <Heading className="">
                        <div className="relative top-[150px]">
                            <div className='flex flex-col items-center justify-center mx-[8px] lg:mx-[0]'>
                                <div className='flex flex-col items-center max-w-lg justify-center'>
                                    <h2 className='font-title text-4xl lg:text-5xl mb-3 text-black-300 text-center leading-[48px]'>
                                        Discover and Use Bots Built by the Community
                                    </h2>

                                    <p className='text-center w-auto lg:w-[70%] text-black-400 mb-1'>
                                        Build and automate faster with bots created and shared by people like you.
                                    </p>
                                </div>
                                <div className='mt-2 '>
                                    <img src={CommunityFrame} alt='communityFrame' width={400} height={400} />
                                </div>
                            </div>
                        </div>
                    </Heading>
                </Hero>
            </div>
            <Modals email={email} setEmail={setEmail} />
            <div className="px-5 lg:px-7.5 xl:px-10 lg:mx-8 mt-[180px] lg:mt-[100px]">
                <div className="flex justify-between items-center">
                    <div className="w-[80%]">
                        <input type="text" placeholder="Search for anything" className="w-full border border-gray-600 py-2 outline-none px-2 rounded-md" />
                    </div>
                    <div className="flex gap-2">
                        <Dropdown options={BlockOptions} >Block</Dropdown>
                        <Dropdown options={TagOptions} >Tags</Dropdown>
                    </div>
                </div>
            </div>

            <div className="px-5 lg:px-7.5 xl:px-10 lg:mx-8 mt-[40px]">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        communityBots.map((item) => (
                            <div key={item.id}>
                                <div className="flex flex-col border border-gray-600 rounded-xl
                                px-4 py-4">
                                    <div className="w-[100%] purpose-bg">
                                        <img
                                            src={item.image}
                                            alt="img"
                                            className="w-[100%] m-auto block object-contain"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-2">
                                            <h2 className="text-black-300 text-md mb-2 lg:mb-0">{item.title}</h2>
                                            <Button className="custom-bg rounded-lg px-4 py-2 text-white text-sm">{item.btnText}</Button>
                                        </div>
                                        <div>
                                            <p className="flex gap-1 items-center mb-2">
                                                <img src={item.elipse} alt="elipse" className="w-[10px] h-[10px]" />
                                                <span className="text-black-400 text-xs">by</span>
                                                <span className="text-black-300 text-sm">{item.author}</span>
                                            </p>
                                            <p className="flex items-center gap-1">
                                                <img src={item.copy} alt="copy" className="w-[10px] h-[10px]" />
                                                <span className="text-black-400 text-xs">{item.totalUsers}</span>
                                                <span className="text-black-400 text-xs">users</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <Join />
            <Footer />
        </>
    )
}

export default Community