'use client';

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();
	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));
	return (
		<nav className="flex items-center justify-start space-x-1">
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						'rounded-md text-sm font-medium transition-colors hover:text-[#5c39fc]',
						route.active
							? 'bg-[#5c39fc] text-white font-bold hover:text-white'
							: 'text-gray-800'
					)}
				>
					<button className="rounded-md text-small p-2 gap-1 border border-gray-300">
						{route.label}
					</button>
				</Link>
			))}
		</nav>
	);
};

export default MainNav;
