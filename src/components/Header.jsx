import CategoryFilter from "./CategoryFilter"

function Header({ setCategory, darkMode, setDarkMode }) {
  return (
    <header className="header">

      {/* ESQUERDA */}
      <div className="header-left">
        <img src="/images/cardapio-digital.png" alt="Logo" className="logo" />
        <h1>Menu - Café da Vila</h1>

        <p>A melhor cafeteria de Vitória</p>
      </div>

      {/* DIREITA */}
      <div className="header-right">
  <CategoryFilter setCategory={setCategory} />

  <button
    className="theme-toggle"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀️" : "🌙"}
  </button>
  


      </div>

    </header>
  )
}

export default Header