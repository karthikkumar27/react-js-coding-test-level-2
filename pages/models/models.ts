export interface Rating {
    count: number,
    rate: number
}

export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    price: number,
    rating: Rating
}