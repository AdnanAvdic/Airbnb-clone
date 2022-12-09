import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative my-16 cursor-pointer">
      <div className="relative min-w-[300px] h-96">
        <Image
          src={img}
          alt="large image"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-16 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button
          className="text-sm text-white bg-gray-900 rounded-lg 
            px-4 py-2 mt-6"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
