function Header() {
  return (
    <header>
      <nav
        style={{
          position: "absolute",
          bottom: "40px",
          left: "20px",
          display: "block",
        }}
      >
        <a
          href="/"
          className="link"
          style={{ display: "block", marginBottom: "10px" }}
        >
          INICIO
        </a>

        <a
          href="/contact"
          className="link"
          style={{ display: "block", marginBottom: "10px" }}
        >
          CONTATO
        </a>
        <a
          href="/projects"
          className="link"
          style={{ display: "block", marginBottom: "10px" }}
        >
          PROJETOS
        </a>

        <a
          href="https://github.com/MarcolinoNVS"
          target="_blank"
          className="link"
          style={{ display: "block", marginBottom: "10px" }}
        >
          GitHub
        </a>
        <a
          href="/login"
          className="link"
          style={{ display: "block", marginBottom: "10px" }}
        >
          LOGIN
        </a>
      </nav>
    </header>
  );
}

export default Header;
