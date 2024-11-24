
import headPhone from './assets/hero/headphone.png'
function Shop() {
  
  return (
    <div className="bg-red-500 rounded-md fine flex items-center justify-around w-11/12 mx-auto h-96 flex-wrap">
    <div>
      <p className="text-gray-200">30% OFF</p>
      <h1 className="text-5xl font-bold text-white">FINE <br/> SMILE</h1>
      <p className="text-gray-200">15 Juin to 19 August</p>
    </div>
    <img src={headPhone} alt="" className="ear" />
    <div className="flex flex-col gap-5 text-white">
      <h2 className="font-bold text-xl">Air Solo Bass</h2>
      <h1 className="font-bold text-5xl">Winter Sale</h1>
      <p className="!text-slate-300">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Assumenda, sint.</p>
      <button type="button" className="rounded-2xl text-red-500 px-5 py-2 bg-white w-fit">Shop</button>
    </div>
 </div>
  )
}

export default Shop
