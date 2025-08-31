import useSearch from '../stores/useSearch';

interface ImageProps {
	src: string;
}

const Image = ({ src }: ImageProps) => {
	const query = useSearch((state) => state.query);

	return (
		<div className='flex border-2 border-base-300 aspect-square justify-center items-center'>
			<img
				src={src}
				alt={query}
				className='max-w-full max-h-full'
			/>
		</div>
	);
};
export default Image;
