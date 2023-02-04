const express = require("express");
const cors = require("cors");

const app = express();
const USERS = [{ name: "user", role: "staff" }];

app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.get("/users.json", (req, res) => {
	res.send(USERS);
});

app.post("/users.json", (req, res) => {
	USERS.push({ name: "user2", role: "staff" });
	res.send(USERS);
});

app.listen(5000, () => console.log("server started at 5000"));
