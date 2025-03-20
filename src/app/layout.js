import "./globals.css";

export const metadata = {
  title: "Strikify",
  description: "Strike you keys with style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
