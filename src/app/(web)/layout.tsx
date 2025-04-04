import Link from "next/link";
import { ReactNode } from "react";
import LinkPage from "./LinkPage";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <LinkPage />
    </>
  );
}
