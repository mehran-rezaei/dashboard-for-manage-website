import axiosInstance from "./Configs/axiosInstance";



export function addServices(editData:any) {
    return axiosInstance
      .post(`Service/addService`,{
        priceType : editData.priceType,
        serviceGroupId: editData.serviceCategoryId,
        name: editData.name,
        price: editData.price,
        maxPrice: editData.maxPrice,
        minPrice: editData.minPrice,
        pricePercentageLists : editData.pricePercentageLists
      })
      .then((response) => response);
  }
  
  export function getَAllServices() {
      return axiosInstance
        .get(`Service/getAllServices`)
        .then((response) => response);
    }
  
    export function deleteServices(id:any) {
      return axiosInstance
        .delete(`Service/deleteService?Id=${id}`)
        .then((response) => response);
    }
  
  
    export function editServices(editData:any) {
      return axiosInstance
        .post(`Service/editService`,{
          id :editData.id,
          priceType : editData.priceType,
          serviceGroupId: editData.serviceCategoryId,
          name: editData.name,
          price: editData.price,
          maxPrice: editData.maxPrice,
          minPrice: editData.minPrice,
          pricePercentageLists : editData.pricePercentageLists
        })
        .then((response) => response);
    }

    export function getValueBySearch(value:any) {
        return axiosInstance
        .get(`Service/SearchService?searchValue=${value}`,{
        })
        .then((response) => response);
    }




     
