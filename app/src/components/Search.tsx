import search from "/public/assets/icons/search.svg"

export const Search: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
    return (
        <form className="max-w-screen-sm mx-auto animation glow delay-1">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img src={search} alt="Search icon" className="w-5 h-5" />
                </div>
                <input type="search" id="search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 ps-10 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                    maxLength={50}
                    placeholder="Search IT keywords, terms, principles, and concepts"
                    autoComplete="off"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </form>
    );
};
