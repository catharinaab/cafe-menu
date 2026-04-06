import { useState } from "react"

function ProductCard({ product, addToCart }) {

  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product)
    setAdded(true)

    setTimeout(() => setAdded(false), 1000)
  }

  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <span className="price">
        R$ {product.price}
      </span>

      <button onClick={handleAdd}>
        {added ? "✓" : "+"}
      </button>

    </div>
  )
}

export default ProductCard