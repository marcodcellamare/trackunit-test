import classNames from 'classnames';
import useLabel from '../stores/useLabel';
import useSearch from '../stores/useSearch';

interface ImageProps {
	src: string;
}

const Image = ({ src }: ImageProps) => {
	const query = useSearch((state) => state.query);
	const label = useLabel((state) => state.label);
	const position = useLabel((state) => state.position);

	return (
		<div className='flex relative border-2 border-base-300 aspect-square justify-center items-center'>
			<img
				src={src}
				alt={query}
				className='max-w-full max-h-full'
			/>
			{label && (
				<div
					className={classNames([
						'absolute px-3 py-2 text-xs font-bold bg-black/50 text-white backdrop-blur-lg rounded-sm',
						{
							'top-1/2 left-1/2 -translate-1/2':
								position === 'center',
							'top-1 left-1/2 -translate-x-1/2':
								position === 'center-top',
							'bottom-1 left-1/2 -translate-x-1/2':
								position === 'center-bottom',
						},
					])}>
					{label}
				</div>
			)}
		</div>
	);
};
export default Image;
