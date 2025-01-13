import Car from '../../assets/car.png'

const UserOverview = () => {
    return (
        <div>
            <div className="flex flex-col border border-gray-600 py-4 px-4 rounded-lg">
                <img src={Car} alt="car" width={20} height={20} className="mb-3" />
                <div className="text-md mb-3 text-black-920 font-semibold">18K</div>
                <div className="flex justify-between items-center">
                    <div className="text-xs text-black-920 font-medium">Users</div>
                </div>
            </div>

        </div>
    )
}

export default UserOverview;