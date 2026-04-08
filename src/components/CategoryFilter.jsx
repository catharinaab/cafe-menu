function CategoryFilter({ setCategory }) {
  return (
    <div className="categories">
      <button onClick={() => setCategory("todos")}>Todos</button>
      <button onClick={() => setCategory("cafe")}>Cafés</button>
      <button onClick={() => setCategory("salgado")}>Salgados</button>
      <button onClick={() => setCategory("sobremesa")}>Sobremesas</button>
    </div>
  )
}

export default CategoryFilter