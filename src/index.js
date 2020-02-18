const express=require('express');
const morgan=require('morgan');
const app= express();

//settings
app.set('port',3000);
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

 //Routes
//app.use(require('./routes'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/cities',require('./routes/cities'));
//starting server
app.listen(app.get('port'),() => {
    console.log("server on port "+app.get('port'));
    
});
