var express = require ('express');
var exphbs = require ('express-handlebars');
const knex = require ('./db/knex');
var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout:
                                 'main'}));
app.set('view engine','handlebars');


//ENRUTAMIENTO

app.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    res.render('home');
});


app.get('/usuarios',function(req,res){
    /*res.type('text/plain');
    res.send('About my page');*/
    knex('usuarios')
        .select()
         .then(usuarios => {
    res.render('usuarios', { objUsers: usuarios});
       
}); 
    
});     


app.get('/about',function(req,res){
    /*res.type('text/plain');
    res.send('About my page');*/
    res.render('about');
});


        app.listen(app.get('port'), function(){
            console.log('Express on localhost:' + 
                        app.get('port'));
        });


//ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));
    