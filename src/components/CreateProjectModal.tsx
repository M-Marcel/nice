
import { useState } from "react"
import RobotIcon from "../assets/svg/Robot"
import Button from "./Button"


const CreateProjectModal = ({ setActiveModal }: any) => {

    const [selectedProject, setSelectedProject] = useState<string | null>(null)

    const handleProjectSelect = (projectType: string) => {
        setSelectedProject(projectType);
    };

    const handleContinue = () => {
        if (selectedProject === "Portfolio") {
            setActiveModal("selectTemplateModal");
        } else {
            // Handle other project types (e.g., "Bot")
            console.log(`Selected project: ${selectedProject}`);
        }
    };

    return (
        <div className="py-4 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-center">
                    <h2 className="text-black-500 font-semibold text-lg">What do you want to create</h2>
                    <p className="text-sm text-gray-400">Select project type</p>
                </div>
                <div className="grid gap-4 grid-cols-2 items-start mt-4 mb-6">
                    <div
                        onClick={() => handleProjectSelect("Bot")}
                        className={`flex flex-col cursor-pointer border ${selectedProject === "Bot" ? "border-gray-500" : "border-gray-600"
                            } rounded-xl px-2 py-4 gap-1 text-center items-center justify-center text-sm hover:scale-105 
                    transform transition-transform duration-300`}
                    >
                        <span>
                            <RobotIcon />
                        </span>
                        <p className="text-md font-semibold mb-1">Mini app</p>
                        <p className="text-xs text-gray-400 w-[60%]">New mini-app and bot</p>
                    </div>
                    <div
                        onClick={() => handleProjectSelect("Portfolio")}
                        className={`flex flex-col cursor-pointer border ${selectedProject === "Portfolio" ? "border-gray-500" : "border-gray-600"
                            } rounded-xl px-2 py-4 gap-1 text-center items-center justify-center text-sm hover:scale-105 
                            transform transition-transform duration-300`}
                    >
                        <span>
                            <RobotIcon />
                        </span>
                        <p className="text-md font-semibold mb-1">Portfolio</p>
                        <p className="text-xs text-gray-400 w-[80%]">New portfolio project</p>
                    </div>

                </div>
                <div>
                    <Button
                        onClick={handleContinue}
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