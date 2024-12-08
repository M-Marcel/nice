import Close from '../assets/svg/Close'

type ModalProps = {
    isVisible: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
    if (!isVisible) return null


    // const handleClose = (e: any) => {
    //     if (e.target.id === "wrapper") onClose()
    // }

    return (
        <div
            id="wrapper"
            className="modal fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center"

        >
            <div className="w-[400px] flex flex-col">

                <div className="bg-white p-2 rounded-3xl overflow-y-auto max-h-screen">
                    <div className="flex flex-col py-2 px-2">
                        <button
                            className="text-red-600 text-sm  place-self-end"
                            onClick={() => onClose()}
                        >
                            <Close />
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal