export default function Header() {
  return (
    // Header Start
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo Start */}
            <a className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </a>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item submenu">
                    <a className="nav-link" href="/">Home</a>
                    <ul>
                      <li className="nav-item"><a className="nav-link" href="/">Home - Main</a></li>
                      <li className="nav-item"><a className="nav-link" href="/index-image">Home - Image</a></li>
                      <li className="nav-item"><a className="nav-link" href="/index-video">Home - Video</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn">
                <a href="/contact" className="btn-default">Get Started</a>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
    // Header End
  );
}
