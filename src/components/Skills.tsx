import { useState, useEffect } from "react";
import { Portfolio } from "../dataTypes";
import Button from "./Button";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAllSkills, getAllCategories } from "../slices/skills/skillsSlice";

type SkillsProps = {
    portfolioData: Portfolio;
    updatePortfolioData: (updatedData: Partial<Portfolio>) => void;
    isPublished: boolean;
};

const Skills = ({ portfolioData, updatePortfolioData, isPublished }: SkillsProps) => {
    const dispatch = useAppDispatch();
    const { allSkills, categories, isLoading: isSkillsLoading } = useAppSelector((state) => state.skills);
    
    // Create a unique localStorage key based on portfolio ID
    const localStorageKey = `skillsDraft_${portfolioData._id}`;

    // Initialize state with localStorage draft or portfolio data
    const [skills, setSkills] = useState<string[]>(() => {
        // 1. Check for unsaved draft in localStorage
        const savedDraft = localStorage.getItem(localStorageKey);
        if (savedDraft) return JSON.parse(savedDraft);

        // 2. If no draft, check for existing portfolio data
        const skillsSection = portfolioData?.sections?.find((section) => section.type === "Skills");
        return skillsSection?.customContent?.skills || [];
    });

    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filteredSkills, setFilteredSkills] = useState<any[]>([]);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Save to localStorage when skills change
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(skills));
    }, [skills, localStorageKey]);

    // Clear draft when portfolio is published
    useEffect(() => {
        if (isPublished) {
            localStorage.removeItem(localStorageKey);
        }
    }, [isPublished, localStorageKey]);

    // Load skills and categories
    useEffect(() => {
        const loadData = async () => {
            try {
                await dispatch(getAllSkills({ page: 1, limit: 300 }));
                await dispatch(getAllCategories());
            } catch (error) {
                console.error("Failed to load data:", error);
            } finally {
                setIsInitialLoad(false);
            }
        };

        // Only load if we don't have data yet
        if (allSkills.length === 0 || categories.length === 0) {
            loadData();
        } else {
            setIsInitialLoad(false);
        }
    }, [dispatch, allSkills.length, categories.length]);

    // Filter skills based on selected category
    useEffect(() => {
        if (selectedCategory) {
            const filtered = allSkills.filter(skill =>
                skill.category?.name === selectedCategory
            );
            setFilteredSkills(filtered);
        } else {
            setFilteredSkills(allSkills);
        }
    }, [selectedCategory, allSkills]);

    const handleAddSkill = (skillName: string) => {
        if (skillName.trim() && !skills.includes(skillName.trim())) {
            setSkills((prevSkills) => [...prevSkills, skillName.trim()]);
        }
    };

    const handleRemoveSkill = (skill: string) => {
        setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    };

    const handleSave = () => {
        const skillsSection = portfolioData?.sections?.find(
            (section) => section.type === "Skills"
        );

        if (!skillsSection) {
            console.error("Skills section not found");
            return;
        }

        const updatedSkillsSection = {
            ...skillsSection,
            customContent: {
                ...skillsSection.customContent,
                skills: skills,
            },
        };

        updatePortfolioData({
            sections: portfolioData.sections.map((section) =>
                section.type === "Skills" ? updatedSkillsSection : section
            ),
        });

        // Clear draft after successful save
        localStorage.removeItem(localStorageKey);
        toast.success('Skills updated successfully');
    };

    if (!portfolioData) {
        return null;
    }

    // Show loading state until initial data is loaded
    if (isInitialLoad || isSkillsLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <span className="ml-3">Loading skills...</span>
            </div>
        );
    }

    return (
        <div className="pt-4 pb-4 relative z-10 w-[100%]">
            {/* Existing skills display */}
            <div className="grid w-[100%] grid-cols-4 overflow-y-scroll scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600 overflow-x-hidden h-[20vh] items-start mt-5">
                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <div key={index} className="flex gap-1 flex-col justify-center text-center items-center mt-10">
                            <span className="flex items-center px-4 rounded-xl">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="30" fill="#f0f0f0" />
                                    <path d="M24 16H40C44.4183 16 48 19.5817 48 24V40C48 44.4183 44.4183 48 40 48H24C19.5817 48 16 44.4183 16 40V24C16 19.5817 19.5817 16 24 16Z" fill="#808080" />
                                    <path d="M24 16H32V12H24C19.5817 12 16 15.5817 16 20V28H20V24C20 21.7909 21.7909 20 24 20Z" fill="#606060" />
                                    <path d="M40 16H32V12H40C44.4183 12 48 15.5817 48 20V28H44V24C44 21.7909 42.2091 20 40 20Z" fill="#606060" />
                                    <path d="M16 40V32H12V40C12 44.4183 15.5817 48 20 48H28V44H24C21.7909 44 20 42.2091 20 40V36H16Z" fill="#606060" />
                                    <path d="M48 40V32H52V40C52 44.4183 48.4183 48 44 48H36V44H40C42.2091 44 44 42.2091 44 40V36H48Z" fill="#606060" />
                                    <text x="32" y="38" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="white">SKILL</text>
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
                    ))
                ) : (
                    <div className="col-span-4 flex justify-center items-center h-full">
                        <p>No skills added yet</p>
                    </div>
                )}
            </div>

            {/* Skills selection UI */}
            <div className="mt-4">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-900 outline-0 rounded-md px-3 py-2 w-full"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-4 px-2 max-h-80 lg:max-h-40 overflow-y-scroll overflow-x-hidden scrollbar-thin lg:scrollbar-thumb-gray-300 lg:scrollbar-track-gray-600">
                <div className="grid grid-cols-2 gap-2">
                    {filteredSkills.length > 0 ? (
                        filteredSkills.map((skill) => (
                            <button
                                key={skill._id}
                                type="button"
                                onClick={() => handleAddSkill(skill.name)}
                                disabled={skills.includes(skill.name)}
                                className={`p-4 rounded-md text-sm flex flex-col items-center justify-center flex-wrap ${skills.includes(skill.name)
                                        ? "bg-gray-200 cursor-not-allowed"
                                        : "bg-gray-500 hover:bg-gray-800 text-white"
                                    }`}
                            >
                                {skill.name}
                                {skill.category && (
                                    <span className="text-xs text-white mt-2 block">{skill.category.name}</span>
                                )}
                            </button>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-4">
                            <p>No skills found in this category</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <Button
                    onClick={handleSave}
                    className="lg:flex text-xs lg:text-sm items-center gap-2 custom-bg shadow-lg text-white px-2 py-2 lg:px-6 lg:py-3 rounded-xl"
                >
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default Skills;