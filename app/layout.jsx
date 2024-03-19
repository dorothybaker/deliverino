import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const alkatra = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Deliverino - Fastest Pizza Delivery",
  description: "The fastest pizza delivery in town!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://www.svgrepo.com/show/387356/delivery.svg"
        type="image/x-icon"
      />
      <body className={alkatra.className}>
        <MantineProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
