const app = require("express")();


function checkHttps(req, res, next){
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1)
  {console.log("using https");return next()} 
  else {res.redirect('https://' + req.hostname + req.url);}
} app.all('*', checkHttps);


// app.get("/", (req, res) => {res.send("under construction!");});
app.get("/", (req, res) => {res.sendFile(__dirname + "/views/index.html");});
app.get("/settings", (req, res) => {res.sendFile(__dirname + "/views/settings.html");});














const server = app.listen(process.env.PORT,()=>{console.log("Running..");});