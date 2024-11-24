import {useTheme} from './contexts/ThemeProvider'


const links = [
    'Home',
    'About',
    'Contact',
    'Blog'
]
function Links({title}) {
  const {dark} = useTheme()
  return (
    <div>
      <h1 className={`text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-black'}`}>{title}</h1>
      {
        links.map(link => <p key={link} className={`${dark ? 'text-gray-300' : 'text-gray-400'} hover:text-blue-600`}>{link}</p>)
      }
    </div>
  )
}

export default Links
