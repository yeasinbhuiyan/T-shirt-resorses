
const loadData =async()=>{
    const res = await fetch('tshirts.json')
    const products = await res.json()
    return products
}

export {loadData}