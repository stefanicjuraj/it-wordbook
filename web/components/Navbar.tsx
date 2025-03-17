export default function Navbar() {
  return (
    <nav className="max-w-screen-md mx-auto bg-black rounded-b-lg shadow-lg">
      <div className="max-w-screen-md px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center px-2 py-4">
            <img
              src="/assets/icons/wordbook-icon.svg"
              alt="logo"
              className="w-10 h-10 mr-3"
            />
            <h1 className="text-2xl font-bold text-white">IT Wordbook</h1>
          </div>

          <div className="flex items-center">
            <a
              href="https://github.com/stefanicjuraj/it-wordbook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <img
                src="/assets/icons/github.svg"
                alt="github"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
