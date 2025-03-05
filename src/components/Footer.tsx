import Logo from "../assets/lanepact-logo.png";
import LogoText from "../assets/lanepact-logo-text.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="footer relative bottom-[0]">
      <div className="lg:mx-auto  py-8 px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" width={20} height={20} />
          <img src={LogoText} alt="logo" width={80} height={80} />
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between mt-4 pb-8">
          <div className="flex gap-2 items-center mb-4 lg:mb-0">
            <div className="flex gap-3 ">
              <a href="https://t.me/+iw2jh3VaeSg4MzBk" target="blank">
                <span className=" flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7195 4.61057L19.4656 19.956C19.2201 21.0391 18.5799 21.3086 17.6701 20.7985L12.7122 17.1449L10.32 19.4459C10.0553 19.7106 9.83383 19.932 9.32364 19.932L9.67979 14.8826L18.8687 6.57927C19.2683 6.22312 18.7821 6.02573 18.2478 6.38193L6.88801 13.5348L1.9975 12.0041C0.933715 11.672 0.914496 10.9403 2.21889 10.4301L21.3477 3.06065C22.2333 2.72854 23.0083 3.25795 22.7195 4.61057Z"
                      fill="#43424D"
                    />
                  </svg>
                </span>
              </a>
              <a href="https://x.com/lanepact" target="blank">
                <span className=" flex items-center  justify-center">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8873 0.910156H21.2608L13.8907 9.33365L22.561 20.7961H15.7723L10.4551 13.8442L4.37098 20.7961H0.995467L8.87847 11.7862L0.561035 0.910156H7.52214L12.3284 7.26449L17.8873 0.910156ZM16.7033 18.7769H18.5726L6.50643 2.82329H4.50049L16.7033 18.7769Z"
                      fill="#43424D"
                    />
                  </svg>
                </span>
              </a>
              {/* <a
                href="https://www.instagram.com/officiallanepact"
                target="blank"
              >
                <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                  <img src={Instagram} alt="instagram" width={20} height={20} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/lanepact"
                target="blank"
              >
                <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                  <img src={Linkedin} alt="linkedin" width={20} height={20} />
                </span>
              </a>
              <a href="https://www.facebook.com/Lanepact" target="blank">
                <span className="rounded-full flex items-center custom-blue px-3 py-3 justify-center">
                  <img src={Facebook} alt="facebook" width={20} height={20} />
                </span>
              </a> */}
            </div>
            <a className="text-gray-300 text-sm" href="/">
              info@lanepact.org
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <a href="/" className="text-gray-300 text-sm">
              Home
            </a>
            <a href="/community" className="text-gray-300 text-sm">
              Community
            </a>
            <a href="/request-a-feature" className="text-gray-300 text-sm">
              Request a feature
            </a>
            <a href="/privacy" className="text-gray-300 text-sm">
              Privacy policy
            </a>
            <a href="/terms" className="text-gray-300 text-sm">
              Terms of service
            </a>
          </div>
        </div>
        <hr className="border border-gray-300/40" />
        <div className="mt-8">
          <p className="text-gray-300 text-sm">
            ©2024 Lanepact. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
