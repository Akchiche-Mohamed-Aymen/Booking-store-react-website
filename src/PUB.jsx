import Card from './Card'
import  ear from './assets/category/earphone.png'
import  gaming from './assets/category/gaming.png'
import  mac from './assets/category/macbook.png'
import  vr from './assets/category/vr.png'
import  watch from './assets/category/watch.png'
import  speaker from './assets/category/speaker.png'
import {useTheme} from './contexts/ThemeProvider'
const PUB = () => {
  const {dark} = useTheme()
  return (
    <div className={`grid sm:grid-cols-1 md:!grid-cols-4 px-5 gap-4 ${dark ? 'bg-slate-900' : 'bg-white'} p-3`}>
      <Card source={ear} title='Earphone' classNameProp={`bg-gray-700 col-span-1`} color = 'red-500' />
      <Card source={watch}  title='Gadjet'  classNameProp={`bg-yellow-400 col-span-1`} color = 'yellow-500' />
      <Card source={mac}  title='Laptop' classNameProp={`bg-red-500 sm:col-span-1 md:col-span-2`} color = 'red-500' />
      <Card source={gaming}  title='Oclus' classNameProp={`bg-gray-200 sm:col-span-1 md:col-span-2`} color = 'red-500'/>
      <Card source={vr} title='CONSOLE'  classNameProp={`bg-green-500 col-span-1`} color = 'green-500'/>
      <Card source={speaker}  title='Speakers' classNameProp={`bg-blue-500 col-span-1`} color = 'red-500' />
    </div>
  )
}

export default PUB
