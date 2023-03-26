import React from "react";
import BaseLayout from "./BaseLayout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseLayout>
      <h1>Home Layout</h1>
      {children}
    </BaseLayout>
  );
}
