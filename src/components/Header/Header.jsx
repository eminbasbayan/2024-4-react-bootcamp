import './Header.css';

const Header = () => {
  const sepetUrunSayisi = 0;

  return (
    <header className="header">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold">
            E-Ticaret
          </a>

          <div className="flex items-center gap-6">
            <a href="/" className="nav-link">
              Ürünler
            </a>
            <a href="/sepet" className="nav-link cart-link">
              Sepet ({sepetUrunSayisi})
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
