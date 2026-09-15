import { Link2 } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--color-surface-secondary) text-(--color-primary-light)">
        <Link2 size={24} />
      </div>

      <h3 className="text-lg font-semibold text-(--color-text-heading)">
        No shortened URLs yet
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-(--color-text-muted)">
        You haven't created any shortened URLs yet. Add your first URL above
        to start tracking your links.
      </p>

      <a
        href="#home"
        className="mt-6 rounded-xl bg-(--color-primary) px-5 py-2.5 text-sm font-semibold text-(--color-bg) transition hover:bg-(--color-primary-hover)"
      >
        Create your first link
      </a>
    </div>
  );
};

export default EmptyState;