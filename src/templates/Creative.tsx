import { Portfolio } from "../dataTypes";
import Elipse from '../assets/Ellipse2.png'

interface TestTemplateProps {
    templateId: string;
    templateData: Portfolio; // Replace `any` with a more specific type if possible
}

const Creative: React.FC<TestTemplateProps> = ({ templateId, templateData }) => {
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
    const educationSection = templateData?.sections.find(
        (section) => section.type === "Education"
    );
    const socialLinks = templateData?.sections[0]?.customContent?.socialLinks?.[0] || {};

    return (
        <div className="bg h-[auto] bg-black-500 py-8 px-4 lg:px-8">
            {templateData ? (
                <>
                    {/* Render Template Frame */}
                    <div className="">
                        <div className="w-full rounded-3xl creative-section flex items-center justify-center h-[450px] py-8 lg:py-0 lg:h-[650px] lg:px-4">
                            <div className="flex justify-center items-center w-full">
                                <div className="flex flex-col items-center w-full">
                                    <div className="flex items-center justify-center">
                                        <div className="w-[100px] h-[100px] rounded-full">
                                            <img
                                                src={templateData?.sections[0]?.customContent?.profileImage || Elipse}
                                                className="rounded-full w-full h-full object-cover"
                                                alt="Ellipse"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <p className="font-bold mt-2 text-white text-xl">{templateData?.sections[0]?.customContent?.name}</p>
                                        <p className="text-white text-sm">{templateData?.sections[0]?.customContent?.email}</p>
                                    </div>
                                    <div className="w-[100%] lg:w-[40%] creative-frame mt-5 h-auto rounded-2xl px-4 py-4">
                                        <div className="flex-col lg:flex center text-center">
                                            <div>
                                                <p className="text-sm text-white">
                                                    {templateData.sections[0].customContent?.about}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex items-center gap-2">
                                            <p className="rounded-2xl border bg-white px-4 py-2 text-xs">
                                                {templateData?.sections[0]?.customContent?.location}
                                            </p>
                                            {templateData.sections[0].customContent.socialLinks && (
                                                <>
                                                    <a
                                                        href={templateData.sections[0].customContent.socialLinks[0].x}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="rounded-full border bg-white px-2 py-2 text-xs"
                                                    >
                                                        <svg width="15" height="15" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.9079 0.0537109H26.1247L16.9121 10.5831L27.75 24.9112H19.264L12.6175 16.2213L5.01243 24.9112H0.79304L10.6468 13.6488L0.25 0.0537109H8.95139L14.9592 7.99662L21.9079 0.0537109ZM20.4279 22.3872H22.7645L7.68174 2.44513H5.17433L20.4279 22.3872Z" fill="#1A1C1F" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        href={templateData.sections[0].customContent.socialLinks[0].linkedIn}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="rounded-full border bg-white px-2 py-2 text-xs"
                                                    >
                                                        <svg width="15" height="15" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27.7793 0.673828H2.21484C0.990234 0.673828 0 1.64063 0 2.83594V28.5059C0 29.7012 0.990234 30.6738 2.21484 30.6738H27.7793C29.0039 30.6738 30 29.7012 30 28.5117V2.83594C30 1.64063 29.0039 0.673828 27.7793 0.673828ZM8.90039 26.2383H4.44727V11.918H8.90039V26.2383ZM6.67383 9.9668C5.24414 9.9668 4.08984 8.8125 4.08984 7.38867C4.08984 5.96484 5.24414 4.81055 6.67383 4.81055C8.09766 4.81055 9.25195 5.96484 9.25195 7.38867C9.25195 8.80664 8.09766 9.9668 6.67383 9.9668ZM25.5645 26.2383H21.1172V19.2773C21.1172 17.6191 21.0879 15.4805 18.8027 15.4805C16.4883 15.4805 16.1367 17.291 16.1367 19.1602V26.2383H11.6953V11.918H15.9609V13.875H16.0195C16.6113 12.75 18.0645 11.5605 20.2266 11.5605C24.7324 11.5605 25.5645 14.5254 25.5645 18.3809V26.2383Z" fill="#1A1C1F" />
                                                        </svg>
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="absolute -bottom-[90px] left-5">
                            <div className="w-[100px] h-[100px] rounded-full">
                                <img
                                    src={templateData?.sections[0]?.customContent?.profileImage || Elipse}
                                    className="rounded-full w-full h-full object-cover"
                                    alt="Ellipse"
                                />
                            </div>
                            <p className="font-semibold">{templateData?.sections[0]?.customContent?.name}</p>
                            <p className="text-gray-500">{templateData?.sections[0]?.customContent?.email}</p>
                        </div> */}
                        {/* <div className="flex items-center gap-2 absolute right-35 lg:right-10 -bottom-[155px] lg:-bottom-[80px]">
                            <p className="rounded-2xl border border-gray-600 px-4 py-2 text-xs">
                                {templateData?.sections[0]?.customContent?.location}
                            </p>
                            {templateData.sections[0].customContent.socialLinks && (
                                <>
                                    <a
                                        href={templateData.sections[0].customContent.socialLinks[0].x}
                                        className="rounded-full border border-gray-600 px-3 py-2 text-xs"
                                    >
                                        <svg width="18" height="29" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.9079 0.0537109H26.1247L16.9121 10.5831L27.75 24.9112H19.264L12.6175 16.2213L5.01243 24.9112H0.79304L10.6468 13.6488L0.25 0.0537109H8.95139L14.9592 7.99662L21.9079 0.0537109ZM20.4279 22.3872H22.7645L7.68174 2.44513H5.17433L20.4279 22.3872Z" fill="#1A1C1F" />
                                        </svg>
                                    </a>
                                    <a
                                        href={templateData.sections[0].customContent.socialLinks[0].linkedIn}
                                        className="rounded-full border border-gray-600 px-4 py-2 text-xs"
                                    >
                                        <svg width="15" height="29" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.7793 0.673828H2.21484C0.990234 0.673828 0 1.64063 0 2.83594V28.5059C0 29.7012 0.990234 30.6738 2.21484 30.6738H27.7793C29.0039 30.6738 30 29.7012 30 28.5117V2.83594C30 1.64063 29.0039 0.673828 27.7793 0.673828ZM8.90039 26.2383H4.44727V11.918H8.90039V26.2383ZM6.67383 9.9668C5.24414 9.9668 4.08984 8.8125 4.08984 7.38867C4.08984 5.96484 5.24414 4.81055 6.67383 4.81055C8.09766 4.81055 9.25195 5.96484 9.25195 7.38867C9.25195 8.80664 8.09766 9.9668 6.67383 9.9668ZM25.5645 26.2383H21.1172V19.2773C21.1172 17.6191 21.0879 15.4805 18.8027 15.4805C16.4883 15.4805 16.1367 17.291 16.1367 19.1602V26.2383H11.6953V11.918H15.9609V13.875H16.0195C16.6113 12.75 18.0645 11.5605 20.2266 11.5605C24.7324 11.5605 25.5645 14.5254 25.5645 18.3809V26.2383Z" fill="#1A1C1F" />
                                        </svg>
                                    </a>
                                </>
                            )}
                        </div> */}
                    </div>

                    {/* About Section */}
                    {/* <div className="px-4 mt-[140px] py-8 rounded-xl border border-gray-900">
                        <div className="flex-col lg:flex justify-between">
                            <div>
                                <h2 className="text-sm lg:text-lg text-gray-980">About</h2>
                            </div>
                            <div>
                                <p className="text-sm text-black-980">
                                    {templateData.sections[0].customContent?.about}
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Skills Section */}
                    {skillsSection?.customContent?.skills && (
                        <div className="flex justify-center py-8">
                            <div className="flex w-[100%] lg:w-[80%] py-8 rounded-2xl bg-black-300 flex-col items-center justify-center">
                                <h2 className="text-sm lg:text-xl mb-2 text-white">Skills</h2>
                                <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-4xl mx-auto">
                                    {skillsSection.customContent.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl border text-white border-gray-600 px-4 py-2 text-center"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Projects Section */}
                    {projectsSection?.customContent?.projects && projectsSection.customContent.projects.length > 0 && (
                        <div className="mt-[10px] py-8 rounded-xl">
                            <div className="flex-col justify-between">
                                <h2 className="text-sm lg:text-xl text-center text-white mb-4 lg:mb-6">Projects</h2>
                                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:w-[100%] lg:px-4">
                                    {projectsSection.customContent.projects.map((project, index) => (
                                        <>
                                            <div key={index} className="mb-8 lg:mb-4 flex flex-col bg-black-300 h-[auto] py-4 px-4 
                                              rounded-2xl">
                                                {/* Project Images Gallery */}
                                                {project.images && (
                                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-2">
                                                        {Object.entries(project.images).map(([key, image]) => {
                                                            if (!image) return null;
                                                            return (
                                                                <div key={key} className="relative h-[200px] px-2 py-2 rounded-lg overflow-hidden">
                                                                    <img
                                                                        src={image}
                                                                        alt={`Project ${project.projectName} ${key}`}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                                <div className="flex flex-col justify-end mt-3">
                                                    <div className="">
                                                        <h3 className="font-semibold text-sm lg:text-lg text-white">{project.projectName}</h3>
                                                        <p className="text-sm font-light text-white">{project.about}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Certificates and Work History Section */}
                    <div className="flex-col lg:flex lg:px-6 lg:flex-row justify-between mt-10">
                        {/* Certificates Section */}
                        {certificatesSection?.customContent?.certificates && certificatesSection.customContent.certificates.length > 0 && (
                            <div className="certificates w-[100%] lg:w-[30%] px-4 py-8 rounded-xl ">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-sm lg:text-xl -mt-[60px] lg:mt-0 text-white">Certificates</h2>
                                    {certificatesSection.customContent.certificates.map((certificate, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="border border-gray-600 rounded-full px-2">
                                                <svg width="14" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.16602 9.49284C1.16602 11.6173 14.0008 17.4095 16.9994 17.4095C19.9979 17.4095 32.8327 11.6173 32.8327 9.49284C32.8327 7.36836 19.9979 1.57617 16.9994 1.57617C14.0008 1.57617 1.16602 7.36835 1.16602 9.49284Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7.5 14.2432L9.48366 23.4254C9.61953 24.0544 9.93317 24.642 10.4562 25.0168C13.9784 27.5408 20.0216 27.5408 23.5438 25.0168C24.0668 24.642 24.3805 24.0544 24.5163 23.4254L26.5 14.2432" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M31.457 11.8682C31.457 11.3159 31.0093 10.8682 30.457 10.8682C29.9047 10.8682 29.457 11.3159 29.457 11.8682H31.457ZM28.1951 28.1186L29.168 28.3497L28.1951 28.1186ZM32.7189 28.1186L33.6919 27.8875L32.7189 28.1186ZM29.457 11.8682V22.9629H31.457V11.8682H29.457ZM29.168 28.3497C29.4025 27.3628 29.8048 26.4651 30.2297 25.6336C30.6248 24.8603 31.1202 24.0061 31.3871 23.3302L29.5269 22.5956C29.3059 23.1553 28.9318 23.7782 28.4487 24.7235C27.9954 25.6106 27.5107 26.6729 27.2222 27.8875L29.168 28.3497ZM33.6919 27.8875C33.4033 26.6729 32.9186 25.6106 32.4653 24.7235C31.9823 23.7782 31.6082 23.1553 31.3871 22.5956L29.5269 23.3302C29.7939 24.0061 30.2892 24.8603 30.6844 25.6336C31.1093 26.4651 31.5116 27.3628 31.746 28.3497L33.6919 27.8875ZM30.9565 29.0765H29.9576V31.0765H30.9565V29.0765ZM27.2222 27.8875C27.0279 28.7052 26.9364 29.6984 27.6345 30.3986C27.9629 30.728 28.3721 30.887 28.7463 30.97C29.1194 31.0527 29.5345 31.0765 29.9576 31.0765V29.0765C29.5909 29.0765 29.3436 29.0539 29.1793 29.0174C29.016 28.9812 29.0127 28.9483 29.0508 28.9865C29.1048 29.0406 29.0926 29.0818 29.085 29.0007C29.0753 28.8974 29.0855 28.6972 29.168 28.3497L27.2222 27.8875ZM31.746 28.3497C31.8286 28.6972 31.8387 28.8974 31.8291 29.0007C31.8215 29.0818 31.8093 29.0406 31.8633 28.9865C31.9014 28.9483 31.8981 28.9812 31.7348 29.0174C31.5704 29.0539 31.3232 29.0765 30.9565 29.0765V31.0765C31.3796 31.0765 31.7947 31.0527 32.1678 30.97C32.5419 30.887 32.9512 30.728 33.2796 30.3986C33.9777 29.6984 33.8861 28.7052 33.6919 27.8875L31.746 28.3497Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-white text-sm lg:text-sm mb-[2px]">{certificate.name}</h2>
                                                <p className="text-sm text-gray-500 mb-[2px]">{certificate.issuedBy}</p>
                                                <p className="text-sm text-gray-500">{certificate.yearIssued}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {educationSection?.customContent?.education && educationSection.customContent.education.length > 0 && (
                                    <div className="mt-8">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-sm lg:text-xl text-white">Education</h2>
                                            {educationSection.customContent.education.map((education, index) => (
                                                <div key={index} className="flex gap-3 items-center">
                                                    <div className="border border-gray-600 rounded-full px-2">
                                                        <svg width="14" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.16602 9.49284C1.16602 11.6173 14.0008 17.4095 16.9994 17.4095C19.9979 17.4095 32.8327 11.6173 32.8327 9.49284C32.8327 7.36836 19.9979 1.57617 16.9994 1.57617C14.0008 1.57617 1.16602 7.36835 1.16602 9.49284Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 14.2432L9.48366 23.4254C9.61953 24.0544 9.93317 24.642 10.4562 25.0168C13.9784 27.5408 20.0216 27.5408 23.5438 25.0168C24.0668 24.642 24.3805 24.0544 24.5163 23.4254L26.5 14.2432" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M31.457 11.8682C31.457 11.3159 31.0093 10.8682 30.457 10.8682C29.9047 10.8682 29.457 11.3159 29.457 11.8682H31.457ZM28.1951 28.1186L29.168 28.3497L28.1951 28.1186ZM32.7189 28.1186L33.6919 27.8875L32.7189 28.1186ZM29.457 11.8682V22.9629H31.457V11.8682H29.457ZM29.168 28.3497C29.4025 27.3628 29.8048 26.4651 30.2297 25.6336C30.6248 24.8603 31.1202 24.0061 31.3871 23.3302L29.5269 22.5956C29.3059 23.1553 28.9318 23.7782 28.4487 24.7235C27.9954 25.6106 27.5107 26.6729 27.2222 27.8875L29.168 28.3497ZM33.6919 27.8875C33.4033 26.6729 32.9186 25.6106 32.4653 24.7235C31.9823 23.7782 31.6082 23.1553 31.3871 22.5956L29.5269 23.3302C29.7939 24.0061 30.2892 24.8603 30.6844 25.6336C31.1093 26.4651 31.5116 27.3628 31.746 28.3497L33.6919 27.8875ZM30.9565 29.0765H29.9576V31.0765H30.9565V29.0765ZM27.2222 27.8875C27.0279 28.7052 26.9364 29.6984 27.6345 30.3986C27.9629 30.728 28.3721 30.887 28.7463 30.97C29.1194 31.0527 29.5345 31.0765 29.9576 31.0765V29.0765C29.5909 29.0765 29.3436 29.0539 29.1793 29.0174C29.016 28.9812 29.0127 28.9483 29.0508 28.9865C29.1048 29.0406 29.0926 29.0818 29.085 29.0007C29.0753 28.8974 29.0855 28.6972 29.168 28.3497L27.2222 27.8875ZM31.746 28.3497C31.8286 28.6972 31.8387 28.8974 31.8291 29.0007C31.8215 29.0818 31.8093 29.0406 31.8633 28.9865C31.9014 28.9483 31.8981 28.9812 31.7348 29.0174C31.5704 29.0539 31.3232 29.0765 30.9565 29.0765V31.0765C31.3796 31.0765 31.7947 31.0527 32.1678 30.97C32.5419 30.887 32.9512 30.728 33.2796 30.3986C33.9777 29.6984 33.8861 28.7052 33.6919 27.8875L31.746 28.3497Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 className="font-semibold text-sm text-white lg:text-sm mb-[2px]">{education.degree}</h2>
                                                        <p className="text-sm text-gray-500">
                                                            {education.school} · {education.startYear} - {education.isStudent ? "Student" : education.endYear}
                                                        </p>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}


                        {/* Work History Section */}
                        <div className="workHistory w-[100%] lg:w-[65%] ">
                            {/* Work History Section */}
                            {workSection?.customContent?.work && workSection.customContent.work.length > 0 && (
                                <div className="mb-8 bg-black-300  px-4 py-8 rounded-xl">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-sm lg:text-xl text-white">Experience</h2>
                                        {workSection.customContent.work.map((work, index) => (
                                            <div key={index} className="flex justify-between items-center">
                                                <div>
                                                    <h2 className="font-semibold text-sm text-white lg:text-xl mb-2">{work.role}</h2>
                                                    <p className="text-sm text-gray-500 mb-3">
                                                        {work.company} · {work.startDate} - {work.isRoleActive ? "Present" : work.endDate}
                                                    </p>
                                                    <p className="text-sm text-gray-500 leading-7 text-justify">
                                                        {work.description}
                                                    </p>
                                                </div>
                                                <div className="border border-gray-600 rounded-full hidden px-2">
                                                    <svg width="10" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9593 25.0313V0.31543H13.323V25.0313H11.9593ZM0.283203 13.3552V11.9916H24.9991V13.3552H0.283203Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <div className="flex flex-col">
                            <div className="flex justify-center">
                                <img src={templateData?.sections[0]?.customContent?.profileImage || Elipse} className="rounded-full w-[50px] h-[50px] object-cover" alt="Ellipse" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl mb-3">Let’s work together</h2>
                            </div>
                            <div className="social links flex justify-center gap-2 items-center">
                                {socialLinks.x && (
                                    <a href={socialLinks.x.startsWith('http') ? socialLinks.x : `https://twitter.com/${socialLinks.x}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white px-4 py-4 rounded-full hover:bg-gray-100 transition-colors">
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" fill="#1DA1F2" />
                                        </svg>
                                    </a>
                                )}

                                {/* WhatsApp */}
                                {socialLinks.whatsapp && (
                                    <a href={socialLinks.whatsapp.startsWith('http') ? socialLinks.whatsapp : `https://wa.me/${socialLinks.whatsapp.replace(/[^\d]/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white px-4 py-4 rounded-full hover:bg-gray-100 transition-colors">
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382C17.185 14.382 16.902 14.47 16.666 14.633C15.931 15.144 14.715 15.691 13.492 15.828C13.309 15.842 13.125 15.854 12.945 15.854C11.882 15.854 10.841 15.553 9.964 14.987C7.522 13.383 6.4 10.353 6.4 7.64C6.4 6.077 7.125 4.64 8.385 3.64C8.752 3.341 9.226 3.2 9.704 3.2C9.948 3.2 10.19 3.243 10.42 3.328L12.662 4.189C13.174 4.377 13.52 4.83 13.52 5.371C13.52 5.527 13.488 5.682 13.425 5.826L12.543 7.925C12.462 8.108 12.432 8.31 12.458 8.508C12.484 8.706 12.564 8.892 12.688 9.045C13.109 9.571 13.701 10.347 14.215 10.847C14.585 11.205 15.052 11.453 15.561 11.563L17.148 11.891C17.294 11.923 17.446 11.918 17.59 11.876C17.734 11.834 17.865 11.757 17.971 11.651L19.371 10.252C19.541 10.083 19.756 9.966 19.991 9.915C20.226 9.864 20.47 9.881 20.695 9.963L22.513 10.677C22.803 10.784 23.035 10.999 23.16 11.275C23.285 11.551 23.292 11.865 23.18 12.147L21.696 16.173C21.347 17.083 20.677 17.832 19.808 18.275C18.939 18.718 17.933 18.825 16.985 18.576C15.086 18.053 12.938 16.714 11.522 15.148C10.106 13.582 9.087 11.861 8.551 10.199C8.336 9.499 8.44 8.74 8.836 8.125C9.232 7.51 9.883 7.104 10.618 7.01C11.353 6.916 12.101 7.144 12.662 7.64" fill="#25D366" />
                                            <path d="M11.522 15.148C13.076 16.712 15.084 17.991 16.985 18.576C17.933 18.825 18.939 18.718 19.808 18.275C20.677 17.832 21.347 17.083 21.696 16.173L23.18 12.147C23.292 11.865 23.285 11.551 23.16 11.275C23.035 10.999 22.803 10.784 22.513 10.677L20.695 9.963C20.47 9.881 20.226 9.864 19.991 9.915C19.756 9.966 19.541 10.083 19.371 10.252L17.971 11.651C17.865 11.757 17.734 11.834 17.59 11.876C17.446 11.918 17.294 11.923 17.148 11.891L15.561 11.563C15.052 11.453 14.585 11.205 14.215 10.847C13.701 10.347 13.109 9.571 12.688 9.045C12.564 8.892 12.484 8.706 12.458 8.508C12.432 8.31 12.462 8.108 12.543 7.925L13.425 5.826C13.488 5.682 13.52 5.527 13.52 5.371C13.52 4.83 13.174 4.377 12.662 4.189L10.42 3.328C10.19 3.243 9.948 3.2 9.704 3.2C9.226 3.2 8.752 3.341 8.385 3.64C7.125 4.64 6.4 6.077 6.4 7.64C6.4 10.353 7.522 13.383 9.964 14.987C10.841 15.553 11.882 15.854 12.945 15.854C13.125 15.854 13.309 15.842 13.492 15.828C14.715 15.691 15.931 15.144 16.666 14.633C16.902 14.47 17.185 14.382 17.472 14.382" fill="#25D366" />
                                        </svg>
                                    </a>
                                )}

                                {/* Telegram */}
                                {socialLinks.telegram && (
                                    <a href={socialLinks.telegram.startsWith('http') ? socialLinks.telegram : `https://t.me/${socialLinks.telegram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white px-4 py-4 rounded-full hover:bg-gray-100 transition-colors">
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="#0088CC" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                // Render "Template not found" message if no template data
                <p className="text-gray-400">Template not found.</p>
            )}
        </div>
    );
};

export default Creative;