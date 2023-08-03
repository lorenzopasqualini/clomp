'use client';
import { Product } from '@/types';
import Image from 'next/image';
import IconButton from '@/components/ui/iconbutton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from '@/components/ui/currency';

interface ProductCardProps {
	data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	return (
		<div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
			<div className="aspect-square rounded-xl bg-gray-100 relative">
				<Image
					src={data?.images?.[0]?.url}
					alt="img"
					fill
					className="aspect-square object-cover rounded-md"
				/>
				<div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex justify-center gap-x-6">
						<IconButton
							onClick={() => {}}
							icon={<Expand size={20} className="text-gray-600" />}
						/>
						<IconButton
							onClick={() => {}}
							icon={<ShoppingCart size={20} className="text-gray-600" />}
						/>
					</div>
				</div>
			</div>

			<div>
				<p className="text-lg">{data.name}</p>
				<p className="text-sm text-gray-500">{data.category?.name}</p>
			</div>

			<div className="flex items-center justify-between">
				<Currency value={data?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
