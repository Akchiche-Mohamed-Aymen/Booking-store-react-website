import ProductCard from "./ProductCard"
import image1 from  './assets/product/p-1.jpg'
import image2 from  './assets/product/p-2.jpg'
import image3 from  './assets/product/p-3.jpg'
import image5 from  './assets/product/p-5.jpg'
import image7 from './assets/product/p-7.jpg'
import image9 from  './assets/product/p-9.jpg'
import {useTheme} from './contexts/ThemeProvider'

const products = [
  {
   title : 'BestHeadPhone',
   price : 120,
   source : image1
  },
  {
   title : 'Rocky Montain',
   price : 420,
   source : image2
  },
  {
   title : 'Goggles',
   price : 350,
   source : image3
  },
  {
   title : 'Printed',
   price : 200,
   source : image5
  },
  {
   title : 'Boat Headphone',
   price : 120,
   source : image9
  },
  {
   title : 'RockyMontain',
   price : 520,
   source : image7
  },
  {
   title : 'Goggles',
   price : 320,
   source :image5
  },
  {
   title : 'Printed',
   price : 190,
   source : image9
  },
]

const AllProducts = () => {
  const {dark} = useTheme()
  return (
    <div className={`min-h-screen py-20 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
      <h1 className={`text-2xl font-bold text-center ${dark ?'text-white' : 'text-black'} `}>Best Seller Products</h1>
      <p className="text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quaerat.</p>
      <div className="flex gap-5 flex-wrap justify-center mt-5">
                {
                    products.map((product, index) => (
                      <ProductCard
                        key={index} // It's important to add a unique key when rendering lists of components in React
                        source={product.source}
                        title={product.title}
                        price={product.price}
                      />
                    ))
              }
      </div>
    </div>
  )
}

export default AllProducts
