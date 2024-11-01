const express = require("express");
const app = express();

const port = 3000;
const fs = require("fs");
const path = require("path");

//読み込むディレクトリを全て指定
app.use(express.static(path.join(__dirname, "../web")));

app.get("/TopPage.html", (req, res) => {
	res.redirect("/");
});

app.get("/", (req, res) => {
	//__dirnameで絶対パスに変換
	const topPage = path.join(__dirname, "../web/TopPage.html");
	fs.readFile(topPage, (err, data) => {
		//読み込み失敗時の動作
		if(err) {
			res.status(500).send("File not found");
			//ファイルの読み込み成功時の動作
		} else {
			//読み込んだ内容を文字列に変換してクライアントに送信
			res.send(data.toString());
			//ファイルのバッファデータを送信
			console.log(data);
		}
	});
});

app.listen(port, () => {
	console.log(`The server has started and is listening on port number: ${port}`);
});