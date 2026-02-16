export function CategorySelect({
  value,
  onChange,
  error,
  required = false,
  label = "Kategori",
  id = "category",
  name = "category",
  categories = [
    { value: "woodworking", label: "Woodworking" },
    { value: "furniture", label: "Furniture" },
    { value: "tools-equipment", label: "Tools & Equipment" },
    { value: "welding", label: "Welding" },
    { value: "electrical", label: "Electrical" },
  ],
  placeholder = "-- Pilih kategori --",
}) {
  const hasError = !!error;

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-medium mb-3 text-foreground"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`py-2.5 sm:py-3 px-4 block w-full bg-layer rounded-lg sm:text-sm text-foreground focus:ring-2 focus:outline-none ${
          hasError
            ? "border border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border border-zinc-300 focus:border-teal-500 focus:ring-teal-500"
        }`}
        required={required}
        aria-describedby={hasError ? `${id}-error` : undefined}
      >
        <option value="">{placeholder}</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      {hasError && (
        <p className="text-sm text-red-500 mt-2" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
