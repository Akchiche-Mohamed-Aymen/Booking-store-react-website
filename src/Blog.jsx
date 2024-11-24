import {useTheme} from './contexts/ThemeProvider'
const Blog = ({source , date , title }) => {
  const {dark} = useTheme()
  return (
    <div>
      <img src={source} alt="" className={`w-72 h-52 blog rounded-md mt-5 hover:shadow-lg hover:shadow-orange-700 duration-200 hover:w-80 hover:mb-8 ${dark? 'shadow-lg shadow-gray-500': ''}`}/>
      <p className = {`${dark ? 'text-gray-300' : 'text-gray-500'} text-sm mt-2`}>{date}</p>
      <h1 className={`${dark ? 'text-white' : 'text-black'} font-bold text2xl my-4`}>{title}</h1>
      <p className={`${dark ? 'text-gray-300' : 'text-gray-500'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing<br/>
         consequatur quas  expedita.</p>
    </div>
  )
}

export default Blog
