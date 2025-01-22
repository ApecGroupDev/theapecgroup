import '../styles/globals.css';

export const metadata = {
  title: 'APEC Main Website',
  description: 'APEC Main Website',
  icons: {
    icon: '/logos/One-Stop-Shop-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-200 text-gray-800">
      <head>
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-screen">
        {/* Render children */}
        {children}
      </body>
    </html>
  );
}
