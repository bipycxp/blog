import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="bg-[#385ee4] py-10">
			<Container>
				<div className="max-w-6xl">
					<div className="flex flex-col sm:flex-row items-center justify-between">
						<div className="text-white mb-4 sm:mb-0 font-mulish font-bold">
							<a href="/">
								<img className="md:max-w-none mx-auto inline mr-4" src={PUBLICATION_LOGO} width={70} alt="Logo" />
								<span>Neary.io</span>
							</a>
						</div>
						<div>
							<div className="text-sm font-light text-white space-x-4">
								<a href="/faq">FAQ</a>
								<a href="/policies/terms-of-use">Terms of use</a>
								<a href="/policies/privacy">Privacy policy</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
      
    </footer>
	);
};
