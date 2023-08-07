import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modalProvider';
import ToastProvider from '@/providers/toastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Clomp',
	description: 'Eccomerce Storefront',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				<ModalProvider />
				<ToastProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
