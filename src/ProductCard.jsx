import {useTheme} from './contexts/ThemeProvider'
const ProductCard = ({source , title , price}) =>{
  const {dark} = useTheme()
  return (
    <div className="rounded-md ">
    <div className="w-60 h-52">
        <img src={source} alt=""  className={`h-48  sm:blog md:w-64 rounded-md `}/>
    </div>
      <h2 className={`font-semibold ${!dark ?  'text-black' : 'text-white'}`}>{title}</h2>
      <h1 className={`text-xl font-semibold ${!dark ?  'text-black' : 'text-white'}`}>${price}</h1>
    </div>
  )
}
export default   ProductCard

