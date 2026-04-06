// import { useState, useEffect } from "react"
// import products from "../data/products.json"

// import ProductCard from "../components/ProductCard"
// import Header from "../components/Header"
// import CategoryFilter from "../components/CategoryFilter"
// import SearchBar from "../components/SearchBar"
// import CartBar from "../components/CartBar"
// import CartModal from "../components/CartModal"


// function Menu() {

//   const [category, setCategory] = useState("todos")
//   const [search, setSearch] = useState("")
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart")
//     return savedCart ? JSON.parse(savedCart) : []
//   })
//   const [isCartOpen, setIsCartOpen] = useState(false)

//   useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(cart))
// }, [cart])


//   const [darkMode, setDarkMode] = useState(
//   window.matchMedia("(prefers-color-scheme: dark)").matches

  
// )


//   const filteredProducts = products
//     .filter(product =>
//       category === "todos" || product.category === category
//     )
//     .filter(product =>
//       product.name.toLowerCase().includes(search.toLowerCase())
//     )

// function addToCart(product) {
//   setCart(prev => {
//     const itemExists = prev.find(item => item.id === product.id)

//     if (itemExists) {
//       return prev.map(item =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     }

//     return [...prev, { ...product, quantity: 1 }]
//   })
// }

// function removeFromCart(productId) {
//   setCart(prev =>
//     prev
//       .map(item =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//       .filter(item => item.quantity > 0)
//   )
// }

// const total = cart.reduce(
//   (sum, item) => sum + item.price * item.quantity,
//   0
// )

//   return (
//     <div className="menu">

//       <Header />

//       <SearchBar search={search} setSearch={setSearch} />

//       <CategoryFilter setCategory={setCategory} />

//       <div className="product-list">
//         {filteredProducts.map(product => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             addToCart={addToCart}
//           />
//         ))}
//       </div>

//       {cart.length > 0 && (
// <CartBar
//   total={total}
//   items={cart.reduce((sum, item) => sum + item.quantity, 0)}
//   onClick={() => setIsCartOpen(true)}
// />
//       )}

//       {isCartOpen && (
//   <CartModal
//     cart={cart}
//     addToCart={addToCart}
//     removeFromCart={removeFromCart}
//     onClose={() => setIsCartOpen(false)}
//   />
// )}

//     </div>
//   )
// }



// export default Menu

import { useState, useEffect } from "react"
import products from "../data/products.json"

import ProductCard from "../components/ProductCard"
import Header from "../components/Header"
import CategoryFilter from "../components/CategoryFilter"
import SearchBar from "../components/SearchBar"
import CartBar from "../components/CartBar"
import CartModal from "../components/CartModal"

function Menu() {

  const [category, setCategory] = useState("todos")
  const [search, setSearch] = useState("")

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  // 🌙 Dark mode com persistência
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) return savedTheme === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // salvar carrinho
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // aplicar dark mode no body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  const filteredProducts = products
    .filter(product =>
      category === "todos" || product.category === category
    )
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )

  function addToCart(product) {
    setCart(prev => {
      const itemExists = prev.find(item => item.id === product.id)

      if (itemExists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(productId) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="menu">

      <Header />

      {/* 🌙 Botão de tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginBottom: "10px" }}
      >
        {darkMode ? "☀️ Modo claro" : "🌙 Modo escuro"}
      </button>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter setCategory={setCategory} />

      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <CartBar
          total={total}
          items={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onClick={() => setIsCartOpen(true)}
        />
      )}

      {isCartOpen && (
        <CartModal
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}

    </div>
  )
}

export default Menu