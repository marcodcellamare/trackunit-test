import classNames from 'classnames';
import useSearch from '../stores/useSearch';
import { useEffect } from 'react';
import useGiphy from '../hooks/useGiphy';
import Image from './Image';

interface MainProps {
	className?: string;
}

const Main = ({ className }: MainProps) => {
	const query = useSearch((state) => state.query);
	const images = useSearch((state) => state.images);
	const { getImages } = useGiphy();

	useEffect(() => {
		if (query) getImages();
	}, [query, getImages]);

	return (
		<main className={classNames(['relative', className])}>
			<div className='absolute inset-0 my-5 overflow-x-hidden overflow-y-auto'>
				{query && (
					<h3 className='text-lg mb-5'>
						Search: <strong>{query}</strong>
					</h3>
				)}
				{images && (
					<div className='grid gap-5 grid-cols-1 lg:grid-cols-3'>
						{images.map((image, k) => (
							<Image
								key={k}
								src={image}
							/>
						))}
					</div>
				)}
			</div>
		</main>
	);
};
export default Main;
