
import brand1 from './assets/brand/br-1.png'
import brand2 from './assets/brand/br-2.png'
import brand3 from './assets/brand/br-3.png'
import brand4 from './assets/brand/br-4.png'
import brand5 from './assets/brand/br-5.png'
import {useTheme} from './contexts/ThemeProvider'

const brands = [brand1 , brand2 , brand3, brand4 , brand5]

function Brands() {
  const {dark} = useTheme()
  return (
  <div className={`py-16 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className = 'flex flex-col md:flex-row items-center md:justify-around flex-wrap bg-gray-300 py-5 gap-5'>
        {
            brands.map(brand => <img key={brand} src={brand} alt='' className='h-12 w-24'/>)
        }  
    </div>
  </div>
  )
}

export default Brands
