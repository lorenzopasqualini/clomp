import getCategories from '@/actions/getcategories';
import MainNav from '@/components/mainnav';
import NavbarActions from '@/components/navbaractions';
import Container from '@/components/ui/container';
import Link from 'next/link';

export const revalidate = 0;

const Navbar = async () => {
	const categories = await getCategories();
	return (
		<div className="border-b">
			<Container>
				<Link href="/" className="p-4 flex justify-center">
					<p className="font-semibold text-2xl">Clomp, Inc.</p>
				</Link>
				<div className="mx-4 sm:mx-0 sm:px-4 lg:px-8 flex items-center h-16">
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
