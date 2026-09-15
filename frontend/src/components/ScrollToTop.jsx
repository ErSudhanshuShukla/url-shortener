import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      title="Scroll to top"
      className="
        fixed right-5 bottom-18 z-50
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-(--color-border)
        bg-(--color-surface)
        text-(--color-text-secondary)
        shadow-lg
        transition
        hover:border-(--color-primary)
        hover:bg-(--color-surface-hover)
        hover:text-(--color-primary)
      "
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default ScrollToTop;