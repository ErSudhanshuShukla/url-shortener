import { useState } from "react";

const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const copyLink = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return {
    copyLink,
    copied,
  };
};

export default useCopy;