import {useTheme} from './contexts/ThemeProvider'

function Contact() {
  const {dark} = useTheme()
  return (
    <div className=" flex flex-col gap-4">
      <h2 className={`cursor-pointer ${dark ? 'text-white' : 'text-gray-950'}` }onClick={()=>location = 'https://t.me/Django_fl'}>
        <i className={`fa-solid fa-paper-plane ${dark ? 'text-white' : 'text-gray-950'}`}></i> Akchiche Aymen
      </h2>
      <h2 className={dark ? 'text-white' : 'text-gray-950'}><i className={`fa-solid fa-mobile-screen text-xl ${dark ? 'text-white' : 'text-gray-950'}`}></i> +213 698841788</h2>
       <div>
       <i className={`fa-solid fa-mobile-screen mr-2 text-xl ${dark ? 'soc' : ''}`}></i>
       <i className={`fa-brands fa-facebook mr-2 text-xl ${dark ? 'soc' : ''}`}></i>
       <i className={`fa-brands fa-linkedin text-xl ${dark ? 'soc' : ''}`}></i>
       </div>
    </div>
  )
}

export default Contact
