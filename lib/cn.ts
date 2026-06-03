// This is a simplified `cn` function. In a real project, you might use libraries like `clsx` and `tailwind-merge`.
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function cnHeader(scrolled: boolean) {
  return cn(
    "fixed left-0 right-0 top-0 z-50",
    "border-b border-transparent transition-all duration-300",
    scrolled ? "glass-panel border-white/10" : "bg-transparent",
  );
}

export function cnCardLink(extra: string) {
  return cn("group block", extra);
}

export function cnProductCard(extra: string) {
  return cn("reveal group overflow-hidden bg-white/[0.03]", extra);
}
