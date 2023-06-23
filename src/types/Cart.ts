import { Product } from "./Produto"

export type Cart = Product & {
    quantity: number;
}