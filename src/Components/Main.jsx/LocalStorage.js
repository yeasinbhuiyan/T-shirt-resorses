


const addLocal = (id) => {

    let savedTshirt = {}

    // const get = JSON.parse(localStorage.getItem('t-shirt'))
    const get = getLocal()
    if (get) {
        savedTshirt = get
    }

    const value = savedTshirt[id]
    if (value) {
        const sum = value + 1
        savedTshirt[id] = sum
    }
    else {
        savedTshirt[id] = 1
    }

    localStorage.setItem('t-shirt', JSON.stringify(savedTshirt))
}





const getLocal = () => {
    const get = JSON.parse(localStorage.getItem('t-shirt'))
    return get
}

const removeLocal=(id)=>{
  
    const get = getLocal()

    if(id in get){
        
        delete get[id]
    }
    localStorage.setItem('t-shirt' , JSON.stringify(get))

}

export { addLocal ,getLocal,removeLocal}