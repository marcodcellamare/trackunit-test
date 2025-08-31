import { create } from 'zustand';

export type LabelPositionType = 'center-top' | 'center-bottom' | 'center';

interface LabelInterface {
	label: string;
	position: LabelPositionType;
	setLabel: (label: string) => void;
	setPosition: (position: LabelPositionType) => void;
}

const useLabel = create<LabelInterface>((set) => ({
	label: '',
	position: 'center',
	setLabel: (label) => set({ label }),
	setPosition: (position) => set({ position }),
}));
export default useLabel;
