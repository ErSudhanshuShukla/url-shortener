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
    <div className="fixed inset-x-0 bottom-20 z-50">
      <div className="mx-auto flex max-w-6xl justify-end px-4 sm:px-6">
        <button
          type="button"
          onClick={scrollToTop}
          title="Scroll to top"
          className="
    flex h-10 w-10 items-center justify-center
    rounded-xl
    border border-(--color-border)
    bg-(--color-bg)/60
    text-(--color-text-secondary)
    shadow-lg
    backdrop-blur-xl
    transition
    hover:border-(--color-primary)
    hover:bg-(--color-bg)/70
    hover:text-(--color-primary)
  "
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  );
}

export default ScrollToTop;
