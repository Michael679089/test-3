import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="bg-blue-600 text-white text-xl font-bold p-4 text-center">
          Welcome to Michael's Next.js App
        </div>

        {children}

        <div className="bg-blue-600 text-white text-xl font-bold p-4 text-center">
          THIS IS A FOOTER 
          <p className="text-slate-200 font-extralight"> All rights reserved. </p>
        </div>
      </body>
    </html>
  );
}