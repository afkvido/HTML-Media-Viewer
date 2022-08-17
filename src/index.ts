import Express from "express";


const app = Express();

app.get("/favicon.*", (req, res) => {
    res.redirect("https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png");
});

app.get("/*", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html");
});


app.listen(80, () => {
    console.log("Server started on port 80");
});