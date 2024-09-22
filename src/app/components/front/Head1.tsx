import Image from "next/image";

const Head1 = () => {
    return (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800">Recent Blogs</h2>
            <br />
            <p className="text-gray-500 text-lg">Stay up-to-date</p>
            <hr className="my-4 border-gray-300" />
    
            {/* Hero Content 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Left Side: Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/hero1.jpg"
                  alt="Blog Post"
                  width={400}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
    
              {/* Right Side: Title and Description */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                What Should You Wear in Winter? Check Out Our Tips for Winter
                </h3>
                <p className="text-gray-600">
                Stay stylish and warm this winter with our curated outfit ideas.
                 From cozy layers to trendy outerwear, we have everything you need
                  to survive the cold in style.
                </p>
              </div>
            </div>
            <br />
            <br />
            {/* Hero Content 2*/}
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Left Side: Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/hero2.jpg"
                  alt="Blog Post"
                  width={400}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
    
              {/* Right Side: Title and Description */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                How a Chronicle Star Dresses for Fashion Shows
                </h3>
                <p className="text-gray-600">
                Discover the high-fashion secrets of a Chronicle
                 star as they prepare for the runway. Learn how 
                 to mix elegance with boldness for a show-stopping 
                 appearance.
                </p>
              </div>
            </div>
            <br />
            <br />
            {/* Hero Content 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Left Side: Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/hero3.jpg"
                  alt="Blog Post"
                  width={400}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
    
              {/* Right Side: Title and Description */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Official Guide to the Best Denim for Fashion Week
                </h3>
                <p className="text-gray-600">
                Denim is a timeless staple, and we’re here to help you 
                find the best styles for fashion week. Whether it's classic
                 cuts or trendy designs, our guide has you covered for every event.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Head1
