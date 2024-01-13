const Search: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
    return (
        <form className="max-w-screen-sm mx-auto">
            <div className="relative">
                <input type="search" id="search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 ps-10 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Search IT keywords, terms, principles, and concepts"
                    autoComplete="off"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </form>
    );
};

export default Search;
