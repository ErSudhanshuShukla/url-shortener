const UrlListSkeleton = () => {
  return (
    <div className="space-y-3 p-3 md:p-4 xl:space-y-0 xl:p-0">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
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
              <div className="h-10 w-10 shrink-0 rounded-[14px] bg-(--color-surface-hover)" />

              <div className="min-w-0 space-y-2">
                <div className="h-4 w-20 rounded bg-(--color-surface-hover)" />
                <div className="h-3 w-28 rounded bg-(--color-surface-hover)" />
              </div>
            </div>

            {/* Original URL */}
            <div className="min-w-0">
              <div className="h-4 w-3/4 max-w-md rounded bg-(--color-surface-hover)" />
            </div>

            {/* Clicks */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="h-4 w-4 rounded bg-(--color-surface-hover)" />
              <div className="h-4 w-7 rounded bg-(--color-surface-hover)" />
            </div>

            {/* Expiry */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-(--color-surface-hover)" />
              <div className="h-4 w-10 rounded bg-(--color-surface-hover)" />
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-(--color-surface-hover)" />
              <div className="h-9 w-9 rounded-xl bg-(--color-surface-hover)" />
              <div className="h-9 w-9 rounded-xl bg-(--color-surface-hover)" />
              <div className="h-9 w-9 rounded-xl bg-(--color-danger-bg)" />
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="xl:hidden">
            {/* Short URL */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-[14px] bg-(--color-surface-hover)" />

              <div className="min-w-0 space-y-2">
                <div className="h-4 w-20 rounded bg-(--color-surface-hover)" />
                <div className="h-3 w-28 rounded bg-(--color-surface-hover)" />
              </div>
            </div>

            {/* Original URL */}
            <div className="mt-4 border-t border-(--color-border) pt-4">
              <div className="mb-2 h-3 w-20 rounded bg-(--color-surface-hover)" />
              <div className="h-4 w-full rounded bg-(--color-surface-hover)" />
            </div>

            {/* Stats */}
            <div className="mt-4 flex items-center justify-between border-t border-(--color-border) pt-4">
              {/* Clicks */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-(--color-surface-hover)" />
                <div className="h-3 w-10 rounded bg-(--color-surface-hover)" />
                <div className="h-4 w-6 rounded bg-(--color-surface-hover)" />
              </div>

              {/* Expiry */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-(--color-surface-hover)" />
                <div className="h-4 w-10 rounded bg-(--color-surface-hover)" />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="h-9 rounded-xl bg-(--color-surface-hover)" />
              <div className="h-9 rounded-xl bg-(--color-surface-hover)" />
              <div className="h-9 rounded-xl bg-(--color-surface-hover)" />
              <div className="h-9 rounded-xl bg-(--color-danger-bg)" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrlListSkeleton;