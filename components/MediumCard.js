import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div className="relative w-80 h-80">
        <Image
          src={img}
          alt="medium image"
          fill
          className="object-contain rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
