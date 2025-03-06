import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import { useEffect } from "react"
import { getTemplates } from "../slices/template/templateSlice"
import LoaderIcon from "../assets/loader.svg"
import { toast } from "react-toastify"
import Button from "./Button"
import { createPortfolio } from "../slices/portfolio/portfolioSlice"


const TemplateSelector = ({setActiveModal}:any) => {
    const dispatch = useAppDispatch()
    const { templates, isSuccess, isLoading, isError, message } = useAppSelector((state) => state.template)
    const navigate = useNavigate()

    useEffect(() => {
        if (templates.length === 0) {
            dispatch(getTemplates({ page: 1, pageSize: 5 }));
        }

    }, [dispatch, templates.length]);

    useEffect(() => {
        if (isSuccess) {
            toast.success("templates retrieved success");
        }
    }, [isSuccess, dispatch]);


    const handleCreatePortfolio = async(id:string) => {
        try{
            const portfolioData = {
                referenceTemplate: id
            }
            const response = await dispatch(createPortfolio(portfolioData))

            if(response){
                const payload = response?.payload as any
                console.log("port resp", response)
                navigate(`/portfolio/${payload.portfolio?.data._id}`)
            }

           
        }catch(error:any){
           toast.error('failed')     
        }
    }


    return (
        <>
            <div className="flex relative justify-center items-center text-center">
                <Button 
                onClick={() => setActiveModal("createProjectModal")}
                className="absolute left-5"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z" fill="#1D1B20" />
                    </svg>

                </Button>
                <h2 className="text-3xl">Select a template to start with</h2>
            </div>
            <div className="mt-6 mb-6">
                {isLoading ? (
                    <div className="flex items-center justify-center gap-6 h-[60vh]">
                        <img
                            src={LoaderIcon}
                            alt="loader"
                            width={24}
                            height={24}
                            className="animate-spin"
                        />
                        Loading ...
                    </div>
                ) : isError ? (
                    <p className="text-red-500">{message}</p>
                ) : (
                    <>
                        {templates && templates.length > 0 ? (
                            <div className="grid grid-cols-3 gap-4 w-full">
                                {templates.map((template) => (
                                    <div key={template._id} className="mb-2">
                                        <div
                                            onClick={() => handleCreatePortfolio(template._id)}
                                            className="px-4 py-2 cursor-pointer rounded-xl hover:scale-105 transform
                                             transition-transform duration-300"
                                        >
                                            <div className="w-full h-[25vh] border border-gray-600 rounded-lg">
                                            {template.name === "Test Template" && (
                                                    <img
                                                        src="https://plus.unsplash.com/premium_photo-1736165168647-e216dcd23720?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="frame"
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <div>
                                                    <h2 className="font-semibold text-sm">{template.name}</h2>
                                                    <p className="text-gray-500 text-xs">Ideal for creatives</p>
                                                </div>
                                                <div>
                                                    <Button
                                                        className="px-2 py-1 text-sm border border-gray-600 rounded-xl lg:flex bg-white 
                                                     shadow-lg text-black-500 hover:scale-105 transform
                                             transition-transform duration-300"
                                                    >
                                                        View
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">No templates available. Add a new request!</p>
                        )}
                    </>
                )}
            </div>


        </>

    );
}


export default TemplateSelector