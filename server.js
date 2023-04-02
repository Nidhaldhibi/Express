const express = require("express");
const path = require("path");
const app = express();

const timer = (req, res, next) => {
  const nday = new Date();
  const day = nday.getDay();
  const Hour = nday.getHours();

  if (day > 0 && day < 6 && Hour >= 9 && Hour <= 17) {
    console.log(req);
    next();
  } else {
    res.send(" IT'S CLOSED ");
  }
};

app.use(timer);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/contact", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get("/services", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "public", "services.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
