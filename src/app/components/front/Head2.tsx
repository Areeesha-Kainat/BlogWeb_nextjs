import Image from 'next/image';

const Head2 = () => {
  return (
    <div className=" flex justify-between items-center gap-5 my-8 ml-16">
      {/* Left side: Title and Paragraph */}
      <div className="w-[40%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 ">The Buzziest New Fashion Brands You Need to Know About</h2>
        <p className="text-gray-600">
          Discover the freshest names in the fashion world that are making waves and setting trends. 
          From innovative designers to bold new collections, these emerging brands are redefining style 
          with unique aesthetics and groundbreaking concepts. Explore how these trailblazers are shaping 
          the future of fashion, and find out why they're quickly becoming the talk of the industry.
        </p>
      </div>

      {/* Right side: Image without border */}
      <div className="w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[350px]">
          <Image 
            src="/hero4.jpg" 
            alt="Description of image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Head2;
