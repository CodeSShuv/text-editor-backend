const fs = require("fs");



const createAFile = (req, res) => {
  const { content, fileName } = req.body
  if (!fileName) {
    fileName = 'textFile'
  }
  for (let i = 0; i == i; i++) {
    if (fs.existsSync(`./public/files/${fileName}${i != 0 ? `(${i})` : ""}.txt`)) {
      continue;
    }
    fs.writeFile(`./public/files/${fileName}${i != 0 ? `(${i})` : ""}.txt`, content, (err, content) => {
      if (err) {
        res.status(409).json({ msg: "Failed to msake a file." });
        return
      }
      res.status(200).json({ msg: "File has been saved in the server." })
    }
    )
    break;
  }
}

const showFiles = (req, res) => {
  fs.readdir("public/files", (err, files) => {
    if (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
    res.status(200).json({
      files: files
    });
  })
}



const sendFileContents = (req,res)=>{
  const {fileName}  = req.body;
  fs.readFile(`./public/files/${fileName}`,"utf-8",(error,content)=>{
    if(!error){

      return res.status(200).json({content:content});
    }
    // console.log(error)
    return res.status(400).json({msg:"Couldn't find the file."})
  });
}


const upateFileContent = (req,res)=>{
  const {fileName, content} = req.body;
  fs.writeFile(`./public/files/${fileName}`,content,(error)=>{
    if(!error){
     
      return res.status(200).json({msg:"Updated successfully."});
    }
    console.log(error)
    return res.status(500).json({msg:"Internal Server Error"})
  });

}


module.exports = {
  createAFile,
  showFiles,
  sendFileContents,
  upateFileContent
}