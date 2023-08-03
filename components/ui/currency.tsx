'use client';

import { useEffect, useState } from 'react';

export const formatter = new Intl.NumberFormat('en-GB', {
	style: 'currency',
	currency: 'EUR',
});

interface CurrencyProps {
	value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
	const [isMounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!isMounted) {
		return null;
	}

	return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
