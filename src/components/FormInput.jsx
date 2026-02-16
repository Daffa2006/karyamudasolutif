export function FormInput({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  required = false,
  ...props
}) {
  const hasError = !!error;

  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-2 text-foreground">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`py-2.5 sm:py-3 px-4 block w-full bg-layer rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:ring-2 focus:outline-none ${
            hasError
              ? "border border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border border-zinc-300 focus:border-teal-500 focus:ring-teal-500"
          }`}
          placeholder={placeholder}
          required={required}
          aria-describedby={hasError ? `${id}-error` : undefined}
          {...props}
        />
        {hasError && (
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
            <svg
              className="shrink-0 size-4 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          </div>
        )}
      </div>
      {hasError && (
        <p className="text-sm text-red-500 mt-2" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
