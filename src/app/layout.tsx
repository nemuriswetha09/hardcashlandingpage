import './globals.css';
import { Providers } from '@/app/components/ThemeProvider';
 import Chatbot from "./components/Chatbot";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}
                  <Chatbot />
        </Providers>
      </body>
    </html>
  );
}