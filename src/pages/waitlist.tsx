import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Logo from "../components/Logo"
import WaitHeading from "../components/WaitHeading"

const WaitList = () => {
    return(
        <div className="waitlist">
            <Hero>
                <div className="flex justify-center items-center pt-8 pb-4">
                    <Logo />
                </div>
                <WaitHeading />
            </Hero>
            <Footer />
        </div>
    )
}

export default WaitList