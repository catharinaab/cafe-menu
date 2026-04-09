function CategoryFilter({ setCategory }) {
  return (
    <div className="categories">
      <button data-emoji="⭐" onClick={() => setCategory("todos")}><span>Todos</span></button>
      <button data-emoji="☕" onClick={() => setCategory("cafe")}> <span>Cafés</span></button>
      <button data-emoji="🥐" onClick={() => setCategory("salgado")}> <span>Salgados</span></button>
      <button data-emoji="🍰" onClick={() => setCategory("sobremesa")}><span>Sobremesas</span></button>
    </div>
  )
}

export default CategoryFilter