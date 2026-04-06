function CategoryFilter({ setCategory }) {
  return (
    <div className="categories">
      <button onClick={() => setCategory("todos")}>Todos</button>
      <button onClick={() => setCategory("cafes")}>☕ Cafés</button>
      <button onClick={() => setCategory("padaria")}>🥐 Padaria</button>
      <button onClick={() => setCategory("sobremesas")}>🍰 Sobremesas</button>
    </div>
  )
}

export default CategoryFilter