
const baseUrl = "http://127.0.0.1:8000/"

export const auth = async (values) => {
    try {
        const url = baseUrl + "api-token-auth/";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },         
          body: JSON.stringify(values),
        };       
          const response = await fetch(url, options); 
      if (response.status === 200) {
        let data = await response.json();
        localStorage.setItem('token', data.token);
        console.log(data.token)
        return(response.status)
      } else {
        throw new Error('ما مشي الحال');
      }
    }catch (error) {
      console.error(error);
    }
};


export const signup = async (values) => {
    try {
        const url = baseUrl + "users/create/";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        };
        const response = await fetch(url, options);
        if (response.status === 201) {
            return response.status;
        } else {
            throw new Error('Sign Up Failed');
        }
    } catch (error) {
        console.error(error);
    }
};

export const getAllEmployees = async()=>{
  let url = baseUrl + "users/getall/";
  let response = await fetch(url);
  if(response.status === 200)
  { let data = await response.json()
    return data}}

export const deleteEmployee = async(id) => {
  let url= baseUrl+'delete/'+id;
  let options={
      method :'DELETE'
    }
  let response = await fetch(url,options)
  return response.status
}
