import Image from "next/image";
import { useState } from "react";
import {
  HiSearch,
  HiGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiUsers,
} from "react-icons/hi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState("");

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

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
        className=" flex items-center rounded-full py-2 
        md:border-2 md:shadow-sm"
      >
        <input
          type="text"
          placeholder="Start your search"
          className="px-5 bg-transparent outline-none flex-grow text-[12px] md:text-sm
           text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
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

      {searchInput && (
        <div className=" flex flex-col col-span-3 mx-auto mt-2 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className=" text-2xl flex-grow font-semibold mb-2 ">
              Number of guests
            </h2>
            <HiUsers className="h-5" />
            <input
              value={numberOfGuests}
              type="number"
              className="w-12 pl-2 outline-none text-red-400"
              min={1}
              max={12}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
