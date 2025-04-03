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
                        <span className="flex items-center px-4 rounded-xl">
                            {/* Skill icon placeholder */}
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <circle cx="32" cy="32" r="30" fill="#f0f0f0" />

                                <path d="M24 16H40C44.4183 16 48 19.5817 48 24V40C48 44.4183 44.4183 48 40 48H24C19.5817 48 16 44.4183 16 40V24C16 19.5817 19.5817 16 24 16Z" fill="#808080" />
                                <path d="M24 16H32V12H24C19.5817 12 16 15.5817 16 20V28H20V24C20 21.7909 21.7909 20 24 20Z" fill="#606060" />
                                <path d="M40 16H32V12H40C44.4183 12 48 15.5817 48 20V28H44V24C44 21.7909 42.2091 20 40 20Z" fill="#606060" />
                                <path d="M16 40V32H12V40C12 44.4183 15.5817 48 20 48H28V44H24C21.7909 44 20 42.2091 20 40V36H16Z" fill="#606060" />
                                <path d="M48 40V32H52V40C52 44.4183 48.4183 48 44 48H36V44H40C42.2091 44 44 42.2091 44 40V36H48Z" fill="#606060" />


                                <text x="32" y="38" font-family="Arial" font-size="12" text-anchor="middle" fill="white">SKILL</text>
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