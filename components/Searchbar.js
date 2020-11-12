export default function Searchbar() {
  return (
    <div className="container mx-auto py-8 bg-red-600 shadow-xl  h-50 p-8 rounded-b-lg">
      <div className="mx-4">
        <img className="absolute w-8 mx-2" src="/searchicon.svg"></img>
        <input
          className="w-full h-8 px-12 rounded-lg mb-2 focus:outline-none focus:shadow-outline text-xl shadow-lg"
          type="search"
          placeholder="Search..."
        />
      </div>

      <div className="flex ">
        <p className="flex text-white font-normal my-4 pl-8">
          Suggested Hobbies:
        </p>
        <nav className="flex flex-wrap justify-evenly ">
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2 font-medium mx-3 bg-gray-200 hover:bg-indigo my-4"
            href="#"
          >
            Photography
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2 font-medium mx-3 bg-gray-200 hover:bg-indigo my-4"
            href="#"
          >
            Livestreaming
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2 font-medium mx-3 bg-gray-200 hover:bg-indigo-darker my-4"
            href="#"
          >
            Videography
          </a>
          <a
            className="no-underline  rounded-l-lg rounded-r-lg text-black px-2  font-medium mx-3 bg-gray-200 hover:bg-indigo my-4"
            href="#"
          >
            Painting
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2  font-medium mx-3 bg-gray-200 hover:bg-indigo-darker my-4"
            href="#"
          >
            Hiking
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2  font-medium mx-3 bg-gray-200 hover:bg-indigo my-4"
            href="#"
          >
            Cooking
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2  font-medium mx-3 bg-gray-200 hover:bg-indigo-darker my-4"
            href="#"
          >
            Dancing
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2  font-medium mx-3 bg-gray-200 hover:bg-indigo-darker my-4"
            href="#"
          >
            Gaming
          </a>
          <a
            className="no-underline rounded-l-lg rounded-r-lg text-black px-2  font-medium mx-3 bg-gray-200 hover:bg-indigo-darker my-4"
            href="#"
          >
            Cosplay
          </a>
        </nav>
      </div>
    </div>
  );
}
