export const metadata = {
  title: "ALAZAÏS",
  description: "Portails. Quanticités. Rédemption.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
