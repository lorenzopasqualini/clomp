'use client';
import Button from '@/components/ui/Button';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

const NavbarActions = () => {
	const [isMounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!isMounted) {
		return null;
	}

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button className="flex items-center rounded-full bg-black px-4 py-2">
				<ShoppingBag size={20} color="white" />
			</Button>
			<span className="ml-2 text-sm font-medium text-white">0</span>
		</div>
	);
};

export default NavbarActions;
