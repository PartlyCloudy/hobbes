export default function Guides() {
  return (
    <div className="container mx-auto pr-4">
      <div className=" grid justify-center md:grid-cols-3 gap-4 mt-8 mb-4  w-full ">
        <img
          className="w-wt h-ht object-cover object-left mx-2 border-solid border-red-700 border-2"
          src="/filmmaking.png"
        ></img>
        <img
          className="w-wt h-ht object-cover object-left mx-2 border-solid border-red-700 border-2"
          src="/gamingggg.jpg"
        ></img>
        <img
          className="w-wt h-ht object-cover object-right  mx-2 border-solid border-red-700 border-2"
          src="/climbing.jpg"
        ></img>
      </div>
    </div>
  );
}
