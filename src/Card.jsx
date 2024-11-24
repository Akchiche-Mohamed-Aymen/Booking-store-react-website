 // Importing clsx for dynamic className names

function Card({ classNameProp , source, title ,  color }) {

  return (
    <div className={`${classNameProp} flex justify-around items-center px-4 h-72 rounded-md pr-5 `}>
      <div className="flex flex-col  ">
        <h2 className="text-white">Enjoy</h2>
        <h1 className="text-white">With</h1>
        <h1 className="text-slate-200 font-bold text-2xl mb-2">{title}</h1>
        <button 
          type="button" 
          className={`text-${color} bg-white rounded-md px-5 py-2 hover:text-white hover:bg-red-500`}
        >
          Browse
        </button>
      </div>
      <img 
        src={source} 
        alt={`Image of ${title}`}  // More descriptive alt text
        className="h-40 object-cover mt-2 w-40"
      />
    </div>
  );
}

export default Card;


