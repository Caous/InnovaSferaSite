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
      <link rel="icon" href="logo.png" />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
