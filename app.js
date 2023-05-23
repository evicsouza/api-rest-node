const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá')
})

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('A aplicação está sendo executada na porta '+ app.get('port'));
});