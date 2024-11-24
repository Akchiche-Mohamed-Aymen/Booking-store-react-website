import Feat from "./Feat"
import Shop from "./Shop"
import {useTheme} from './contexts/ThemeProvider'
const Features = () => {
  const {dark} = useTheme()
  return (
   <div className={`flex flex-col justify-between ${dark ? 'bg-slate-900': 'bg-white'}`}>
      <div className="flex justify-center gap-7 mt-10 mb-14 flex-wrap">
        <Feat>
          <i className="fa-solid fa-car-side text-red-600 text-2xl font-bold"></i>
        </Feat>
        <Feat>
            <i className="fa-solid fa-circle-check text-red-600 text-2xl font-bold"></i>
        </Feat>
        <Feat>
            <i className="fa-solid fa-key text-red-600 text-2xl font-bold"></i>
        </Feat>
        <Feat title="Secure Payment" >
            <i className="fa-solid fa-window-maximize text-red-600 text-2xl font-bold"></i>
        </Feat>
      </div>
        <Shop/>
      
   </div>
  )
}

export default Features
