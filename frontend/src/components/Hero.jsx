import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="pb-10 pt-10 sm:pt-12">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-(--color-surface-secondary) px-4 py-2 text-sm font-medium text-(--color-primary-light)">
          <Sparkles size={15} />
          URL Shortener
        </span>

        <h1 className="mt-6 text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-(--color-text-heading) sm:text-6xl lg:text-7xl">
          Make your links
          <br />
          <span className="text-(--color-primary-light)">shorter.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-(--color-text-secondary) sm:text-lg sm:leading-8">
          Create clean, shareable short URLs and keep track of every click from
          one simple dashboard.
        </p>
      </div>
    </section>
  );
}

export default Hero;
