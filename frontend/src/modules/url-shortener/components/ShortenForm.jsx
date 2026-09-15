import { Link2, Sparkles, Tag } from "lucide-react";
import ResultCard from "./ResultCard";
import useShortenUrl from "../hooks/useShortenUrl";

const ShortenForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    mutation,
  } = useShortenUrl();

  return (
    <section className="rounded-[28px] border border-(--color-border) bg-(--color-surface) p-4 shadow-xl shadow-(--color-shadow)/20 sm:p-5 lg:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-(--color-primary) text-(--color-bg)">
          <Link2 size={18} />
        </div>

        <div>
          <h2 className="font-semibold text-(--color-text-heading)">
            Shorten a URL
          </h2>

          <p className="text-xs text-(--color-text-muted) sm:text-sm">
            Enter a URL and optionally choose a custom alias
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 lg:flex-row"
      >
        {/* URL */}
        <div className="min-w-0 flex-1">
          <div className="rounded-2xl bg-(--color-surface-input) px-4 sm:px-5">
            <input
              type="url"
              placeholder="https://example.com/your-long-url"
              {...register("url", {
                onChange: () => mutation.reset(),
              })}
              className="h-14 w-full bg-transparent text-sm text-(--color-text-primary) outline-none placeholder:text-(--color-text-placeholder) sm:text-base"
            />
          </div>
        </div>

        {/* Alias */}
        <div className="min-w-0 lg:w-57.5">
          <div className="flex items-center rounded-2xl bg-(--color-surface-input) px-4 sm:px-5">
            <Tag
              size={16}
              className="mr-2 shrink-0 text-(--color-text-subtle)"
            />

            <input
              type="text"
              placeholder="Custom alias (optional)"
              {...register("alias", {
                onChange: () => mutation.reset(),
              })}
              className="h-14 w-full min-w-0 bg-transparent text-sm text-(--color-text-primary) outline-none placeholder:text-(--color-text-placeholder)"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-(--color-primary) px-7 font-semibold text-(--color-bg) transition hover:bg-(--color-primary-hover) disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Sparkles size={17} />

          {mutation.isPending ? "Shortening..." : "Shorten"}
        </button>
      </form>

      {/* Backend Error */}
      {mutation.isError && (
        <div className="mt-3 rounded-xl border border-(--color-border-danger) bg-(--color-danger-bg) px-4 py-3">
          <p className="text-sm text-(--color-danger)">
            {mutation.error?.response?.data?.message ||
              "Something went wrong. Please try again."}
          </p>
        </div>
      )}

      {/* Result */}
      {mutation.isSuccess && mutation.data && (
        <ResultCard
          data={mutation.data.data}
          onClose={() => mutation.reset()}
        />
      )}
    </section>
  );
};

export default ShortenForm;