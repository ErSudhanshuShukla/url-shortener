import {
  Link2,
  BarChart3,
  Copy,
  ExternalLink,
  Trash2,
  Clock3,
} from "lucide-react";

import useDeleteUrl from "../hooks/useDeleteUrl";
import useExpiry from "@/hooks/useExpiry";
import useCopy from "@/hooks/useCopy";

const UrlCard = ({ data }) => {
  const { shortUrl, shortCode, originalUrl, clicks, expiresAt } = data;

  const mutation = useDeleteUrl();
  const expiresIn = useExpiry(expiresAt);
  const { copyLink, copied } = useCopy();

  return (
    <div
      className="
        rounded-[20px]
        border border-(--color-border)
        bg-(--color-surface-secondary)
        p-4
        md:p-5
        xl:grid
        xl:grid-cols-[180px_minmax(0,1fr)_90px_140px_132px]
        xl:items-center
        xl:gap-5
        xl:rounded-none
        xl:border-0
        xl:border-b
        xl:border-(--color-border)
        xl:bg-transparent
        xl:px-6
        xl:py-5
        xl:last:border-0
      "
    >
      {/* Short URL */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-(--color-surface-hover) text-(--color-primary-light)">
          <Link2 size={18} />
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-(--color-primary-light)">
            {shortCode}
          </p>

          <p className="truncate text-xs text-(--color-text-subtle)">
            {shortUrl}
          </p>
        </div>
      </div>

      {/* Original URL */}
      <div className="mt-4 border-t border-(--color-border) pt-4 xl:mt-0 xl:border-0 xl:pt-0">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-(--color-text-subtle) xl:hidden">
          Original URL
        </p>

        <p className="truncate text-sm text-(--color-text-secondary)">
          {originalUrl}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 flex items-center justify-between border-t border-(--color-border) pt-4 xl:mt-0 xl:block xl:border-0 xl:pt-0">
        <div className="flex items-center gap-2">
          <BarChart3 size={16} className="text-(--color-primary-light)" />

          <span className="text-xs text-(--color-text-subtle) xl:hidden">
            Clicks
          </span>

          <span className="font-semibold text-(--color-text-heading)">
            {clicks}
          </span>
        </div>

        {/* Mobile Expiry */}
        <div className="flex items-center gap-2 xl:hidden">
          <Clock3 size={15} className="text-(--color-purple)" />

          <span className="text-sm text-(--color-text-secondary)">
            {expiresIn}h
          </span>
        </div>
      </div>

      {/* Desktop Expiry */}
      <div className="hidden items-center gap-2 xl:flex">
        <Clock3 size={15} className="text-(--color-purple)" />

        <span className="truncate text-sm text-(--color-text-secondary)">
          {expiresIn}h
        </span>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-2 xl:mt-0">
        {/* Copy */}
        <button
          type="button"
          onClick={() => copyLink(shortUrl)}
          title={copied ? "Copied" : "Copy link"}
          className="
            flex h-9 flex-1 items-center justify-center gap-2
            rounded-xl
            border border-(--color-border-secondary)
            bg-(--color-surface-hover)
            text-(--color-text-secondary)
            transition
            hover:border-(--color-primary)
            hover:text-(--color-primary-light)
            xl:w-9
            xl:flex-none
          "
        >
          <Copy size={15} />

          <span className="text-xs font-medium xl:hidden">
            {copied ? "Copied" : "Copy"}
          </span>
        </button>

        {/* Open */}
        <a
          href={shortUrl}
          target="_blank"
          rel="noreferrer"
          title="Open link"
          className="
            flex h-9 flex-1 items-center justify-center gap-2
            rounded-xl
            border border-(--color-border-secondary)
            bg-(--color-surface-hover)
            text-(--color-text-secondary)
            transition
            hover:border-(--color-primary)
            hover:text-(--color-primary-light)
            xl:w-9
            xl:flex-none
          "
        >
          <ExternalLink size={15} />

          <span className="text-xs font-medium xl:hidden">Open</span>
        </a>

        {/* Delete */}
        <button
          onClick={() => mutation.mutate(data._id)}
          type="button"
          title="Delete link"
          className="
            flex h-9 flex-1 items-center justify-center gap-2
            rounded-xl
            border border-(--color-border-danger)
            bg-(--color-danger-bg)
            text-(--color-danger)
            transition
            hover:bg-(--color-danger-hover)
            xl:w-9
            xl:flex-none
          "
        >
          <Trash2 size={15} />

          <span className="text-xs font-medium xl:hidden">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default UrlCard;
