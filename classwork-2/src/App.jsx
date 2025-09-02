import './App.css'
import Product from './components/Product.jsx'

function App() {
  const products = [
    {
      title: "IPhone 14",
      price: 4000000,
      inStock: true,
      description: "They are the sixteenth generation of iPhones",
      rating: 4,
      tags: ["Old", "Sale"]
    },
        {
      title: "IPhone 15",
      price: 5000000,
      inStock: true,
      description: "They are the seventeenth generation of iPhones",
      rating: 5,
      tags: ["Old", "Sale"]
    },
        {
      title: "IPhone 16",
      price: 6000000,
      inStock: true,
      description: "They are the eighteenth generation of iPhones",
      rating: 4,
      tags: ["New", "Sale"]
    },
  ]

  return (
    <div className='products'>
    {products.map(product => (
      <Product
        key = {product.title}
        title = {product.title}
        price = {product.price}
        inStock = {product.inStock}
        description = {product.description}
        rating = {product.rating}
        tags = {product.tags}
      />
    ))}  
    </div>
  )
}

export default App