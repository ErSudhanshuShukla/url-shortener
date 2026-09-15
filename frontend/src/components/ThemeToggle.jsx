import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-lg
        border border-(--color-border)
        bg-(--color-surface)
        text-(--color-text-secondary)
        transition
        hover:border-(--color-primary)
        hover:text-(--color-primary-light)
      "
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default ThemeToggle;