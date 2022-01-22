const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');


const app = express();

app.use(fileUpload({
    createParentPath: true
}));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.post('/upload-file', async (req, res) => {
    try {
        if(!req.files){
            res.send({
                status: false,
                message: 'no file uploaded'
            });
        }else {

            let file = req.files.file;
            file.mv('./uploads/'+ file.name)

            res.send({
                status: true,
                message: 'File is uploaded',
            });
        }

    }catch (err) {
        res.status(500).send(err);
    }

});
//start app 
const port = process.env.PORT || 7000;

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);

