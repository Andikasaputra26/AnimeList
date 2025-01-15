import { Gabarito } from "next/font/google";
import "@/app/globals.css";

const gabaritto = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "WebsiteAnime",
  description: "Website Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabaritto.className} bg-dark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
