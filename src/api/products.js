const baseUrl = "http://127.0.0.1:8000/products/";

export const getAllProducts = async()=>{
  let url = baseUrl + "getall";
  let response = await fetch(url);
  if(response.status === 200)
  { let data = await response.json()
    return data}}

export const getProductById = async (id) =>{
  let response = await fetch(baseUrl +"get/id/" + id);
  return [response.status , await response.json()]}

export const addProduct = async(data)=>{
  let url = baseUrl+'add/';
  let options ={
    method:'POST',
    headers:{
      'Content-Type':'application/json'},
    body: JSON.stringify(data)}
  let response = await fetch(url,options);
  return [response.status , await response.json()]}



export const deleteProduct = async(id)=>{
  let url= baseUrl+'delete/'+id;
  let options={
      method :'DELETE'
  }
  let response = await fetch(url,options)
  return response.status}

//-----------------------------------------------
//this api for editing product

export const editProduct = async (id, data) => {
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
};