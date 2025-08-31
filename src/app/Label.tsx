import classNames from 'classnames';
import useLabel, { type LabelPositionType } from '../stores/useLabel';
import useSearch from '../stores/useSearch';

interface LabelProps {
	className?: string;
}

const Label = ({ className }: LabelProps) => {
	const images = useSearch((state) => state.images);
	const label = useLabel((state) => state.label);
	const position = useLabel((state) => state.position);

	const setLabel = useLabel((state) => state.setLabel);
	const setPosition = useLabel((state) => state.setPosition);

	return (
		<form
			className={classNames(['flex gap-1', className])}
			onSubmit={(e) => e.preventDefault()}>
			<input
				value={label}
				className={classNames([
					'input border-2',
					{
						'input-primary': label,
					},
				])}
				placeholder='Add a label'
				disabled={images.length === 0}
				onChange={(e) => setLabel(e.target.value)}
			/>
			<select
				value={position}
				className={classNames([
					'select border-2',
					{
						'select-primary': label,
					},
				])}
				disabled={!label || images.length === 0}
				onChange={(e) =>
					setPosition(e.target.value as LabelPositionType)
				}>
				<option value='center'>Centered</option>
				<option value='center-top'>On the top</option>
				<option value='center-bottom'>On the bottom</option>
			</select>
		</form>
	);
};
export default Label;
