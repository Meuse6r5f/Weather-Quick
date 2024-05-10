const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const expressLayout = require( 'express-ejs-layouts');



app.use(expressLayout);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{ res.render(__dirname+'/views/index.ejs')
})


app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})