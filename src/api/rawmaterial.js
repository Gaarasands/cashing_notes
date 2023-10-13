const baseUrl = "http://127.0.0.1:8000/rawmaterials/"

export const getAllRawMaterial = async()=>{
    let url = baseUrl + "getall";
    let response = await fetch(url);
    if(response.status === 200)
    { let data = await response.json()
      return data}}

export const getByIdRawMaterial = async (id) =>{
  let response = await fetch(baseUrl +"get/id/" + id);
  return [response.status , await response.json()]}

export const addRawMaterial = async(data)=>{
    let url = baseUrl+'add/';
    let options ={
      method:'POST',
      headers:{
        'Content-Type':'application/json'},
      body: JSON.stringify(data)}
    let response = await fetch(url,options);
    return [response.status , await response.json()]}


export const editRawMaterial = async(id , data)=>{
  let url = baseUrl + 'edit/' + id;
  let options = {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  let response = await fetch(url, options);
  return [response.status, await response.json()];
    }

export const deleteRawMaterial = async(id) => {
    let url= baseUrl+'delete/'+id;
    let options={
        method :'DELETE'
    }
    let response = await fetch(url,options)
    return response.status
}