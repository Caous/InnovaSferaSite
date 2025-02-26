import { Open_Sans } from "next/font/google";

import { GlobalStyles, StyledComponentsRegistry } from "@/lib";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "InnovaSfera - Next & Styled",
  description: "InnovaSfera - Next & Styled",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={openSans.className}>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
