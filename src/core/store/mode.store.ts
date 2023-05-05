import create from 'zustand';

export type ModeStoreType = {
  mode: string;
  setMode: (data: string) => void;
};

const useModeStore = create<ModeStoreType>((set) => ({
  mode: localStorage.getItem('mode') || 'dark',
  setMode: (data: string) => {
    set((state: ModeStoreType) => ({
      ...state,
      mode: data,
    }));
  },
}));

export default useModeStore;
