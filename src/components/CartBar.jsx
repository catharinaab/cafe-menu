function CartBar({ total, items, onClick }) {
  return (
    <div className="cart-bar" onClick={onClick}>
      <span>{items} itens</span>
      <strong>R$ {total.toFixed(2)}</strong>
      <button>Ver pedido</button>
    </div>
  )
}

export default CartBar