import { useModal } from "../context/ModalContext";
import Button from "./Button";

const Join = () => {
  const { setActiveModal } = useModal();
  return (
    <div className="join-bg px-8 py-28 h-[auto] mt-[5px] mb-[70px]">
      <div className="flex justify-center flex-col items-center text-center">
        <h2 className="text-black-500 text-2xl lg:text-5xl mt-[30px] mb-3">
          Join the future of digital innovation
        </h2>
        <p className="text-gray-200 text-sm w-[auto] lg:w-[32%]">
          Whether you are  launching a business, automating tasks,
          or showcasing your portfolio, we make it easy.
        </p>

        <Button
          className="custom-bg text-white font-bold text-xs px-4 py-3 mt-6 rounded-xl"
          onClick={() => setActiveModal("signup")}
        >
          Get Started For Free
        </Button>
        {/* <div className="flex gap-3 mt-4">
          <a href="https://t.me/+iw2jh3VaeSg4MzBk" target="blank">
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
        </div> */}
      </div>
    </div>
  );
};

export default Join;
