const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-(--color-border) pt-6 sm:mt-12">
      <div className="flex items-center justify-between text-xs text-(--color-text-subtle) sm:text-sm">
        {/* Copyright */}
        <p>© {year} QuickLink</p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ersudhanshushukla"
            className="transition hover:text-(--color-primary-light)"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ErSudhanshuShukla"
            className="transition hover:text-(--color-primary-light)"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
