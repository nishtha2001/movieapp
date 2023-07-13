function Header({ onLatestClick, onTopRatedClick, onLogoClick }) {
    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper container" style={{ padding: '10 10px' }}>
          <a href="/" className="brand-logo" onClick={onLogoClick}>
            <img src="/logo.png" alt="Movie App Logo" style={{ height: '64px', verticalAlign: 'middle' }} />
            <span  onClick={onLogoClick} style={{ marginLeft: '10px' }}>Movie App</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#" onClick={onLatestClick}>Latest Movies</a></li>
            <li><a href="#" onClick={onTopRatedClick}>Top Rated Movies</a></li>
          </ul>
        </div>
      </nav>
    );
  }
export default Header