var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors()
);

app.use(
    express.urlencoded({
      extended: true
    })
)
  
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        items: [{
            name: "phone",
            price: 30,
            seller: 'amit',
            id:'1'
        },{
                name: 'car',
                price: 15,
                seller: 'ido',
                id:'2'
            },
            {
                name: 'computer',
                    price:20,
                    seller: 'ben',
                    id:'3'
            },
            {
                name: 'calculator',
                    price:20,
                    seller: 'avi',
                    id:'4'
            },
            {
                name: 'mouse',
                    price:20,
                    seller: 'tyler',
                    id:'5'
            }]
            
    })

    

    // 
})

app.post('/', (req, res) => { 
    console.log(req.body)
    res.send('success')
})
 

app.listen(8080, () => { 
    console.log('server is running')
})