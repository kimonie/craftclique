export const metadata = {
  title: 'Craft Clique',
  description: 'Unveiling Creativity, One Pixel at a Time. - Seun Kikiowo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
