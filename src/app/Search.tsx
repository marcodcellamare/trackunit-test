import { SearchIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import useSearch from '../stores/useSearch';

const Search = () => {
	const setQuery = useSearch((state) => state.setQuery);
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		if (value) {
			setQuery(value);
			setValue('');

			if (inputRef.current) inputRef.current.focus();
		}
		e.preventDefault();
	};

	return (
		<form
			className='flex gap-1'
			onSubmit={handleSubmit}>
			<input
				ref={inputRef}
				value={value}
				className='input'
				placeholder='Search'
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				type='submit'
				className='btn btn-primary'>
				<SearchIcon className='text-svg' />
			</button>
		</form>
	);
};
export default Search;
