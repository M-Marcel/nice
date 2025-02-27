import { Template } from "../dataTypes";
// import templateFrame from "../assets/templateFrame.png"
// import Elipse from "../assets/Ellipse2.png"

interface TestTemplateProps {
    templateId: string;
    templateData: Template; // Replace `any` with a more specific type if possible
}

const TestTemplate: React.FC<TestTemplateProps> = ({ templateId, templateData }) => {
    const skillsSection = templateData?.sections.find(
        (section) => section.type === "Skills"
    );
    const projectsSection = templateData?.sections.find(
        (section) => section.type === "Projects"
    );
    const certificatesSection = templateData?.sections.find(
        (section) => section.type === "Certificates"
    );
    const workSection = templateData?.sections.find(
        (section) => section.type === "Work"
    );

    return (
        <div>
            {templateData ? (
                <div className="mt-2">
                    {/* Render Template Frame */}

                    {templateData.sections.length > 0 && (
                        <>
                            <div className="relative">
                                <div className="w-full h-[250px]">
                                    <img src="https://plus.unsplash.com/premium_photo-1736165168647-e216dcd23720?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="frame" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-[90px] left-5">
                                    <div className="w-[100px] h-[100px] rounded-full">
                                        <img src="https://images.unsplash.com/photo-1726137569966-a7354383e2ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-full h-full object-cover" alt="Ellipse" />
                                    </div>
                                    <p className="font-semibold">{templateData?.sections[0]?.designData?.name}</p>
                                    <p className="text-gray-500">{templateData?.sections[0]?.designData?.email}</p>
                                </div>
                                <div className="flex items-center gap-2 absolute right-10 -bottom-[80px]">
                                    <p className="rounded-2xl border border-gray-600 px-4 py-2 text-xs">{templateData?.sections[0]?.designData?.location}</p>
                                    {templateData.sections[0].designData.socialLinks && (
                                        <>
                                            <a
                                                href={templateData.sections[0].designData.socialLinks[0].x}
                                                className="rounded-full border border-gray-600 px-3 py-2 text-xs"
                                            >
                                                <svg width="18" height="29" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.9079 0.0537109H26.1247L16.9121 10.5831L27.75 24.9112H19.264L12.6175 16.2213L5.01243 24.9112H0.79304L10.6468 13.6488L0.25 0.0537109H8.95139L14.9592 7.99662L21.9079 0.0537109ZM20.4279 22.3872H22.7645L7.68174 2.44513H5.17433L20.4279 22.3872Z" fill="#1A1C1F" />
                                                </svg>
                                            </a>
                                            <a
                                                href={templateData.sections[0].designData.socialLinks[0].linkedIn}
                                                className="rounded-full border border-gray-600 px-4 py-2 text-xs"
                                            >
                                                <svg width="15" height="29" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M27.7793 0.673828H2.21484C0.990234 0.673828 0 1.64063 0 2.83594V28.5059C0 29.7012 0.990234 30.6738 2.21484 30.6738H27.7793C29.0039 30.6738 30 29.7012 30 28.5117V2.83594C30 1.64063 29.0039 0.673828 27.7793 0.673828ZM8.90039 26.2383H4.44727V11.918H8.90039V26.2383ZM6.67383 9.9668C5.24414 9.9668 4.08984 8.8125 4.08984 7.38867C4.08984 5.96484 5.24414 4.81055 6.67383 4.81055C8.09766 4.81055 9.25195 5.96484 9.25195 7.38867C9.25195 8.80664 8.09766 9.9668 6.67383 9.9668ZM25.5645 26.2383H21.1172V19.2773C21.1172 17.6191 21.0879 15.4805 18.8027 15.4805C16.4883 15.4805 16.1367 17.291 16.1367 19.1602V26.2383H11.6953V11.918H15.9609V13.875H16.0195C16.6113 12.75 18.0645 11.5605 20.2266 11.5605C24.7324 11.5605 25.5645 14.5254 25.5645 18.3809V26.2383Z" fill="#1A1C1F" />
                                                </svg>
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="px-4 mt-[140px] py-8 rounded-xl border border-gray-900">
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="text-lg text-gray-980">About</h2>
                                    </div>
                                    <div>
                                        <p className="text-sm text-black-980">
                                            {templateData.sections[0].designData?.about}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {skillsSection?.designData?.skills && (
                                <div className="px-4 mt-2 py-8">
                                    <div className="flex flex-col items-center justify-center">
                                        <h2 className="text-lg text-gray-980">Skills</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                                            {skillsSection.designData.skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-xl border border-gray-600 px-4 py-2 text-center"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {projectsSection?.designData?.projects && (
                                <div className="px-4 mt-[10px] py-8 rounded-xl border border-gray-900">
                                    <div className="flex justify-between">
                                        <h2 className="text-lg text-gray-980">Projects</h2>
                                        <div className="mt-4 w-[60%] px-4">
                                            {projectsSection.designData.projects.map((project, index) => (
                                                <>
                                                    <div key={index} className="mb-4 flex items-center justify-between">
                                                        <div>
                                                            <h3 className="font-semibold text-lg text-black-980">{project.projectName}</h3>
                                                            <p className="text-sm font-light text-black-980">{project.about}</p>
                                                        </div>
                                                        <div>
                                                            <div className="border border-gray-600 rounded-full px-2">
                                                                <svg width="10" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.9593 25.0313V0.31543H13.323V25.0313H11.9593ZM0.283203 13.3552V11.9916H24.9991V13.3552H0.283203Z" fill="#939393" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="mt-2 mb-4 border border-gray-600" />
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Certificates and Work History Section */}
                            <div className="flex justify-between mt-10">
                                {/* Certificates Section */}
                                {certificatesSection?.designData?.certificates && (
                                    <div className="certificates w-[42%] px-4 py-8 rounded-xl border border-gray-900">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-lg text-gray-980">Certificates</h2>
                                            {certificatesSection.designData.certificates.map((certificate, index) => (
                                                <div key={index} className="flex items-center gap-4">
                                                    <div className="border border-gray-600 rounded-full px-2">
                                                        <svg width="14" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.16602 9.49284C1.16602 11.6173 14.0008 17.4095 16.9994 17.4095C19.9979 17.4095 32.8327 11.6173 32.8327 9.49284C32.8327 7.36836 19.9979 1.57617 16.9994 1.57617C14.0008 1.57617 1.16602 7.36835 1.16602 9.49284Z" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 14.2432L9.48366 23.4254C9.61953 24.0544 9.93317 24.642 10.4562 25.0168C13.9784 27.5408 20.0216 27.5408 23.5438 25.0168C24.0668 24.642 24.3805 24.0544 24.5163 23.4254L26.5 14.2432" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M31.457 11.8682C31.457 11.3159 31.0093 10.8682 30.457 10.8682C29.9047 10.8682 29.457 11.3159 29.457 11.8682H31.457ZM28.1951 28.1186L29.168 28.3497L28.1951 28.1186ZM32.7189 28.1186L33.6919 27.8875L32.7189 28.1186ZM29.457 11.8682V22.9629H31.457V11.8682H29.457ZM29.168 28.3497C29.4025 27.3628 29.8048 26.4651 30.2297 25.6336C30.6248 24.8603 31.1202 24.0061 31.3871 23.3302L29.5269 22.5956C29.3059 23.1553 28.9318 23.7782 28.4487 24.7235C27.9954 25.6106 27.5107 26.6729 27.2222 27.8875L29.168 28.3497ZM33.6919 27.8875C33.4033 26.6729 32.9186 25.6106 32.4653 24.7235C31.9823 23.7782 31.6082 23.1553 31.3871 22.5956L29.5269 23.3302C29.7939 24.0061 30.2892 24.8603 30.6844 25.6336C31.1093 26.4651 31.5116 27.3628 31.746 28.3497L33.6919 27.8875ZM30.9565 29.0765H29.9576V31.0765H30.9565V29.0765ZM27.2222 27.8875C27.0279 28.7052 26.9364 29.6984 27.6345 30.3986C27.9629 30.728 28.3721 30.887 28.7463 30.97C29.1194 31.0527 29.5345 31.0765 29.9576 31.0765V29.0765C29.5909 29.0765 29.3436 29.0539 29.1793 29.0174C29.016 28.9812 29.0127 28.9483 29.0508 28.9865C29.1048 29.0406 29.0926 29.0818 29.085 29.0007C29.0753 28.8974 29.0855 28.6972 29.168 28.3497L27.2222 27.8875ZM31.746 28.3497C31.8286 28.6972 31.8387 28.8974 31.8291 29.0007C31.8215 29.0818 31.8093 29.0406 31.8633 28.9865C31.9014 28.9483 31.8981 28.9812 31.7348 29.0174C31.5704 29.0539 31.3232 29.0765 30.9565 29.0765V31.0765C31.3796 31.0765 31.7947 31.0527 32.1678 30.97C32.5419 30.887 32.9512 30.728 33.2796 30.3986C33.9777 29.6984 33.8861 28.7052 33.6919 27.8875L31.746 28.3497Z" fill="#141B34" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 className="font-semibold">{certificate.name}</h2>
                                                        <p className="text-sm text-gray-500">{certificate.issuedBy}</p>
                                                        <p className="text-sm text-gray-500">{certificate.yearIssued}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Work History Section */}
                                {workSection?.designData?.work && (
                                    <div className="workHistory w-[55%] px-4 py-8 rounded-xl border border-gray-900">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-lg text-gray-980">Work History</h2>
                                            {workSection.designData.work.map((work, index) => (
                                                <div key={index} className="flex justify-between items-center">
                                                    <div>
                                                        <h2 className="font-semibold">{work.role}</h2>
                                                        <p className="text-sm text-gray-500">
                                                            {work.company} · {work.startDate} - {work.isRoleActive ? "Present" : work.endDate}
                                                        </p>
                                                    </div>
                                                    <div className="border border-gray-600 rounded-full px-2">
                                                        <svg width="10" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.9593 25.0313V0.31543H13.323V25.0313H11.9593ZM0.283203 13.3552V11.9916H24.9991V13.3552H0.283203Z" fill="#939393" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            ) : (
                // Render "Template not found" message if no template data
                <p className="text-gray-400">Template not found.</p>
            )}
        </div>
    );
};

export default TestTemplate;