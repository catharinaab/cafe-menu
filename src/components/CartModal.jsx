import { useState } from "react"

function CartModal({ cart, removeFromCart, addToCart, onClose }) {

const [name, setName] = useState("")
const [table, setTable] = useState("")

function sendToWhatsApp() {
    if (!name) {
  alert("Por favor, informe seu nome")
  return
}
  const phone = "5599999999999"

  let message = "*Pedido - Café da Vila*%0A%0A"

  message += `Nome: ${name || "Não informado"}%0A`
  if (table) {
    message += `Mesa: ${table}%0A`
  }

  message += "%0A"

  cart.forEach(item => {
    message += `• ${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}%0A`
  })

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  message += `%0A*Total: R$ ${total.toFixed(2)}*`

  const url = `https://wa.me/${phone}?text=${message}`

  window.open(url, "_blank")
}

  return (
    
    <div className="cart-modal" onClick={onClose}>

      <div className="cart-content" onClick={(e) => e.stopPropagation()}>

        <input
  type="text"
  placeholder="Seu nome"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="input"
/>

<input
  type="text"
  placeholder="Mesa (opcional)"
  value={table}
  onChange={(e) => setTable(e.target.value)}
  className="input"
/>

        <h2>Seu pedido</h2>

        {cart.map(item => (
          <div key={item.id} className="cart-item">

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>

            <div className="cart-actions">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

          </div>
        ))}

        <button className="whatsapp-btn" onClick={sendToWhatsApp}>
        Finalizar pelo WhatsApp
        </button>

        <button className="close-modal" onClick={onClose}>
          Fechar
        </button>

      </div>

    </div>
  )
}

export default CartModal