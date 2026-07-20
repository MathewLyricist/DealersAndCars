'use client';
import DealersTable from '@/components/DealersTable/DealersTable';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
	const [dealers, setDealers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const fetchDealers = async () => {
			try {
				const response = await fetch('http://localhost:8080/dealers');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setDealers(data);
			} catch (error) {
				console.error('Fetch error:', error);
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchDealers();
	}, []);
	
	const handleDealerClick = id => {
		router.push(`/${id}`);
	};

	return (
		<div className='container'>
			{loading && <p>Загрузка...</p>}
			{error && <p>Ошибка: {error}</p>}
			<DealersTable dealers={dealers} onDealerClick={handleDealerClick} />
		</div>
	);
}
