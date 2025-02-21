import UntitledIcon from "../assets/svg/Untitledicon"
import Button from "../components/Button"
import Logo from "../components/Logo"

const PortfolioBuilder = () => {

    return (
        <div>
            <div className="grid grid-cols-3 px-2 py-4 items-center">
                <div>
                    <Logo />
                </div>
                <div className="flex items-center gap-1">
                    <UntitledIcon />
                    <p>untitled</p>
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <div className="flex">
                        <span className="text-gray-400 text-sm">Status</span>
                    </div>
                    <Button className="px-6 py-3 text-sm border border-gray-600 rounded-xl lg:flex bg-white shadow-lg text-black-500">Preview</Button>
                    <Button className="lg:flex text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3
                    rounded-xl">
                        Publish
                    </Button>
                </div>
            </div>
            <div className="flex justify-between mx-4">
                <div className="w-[75%] border border-gray-600 h-[100vh]"></div>
                <div className="w-[22%] border border-gray-600 h-[100vh]"></div>
            </div>

        </div>
    )
}

export default PortfolioBuilder