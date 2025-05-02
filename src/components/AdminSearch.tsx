import SearchIcon from '../assets/svg/Search'

const AdminSearch = () => {
    return (
        <div className="relative w-[50%]">
            <input type="text" placeholder="Search portfolio " className="text-sm text-gray-500 border border-gray-900 rounded-2xl py-3 outline-none pl-10" />
            <div className="absolute top-[12px] left-[10px]">
                <SearchIcon />
            </div>
        </div>
    )
}
export default AdminSearch;