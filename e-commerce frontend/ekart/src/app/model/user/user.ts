import { Cart } from "../cart/cart";

export class user{
    constructor(
        private fullName: string,
        private email: string,
        private country: string,
        private phoneNumber: string,
        private carts: Cart[] = []
    ) {}
}