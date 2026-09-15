import { Link2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <header className="border-b border-(--color-border) bg-(--color-bg)">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
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
}

export default Navbar;