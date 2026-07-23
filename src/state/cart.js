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
        })),

        addProductToCart:(product) =>
            set((state)=> ({
                cart: [...state.cart, product]
            }))


            
}))

// export the custom hook so it can be used in components
export default useStore
