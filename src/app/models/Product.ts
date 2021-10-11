export interface Product{
    id: number,
    name: string,
    price: number,
    url: string | Blob,
    description: string
} 
export const productCount: string[] = ["1", "2", "3", "4", "5"];