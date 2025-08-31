import { create } from 'zustand';

export type LabelPositionType = 'center-top' | 'center-bottom' | 'center';

interface LabelInterface {
	label: string;
	position: LabelPositionType;
	setLabel: (label: string) => void;
	setPostion: (position: LabelPositionType) => void;
}

const useLabel = create<LabelInterface>((set) => ({
	label: '',
	position: 'center-top',
	setLabel: (label) => set({ label }),
	setPostion: (position) => set({ position }),
}));
export default useLabel;
