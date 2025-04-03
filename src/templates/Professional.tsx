import { Portfolio } from "../dataTypes";
import templateFrame from "../assets/templateFrame.png"
import Elipse from "../assets/Ellipse2.png"


interface TestTemplateProps {
    templateId: string;
    templateData: Portfolio // Replace `any` with a more specific type if possible
}

const Professional: React.FC<TestTemplateProps> = ({ templateId, templateData }) => {
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


    return (
        <div>
            {templateData ? (
                <div className="">
                    {/* Render Template Frame */}

                    {templateData.sections.length > 0 && (
                        <>
                            <div className="relative ">
                                <div className="w-full h-auto lg:h-[250px]">
                                    <img src={templateData?.sections[0]?.customContent?.coverImg || templateFrame} alt="frame" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-[90px] left-6 lg:left-8">
                                    <div className="w-[100px] h-[100px] rounded-full">
                                        <img src={templateData?.sections[0]?.customContent?.profileImage || Elipse} className="rounded-full w-full h-full object-cover" alt="Ellipse" />
                                    </div>
                                    <p className="font-semibold">{templateData?.sections[0]?.customContent?.name}</p>
                                    <p className="text-gray-500">{templateData?.sections[0]?.customContent?.email}</p>
                                </div>
                                <div className="flex items-center gap-2 absolute right-[170px] lg:right-12 -bottom-[155px] lg:-bottom-[80px]">
                                    <p className="rounded-2xl border border-gray-600 px-4 py-2 text-xs">{templateData?.sections[0]?.customContent?.location}</p>
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
                                </div>
                            </div>

                            <div className="px-4 mx-6 lg:mx-8 mt-[180px] lg:mt-[140px] py-8 rounded-xl border lg:border border-gray-900">
                                <div className="flex-col lg:flex lg:flex-row justify-between">
                                    <div className=" w-[100%] lg:w-[30%]">
                                        <h2 className="text-sm lg:text-xl mb-3 text-gray-980">About</h2>
                                    </div>
                                    <div className="w-[100%] lg:w-[35%] ">
                                        <p className="text-sm text-black-980">
                                            {templateData.sections[0].customContent?.about}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {skillsSection?.customContent?.skills && (
                                <div className="px-4 mt-2 py-8">
                                    <div className="flex flex-col items-center justify-center">
                                        <h2 className="text-sm lg:text-xl text-gray-980">Skills</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                                            {skillsSection.customContent.skills.map((skill, index) => (
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
                            {projectsSection?.customContent?.projects && (
                                <div className="mx-6 lg:mx-8 px-4 mt-[10px] py-8 rounded-xl border border-gray-900">
                                    <div className="flex-col lg:flex lg:flex-row justify-between">
                                        <h2 className="text-sm lg:text-xl text-gray-980 mb-2 lg:mb-0">Projects</h2>
                                        <div className="mt-4 lg:w-[60%] px-4">
                                            {projectsSection.customContent.projects.map((project, index) => (
                                                <div key={index} className="mb-8 lg:mb-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="mb-2">
                                                            <h3 className="font-semibold text-sm lg:text-lg text-black-980">
                                                                {project.projectName}
                                                            </h3>
                                                            <p className="text-sm font-light text-black-980">
                                                                {project.about}
                                                            </p>
                                                        </div>
                                                        <div className="border border-gray-600 rounded-full px-2">
                                                            <svg width="10" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.9593 25.0313V0.31543H13.323V25.0313H11.9593ZM0.283203 13.3552V11.9916H24.9991V13.3552H0.283203Z" fill="#939393" />
                                                            </svg>
                                                        </div>
                                                    </div>

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

                                                    <hr className="mt-4 mb-4 border border-gray-600" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Certificates and Work History Section */}
                            <div className="flex-col lg:flex lg:flex-row mx-6 lg:mx-8 justify-between mt-10">
                                {/* Certificates Section */}
                                {certificatesSection?.customContent?.certificates && (
                                    <div className="certificates mb-6 lg:mb-0 w-[100%] lg:w-[30%] px-4 py-8 rounded-xl">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-sm lg:text-xl text-gray-980">Certificates</h2>
                                            {certificatesSection.customContent.certificates.map((certificate, index) => (
                                                <div key={index} className="flex items-center gap-4">
                                                    <div className="border border-gray-600 rounded-full px-2">
                                                        <svg width="14" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.16602 9.49284C1.16602 11.6173 14.0008 17.4095 16.9994 17.4095C19.9979 17.4095 32.8327 11.6173 32.8327 9.49284C32.8327 7.36836 19.9979 1.57617 16.9994 1.57617C14.0008 1.57617 1.16602 7.36835 1.16602 9.49284Z" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 14.2432L9.48366 23.4254C9.61953 24.0544 9.93317 24.642 10.4562 25.0168C13.9784 27.5408 20.0216 27.5408 23.5438 25.0168C24.0668 24.642 24.3805 24.0544 24.5163 23.4254L26.5 14.2432" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M31.457 11.8682C31.457 11.3159 31.0093 10.8682 30.457 10.8682C29.9047 10.8682 29.457 11.3159 29.457 11.8682H31.457ZM28.1951 28.1186L29.168 28.3497L28.1951 28.1186ZM32.7189 28.1186L33.6919 27.8875L32.7189 28.1186ZM29.457 11.8682V22.9629H31.457V11.8682H29.457ZM29.168 28.3497C29.4025 27.3628 29.8048 26.4651 30.2297 25.6336C30.6248 24.8603 31.1202 24.0061 31.3871 23.3302L29.5269 22.5956C29.3059 23.1553 28.9318 23.7782 28.4487 24.7235C27.9954 25.6106 27.5107 26.6729 27.2222 27.8875L29.168 28.3497ZM33.6919 27.8875C33.4033 26.6729 32.9186 25.6106 32.4653 24.7235C31.9823 23.7782 31.6082 23.1553 31.3871 22.5956L29.5269 23.3302C29.7939 24.0061 30.2892 24.8603 30.6844 25.6336C31.1093 26.4651 31.5116 27.3628 31.746 28.3497L33.6919 27.8875ZM30.9565 29.0765H29.9576V31.0765H30.9565V29.0765ZM27.2222 27.8875C27.0279 28.7052 26.9364 29.6984 27.6345 30.3986C27.9629 30.728 28.3721 30.887 28.7463 30.97C29.1194 31.0527 29.5345 31.0765 29.9576 31.0765V29.0765C29.5909 29.0765 29.3436 29.0539 29.1793 29.0174C29.016 28.9812 29.0127 28.9483 29.0508 28.9865C29.1048 29.0406 29.0926 29.0818 29.085 29.0007C29.0753 28.8974 29.0855 28.6972 29.168 28.3497L27.2222 27.8875ZM31.746 28.3497C31.8286 28.6972 31.8387 28.8974 31.8291 29.0007C31.8215 29.0818 31.8093 29.0406 31.8633 28.9865C31.9014 28.9483 31.8981 28.9812 31.7348 29.0174C31.5704 29.0539 31.3232 29.0765 30.9565 29.0765V31.0765C31.3796 31.0765 31.7947 31.0527 32.1678 30.97C32.5419 30.887 32.9512 30.728 33.2796 30.3986C33.9777 29.6984 33.8861 28.7052 33.6919 27.8875L31.746 28.3497Z" fill="#141B34" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h2 className="font-semibold text-sm lg:text-lg mb-[2px]">{certificate.name}</h2>
                                                        <p className="text-sm text-gray-500 mb-[2px]">{certificate.issuedBy}</p>
                                                        <p className="text-sm text-gray-500">{certificate.yearIssued}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Work History Section */}
                                <div className="workHistory w-[100%] lg:w-[65%] px-4 py-8 rounded-xl border border-gray-900">
                                    {/* Work History Section */}
                                    {workSection?.customContent?.work && (
                                        <div className="mb-8">
                                            <div className="flex flex-col gap-4">
                                                <h2 className="text-sm lg:text-xl text-gray-980">Work History</h2>
                                                {workSection.customContent.work.map((work, index) => (
                                                    <div key={index} className="flex justify-between items-center">
                                                        <div>
                                                            <h2 className="font-semibold text-sm lg:text-lg mb-1">{work.role}</h2>
                                                            <p className="text-sm text-gray-500 mb-3">
                                                                {work.company} · {work.startDate} - {work.isRoleActive ? "Present" : work.endDate}
                                                            </p>
                                                            <p className="text-sm mt-4 text-gray-500 leading-7 text-justify">
                                                                {work.description}
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
                                    {educationSection?.customContent?.education && (
                                        <div>
                                            <div className="flex flex-col gap-4">
                                                <h2 className="text-sm lg:text-xl text-gray-980">Education</h2>
                                                {educationSection.customContent.education.map((education, index) => (
                                                    <div key={index} className="flex justify-between items-center">
                                                        <div>
                                                            <h2 className="font-semibold text-sm lg:text-lg mb-[2px]">{education.degree}</h2>
                                                            <p className="text-sm text-gray-500">
                                                                {education.school} · {education.startYear} - {education.isStudent ? "Student" : education.endYear}
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
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <div className="flex flex-col">
                                    <div className="flex justify-center mb-2">
                                         <img src={templateData?.sections[0]?.customContent?.profileImage || Elipse} className="rounded-full w-[50px] h-[50px] object-cover" alt="Ellipse" />
                                    </div>
                                    <div>
                                        <h2 className="text-black-500 text-xl mb-3">Let’s work together</h2>
                                    </div>
                                    <div className="social links flex justify-center gap-2 items-center">
                                        <span className="bg-white px-4 py-4 rounded-full">
                                            <svg width="25" height="25" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M41.5 0.381836H2.5C2.06902 0.381836 1.6557 0.553041 1.35095 0.857788C1.0462 1.16253 0.875 1.57586 0.875 2.00684V29.6318C0.875 30.4938 1.21741 31.3204 1.8269 31.9299C2.4364 32.5394 3.26305 32.8818 4.125 32.8818H39.875C40.737 32.8818 41.5636 32.5394 42.1731 31.9299C42.7826 31.3204 43.125 30.4938 43.125 29.6318V2.00684C43.125 1.57586 42.9538 1.16253 42.649 0.857788C42.3443 0.553041 41.931 0.381836 41.5 0.381836ZM37.3217 3.63184L22 17.6779L6.67828 3.63184H37.3217ZM39.875 29.6318H4.125V5.70168L20.9011 21.0803C21.2009 21.3555 21.593 21.5082 22 21.5082C22.407 21.5082 22.7991 21.3555 23.0989 21.0803L39.875 5.70168V29.6318Z" fill="#343330" />
                                            </svg>
                                        </span>
                                        <span className="bg-white px-4 py-4 rounded-full">
                                            <svg width="25" height="25" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M34.1029 25.0525L27.6029 21.8025C27.347 21.675 27.0621 21.6172 26.7768 21.635C26.4914 21.6529 26.2159 21.7457 25.9779 21.904L22.994 23.8946C21.6242 23.1416 20.497 22.0144 19.744 20.6446L21.7346 17.6607C21.893 17.4227 21.9858 17.1472 22.0036 16.8619C22.0214 16.5766 21.9637 16.2916 21.8362 16.0357L18.5862 9.53574C18.4515 9.2637 18.2432 9.03483 17.9851 8.87507C17.727 8.71531 17.4293 8.63105 17.1257 8.63184C14.9708 8.63184 12.9042 9.48786 11.3805 11.0116C9.85673 12.5353 9.0007 14.602 9.0007 16.7568C9.00608 21.4959 10.8911 26.0394 14.2421 29.3904C17.5932 32.7415 22.1366 34.6265 26.8757 34.6318C27.9427 34.6318 28.9992 34.4217 29.985 34.0134C30.9708 33.605 31.8665 33.0066 32.6209 32.2521C33.3754 31.4976 33.9739 30.6019 34.3822 29.6161C34.7905 28.6304 35.0007 27.5738 35.0007 26.5068C35.0009 26.2049 34.917 25.909 34.7585 25.6521C34.5999 25.3952 34.3729 25.1876 34.1029 25.0525ZM26.8757 31.3818C22.9982 31.3775 19.2808 29.8353 16.539 27.0935C13.7972 24.3517 12.255 20.6343 12.2507 16.7568C12.2504 15.6297 12.6406 14.5373 13.355 13.6656C14.0694 12.7938 15.0638 12.1965 16.169 11.9753L18.5009 16.6471L16.5163 19.6006C16.368 19.823 16.2769 20.0786 16.251 20.3447C16.2252 20.6108 16.2654 20.8792 16.368 21.1261C17.5307 23.8893 19.729 26.0876 22.4923 27.2503C22.7399 27.3575 23.0103 27.4014 23.2791 27.378C23.5479 27.3546 23.8066 27.2646 24.032 27.1162L26.9996 25.1378L31.6715 27.4697C31.4486 28.5761 30.8486 29.5709 29.974 30.2844C29.0995 30.9979 28.0044 31.3857 26.8757 31.3818ZM22.0007 0.506836C18.3535 0.506041 14.7683 1.44951 11.5939 3.24543C8.41954 5.04134 5.76421 7.6285 3.88637 10.7551C2.00853 13.8817 0.972152 17.4412 0.878118 21.0872C0.784084 24.7331 1.63559 28.3413 3.34977 31.5606L1.0443 38.477C0.85333 39.0496 0.825616 39.6641 0.964263 40.2516C1.10291 40.8391 1.40244 41.3764 1.82928 41.8033C2.25612 42.2301 2.7934 42.5296 3.3809 42.6683C3.9684 42.8069 4.58291 42.7792 5.15555 42.5882L12.072 40.2828C14.9051 41.7897 18.0443 42.6313 21.2512 42.7438C24.4582 42.8564 27.6487 42.2368 30.5804 40.9322C33.5122 39.6276 36.1083 37.6723 38.1715 35.2146C40.2348 32.7569 41.711 29.8614 42.4881 26.748C43.2653 23.6346 43.323 20.3851 42.6568 17.246C41.9905 14.107 40.618 11.161 38.6432 8.63167C36.6684 6.10231 34.1434 4.05608 31.2598 2.64829C28.3761 1.2405 25.2096 0.508153 22.0007 0.506836ZM22.0007 39.5068C18.8583 39.509 15.7711 38.6815 13.051 37.1079C12.8519 36.9924 12.6304 36.9206 12.4014 36.8971C12.1724 36.8737 11.941 36.8991 11.7226 36.9718L4.12571 39.5068L6.65867 31.91C6.73169 31.6917 6.75749 31.4604 6.73438 31.2313C6.71127 31.0023 6.63977 30.7808 6.52461 30.5815C4.55424 27.1749 3.76314 23.2133 4.27404 19.3113C4.78495 15.4092 6.56929 11.7848 9.35026 9.00029C12.1312 6.2158 15.7534 4.42688 19.6548 3.91105C23.5562 3.39522 27.5188 4.18132 30.9279 6.14738C34.337 8.11345 37.0019 11.1496 38.5094 14.7848C40.0168 18.42 40.2825 22.4511 39.2652 26.2527C38.2478 30.0543 36.0044 33.4139 32.8828 35.8104C29.7612 38.2069 25.9361 39.5062 22.0007 39.5068Z" fill="#343330" />
                                            </svg>
                                        </span>
                                        <span className="bg-white px-4 py-4 rounded-full">
                                            <svg width="25" height="25" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M45.4906 0.951795C45.2388 0.734387 44.9325 0.589796 44.6046 0.5336C44.2768 0.477404 43.9398 0.511733 43.63 0.632889L2.46467 16.7427C1.88126 16.9696 1.38734 17.3798 1.05726 17.9117C0.727186 18.4436 0.57882 19.0683 0.6345 19.6917C0.69018 20.3152 0.946893 20.9037 1.36599 21.3687C1.78509 21.8336 2.34389 22.1499 2.95826 22.2698L13.6244 24.364V36.257C13.6223 36.9048 13.8148 37.5382 14.1769 38.0754C14.5391 38.6125 15.0543 39.0284 15.6556 39.2693C16.256 39.5145 16.9163 39.5733 17.5506 39.4382C18.185 39.3031 18.764 38.9802 19.2123 38.5116L24.3554 33.1776L32.515 40.3195C33.1037 40.8416 33.8629 41.1306 34.6498 41.132C34.9947 41.1317 35.3373 41.0775 35.6655 40.9715C36.2016 40.8014 36.6838 40.4937 37.0641 40.0793C37.4443 39.6648 37.7094 39.1579 37.8328 38.6091L46.0776 2.74133C46.1514 2.41785 46.1357 2.0804 46.0323 1.76515C45.9289 1.4499 45.7416 1.16874 45.4906 0.951795ZM33.0715 8.26429L14.8736 21.2968L4.79857 19.3204L33.0715 8.26429ZM16.8744 36.257V26.6126L21.9098 31.0285L16.8744 36.257ZM34.6539 37.882L17.8595 23.1554L42.0314 5.83086L34.6539 37.882Z" fill="#343330" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
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

export default Professional;