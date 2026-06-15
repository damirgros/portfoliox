"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const key = useMemo(() => pathname, [pathname]);

  return (
    <main key={key} className="transition-page min-h-[calc(100vh-80px)]">
      {children}
    </main>
  );
}
