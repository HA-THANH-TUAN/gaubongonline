const connectDatabase =  require("./models/db.model")

class Product{
    constructor(){

    }

    getAllProduct(){

    }
    getProduct(){
      const qr=`SELECT JSON_OBJECT('id' ,id,'name' ,name,'price' ,price)FROM products`
      const productsQuery = 'SELECT id, name, price FROM products';
      
      connectDatabase.query(productsQuery,(error, products)=>{
        const productIds = products.map((product) => product.id);
        const colorsQuery = `SELECT product_id, id, name,quantity FROM colors WHERE product_id IN (${productIds.join(',')})`;
        connectDatabase.query(colorsQuery,(error, colors)=>{
          const resultData= products.map((product)=>{
            const dataColor=colors.filter((color)=>color.product_id===product.id)
            return {...product, colors: dataColor.length==0 ? null : dataColor}
          })
          console.log(resultData[0].colors);
        })
        })

    }
}

module.exports=new Product()