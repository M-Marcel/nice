import Face from '../../assets/face.png'
import { useAppSelector } from '../../hooks';
import LoaderIcon from "../../assets/loader.svg"
const NewSignUps = () => {
    const { users, isError, isLoading, message } = useAppSelector((state) => state.adminuser)
    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center gap-4 h-[60vh]">
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
                <div>
                    {users && users.length > 0 ? (
                        users.map((user) => (
                            <div className="flex justify-between items-center mt-4 mb-8"
                            key={user._id}>
                                <div className="flex items-center gap-2">
                                    <img src={Face} alt="face" width={30} height={30} />
                                    <div className="flex flex-col">
                                        <p className="text-xs text-black-930">{user.firstName} {user.lastName}</p>
                                        {/* <p className="text-xs text-gray-950">{user.email}</p> */}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-950">Just now</div>
                            </div>
                        ))

                    ) : (
                        <p className="text-gray-400">No users available</p>
                    )}

                </div>

            )}
        </div>

    )
}

export default NewSignUps;