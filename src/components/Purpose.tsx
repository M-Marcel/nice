import Customer from '../assets/customer.png'
import Trading from '../assets/trading.png'
import Raiding from '../assets/raiding.png'

const Purpose = () => {
    return (
        <div className="mt-[350px]">
            <div className="flex flex-col mb-10">
                <div className="flex justify-center items-center flex-col text-center">
                    <h2 className="text-4xl mb-3 text-black-300">Bots for every purpose</h2>
                    <p className="text-black-400 text-md text-center w-auto lg:w-[20%]">Start building bots and mini apps before we fully launch</p>
                </div>
                <div className="px-5 lg:px-7.5 xl:px-10 grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4 lg:mx-8">
                    <div className="lg:col-start-1 lg:col-span-1 mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[auto]
                        flex flex-col justify-end">
                            <div className='flex justify-center items-center mb-4'>
                                <img src={Customer} alt='customer' width={500} height={500} />
                            </div>
                            <h2 className="text-black-300 text-xl mb-4">Customer Success Bot</h2>
                            <p className="text-black-400 text-sm">Welcome new members, introduce your services, and provide instant FAQs. This bot ensures a safe, professional community by monitoring behavior and enforcing rules.</p>
                        </div>
                    </div>
                    <div className="lg:col-start-2 lg:col-span-3 mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[auto]
                        flex flex-col justify-end">
                            <div className='flex justify-center items-center mb-[70px]'>
                                <img src={Trading} alt='trading' width={500} height={500} />
                            </div>
                            <h2 className="text-black-300 text-xl mb-4">Trading Bot</h2>
                            <p className="text-black-400 text-sm">Automate crypto trading within Telegram. Create or import wallets, trade tokens, and monitor transactions with advanced security.</p>
                        </div>
                    </div>
                    <div className="lg:col-start-1 lg:col-span-2 mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[auto]
                        flex flex-col justify-end">
                            <div className='flex justify-center items-center mb-[70px]'>
                                <img src={Raiding} alt='trading' width={500} height={500} />
                            </div>
                            <h2 className="text-black-300 text-xl mb-4">Raiding Bot</h2>
                            <p className="text-black-400 text-sm">Boost your brand’s visibility with automated social media tracking and targeted engagement. Simplify advertising and amplify your reach.</p>
                        </div>
                    </div>
                    <div className="lg:col-start-3 lg:col-span-3 mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[69vh]
                        flex flex-col justify-end">
                            <h2 className="text-black-300 text-xl mb-4">Play-to-Earn Bot</h2>
                            <p className="text-black-400 text-sm">Gamify engagement with daily rewards, challenges, and referral incentives. Keep your community active and excited.</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[60vh]
                        flex flex-col justify-end">
                            <h2 className="text-black-300 text-xl mb-4">Wallet Creation and Import Bot</h2>
                            <p className="text-black-400 text-sm">Easily create or import crypto wallets. Secure and convenient, this bot simplifies blockchain interaction for everyone</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[60vh]
                        flex flex-col justify-end">
                            <h2 className="text-black-300 text-xl mb-4">Monitor Wallet Bot</h2>
                            <p className="text-black-400 text-sm">Get instant updates on wallet activity. Track your transactions or monitor others for insights and security</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="purpose-bg border border-gray-100 rounded-lg px-4 py-5 h-[60vh]
                        flex flex-col justify-end">
                            <h2 className="text-black-300 text-xl mb-4">Monitor Token Bot</h2>
                            <p className="text-black-400 text-sm">Stay updated on token prices, volumes, and market trends in real time. Never miss a critical crypto change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purpose