
import Image from 'next/image';

const Header = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-800 text-white">
      {/* Background Image */}
      <Image
        src="/bg.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Our <br />Fashion Blog
        </h1>
        <p className="text-lg md:text-2xl mb-8">
        Explore the latest trends, tips, and inspiration from the world of fashion.
        </p>
        
      </div>
    </section>
  );
};

export default Header;
