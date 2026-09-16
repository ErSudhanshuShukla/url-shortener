import { Link2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <header
      className="
        fixed top-3 left-1/2 z-50
        w-[calc(100%-1.5rem)] max-w-6xl
        -translate-x-1/2
        rounded-2xl
        border border-(--color-border)
        bg-(--color-bg)/80
        shadow-lg
        backdrop-blur-md
      "
    >
      <nav className="flex h-16 items-center justify-between px-5 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-primary) text-(--color-bg)">
            <Link2 size={19} strokeWidth={2.4} />
          </div>

          <span className="text-lg font-semibold tracking-tight text-(--color-text-heading)">
            QuickLink
          </span>
        </a>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;