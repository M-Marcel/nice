import SearchIcon from '../assets/svg/Search'

const Search = () => {
    return (
        <div className="relative">
            <input type="text" placeholder="Search for anything" className="border border-gray-600 outline-0 rounded-lg
         px-7 py-2 ml-3" />
            <div className="absolute top-[11px] left-[16px]">
                <SearchIcon />
            </div>
        </div>
    )
}
export default Search