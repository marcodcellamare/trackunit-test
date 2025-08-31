import { create } from 'zustand';

interface SearchInterface {
	page: number;
	query: string;
	images: string[];
	setQuery: (query: string) => void;
	setImages: (images: string[]) => void;
}

const useSearch = create<SearchInterface>((set) => ({
	page: 0,
	query: '',
	images: [],
	setQuery: (query) => set({ query }),
	setImages: (images) => set({ images }),
}));
export default useSearch;
