import { useState } from "react";

export default function Navbar() {
  let [click, setClick] = useState(false);
  return (
    <div className="bg-red-600 shadow-xl ">
      <header className="container mx-auto md:flex md:justify-between p-4 sm:px-4 sm:py-3 sm:items-center">
        <div className="flex items-center justify-between sm:p-0 sm:mt-2 sm:ml-2  ">
          <div>
            <img src="/logo.svg" />

            {/* <h1 className="uppercase font-semibold text-white text-4xl">
            Hobbes
          </h1> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setClick((click = !click))}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {click ? (
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            click
              ? "block px-2 pt-2 pb-4"
              : "hidden md:flex sm:mt-2 sm:ml-2 uppercase"
          }
        >
          <a
            href="#"
            className="pt-1 px-2 rounded block text-white font-medium hover:bg-gray-800"
          >
            Hobbies
          </a>
          <a
            href="#"
            className="py-1 px-2 rounded block text-white font-semibold hover:bg-gray-800"
          >
            Kits
          </a>
          <a
            href="#"
            className="py-1 px-2 rounded block text-white font-semibold hover:bg-gray-800"
          >
            Guides
          </a>
          <a
            href="#"
            className="py-1 px-2 rounded block text-white font-semibold hover:bg-gray-800"
          >
            Products
          </a>
          <a
            href="#"
            className="py-1 px-2 rounded block text-white font-semibold hover:bg-gray-800"
          >
            Log In
          </a>
          <a
            href="#"
            className="py-1 px-2 rounded block text-white font-semibold hover:bg-gray-800 sm:mr-2"
          >
            Register
          </a>
        </div>
      </header>
    </div>
  );
}
