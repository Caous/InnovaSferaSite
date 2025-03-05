import { Plus_Jakarta_Sans } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "InnovaSfera | Tecnologia e Inovação",
  description:
    "Somos uma empresa de design, tecnologia e inovação dedicado a potencializar a presença digital das marcas dos nossos clientes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={plusJakarta.className}>
      <head>
        <link rel="icon" href="logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
