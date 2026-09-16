const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div
        className="
          mx-auto max-w-6xl
          rounded-2xl
          border border-(--color-border)
          bg-(--color-bg)
          shadow-lg
        "
      >
        <div className="flex items-center justify-between px-5 py-5 text-xs text-(--color-text-subtle) sm:px-6 sm:text-sm">
          {/* Copyright */}
          <p>© {year} QuickLink</p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ersudhanshushukla"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-(--color-primary-light)"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a
              href="https://github.com/ErSudhanshuShukla"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-(--color-primary-light)"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;