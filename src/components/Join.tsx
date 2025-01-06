import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Facebook from "../assets/facebook.png"

const Join = () => {
  return (
    <div className="join-bg px-8 py-28 h-[auto] mt-[10px] mb-[70px]">
      <div className="flex justify-center flex-col items-center text-center">
        <h2 className="text-black-500 text-3xl lg:text-5xl mt-[30px] mb-3">
          Join our community
        </h2>
        <p className="text-gray-200 w-[auto] lg:w-[20%]">
          Be the first to hear the latest updates from us
        </p>
        <div className="flex gap-3 mt-4">
          <a href="https://t.me/+zU-zDRvcknQzNzU0" target="blank">
            <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
              <img src={Telegram} alt="telegram" width={20} height={20} />
            </span>
          </a>
          <a href="https://x.com/lanepact" target="blank">
            <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
              <img src={Twitter} alt="twitter" width={20} height={10} />
            </span>
          </a>
          <a href="https://www.instagram.com/officiallanepact" target="blank">
            <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
              <img src={Instagram} alt="instagram" width={20} height={20} />
            </span>
          </a>
          <a href="https://www.linkedin.com/company/lanepact" target="blank">
            <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
              <img src={Linkedin} alt="linkedin" width={20} height={20} />
            </span>
          </a>
          <a href="https://www.facebook.com/Lanepact" target="blank">
            <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
              <img src={Facebook} alt="facebook" width={20} height={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;
