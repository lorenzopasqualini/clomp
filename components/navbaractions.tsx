'use client';

import Button from '@/components/button';
import useCart from '@/hooks/useCart';
import { cn } from '@/lib/utils';
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
				className={cn(
					'flex items-center rounded-md p-2',
					cart.items.length !== 0
						? 'animate-pulse bg-[#5c39fc]'
						: 'animate-none bg-neutral-500'
				)}
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
