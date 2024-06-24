const express = require("express");
const app = express();

// console.dir(app); // It will Give the Object

let port = 3000;

app.listen(3000, () => {
  console.log(`"Listening on Port " ${port}`);
});

// app.use((req, res) => {
//   // console.log(req);
//   res.send({
//     name: "Apple",
//     color: "red",
//   });
//   console.log("request Recieved ");
// });

app.get("/", (req, res) => {
    res.send("Heloo Iam Root ");
})

app.get("/:username/:id",(req,res) =>{
    let {username , id} = req.params;
    let HtmlStr = `<h1>Welcome to the Page of @ ${username}<h1/>`;
    res.send(HtmlStr);
})

app.get("/search",(req,res) =>{
    let {q} = req.query;
    res.send(`<h1>Search Results For Query : ${q}<h1/>`)
})

// app.get("/apple", (req, res) => {
//     res.send("Apple section");

// })
// app.get("/orange", (req, res) => {
//     res.send("Orange section");

// })
app.get("*", (req, res) => {
    res.send("Not Found ");
})

