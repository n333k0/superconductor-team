import "./globals.css";

export const metadata = {
  title: "Agency Discovery OS Preview",
  description: "Local review preview for Agency Discovery OS client outputs"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
