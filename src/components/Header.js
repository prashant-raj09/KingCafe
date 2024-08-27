import Logo from "../public/images/KingCafe.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-red-600 text-white sticky top-0 z-50 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <img alt="KingCafe" src={Logo} className="w-20 sm:w-24 rounded-lg shadow-md"></img>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Hamburger icon for small screens */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <ul className="flex space-x-6">
            <li className="m-2 hover:text-yellow-200 cursor-pointer transition duration-300">Home</li>
            <li className="m-2 hover:text-yellow-200 cursor-pointer transition duration-300">Menu</li>
            <li className="m-2 hover:text-yellow-200 cursor-pointer transition duration-300">Reservations</li>
            <li className="m-2 hover:text-yellow-200 cursor-pointer transition duration-300">Contact</li>
            <li className="m-2">
              <button className="bg-yellow-500 text-red-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                Order Online
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
    