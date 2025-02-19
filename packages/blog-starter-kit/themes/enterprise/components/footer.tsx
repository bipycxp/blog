import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="bg-[#385ee4] py-10">
			<Container>
				<div className="flex flex-col sm:flex-row items-center justify-between">
					<div className="text-white mb-4 sm:mb-0 font-mulish font-bold">
						<Link href="https://neary.io">
							<Image className="md:max-w-none mx-auto inline mr-4" src={PUBLICATION_LOGO ?? ''} width={70} height={51} alt="Neary.io Logo" />
							<span>Neary.io</span>
						</Link>
					</div>
					<div>
						<div className="text-sm font-light text-white space-x-4">
							<Link href="https://neary.io/faq">FAQ</Link>
							<Link href="https://neary.io/policies/terms-of-use">Terms of use</Link>
							<Link href="https://neary.io/policies/privacy">Privacy policy</Link>
						</div>
					</div>
				</div>
			</Container>
    </footer>
	);
};
