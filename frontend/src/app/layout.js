import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";


export const metadata = {
  title: "NexBizn",
  description: "Platform for advetising and marketing businesses on NFTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
