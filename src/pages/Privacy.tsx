import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import { useModal } from "../context/ModalContext";

import Join from "../components/Join";
import Modals from "../components/Modals";

import Footer from "../components/Footer";

const Privacy = () => {
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
            <div className="relative top-[180px] ">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:flex-row lg:gap-8 items-start mx-[8px] lg:mx-[10] ps-20">
                <div className="col-span-2 ">
                  <h2 className="font-semibold text-start text-5xl">
                    Privacy policy
                  </h2>
                </div>
                <div className="flex flex-row gap-9 sm:pt-6">
                  <div className="grid grid-col hidden lg:grid text-sm lg:text-lg font-light basis-1/4 h-8  ">
                    <a href="#personal">Personal data we process</a>
                    <a href="#purpose">Purpose of the process</a>
                    <a href="#legal">Legal Basis</a>
                    <a href="#recipients">Recipients</a>
                  </div>
                  <div className="basis-3/4 tracking-wide">
                    <div className="mb-6" id="personal">
                      <h1 className="font-semibold text-xl mb-3 tracking-wide ">
                        Personal data we process
                      </h1>
                      <p className="text-lg font-light">
                        Name, phone number, e-mail address.Geolocation of the
                        passenger, the time, and the destination of a
                        journey.Payment information.Information about disputes.
                        Identification data of the device on which the Munve app
                        has been installed.
                      </p>
                    </div>

                    <div className="mb-6" id="purpose">
                      <h1 className="font-semibold text-xl mb-3 tracking-wide">
                        Purpose of the process
                      </h1>
                      <p className="text-lg font-light">
                        We collect and process personal data to connect
                        passengers with drivers to help them move around cities
                        more efficiently. We display geolocation data and the
                        phone number of passengers to drivers to enable
                        efficient pick-up. Geolocation data is collected only
                        when the Munve app is activated. The collection of
                        geolocation data stops after closing the Munve app. In
                        some countries drivers cannot see passengers' phone
                        numbers; the driver sees an altogether different number
                        which temporarily diverts to the passenger's phone
                        number enabling the driver and passenger to communicate.
                        We may use geolocation data to resolve quality issues
                        related to transportation services.We use contact
                        details to notify passengers of updates to the Munve
                        app.We collect data on the routes taken by drivers and
                        passengers to analyze the geographic coverage to provide
                        recommendations to the drivers about the most efficient
                        routes. Your name, phone number, and e-mail will be used
                        to communicate with you.We obtain payment details to
                        process passengers' payments on behalf of drivers for
                        transportation services. Customer support data is
                        collected on a case-by-case basis and stored to resolve
                        disputes and service quality issues.
                      </p>
                    </div>
                    <div className="mb-6" id="legal">
                      <h1 className="font-semibold text-xl mb-3 tracking-wide ">
                        Legal Basis
                      </h1>
                      <p className="text-lg font-light">
                        Personal data is processed to provide the service
                        contracted with passengers. We collect and process the
                        personal data submitted by the passengers in the course
                        of installation and use of the Munve app. The
                        prerequisite for the use of Munve services is passengers
                        agreeing to the processing of identification and
                        geolocation data. Personal data may be also processed on
                        legitimate interest grounds, for example in
                        investigating and detecting fraudulent payments.
                      </p>
                    </div>
                    <div className="mb-24" id="recipients">
                      <h1 className="font-semibold text-xl mb-3 tracking-wide ">
                        Recipients
                      </h1>
                      <p className="text-lg font-light">
                        The personal data of the passenger is only disclosed to
                        the driver who has activated the Munve app; in such
                        cases, the driver will see the name, phone number (in
                        some countries the number is masked), and geolocation
                        data of the passenger.After providing the transportation
                        service, the name and the telephone number (in some
                        countries the number is masked) of the passenger will
                        remain visible to the driver for 24 hours. This is
                        necessary for drivers to resolve any issues associated
                        with service provision, for instance, to contact the
                        passenger if something was left behind in the vehicle.
                        Feedback given by passengers regarding the quality of
                        the service is anonymous and drivers do not receive the
                        names and telephone numbers of the passengers who
                        provided ratings and feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Heading>
          <Join />
          <Footer />
        </Hero>
      </div>

      {/* <Join />
      <Footer /> */}
    </>
  );
};

export default Privacy;
