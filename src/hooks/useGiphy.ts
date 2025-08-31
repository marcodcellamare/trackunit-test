import axios from 'axios';
import { useCallback } from 'react';
import useSearch from '../stores/useSearch';

const useGiphy = () => {
	const offset = useSearch((state) => state.offset);
	const query = useSearch((state) => state.query);
	const setImages = useSearch((state) => state.setImages);
	const setTotal = useSearch((state) => state.setTotal);

	const getImages = useCallback(async () => {
		if (!query) return;

		try {
			setImages([]);
			const results = await axios.get(import.meta.env.VITE_GIPHY_API, {
				params: {
					q: query,
					rating: import.meta.env.VITE_GIPHY_RATING,
					limit: import.meta.env.VITE_GIPHY_LIMIT,
					offset,
					api_key: import.meta.env.VITE_GIPHY_API_KEY,
				},
			});

			if (results.data.data.length > 0) {
				setImages(
					(
						results.data.data as {
							images: { downsized_medium: { url: string } };
						}[]
					).map((item) => item.images.downsized_medium.url)
				);
				setTotal(results.data.pagination.total_count);
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Axios error:', error.message);
				console.error('Response:', error.response?.data);
			} else {
				console.error('Unexpected error:', error);
			}
		}
	}, [query, setImages, offset]);

	return {
		getImages,
	};
};
export default useGiphy;
