import Face from '../../assets/face.png'

const NewSignUps = () => {
    return (
        <div className="flex justify-between items-center mt-4 mb-8">
            <div className="flex items-center gap-2">
                <img src={Face} alt="face" width={30} height={30} />
                <div className="flex flex-col">
                    <p className="text-xs text-black-930">John Smith</p>
                    <p className="text-xs text-gray-950">johnny@mail.com</p>
                </div>
            </div>
            <div className="text-xs text-gray-950">Just now</div>
        </div>
    )
}

export default NewSignUps;