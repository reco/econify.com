export function prefix(prefix: string, className: string) {
  return className
    .split(" ")
    .map((style) => `${prefix}${style}`)
    .join(" ");
}
