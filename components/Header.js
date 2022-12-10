import Image from "next/image";
import {
  HiSearch,
  HiGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiUsers,
} from "react-icons/hi";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3  items-center p-5 bg-white
      shadow-md md:px-10"
    >
      <div className="relative flex h-8 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          fill
          object-position="left"
          className="object-contain object-left"
        />
      </div>

      <div
        className=" flex items-center  rounded-full py-2 
        md:border-2 md:shadow-sm"
      >
        <input
          type="text"
          placeholder="Start your search"
          className="px-5 bg-transparent outline-none flex-grow text-[12px] md:text-sm
           text-gray-600 placeholder-gray-400"
        ></input>
        <HiSearch
          className="hidden bg-red-400 text-white rounded-full h-8 w-8 p-2 cursor-pointer
           md:mx-2 md:inline-flex"
        />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <HiGlobeAlt className="h-6 w-6" />

        <div className="flex border-2 rounded-full p-2 space-x-2">
          <HiMenu className="h-6 w-6 cursor-pointer" />
          <HiUserCircle className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
