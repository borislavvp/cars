"use client";

import { Header } from "./shared/Header";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col overflow-y-auto px-32 py-4">
      {<Header />}
      {children}
    </div>
  );
}
