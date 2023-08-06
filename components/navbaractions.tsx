'use client';
import Button from '@/components/button';
import useCart from '@/hooks/useCart';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavbarActions = () => {
	const [isMounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const cart = useCart();
	const router = useRouter();

	if (!isMounted) {
		return null;
	}

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				onClick={() => router.push('/cart')}
				className="flex items-center rounded-full bg-black px-4 py-2"
			>
				<ShoppingBag size={20} color="white" />
				<span className="ml-2 text-sm font-medium text-white">
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
