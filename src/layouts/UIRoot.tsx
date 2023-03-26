import { MantineProvider } from "@mantine/core";
import { rtlCache } from "app/setup/rtl";
import React from "react";

export default function UIRoot({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
      emotionCache={rtlCache}
    >
      {children}
    </MantineProvider>
  );
}
