import { getLocal } from "../Main.jsx/LocalStorage"



const loadData =async()=>{
    const res = await fetch('tshirts.json')
    const products = await res.json()

    
const get = getLocal()
const savedCart = []

    for(const id in get){

        const addedProduct = products.find(pd => pd._id == id) 
        if(addedProduct){
                savedCart.push(addedProduct)
        }
    }

 console.log(savedCart)
    return savedCart

}
export { loadData}