import {useTheme} from './contexts/ThemeProvider'

const Feat = ({children ,  title = 'Free Shipping' , body = 'Free Shipping On All Order'}) => {
  const {dark} = useTheme()
  return (
    <div className={`flex gap-5 items-center`}>
      {children}
      <div>
        <h2 className={`font-bold ${dark? 'text-white' : 'text-black'}`}>{title}</h2>
        <p className={`${dark? 'text-gray-300' : 'text-gray-400'}`}>{body}</p>
      </div>
    </div>
  )
}

export default Feat
