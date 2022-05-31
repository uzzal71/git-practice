import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/git-practice', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);