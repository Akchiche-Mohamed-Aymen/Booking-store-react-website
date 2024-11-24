import Contact from "./Contact"
import Links from "./Links"
import {useTheme} from './contexts/ThemeProvider'

const Footer = () => {
  const {dark} = useTheme()
  return (
    <div className={`flex flex-col md:flex-row justify-around flex-wrap  ${dark ?'bg-slate-900' : 'bg-white'}  py-4`}>
      <div>
        <h1 className="text-3xl text-red-600 mb-3">ESHOP</h1>
        <p className="text-gray-400">Lorem ipsum dolor, sit amet cons <br/>
           adipisicing elit. Natus, impe<br/>
            aut delectus, beatae officia <br/>
            asperiores modi itaque velit . <br/>
            <br />
            Made with by The coding journey
          </p>
      </div>
      <Links title='Important Links'/>
      <Links title={'Links'}/>
      <Contact/>
    </div>
  )
}

export default Footer
