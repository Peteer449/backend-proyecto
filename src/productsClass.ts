let products:Array<any>=[]

class ProductsClass{
  save(object){
    products.push({...object,id:products.length+1})
  }
  getById(id){
    const object=products.find(e=>e.id===id)
    return object
  }
  getAll(){
    return products
  }
  deleteById(id){
    const itemToDelete=products.find(e=>e.id===id)
    const index = products.indexOf(itemToDelete)
    products.splice(index,1)
  }
  deleteAll(){
    products = []
  }
}

export{ProductsClass}