import { create } from 'zustand';

interface SearchInterface {
	offset: number;
	total: number;
	query: string;
	images: string[];
	resetOffset: () => void;
	setOffsetPrev: () => void;
	setOffsetNext: () => void;
	setTotal: (total: number) => void;
	setQuery: (query: string) => void;
	setImages: (images: string[]) => void;
}

const useSearch = create<SearchInterface>((set) => ({
	offset: 0,
	total: 0,
	query: '',
	images: [],
	resetOffset: () => set({ offset: 0 }),
	setOffsetPrev: () =>
		set((state) => ({ offset: state.offset > 0 ? state.offset - 1 : 0 })),
	setOffsetNext: () =>
		set((state) => ({
			offset:
				state.offset < state.total - 1 ? state.offset + 1 : state.total,
		})),
	setTotal: (total) => set({ total }),
	setQuery: (query) => set({ query }),
	setImages: (images) => set({ images }),
}));
export default useSearch;
