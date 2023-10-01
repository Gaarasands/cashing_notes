
const baseUrl = "http://127.0.0.1:8000/"

export const auth = async (values) => {
    try {
        const url = baseUrl + "api/token-auth/";
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

export const get = async(values) =>{
  const url = "https://dummyjson.com/products"
  const options = {
    method:"GET",
    headers:{
      "Content-Type": "application/json",
      "Authorization": "token "+localStorage.getItem("token")
    },
    body:JSON.stringify(values)
  }
}