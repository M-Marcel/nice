import { useState } from "react";
import Header from "../components/Header"
import Heading from "../components/Heading"
import Hero from "../components/Hero"
import { useModal } from "../context/ModalContext";
import Modals from "../components/Modals";
import Join from "../components/Join";
import Footer from "../components/Footer";




const Privacy = () => {
  const [email, setEmail] = useState<string>("");
  const { setActiveModal } = useModal()

  return (
    <>
    <div>
      <Hero>
        <Header
          openSignUpModal={() => setActiveModal("signup")}
          openLoginModal={() => setActiveModal("login")}
        />
        <Heading className="">
          <div className="relative top-[160px] mx-8">
            <div className='flex flex-col'>
              <div className='flex flex-col lg:px-0'>
                <h2 className='font-700 text-xl lg:text-4xl mb-6 text-black-300 leading-[48px]'>
                  Privacy policy
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-start-1 lg:col-span-1">
                    <div className="flex flex-col gap-3">
                      <a href="#personal" className="text-sm font-light text-gray-920">Personal data we process</a>
                      <a href="#purpose" className="text-sm font-light text-gray-920">Purpose of the process</a>
                      <a href="#legal" className="text-sm font-light text-gray-920">Legal Basis</a>
                      <a href="#recipients" className="text-sm font-light text-gray-920">Recipients</a>
                    </div>
                  </div>
                  <div className="lg:col-start-2 lg:col-span-3">
                    <div className="flex flex-col">
                      <div className="mb-6" id="personal">
                        <h1 className="font-semibold text-lg mb-3 tracking-wide text-black-700">
                          Personal data we process
                        </h1>
                        <p className="text-sm font-light text-black-600 leading-6">
                        Name, phone number, e-mail address.Geolocation of the passenger, the time, and the destination of a journey.Payment information.Information about disputes.Identification data of the device on which the Munve app has been installed.
                        </p>
                      </div>
                      <div className="mb-6" id="purpose">
                        <h1 className="font-semibold text-lg mb-3 tracking-wide text-black-700">
                          Purpose of the process
                        </h1>
                        <p className="text-sm font-light text-black-600 leading-6">
                          We collect and process personal data to connect passengers with drivers to help them move around cities more efficiently.We display geolocation data and the phone number of passengers to drivers to enable efficient pick-up. Geolocation data is collected only when the Munve app is activated. The collection of geolocation data stops after closing the Munve app. In some countries drivers cannot see passengers' phone numbers; the driver sees an altogether different number which temporarily diverts to the passenger's phone number enabling the driver and passenger to communicate.We may use geolocation data to resolve quality issues related to transportation services.We use contact details to notify passengers of updates to the Munve app.We collect data on the routes taken by drivers and passengers to analyze the geographic coverage to provide recommendations to the drivers about the most efficient routes.Your name, phone number, and e-mail will be used to communicate with you.We obtain payment details to process passengers' payments on behalf of drivers for transportation services.Customer support data is collected on a case-by-case basis and stored to resolve disputes and service quality issues.
                        </p>
                      </div>
                      <div className="mb-6" id="legal">
                        <h1 className="font-semibold text-lg mb-3 tracking-wide text-black-700">
                          Legal Basis
                        </h1>
                        <p className="text-sm font-light text-black-600 leading-6">
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
                        <h1 className="font-semibold text-lg mb-3 tracking-wide text-black-700">
                          Recipients
                        </h1>
                        <p className="text-sm font-light text-black-600 leading-6">
                          The personal data of the passenger is only disclosed to the driver who has activated the Munve app; in such cases, the driver will see the name, phone number (in some countries the number is masked), and geolocation data of the passenger.After providing the transportation service, the name and the telephone number (in some countries the number is masked) of the passenger will remain visible to the driver for 24 hours. This is necessary for drivers to resolve any issues associated with service provision, for instance, to contact the passenger if something was left behind in the vehicle.Feedback given by passengers regarding the quality of the service is anonymous and drivers do not receive the names and telephone numbers of the passengers who provided ratings and feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Heading>
      </Hero>
      </div>
      
      <Modals email={email} setEmail={setEmail} />
      <div className="mt-0 lg:mt-[380px]">
          <Join />
      </div>
      <Footer />
      
      
      
     
    </>

  )
}

export default Privacy