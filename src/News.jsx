import blog1 from './assets/blogs/blog-1.jpg'
import blog2 from './assets/blogs/blog-2.jpg'
import blog3 from './assets/blogs/blog-3.jpg'
import Blog from './Blog'
import {useTheme} from './contexts/ThemeProvider'
const blogs = [
    {
        source : blog1,
        date : 'Juin 15 , 2004 by Mouse',
        title : 'How to choose perfect smartwatch'
    },
    {
        source : blog2,
        date : 'Jan 15 , 2024 , 2004 by Satia',
        title : 'How to choose perfect gadjet'
    },
    {
        source : blog3,
        date : 'Feb 20 , 2024 by Sabir',
        title : 'How to choose perfect VR headest'
    },
]
const News = () => {
    const {dark} = useTheme()
  return (
    <div className={dark ? 'bg-slate-900' : 'bg-white'}>
            <h1 className={`text-2xl font-bold text-center ${dark ? 'text-white' : 'text-black' }`}>Recent News</h1>
            <p className={`text-center ${dark ? 'text-gray-300' : 'text-gray-400'} `}>Lorem ipsum dolor sit amet consectetur .</p>
            <div className='flex  justify-center gap-4 flex-wrap'>
                {
                    blogs.map(blog=> 
                       <Blog 
                        key={blog.source} 
                        source={blog.source}
                        date={blog.date}
                        title={blog.title}
                    />)
                }

            </div>
    </div>
  )
}

export default News
