import { useState } from "react"
import CommunityBot from "../components/communityBot"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Hero from "../components/Hero"
import Join from "../components/Join"
import Modal from "../components/Modal"
import Purpose from "../components/Purpose"
import SignUp from "./auth/signup"
import Login from "./auth/login"

const Home = () => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [showModal2, setShowModal2] = useState<boolean>(false)

    return (
        <>
            <div className="home">
                <Hero>
                    <Header
                        showModal={showModal} setShowModal={setShowModal}
                        showModal2={showModal2} setShowModal2={setShowModal2}
                    />
                    <Heading />
                </Hero>
                <Purpose />
                <CommunityBot />
                <Join />
                <Footer />
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <SignUp />
            </Modal>
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
               <Login />
            </Modal>
        </>

    )
}

export default Home