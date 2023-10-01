const tableProductBaseUrl = "http://127.0.0.1:8000/table_product/";

export const addProductToTable = async (tableId, productData) => {
  const url = tableProductBaseUrl + "add/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  };
  const response = await fetch(url, options);
  return [response.status, await response.json()];
};

export const updateProductInTable = async (tableId, productId, productData) => {
  const url = `${tableProductBaseUrl}${tableId}/update-product/${productId}/`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  };
  const response = await fetch(url, options);
  return [response.status, await response.json()];
};

export const deleteProductFromTable = async (tableId, productId) => {
  const url = `${tableProductBaseUrl}${tableId}/delete-product/${productId}/`;
  const options = {
    method: "DELETE",
  };
  const response = await fetch(url, options);
  return response.status;
};
