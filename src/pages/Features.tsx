import { useState } from "react";
import Header from "../components/Header"
import Hero from "../components/Hero"
import { useModal } from "../context/ModalContext";
import Heading from "../components/Heading";
import Slide2 from '../assets/slide2.png'
import Copy from '../assets/copy.png'
import Elipse from '../assets/elipse.png'
import Modals from "../components/Modals";
import Button from "../components/Button";
import BotDesign from "../assets/zrobot.png"
import Join from "../components/Join";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Features = () => {
   const [email, setEmail] = useState<string>("");
   const { setActiveModal } = useModal();
   const navigate = useNavigate();

   return (
      <>
         <div>
            <Hero>
               <Header
                  openSignUpModal={() => setActiveModal("signup")}
                  openLoginModal={() => setActiveModal("login")}
               />
               <Heading className="">
                  <div className="relative top-[160px] ">
                     <div className="ml-8 mb-12">
                        <Button
                           onClick={() => navigate(-1)}
                           className="bg-gray-600 px-4 flex items-center gap-2 py-2 rounded-full text-sm"
                        >
                           <svg width="6" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 1L1.70711 6.29289C1.37377 6.62623 1.20711 6.79289 1.20711 7C1.20711 7.20711 1.37377 7.37377 1.70711 7.70711L7 13" stroke="#1A1C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>

                           Back
                        </Button>
                     </div>
                     <div className="flex flex-col lg:flex-row mx-8 justify-between">
                        <div className="w-full lg:w-[50%] lg:text-left flex flex-col justify-center items-center lg:block mb-8 lg:mb-[0]">
                           <div className="flex flex-col lg:flex-row items-center lg:flex gap-4">
                              <div>
                                 <img src={Slide2} alt="slide" width={400} />
                              </div>
                              <div className="flex flex-col">
                                 <h2 className="mb-4 text-black-500 text-2xl font-semibold w-[auto] mt-4 lg:mt-[0px] lg:w-[50%]">Crypto sales telegram bot</h2>
                                 <div className="flex gap-2 items-center mb-2">
                                    <img src={Elipse} alt="elipse" width={10} height={10} />
                                    <span className="text-gray-500 text-xs">by</span>
                                    <span className="text-sm text-black-500">Tanjiro</span>
                                 </div>
                                 <div className="flex gap-2 items-center mb-4">
                                    <img src={Copy} alt="elipse" width={15} height={15} />
                                    <span className="text-sm text-gray-500">49 users</span>
                                 </div>
                                 <div className="flex gap-2">
                                    <a href="/" className="border text-sm border-gray-600 rounded-full px-4 py-3">Telegram</a>
                                    <a href="/" className="border text-sm border-gray-600 rounded-full px-4 py-3">NFT</a>
                                    <a href="/" className="border text-sm border-gray-600 rounded-full px-4 py-3">Ethereum</a>
                                    <a href="/" className="border text-sm border-gray-600 rounded-full px-4 py-3">Sepolia</a>
                                 </div>
                              </div>

                           </div>
                        </div>
                        <div className='mt-2 lg:ml-[0] w-full lg:w-[40%]'>
                           <div className="flex flex-col">
                              <h1 className="text-black-500 text-2x font-semibold mb-3">About</h1>
                              <p className="w-[auto] text-black-400 text-sm leading-7">Welcome new members, introduce your services, and provide instant FAQs. This bot ensures a safe, professional community by monitoring behavior and enforcing rules.Welcome new members, introduce your services, and provide instant FAQs. This bot ensures a safe, professional community by monitoring behavior and enforcing rules.</p>
                           </div>
                           <Button type="button" className="custom-bg text-white py-3 px-4 rounded-lg mt-4 text-sm font-medium">Use this bot</Button>
                        </div>
                     </div>
                  </div>
               </Heading>
            </Hero>
         </div>
         <Modals email={email} setEmail={setEmail} />
         <div className="mx-8 mt-[220px] lg:mt-[10px]">
            <div className="flex">
               <div className="w-full lg:w-[70%]">
                  <h2 className="mb-4 text-black-500 text-2xl font-medium">Video tutorial</h2>
                  <div className="purpose-bg bg-gray-700 h-auto lg:h-[60vh] py-8 px-6 flex items-center justify-center rounded-3xl">
                     <img src={BotDesign} alt="" width={500} />
                  </div>
               </div>
            </div>
         </div>
         <div className="mx-8 mt-[50px]">
            <div className="flex">
               <div className="w-full lg:w-[70%]">
                  <div className="flex flex-col">
                     <h2 className="text-black-500 text-lg mb-4">What can I do with this recipe?</h2>
                     <ul className="list-disc list-inside text-gray-400 text-sm leading-6">
                        <li className="mb-3">
                           Track purchases and sales of NFTs from a specific collection (on Ethereum or Polygon) in real-time.
                        </li>
                        <li className="mb-3">
                           Follow purchases and sales of NFTs done by an investor or collector (on Ethereum or Polygon) in real-time.
                        </li>
                        <li className="mb-3">
                           Get notified as soon as an investor or collector makes a new NFT sale or purchase.
                        </li>
                        <li className="mb-3">
                           Get customized Discord messages about NFT purchases and sales.
                        </li>
                        <li className="mb-3">
                           Get data about the sold NFT such as: NFT name, NFT description, collection name, NFT image URL, buyer, seller, price in crypto, price in USD, NFT Attributes, OpenSea URL, token ID, and a few others. Check the full list at the NFT Events Block page.
                        </li>
                     </ul>

                  </div>
               </div>
            </div>
         </div>
         <div className="mx-8 mt-[50px]">
            <div className="flex">
               <div className="w-full lg:w-[70%]">
                  <div className="flex flex-col">
                     <h2 className="text-black-500 text-lg mb-3">How to set it up</h2>
                     <p className="text-black-500 text-sm font-medium mb-4">Address type</p>
                     <ul className="list-disc list-inside text-gray-400 text-sm leading-6">
                        <li className="mb-3">
                           If you want to receive notifications of sales and purchases of an NFT Collection, select the address type Contract.
                        </li>
                        <li className="mb-3">
                           If you want to receive notifications of sales and purchases done by an individual (a friend, an investor, a collector, …), select the address type Account.
                        </li>
                        <p className="text-black-500 text-sm font-medium mb-4">
                           Address
                        </p>
                        <li className="mb-4">
                           If the Address Type is Contract: Take a look at How to Find the Contract Address of an NFT Collection.
                        </li>
                        <li className="mb-4 leading-7">
                           If you find the address is 0x495f947276749ce646f68ac8c248420045cb7b5e or 0x2953399124f0cbb46d2cbacd8a89cf0599974963, that means the collection was created with OpenSea’s Storefront Creator and is on a shared contract along with many other collections. Go back to the Address Type and change it to OpenSea Storefront Creator. Follow these steps to find the address.
                        </li>
                        <li className="mb-4">
                           If the Address Type is Account: Check out our guide on How to find the Account Address of an NFT Investor, Collector, or Artist.
                        </li>
                        <li className="mb-4">
                           You can track multiple collections in the same bot. Just add the contract addresses separated by a comma.
                        </li>
                     </ul>

                  </div>
               </div>
            </div>
         </div>
         <div className="mx-8 mt-[50px]">
            <div className="flex">
               <div className="w-full lg:w-[70%]">
                  <div className="flex flex-col">
                     <h2 className="text-black-500 text-lg mb-3">Bot not working?</h2>
                     <p className="text-gray-400 text-sm font-medium mb-4">The most frequent reasons are:</p>
                     <ul className="list-disc list-inside text-gray-400 text-sm leading-6">
                        <li className="mb-3">
                           Boto was not invited into the Discord Server or does not have the required permissions. Follow all the steps for authorizing Lanepact make sure.
                        </li>
                        <li className="mb-3">
                           No event happened after the bot was turned on. Check if the things you’re looking to get notified about actually happened.
                        </li>
                        <li className="mb-4">
                           Did some sales come through and then it stopped working? You might've bumped into the daily trigger limit of the free community plan.
                        </li>
                        <li className="mb-4 leading-7">
                           The bot was not properly configured. Reach out to us on Discord or via email (info@lanepact.io) and we'll help you out!
                        </li>
                     </ul>

                  </div>
               </div>
            </div>
         </div>
         <Join />
         <Footer />
      </>
   )
}

export default Features