let id = 1
let table:Array<any> = []

class Table{
  putInTable = (arr) =>{
    return(
      arr.forEach(element=>{`
      <tr class="align-middle">
        <th scope="row">${element.id}</th>
        <td>${element.title}</td>
        <td>${element.price}</td>
        <td><img src="${element.image}" height="100px"></td>
      </tr>
      `
    })
    )
  }

}

export {Table}
