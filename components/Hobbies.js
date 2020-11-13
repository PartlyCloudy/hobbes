

export default function Hobbies() {
  return (
    <div className="container mx-auto">
      <div className="grid justify-center md:grid-cols-3 gap-4 mt-8 mb-4 ">
        {/* <img
          className="w-wt h-ht object-cover object-left mx-2 border-solid border-red-700 border-2"
          src="/filmmaking.png"
        ></img> */}


<div className="bg-cover bg-left h-ht ml-1 border-solid border-red-700 border-2 bg-film grid place-items-center w-wt md:w-auto">
  <h1 className="text-white text-6xl stroke ">Videography</h1>
</div>
<div className="bg-cover bg-left h-ht border-solid border-red-700 border-2 bg-gaming grid place-items-center w-wt md:w-auto">
    <h1 className="text-white text-6xl stroke">Gaming</h1>
</div>
<div className="bg-cover bg-right h-ht ml-1 mr-1 border-solid border-red-700 border-2 bg-climb grid place-items-center w-wt md:w-auto">
    <h1 className="text-white text-6xl stroke" >Hiking</h1>
</div>

      </div>
    </div>
  );
}
