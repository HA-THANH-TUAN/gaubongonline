import axiosClient from "./axiosClient"


export interface addCatalogReqProduct {

} 

class ProductApi{
    static addCatalog=(data:addCatalogReqProduct)=>{
        return axiosClient.post("/admin/addCatalog", data)
    }
}

export default ProductApi