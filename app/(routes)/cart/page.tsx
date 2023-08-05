'use client';
import Container from '@/components/ui/container';
import useCart from '@/hooks/useCart';
import CartItem from './components/cartitem';
import CartSummary from './components/cartsummary';

const CartPage = () => {
	const cart = useCart();
	return (
		<div className="bg-white">
			<Container>
				<div className="px-4 py-16 sm:px-6 lg:px-8">
					<h1 className="text-3xl text-black font-semibold">Cart</h1>
					<div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
						<div className="lg:col-span-7">
							{cart.items.length === 0 && (
								<p className="text-neutral-500">Nothing on cart yet</p>
							)}
							<ul>
								{cart.items.map((item) => (
									<CartItem key={item.id} data={item} />
								))}
							</ul>
						</div>
						<CartSummary />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CartPage;
