import { communityBots } from "../constants"
import Button from "./Button"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BotSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        touchMove: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // Tablet and mobile view
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true,
                    swipe: true,
                    adaptiveHeight: true,
                },
            },
        ],
    };
    return (
        <div className="bg-white" >
            <div className="w-[100%] lg:w-[90%] mx-auto slider-container">
                <Slider {...settings}>
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
                                            <h2 className="text-black-300 text-md mb-2">{item.title}</h2>
                                            <Button className="custom-bg rounded-lg px-4 py-2 text-white text-xs lg:text-sm">{item.btnText}</Button>
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
                </Slider>
            </div>
        </div>
    )
}

export default BotSlide