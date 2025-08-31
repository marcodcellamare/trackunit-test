import classNames from 'classnames';
import useSearch from '../stores/useSearch';
import { useEffect } from 'react';
import useGiphy from '../hooks/useGiphy';
import Image from './Image';
import { CircleAlertIcon, CirclePlayIcon, XIcon } from 'lucide-react';
import useLabel from '../stores/useLabel';

interface MainProps {
	className?: string;
}

const Main = ({ className }: MainProps) => {
	const query = useSearch((state) => state.query);
	const setQuery = useSearch((state) => state.setQuery);
	const images = useSearch((state) => state.images);
	const setImages = useSearch((state) => state.setImages);
	const setTotal = useSearch((state) => state.setTotal);
	const resetOffset = useSearch((state) => state.resetOffset);

	const setLabel = useLabel((state) => state.setLabel);

	const { getImages } = useGiphy();

	useEffect(() => {
		if (query) getImages();
	}, [query, getImages]);

	const handleReset = () => {
		setLabel('');
		setImages([]);
		setTotal(0);
		resetOffset();
		setQuery('');
	};

	return (
		<main className={classNames(['relative', className])}>
			<div className='absolute inset-0 my-5 overflow-x-hidden overflow-y-auto'>
				{query && (
					<h3 className='flex gap-1 items-center text-lg mb-5'>
						<span>
							Search: <strong>{query}</strong>
						</span>
						<button
							type='button'
							className='btn btn-xs btn-error'
							onClick={handleReset}>
							<XIcon className='text-svg' />
						</button>
					</h3>
				)}
				{images.length > 0 ? (
					<div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
						{images.map((image, k) => (
							<Image
								key={k}
								src={image}
							/>
						))}
					</div>
				) : (
					<h2
						className={classNames([
							'text-4xl flex gap-2 items-center',
							query ? 'text-error' : 'text-primary',
						])}>
						{query ? (
							<>
								<CircleAlertIcon className='text-svg' />
								No results
							</>
						) : (
							<>
								<CirclePlayIcon className='text-svg' />
								Start your search
							</>
						)}
					</h2>
				)}
			</div>
		</main>
	);
};
export default Main;
