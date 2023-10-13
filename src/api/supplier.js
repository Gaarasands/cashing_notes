const baseurl = "http://127.0.0.1:8000/suppliers/"

export const getAllSuppliers = async() =>{
    let url = baseurl + "getall/"
    let response = await fetch (url);
    if (response.status === 200){
        let data = await response.json()
        return data
    }
}

export const deleteSupplier = async (id) =>{
    let url = baseurl + "delete/" +id;
    let options ={
        method :'Delete'
    }
    let response = await fetch(url,options)
    return response.status
}