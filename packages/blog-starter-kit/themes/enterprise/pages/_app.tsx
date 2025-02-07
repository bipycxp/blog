import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Mulish } from 'next/font/google';
import '../styles/index.css';

const mulish = Mulish({
	subsets: ['latin'],
	variable: '--font-mulish',
	display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		(window as any).adjustIframeSize = (id: string, newHeight: string) => {
			const i = document.getElementById(id);
			if (!i) return;
			// eslint-disable-next-line radix
			i.style.height = `${parseInt(newHeight)}px`;
		};
	}, []);

	return (
		<div className={`${mulish.variable} font-mulish`}>
			<Component {...pageProps} />
		</div>
	);
}
