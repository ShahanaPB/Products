const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyparser = require('body-prser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())
app.get('/products',function(req,res){
res.header("Access-Control-Allow-Origin","*")
res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
ProductData.find()
                    .then(function(poducts){
                        res.send(products);
                    });
                });

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }
    var product = new ProductData(product);
    product.save();
});
app.listen(3000,function(){
    console.log('listening to port 3000');
});


        


     

    
    







