import axios from 'axios';
import { useCallback } from 'react';
import useSearch from '../stores/useSearch';

const useGiphy = () => {
	const page = useSearch((state) => state.page);
	const query = useSearch((state) => state.query);
	const setImages = useSearch((state) => state.setImages);

	const getImages = useCallback(async () => {
		if (!query) return;

		try {
			const results = await axios.get(import.meta.env.VITE_GIPHY_API, {
				params: {
					q: query,
					rating: import.meta.env.VITE_GIPHY_RATING,
					limit: import.meta.env.VITE_GIPHY_LIMIT,
					offset: page,
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
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Axios error:', error.message);
				console.error('Response:', error.response?.data);
			} else {
				console.error('Unexpected error:', error);
			}
		}
	}, [query, setImages, page]);

	return {
		getImages,
	};
};
export default useGiphy;
