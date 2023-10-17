import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useProduct } from "./context/CartProvider";

const Header = () => {
    const {state} = useProduct()
  return (
    <div>
      <header className="text-gray-600 shadow-md  px-14 py-4 bg-slate-200 body-font">
        <div className="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={"/"} className="ml-3 text-xl">
              NIR-Commerce
            </Link>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="text-2xl mr-5 hover:text-gray-900">
              Products
            </Link>
          </nav>
          <div className="flex items-center justify-center">
            <div className="relative text-2xl">
              <Link to={"/cart"}>
                <FaShoppingCart />
                <span className="absolute -top-4 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                  {state.cart.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
