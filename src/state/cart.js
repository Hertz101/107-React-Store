import {create} from 'zustand';

const useStore = create((set) => ({

    user: {
        name: "Adam",
        cohort: "68"
    },

    cart: [],

    clearCart: () =>
        set(() => ({
            cart: []
        }))

}))

// export the custom hook so it can be used in components
export default useStore
