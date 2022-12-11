import Image from "next/image";
import { HiStar, HiOutlineHeart } from "react-icons/hi";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div
      className="flex hover:shadow-lg px-2 py-7 pr-4 border-b cursor-pointer
        hover:opacity-80 ease-in-out duration-150 first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0  ">
        <Image src={img} fill className=" object-cove rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5 ">
        <div className="flex justify-between">
          <p className="text-sm">{location}</p>
          <HiOutlineHeart className=" cursor-pointer w-7 h-7" />
        </div>

        <h4 className="text-lg">{title}</h4>

        <div className=" border-b w-10 pt-2" />

        <p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center gap-1">
            <HiStar className="h-5 w-5 text-red-500" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className=" text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
