import watch from './assets/category/smartwatch.png'
import {useTheme} from './contexts/ThemeProvider'
const Hour = () => {
  const {dark} = useTheme()
  return (
   <div className={` flex justify-center items-center hour ${dark ? 'bg-slate-900' : 'bg-white'}`}>
     <div className="bg-green-700 rounded-md fine flex items-center justify-around w-11/12 mx-auto h-64 flex-wrap">
    <div>
      <p className="text-gray-200">30% OFF</p>
      <h1 className="text-5xl font-bold text-white">HAPPY <br/> HOURS</h1>
      <p className="text-gray-200">18 Juin to 28 Jan</p>
    </div>
    <img src={watch} alt="" className="w-64 watch" />
    <div className="flex flex-col gap-5 text-white">
      <h2 className="font-bold text-xl">Smart Solo</h2>
      <h1 className="font-bold text-5xl">Winter Sale</h1>
      <p className="!text-slate-300">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Assumenda, sint.</p>
      <button type="button" className="rounded-2xl text-green-500 px-5 py-2 bg-white w-fit mb-7 ">Shop</button>
    </div>
 </div>
   </div>
  )
}

export default Hour
