type ModalProps = {
    isVisible: boolean
    onClose: () => void
    children:React.ReactNode
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
    if (!isVisible) return null

    const handleClose = (e:any) => {
        if(e.target.id === "wrapper") onClose()
    }
    return (
        <div 
         id="wrapper"
        className="modal fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center mt-20"
        onClick={handleClose}
        >
            <div className="w-[400px] flex flex-col">
                {/* <button
                    className="text-red-600 text-xl place-self-end"
                    onClick={() => onClose()}
                >
                    X
                </button> */}
                <div className="bg-white p-2 rounded-3xl">{children}</div>
            </div>
        </div>
    )
}

export default Modal