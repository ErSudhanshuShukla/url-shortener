import { RefreshCw } from "lucide-react";

import useUrls from "../hooks/useUrls";

import UrlCard from "./UrlCard";
import EmptyState from "./EmptyState";

const UrlList = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useUrls();

  return (
    <section className="mt-12 sm:mt-14">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-(--color-text-heading) sm:text-2xl">
            Your links
          </h2>

          <p className="mt-1 text-xs text-(--color-text-muted) sm:text-sm">
            Manage and track your shortened URLs.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!isLoading && !isError && data?.length > 0 && (
            <span className="rounded-full bg-(--color-surface-secondary) px-4 py-2 text-xs font-medium text-(--color-primary-light) sm:text-sm">
              {data.length} links
            </span>
          )}

          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            title="Refresh links"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-(--color-border-secondary) bg-(--color-surface-hover) text-(--color-text-secondary) transition hover:border-(--color-primary) hover:text-(--color-primary-light) disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              size={15}
              className={isFetching ? "animate-spin" : ""}
            />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-surface)">
        {isLoading && (
          <div className="px-6 py-12 text-center text-sm text-(--color-text-muted)">
            Loading links...
          </div>
        )}

        {isError && (
          <div className="px-6 py-12 text-center">
            <p className="text-sm text-(--color-danger)">
              {error.message}
            </p>
          </div>
        )}

        {!isLoading && !isError && data?.length === 0 && (
          <EmptyState />
        )}

        {!isLoading && !isError && data?.length > 0 && (
          <>
            <div className="hidden border-b border-(--color-border) px-6 py-4 xl:grid xl:grid-cols-[180px_minmax(0,1fr)_90px_140px_132px] xl:items-center xl:gap-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-text-subtle)">
                Short URL
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-text-subtle)">
                Original URL
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-text-subtle)">
                Clicks
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-text-subtle)">
                Expiry
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-text-subtle)">
                Actions
              </span>
            </div>

            <div className="space-y-3 p-3 md:p-4 xl:space-y-0 xl:p-0">
              {data.map((item) => (
                <UrlCard key={item._id} data={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default UrlList;