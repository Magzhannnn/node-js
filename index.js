//!---------------     PATH     ---------------
//? const path = require("path");
//? console.log("Склеить участки пути:", path.join(__dirname, "first", "second"));
//? console.log("Склеить участки пути:", path.resolve("first", "second")); // можно без __dirname
//? const fullpath = path.resolve("first", "second.js");
//? console.log("Парсинг пути:", path.parse(fullpath));
//? console.log("Разделитель в ОС:", path.sep);
//? console.log("Проверка на абсолютный путь:", path.isAbsolute("first/second.js"));
//? console.log("Название файла:", path.basename(fullpath));
//? console.log("Расширение файла:", path.extname(fullpath));

//!---------------     URL     ---------------
//? const siteURL = 'http://localhost:8080/users?id=5123';
//? const url = new URL(siteURL)
//? console.log(url)

//!---------------     FILE_SYSTEM     ---------------
//* const { error } = require("console");
//* const fs = require("fs");
//* const path = require("path");
//? console.log("START");
//? fs.mkdir(path.resolve("dir"), (err) => {
//?   if (err) {
//?     console.log(err);
//?     return;
//?   }
//?   console.log("Папка создана");
//? });
//? console.log("FINISH");

//? fs.rmdir(path.join(__dirname, "dir"), (e) => {
//?   if (e) {
//?     throw e;
//?   }
//? });

//? fs.writeFile(
//?   path.resolve("test.txt"),
//?   "fdsfsdf",
//?   (error) => {
//?     if (error) {
//?       throw error;
//?     }
//?     console.log("Файл записан");
//?   }
//? );

//? fs.mkdir(path.resolve("example"), (error) => {
//?   if (error) {
//?     throw error;
//?   }
//?   fs.writeFile(
//?     path.resolve("example", "test.txt"),
//?     "kjdfjsdjkdsjkbdvjdba",
//?     (error) => {
//?       if (error) {
//?        throw error;
//?       }
//?      console.log("Файл записан");
//?    }
//?   );
//? });

//? fs.appendFile(path.resolve("test.txt"), ". Change data", (error) => {
//?   if (error) {
//?     throw error;
//?   }
//?   console.log("Файл записан");
//? });

//? const writeFileAsync = async (path, data) => {
//?   return new Promise((resolve, reject) =>
//?     fs.writeFile(path, data, (err) => {
//?       if (err) {
//?         return reject(err.message);
//?       }
//?       resolve();
//?     })
//?   );
//? };

//? const appendFileAsync = async (path, data) => {
//?   return new Promise((resolve, reject) =>
//?     fs.appendFile(path, data, (err) => {
//?       if (err) {
//?         return reject(err.message);
//?       }
//?       resolve();
//?     })
//?   );
//? };

//? const readFileAsync = async (path) => {
//?   return new Promise((resolve, reject) =>
//?     fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
//?       if (err) {
//?         return reject(err.message);
//?       }
//?       resolve(data);
//?     })
//?   );
//? };

//? const removeFileAsync = async (path) => {
//?   return new Promise((resolve, reject) =>
//?     fs.rm(path, (err) => {
//?       if (err) {
//?         return reject(err.message);
//?       }
//?       resolve();
//?     })
//?   );
//? };

//? writeFileAsync(path.resolve("text.txt"), "Hello! ")
//?   .then(() => appendFileAsync(path.resolve("text.txt"), "123"))
//?   .then(() => appendFileAsync(path.resolve("text.txt"), " 456"))
//?   .then(() => appendFileAsync(path.resolve("text.txt"), " 789"))
//?   .then(() => readFileAsync(path.resolve("text.txt")))
//?   .then((data) => console.log(data))
//?   .catch((err) => console.log(err));

//? removeFileAsync(path.resolve("text.txt"))
//?   .then(() => console.log("Success delete file"))
//?   .catch((err) => console.log(err));

//? const message =
//?   "Hello Magzhan! My name is Erkezhan. I'm 14 year is old. I'm super cat) You shit axaxa axaa axaxa";
//? writeFileAsync(path.resolve("test.txt"), message)
//?   .then(() => readFileAsync(path.resolve("test.txt")))
//?   .then((data) => data.split(" ").length)
//?   .then((count) =>
//?     writeFileAsync(path.resolve("count.txt"), `Count words: ${count}`)
//?   )
//?   .then(() => removeFileAsync(path.resolve("test.txt")))
//?   .catch((err) => console.log(err));

//!---------------     EVENT_EMITTER     ---------------
//? const Emitter = require("events");
//? const dotenv = require("dotenv");
//? dotenv.config();

//? const emitter = new Emitter();

//? emitter.on("message", (data, second, thrid) => {
//?   console.log("Data:", data);
//?   console.log("Second arg:", second);
//? });

//? if (process.env.MESSAGE) {
//?   emitter.emit("message", process.env.MESSAGE, 123);
//? } else {
//?   emitter.emit("message", "Вы не указали сообщение");
//? }

//!---------------     STREAM     ---------------
//* const fs = require("fs");
//* const path = require("path");
//? const stream = fs.createReadStream(path.resolve("test.txt"), {
//?   encoding: "utf-8",
//? });
//? stream.on("data", (chunk) => {
//?   console.log(chunk);
//? });
//? stream.on("end", () => console.log("Закончили читать"));
//? stream.on("open", () => console.log("Начали читать"));
//? stream.on("error", (err) => console.log(err));

//? const writableStream = fs.createWriteStream(path.resolve("test2.txt"));
//? for (let i = 0; i < 20; i++) {
//?   writableStream.write(i + "\n");
//? }
//? writableStream.end();
//? writableStream.close();
//? writableStream.destroy();
//? writableStream.on("error");

//!---------------     HTTP     ---------------
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/users") {
//     res.end("USERS");
//   } else if (req.url === "/posts") {
//     res.end("POSTS");
//   } else {
//     res.end("OTHERS");
//   }
// });
// const PORT = 5000;
// server.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
