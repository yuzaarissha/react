import './Product.css'

function Product({title, price, inStock, description, rating, tags = []}) {
    const finalPrice = tags.includes("Sale") ? price - price * 0.1 : price
    const stars = "⭐".repeat(rating)
    
    return(
        <div className='product-card'>
            <h1>{title}</h1>
            <p>{inStock ? `${finalPrice}₸` : "Out of stock"}</p>
            <p>{description}</p>
            <p>{stars}</p>
            <ul>{tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>
        </div>
    )
}

export default Product