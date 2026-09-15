import {
  Check,
  Copy,
  ExternalLink,
  Link2,
  Clock3,
  X,
  QrCode,
} from "lucide-react";
import { useState } from "react";
import useCopy from "@/hooks/useCopy";
import useExpiry from "@/hooks/useExpiry";
import QRCode from "@/components/QRCode";

const ResultCard = ({ data, onClose }) => {
  const [showQR, setShowQR] = useState(false);
  const { copyLink, copied } = useCopy();
  const expiresIn = useExpiry(data.expiresAt);

  return (
    <section className="mt-4 overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-surface)">
      <div className="p-3 sm:p-4 lg:p-5">
        {/* Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Status */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-success) text-(--color-bg)">
              <Check size={17} strokeWidth={2.5} />
            </div>

            <div className="whitespace-nowrap">
              <p className="text-sm font-semibold text-(--color-text-heading)">
                Link created
              </p>
              <p className="text-[11px] text-(--color-text-muted)">
                Your short URL is ready
              </p>
            </div>
          </div>

          {/* Short URL */}
          <div className="min-w-0 flex-1 rounded-xl bg-(--color-surface-input) px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <Link2
                size={16}
                className="shrink-0 text-(--color-primary)"
              />
              <span className="truncate text-sm font-medium text-(--color-primary-light)">
                {data?.shortUrl}
              </span>
            </div>
          </div>

          {/* Copy */}
          <button
            type="button"
            onClick={() => copyLink(data?.shortUrl)}
            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-(--color-primary) px-5 text-sm font-semibold text-(--color-bg) transition hover:bg-(--color-primary-hover)"
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy
              </>
            )}
          </button>

          {/* QR */}
          <button
            type="button"
            onClick={() => setShowQR((prev) => !prev)}
            title="QR Code"
            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-(--color-border-secondary) bg-(--color-surface-secondary) px-5 text-sm font-medium text-(--color-text-secondary) transition hover:bg-(--color-surface-hover) hover:text-(--color-text-primary)"
          >
            <QrCode size={16} />
            QR
          </button>

          {/* Open */}
          <a
            href={data?.shortUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-(--color-border-secondary) bg-(--color-surface-secondary) px-5 text-sm font-medium text-(--color-text-secondary) transition hover:bg-(--color-surface-hover) hover:text-(--color-text-primary)"
          >
            <ExternalLink size={16} />
            Open
          </a>

          {/* Expiry */}
          <div className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface-secondary) px-4 text-xs text-(--color-text-muted)">
            <Clock3 size={14} className="text-(--color-purple)" />
            <span>{expiresIn}h</span>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            title="Dismiss"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-(--color-text-subtle) transition hover:bg-(--color-surface-hover) hover:text-(--color-text-primary)"
          >
            <X size={17} />
          </button>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-success) text-(--color-bg)">
                <Check size={17} strokeWidth={2.5} />
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-(--color-text-heading)">
                  Link created
                </p>
                <p className="text-xs text-(--color-text-muted)">
                  Your short URL is ready
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              title="Dismiss"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-(--color-text-subtle) transition hover:bg-(--color-surface-hover) hover:text-(--color-text-primary)"
            >
              <X size={17} />
            </button>
          </div>

          {/* Short URL */}
          <div className="mt-4 rounded-2xl bg-(--color-surface-input) p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-(--color-text-subtle)">
              Your short URL
            </p>

            <div className="flex min-w-0 items-center gap-2">
              <Link2
                size={16}
                className="shrink-0 text-(--color-primary)"
              />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-(--color-primary-light) sm:text-base">
                {data?.shortUrl}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-3 grid grid-cols-4 gap-2">
            {/* Copy */}
            <button
              type="button"
              onClick={() => copyLink(data?.shortUrl)}
              className="flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl bg-(--color-primary) px-2 text-xs font-semibold text-(--color-bg) transition hover:bg-(--color-primary-hover) sm:gap-2 sm:px-3 sm:text-sm"
            >
              {copied ? (
                <>
                  <Check size={15} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* QR */}
            <button
              type="button"
              onClick={() => setShowQR((prev) => !prev)}
              className="flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-(--color-border-secondary) bg-(--color-surface-secondary) px-2 text-xs font-medium text-(--color-text-secondary) transition hover:bg-(--color-surface-hover) hover:text-(--color-text-primary) sm:gap-2 sm:px-3 sm:text-sm"
            >
              <QrCode size={15} />
              <span>QR</span>
            </button>

            {/* Open */}
            <a
              href={data?.shortUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-(--color-border-secondary) bg-(--color-surface-secondary) px-2 text-xs font-medium text-(--color-text-secondary) transition hover:bg-(--color-surface-hover) hover:text-(--color-text-primary) sm:gap-2 sm:px-3 sm:text-sm"
            >
              <ExternalLink size={15} />
              <span>Open</span>
            </a>

            {/* Expiry */}
            <div className="flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-(--color-border) bg-(--color-surface-secondary) px-2 text-[11px] text-(--color-text-muted) sm:gap-2 sm:px-3 sm:text-xs">
              <Clock3
                size={14}
                className="shrink-0 text-(--color-purple)"
              />
              <span className="truncate">{expiresIn}h</span>
            </div>
          </div>
        </div>

        {/* QR Code */}
        {showQR && (
          <div className="mt-4 flex justify-center border-t border-(--color-border) pt-4">
            <QRCode value={data?.shortUrl} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultCard;