import { votedBots } from "../constants"

const VotedBots = () => {
    return (
        <div className="mt-6">
            {votedBots.map((item) => (
                <div className="flex flex-col rounded-2xl border bg-gray-700/100 border-gray-100/85 px-4 py-2 mb-4">
                    <div className="flex gap-4 items-center py-1">
                        <div className="border border-gray-600/90 flex flex-col items-center justify-center
                                        px-3 py-3 rounded-lg">
                            <img src={item.thumb} alt="thumbs" width={15} height={15} />
                            <p className="text-sm text-gray-500">{item.btnText}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">{item.createdAt}</p>
                            <p className="text-sm text-black-500 font-500">{item.botName}</p>
                        </div>
                    </div>
                    <div className="flex py-1 gap-4 items-center">
                        <div className="border border-gray-600 flex flex-col items-center justify-center
                                        px-5 py-3 rounded-lg">
                            <p className="text-xs">{item.voteCount}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={item.image} alt="elipse" width={20} height={20} />
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 text-sm">by</span>
                                <p className="text-sm">{item.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VotedBots