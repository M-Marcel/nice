import { useState, useEffect } from "react";
import { Portfolio } from "../dataTypes";
import Button from "./Button";
import { toast } from "react-toastify";

type SkillsProps = {
    portfolioData: Portfolio;
    updatePortfolioData: (updatedData: Partial<Portfolio>) => void;
};

const Skills = ({ portfolioData, updatePortfolioData }: SkillsProps) => {
    const [skillInput, setSkillInput] = useState(""); // Temporary input for adding a new skill
    const [skills, setSkills] = useState<string[]>([]); // Local state for skills

    // Initialize skills from portfolioData
    useEffect(() => {
        if (portfolioData?.sections?.length > 0) {
            const skillsSection = portfolioData.sections.find((section) => section.type === "Skills");
            if (skillsSection) {
                setSkills(skillsSection.customContent?.skills || []);
            }
        }
    }, [portfolioData]);

    // Handle adding a new skill
    const handleAddSkill = () => {
        if (skillInput.trim() && !skills.includes(skillInput.trim())) {
            setSkills((prevSkills) => [...prevSkills, skillInput.trim()]);
            setSkillInput(""); // Clear the input field
        }
    };

    // Handle removing a skill
    const handleRemoveSkill = (skill: string) => {
        setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    };

    // Handle saving changes
    const handleSave = () => {
        // Find the Skills section from the portfolioData
        const skillsSection = portfolioData.sections.find(
            (section) => section.type === "Skills"
        );

        if (!skillsSection) {
            console.error("Skills section not found in portfolioData.");
            return;
        }

        // Ensure the _id is included in the updated section
        const updatedSkillsSection = {
            ...skillsSection,
            customContent: {
                ...skillsSection.customContent,
                skills: skills, // Update the skills array
            },
        };

        // Update the portfolioData while preserving other sections
        updatePortfolioData({
            sections: portfolioData.sections.map((section) =>
                section.type === "Skills" ? updatedSkillsSection : section
            ),
        });
        toast.success('changes saved')
    };

    return (
        <div className="pt-4 pb-4 relative z-10">
            <div className="grid grid-cols-3 items-start w-[95%] -ml-[20px] mt-5">
                {/* Display existing skills */}
                {skills.map((skill, index) => (
                    <div key={index} className="flex gap-1 flex-col items-center mt-10">
                        <span className="border border-gray-600 flex items-center px-4 rounded-xl">
                            {/* Skill icon placeholder */}
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0Z" fill="#4CAF50" />
                            </svg>
                        </span>
                        <span className="text-xs">{skill}</span>
                        <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="text-xs text-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Add new skill input */}
            <div className="mt-10 ">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        className="border w-[50%] border-gray-900 rounded-lg outline-0 py-1 px-1"
                        placeholder="Add a skill"
                    />
                    <Button
                        type="button"
                        onClick={handleAddSkill}
                        className="px-2 py-2 lg:px-4 lg:py-1 bg-blue-500 text-xs lg:text-sm text-white rounded-lg"
                    >
                        Add
                    </Button>
                </div>
            </div>

            {/* Save Changes Button */}
            <div className="mt-6">
                <Button onClick={handleSave} className="lg:flex text-xs lg:text-sm items-center gap-2 custom-bg shadow-lg text-white px-2 py-2 lg:px-6 lg:py-3 rounded-xl">
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default Skills;