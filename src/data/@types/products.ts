export type Products = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    rating:rating
}

type rating = 
{
    rate:number,
    count:number
}