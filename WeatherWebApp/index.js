import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
const port = 3000;
const API_KEY = "Your API_KEY";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/fetchWeather", async (req, res) => {
    const zipCode = req.body.zipCode;
    if(zipCode == "") {
        res.render("index.ejs");
    }else{
        try{
            const responseLocation = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},IN&appid=${API_KEY}`,);
            console.log(responseLocation.data);
            const { lat, lon } = responseLocation.data;
    
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            console.log(weatherResponse.data);
    
            res.render("index.ejs", {content: weatherResponse.data});
        } catch(error){
            res.status(401).send(error);
        }
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});