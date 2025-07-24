

let productsController = {
    index: function(req, res){
 //       let movieList = ['Rocky', 'Batman', 'Barbie', 'Iron Man'];
        return res.render('partials/productos');
    },
    show: function(req, res){
//          return res.render('products/productCart', { cod: req.params.cod});
       // return res.send(`Estamos en el detalle de la película: ${req.params.id}`)
    },
    create: function(req, res){

    },
    search:function(req, res){

    },
    store: function(req, res){

        return  res.redirect('/');
    }

}


module.exports = productsController