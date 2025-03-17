import SearchIcon from '../assets/svg/Search'

const Search = () => {
    return (
        <div className="relative w-[50%]">
            <input type="text" placeholder="Search " className="text-sm border border-gray-900 rounded-2xl py-3 outline-none pl-10" />
            <div className="absolute top-[12px] left-[10px]">
                <SearchIcon />
            </div>
        </div>
    )
}
export default Search