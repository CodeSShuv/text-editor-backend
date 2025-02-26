const { Router } = require("express");
const { showFiles,createAFile,sendFileContents,upateFileContent } = require("../controllers/file");

const fileRouter = Router();
fileRouter.get("/read", showFiles).post("/post", createAFile).post("/content",sendFileContents ).post("/update",upateFileContent);




module.exports = {
    fileRouter
} 