import Image from "next/image";

const SmallCard = (props) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 ease-in-out duration-150
    hover:scale-105
    "
    >
      <div className="relative h-16 w-16">
        <Image src={props.img} alt="small image" fill className="rounded-lg" />
      </div>
      <div>
        <h2>{props.location}</h2>
        <h3 className="text-gray-500">{props.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
