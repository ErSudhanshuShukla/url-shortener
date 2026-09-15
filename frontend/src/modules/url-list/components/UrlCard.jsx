import { useState } from "react";
import {
  Link2,
  BarChart3,
  Copy,
  ExternalLink,
  Trash2,
  Clock3,
  QrCode,
} from "lucide-react";

import useDeleteUrl from "../hooks/useDeleteUrl";
import useExpiry from "@/hooks/useExpiry";
import useCopy from "@/hooks/useCopy";
import QRCode from "@/components/QRCode";

const UrlCard = ({ data }) => {
  const [showQR, setShowQR] = useState(false);

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
      {/* Desktop */}
      <div className="hidden xl:grid xl:grid-cols-[180px_minmax(0,1fr)_90px_140px_172px] xl:items-center xl:gap-5">
        
        {/* Short URL */}
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          <div
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-[14px]
              bg-(--color-surface-hover)
              text-(--color-primary-light)
            "
          >
            <Link2 size={18} />
          </div>

          <div className="min-w-0">
            <p className="truncate font-semibold text-(--color-primary-light)">
              {shortCode}
            </p>

            <p className="truncate text-xs text-(--color-text-subtle)">
              {shortUrl}
            </p>
          </div>
        </div>

        {/* Original URL */}
        <div className="min-w-0">
          <p
            className="truncate text-sm text-(--color-text-secondary)"
            title={originalUrl}
          >
            {originalUrl}
          </p>
        </div>

        {/* Clicks */}
        <div className="flex shrink-0 items-center gap-2">
          <BarChart3 size={16} className="text-(--color-primary-light)" />

          <span className="font-semibold text-(--color-text-heading)">
            {clicks}
          </span>
        </div>

        {/* Expiry */}
        <div className="flex shrink-0 items-center gap-2">
          <Clock3 size={15} className="shrink-0 text-(--color-purple)" />

          <span className="truncate text-sm text-(--color-text-secondary)">
            {expiresIn}h
          </span>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Copy */}
          <button
            type="button"
            onClick={() => copyLink(shortUrl)}
            title={copied ? "Copied" : "Copy link"}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl
              border border-(--color-border-secondary)
              bg-(--color-surface-hover)
              text-(--color-text-secondary)
              transition
              hover:border-(--color-primary)
              hover:text-(--color-primary-light)
            "
          >
            <Copy size={15} />
          </button>

          {/* QR */}
          <button
            type="button"
            onClick={() => setShowQR((prev) => !prev)}
            title="QR Code"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl
              border border-(--color-border-secondary)
              bg-(--color-surface-hover)
              text-(--color-text-secondary)
              transition
              hover:border-(--color-primary)
              hover:text-(--color-primary-light)
            "
          >
            <QrCode size={15} />
          </button>

          {/* Open */}
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            title="Open link"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl
              border border-(--color-border-secondary)
              bg-(--color-surface-hover)
              text-(--color-text-secondary)
              transition
              hover:border-(--color-primary)
              hover:text-(--color-primary-light)
            "
          >
            <ExternalLink size={15} />
          </a>

          {/* Delete */}
          <button
            type="button"
            onClick={() => mutation.mutate(data._id)}
            title="Delete link"
            disabled={mutation.isPending}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl
              border border-(--color-border-danger)
              bg-(--color-danger-bg)
              text-(--color-danger)
              transition
              hover:bg-(--color-danger-hover)
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="xl:hidden">
        {/* Short URL */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-[14px]
              bg-(--color-surface-hover)
              text-(--color-primary-light)
            "
          >
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
        <div className="mt-4 border-t border-(--color-border) pt-4">
          <p
            className="
              mb-1 text-[10px] font-semibold uppercase
              tracking-wider text-(--color-text-subtle)
            "
          >
            Original URL
          </p>

          <p
            className="truncate text-sm text-(--color-text-secondary)"
            title={originalUrl}
          >
            {originalUrl}
          </p>
        </div>

        {/* Stats */}
        <div
          className="
            mt-4 flex items-center justify-between
            border-t border-(--color-border) pt-4
          "
        >
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-(--color-primary-light)" />

            <span className="text-xs text-(--color-text-subtle)">Clicks</span>

            <span className="font-semibold text-(--color-text-heading)">
              {clicks}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} className="text-(--color-purple)" />

            <span className="text-sm text-(--color-text-secondary)">
              {expiresIn}h
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {/* Copy */}
          <button
            type="button"
            onClick={() => copyLink(shortUrl)}
            title={copied ? "Copied" : "Copy link"}
            className="
              flex h-9 items-center justify-center gap-2
              rounded-xl
              border border-(--color-border-secondary)
              bg-(--color-surface-hover)
              text-(--color-text-secondary)
              transition
              hover:border-(--color-primary)
              hover:text-(--color-primary-light)
            "
          >
            <Copy size={15} />

            <span className="text-xs font-medium sm:inline">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>

          {/* QR */}
          <button
            type="button"
            onClick={() => setShowQR((prev) => !prev)}
            title="QR Code"
            className="
              flex h-9 items-center justify-center gap-2
              rounded-xl
              border border-(--color-border-secondary)
              bg-(--color-surface-hover)
              text-(--color-text-secondary)
              transition
              hover:border-(--color-primary)
              hover:text-(--color-primary-light)
            "
          >
            <QrCode size={15} />

            <span className="text-xs font-medium">QR</span>
          </button>

          {/* Open */}
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            title="Open link"
            className="
              flex h-9 items-center justify-center gap-2
              rounded-xl
              border border-(--color-border-secondary)
              bg-(--color-surface-hover)
              text-(--color-text-secondary)
              transition
              hover:border-(--color-primary)
              hover:text-(--color-primary-light)
            "
          >
            <ExternalLink size={15} />

            <span className="text-xs font-medium">Open</span>
          </a>

          {/* Delete */}
          <button
            type="button"
            onClick={() => mutation.mutate(data._id)}
            title="Delete link"
            disabled={mutation.isPending}
            className="
              flex h-9 items-center justify-center gap-2
              rounded-xl
              border border-(--color-border-danger)
              bg-(--color-danger-bg)
              text-(--color-danger)
              transition
              hover:bg-(--color-danger-hover)
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <Trash2 size={15} />

            <span className="text-xs font-medium">Delete</span>
          </button>
        </div>
      </div>

      {/* QR */}
      {showQR && (
        <div
          className="
            mt-5 flex justify-center
            border-t border-(--color-border)
            pt-5
          "
        >
          <QRCode value={shortUrl} />
        </div>
      )}
    </div>
  );
};

export default UrlCard;