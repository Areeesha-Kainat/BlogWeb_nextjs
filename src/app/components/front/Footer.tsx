import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Areesha Blog
            </p>
            <div className="flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-black">
                Privacy Policy
                </Link>
                <Link href="/" className="text-gray-600 hover:text-black">
                Terms of Service
                </Link>
              
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  