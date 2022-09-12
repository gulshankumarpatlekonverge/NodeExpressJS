const express = require('express');
const app = express();

/*


    PLACE YOUR CODE HERE FROM "final-code-base" folder to execute 


*/


// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
