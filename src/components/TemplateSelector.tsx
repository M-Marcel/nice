import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import { useEffect } from "react"
import { getTemplates } from "../slices/template/templateSlice"
import LoaderIcon from "../assets/loader.svg"
import { toast } from "react-toastify"
import Button from "./Button"

const TemplateSelector = () => {
    const dispatch = useAppDispatch()
    const { templates, isSuccess, isLoading, isError, message } = useAppSelector((state) => state.template)
    const navigate = useNavigate()

    useEffect(() => {
        if (templates.length === 0) {
            console.log("Fetching templates");
            dispatch(getTemplates({ page: 1, pageSize: 5 }));
        }

    }, [dispatch, templates.length]);

    useEffect(() => {
        if (isSuccess) {
            toast.success("templated fetched");
        }
    }, [isSuccess, dispatch]);


    return (
        <>
            {/* <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Select a Template</h2>
                <ul>
                    {templates.map((template) => (
                        <li key={template._id} className="mb-2">
                            <button
                                onClick={() => navigate(`/portfolio/${template._id}`)}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                {template.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div> */}
            <div className="flex justify-center items-center text-center">
                <h2 className="text-3xl">Select a template to start with</h2>
            </div>
            <div className="mt-2 ">
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
                            templates.map((template) => (
                                <div key={template._id}>
                                    <div className="grid grid-cols-2">
                                        <div key={template._id} className="mb-2">
                                            <div
                                                onClick={() => navigate(`/portfolio/${template._id}`)}
                                                className="px-4 py-2 rounded"
                                            >
                                                <div className="w-full h-[30vh] border border-gray-600 rounded-lg"></div>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h2>{template.name}</h2>
                                                        <p className="text-gray-500">Ideal for creatives</p>
                                                    </div>
                                                    <div>
                                                        <Button className="">View</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
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