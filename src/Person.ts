class Person{
  private firstName:string
  private lastName:string
  constructor(first:string,last:string){
    this.firstName = first
    this.lastName = last
  }

  getFullName = ()=>{
    return`${this.firstName} ${this.lastName}`
  }
}

const Pedro = new Person("Pedro","Esposito")

export {Person}