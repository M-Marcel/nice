import SearchIcon from '../assets/svg/Search'

const Search = () => {
    return (
        <div className="relative w-[27%]">
            <input type="text" placeholder="Search " className="text-sm border border-gray-900 rounded-lg py-2 outline-none pl-7" />
            <div className="absolute top-[9px] left-[6px]">
                <SearchIcon />
            </div>
        </div>
    )
}
export default Search