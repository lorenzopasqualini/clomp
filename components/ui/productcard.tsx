'use client';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/iconbutton';
import useCart from '@/hooks/useCart';
import usePreviewModal from '@/hooks/usePreviewModal';
import { Product } from '@/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

interface ProductCardProps {
	data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	const router = useRouter();
	const handleClick = () => {
		router.push(`/product/${data?.id}`);
	};
	const previewModal = usePreviewModal();
	const cart = useCart();

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		previewModal.onOpen(data);
	};

	const onAdd: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		cart.addItem(data);
	};

	return (
		<div
			onClick={handleClick}
			className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
		>
			<div className="aspect-square rounded-xl bg-purple-50 relative transition duration-200 ease-in-out hover:scale-105">
				<Image
					src={data?.images?.[0]?.url}
					alt="img"
					fill
					className="aspect-square object-cover rounded-md"
				/>
				<div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex justify-center gap-x-6">
						<IconButton
							onClick={onPreview}
							icon={<Expand size={20} className="text-gray-600" />}
						/>
						<IconButton
							onClick={onAdd}
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
