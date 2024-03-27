import { create } from "zustand";
import {persist} from "zustand/middleware"

let store = (set: any) => ({
    userID: "",
    setUserID: (text: string) => {
        set(()=>({
            userID: text,
        }))
    }
})

store = persist(store, {name: "userID"})

export const userStore = create(store);

