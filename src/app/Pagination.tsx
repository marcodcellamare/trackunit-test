import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import useSearch from '../stores/useSearch';

const Pagination = () => {
	const images = useSearch((state) => state.images);
	const offset = useSearch((state) => state.offset);
	const setOffsetPrev = useSearch((state) => state.setOffsetPrev);
	const setOffsetNext = useSearch((state) => state.setOffsetNext);

	return (
		<div className='flex gap-1'>
			<button
				type='button'
				className='btn btn-outline btn-primary'
				disabled={images.length === 0 || !offset}
				onClick={setOffsetPrev}>
				<ArrowLeftIcon className='text-svg' />
			</button>
			<button
				type='button'
				className='btn btn-outline btn-primary'
				disabled={images.length === 0}
				onClick={setOffsetNext}>
				<ArrowRightIcon className='text-svg' />
			</button>
		</div>
	);
};

export default Pagination;
