import { useNavigate } from "react-router-dom"
import RobotIcon from "../assets/svg/Robot"
import Button from "./Button"

const CreateProjectModal = () => {
    const navigate = useNavigate()
    return (
        <div className="py-4 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-center">
                    <h2 className="text-black-500 font-semibold text-lg">What do you want to create</h2>
                    <p className="text-sm text-gray-400">Select project type</p>
                </div>
                <div className="grid gap-4 grid-cols-3 items-start mt-8 mb-6">
                    <div className="flex flex-col gap-1 text-center items-center justify-center text-sm">
                        <span>
                            <RobotIcon />
                        </span>
                        <p className="text-md font-semibold mb-1">Bot</p>
                        <p className="text-xs text-gray-400 w-[60%]">New bot or mini app</p>
                    </div>
                    <div className="flex flex-col gap-1 text-center items-center justify-center text-sm">
                        <span>
                            <RobotIcon />
                        </span>
                        <p className="text-md font-semibold mb-1">Portfolio</p>
                        <p className="text-xs text-gray-400 w-[80%]">New portfolio project</p>
                    </div>
                    <div className="flex flex-col gap-1 text-center items-center justify-center text-sm">
                        <span>
                            <RobotIcon />
                        </span>
                        <p className="text-md font-semibold mb-1">Bot</p>
                        <p className="text-xs text-gray-400 w-[60%]">New bot or mini app</p>
                    </div>
                </div>
                <div>
                    <Button 
                     onClick={() => navigate('/create-portfolio')}
                    className="lg:flex items-center gap-2 custom-bg text-sm text-white px-6 py-3
                    rounded-xl">
                        Continue
                    </Button>
                </div>
            </div>

        </div>
    )
}


export default CreateProjectModal