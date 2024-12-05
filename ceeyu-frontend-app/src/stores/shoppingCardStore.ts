import { defineStore } from "pinia";
import { IProduct } from "@/types/common/product";
import {ref, computed} from 'vue';

export const useCardStore = defineStore('card', () => {
    const items = ref<IProduct[]>([])

    function addItem(product: IProduct) {
        const isExist = items.value.find(item => item.id === product.id)
        
        isExist ? console.log("Nothing. Potentially, we could just increase a counter. I decided don't do something here for now.") : items.value.push(product)
    }

    function removeItem(productId: string) {
        items.value = items.value.filter(item => item.id !== productId)
    }

    const itemCount = computed(() => items.value.length)

    // I don't like reduce
    const totalPrice = computed(() => {
        let total = 0;
        for (const product of items.value) {
          total += product.details.price;
        }
        return total;
      });
      

    return {
        items,
        addItem,
        removeItem,
        itemCount,
        totalPrice
    }
})