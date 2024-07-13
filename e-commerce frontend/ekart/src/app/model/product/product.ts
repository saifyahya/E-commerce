export class Product {
    constructor(
        public name: string,
        public price: number,
        public description: string,
        public inStock: number,
        public discount: number,
        public image: string
    ) {}
}
