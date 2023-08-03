import getBillboards from '@/actions/getbillboard';
import getProducts from '@/actions/getproduct';
import Billboard from '@/components/billboard';
import ProductList from '@/components/productlist';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboards('b5f5ea6b-c717-42d0-b578-8d7a28d2b165');
	const product = await getProducts({ isFeatured: true });
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured" items={product} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
