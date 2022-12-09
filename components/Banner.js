import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="relative 
      h-[300px] 
      sm:h-[400px] 
      lg:h-[500px]
      xl:h-[600px] 
      2xl:h-[700px]"
    >
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt="banner"
        className="object-cover"
      />

      <div className="absolute top-[45%] w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          className=" text-purple-500 bg-white px-8 py-3 
          text-sm shadow-md rounded-full font-bold my-3 
          hover:shadow-xl ease-in-out duration-300 first-letter
          active:scale-90 
          sm:text-lg"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
