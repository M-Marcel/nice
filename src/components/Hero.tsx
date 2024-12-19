
type HeroProps = {
    children: React.ReactNode
}

const Hero = ({children}:HeroProps) => {
    return(
        <div className="Hero-section lg:h-screen relative z-10 ">
            {children}
        </div>
    )
}

export default Hero