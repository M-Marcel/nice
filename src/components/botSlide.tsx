import { communityBots } from "../constants"
import Button from "./Button"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BotSlide = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
    return (
        <div className="h-auto bg-white mt-8 m-auto" >
            <div className="h-auto w-[90%] border-red-600 border">
                <Slider {...settings}>
                {
                    communityBots.map((item) => (
                        <div key={item.id}>
                            <div className="flex flex-col">
                                <img
                                    src={item.image}
                                    alt="img"
                                    className="w-40 m-auto"
                                />
                                <div className="mt-5">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="text-black-300 text-md">{item.title}</h2>
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
                </Slider>
            </div>
        </div>
    )
}

export default BotSlide