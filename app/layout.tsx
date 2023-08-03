"use client"

// layout.tsx
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";
import { MemberstackProvider } from "@memberstack/react";

const config = {
  publicKey: "pk_sb_632bf75a1f1cf9f374f5"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MemberstackProvider config={config}>
    <html lang="en">
      <body>
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </body>
    </html>
    </MemberstackProvider>
  );
}
