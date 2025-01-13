import Car from '../../assets/car.png'

const FeatureRequestOverview = () => {
    return (
        <div>
            <div className="flex flex-col border border-gray-600 py-4 px-4 rounded-lg">
                <img src={Car} alt="car" width={20} height={20} className="mb-3" />
                <div className="text-md mb-3 text-black-920 font-semibold">56</div>
                <div className="flex justify-between items-center">
                    <div className="text-xs text-black-920 font-medium">Feature requests</div>
                    <p className='text-xs bg-red-100 px-2 py-[1px] rounded-full text-white'>10 New</p>
                </div>
            </div>

        </div>
    )
}

export default FeatureRequestOverview;