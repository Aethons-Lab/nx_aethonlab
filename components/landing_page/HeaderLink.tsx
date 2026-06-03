import * as React from "react";

export function HeaderLink({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      className="text-mono text-[11px] uppercase tracking-[0.24em] text-white/50 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}
