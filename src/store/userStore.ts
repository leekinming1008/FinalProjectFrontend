import { create } from "zustand";

interface UserStore {
    userID: string;
    setUserID: (text: string) => void;

}

export const userStore = create<UserStore>((set) => ({
    userID: "",
    setUserID: (text: string) => set({ userID: text }),
}));

