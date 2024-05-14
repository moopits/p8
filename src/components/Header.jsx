const Header = () => {
    return (
      <header className="header">
        <div className="logo-container">
          <img src="./src/assets/images/logo.png" alt="Company Logo" className="logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Acceuil</a></li>
            <li><a href="/about">A propos</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;

