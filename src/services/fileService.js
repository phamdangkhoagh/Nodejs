const path = require('path');

const uploadSingleFile = async (fileObject) => {

  //save => public/images/upload -> done
  let uploadPath = path.resolve(__dirname,"../public/images/upload");

  //abc.png => abc-timestamp.png
  //get image extension , eg: green.png -> png
  let extName = path.extname(fileObject.name);

  //get image's name (without extension) 
  let baseName = path.basename(fileObject.name,extName);

  //create final path:
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  // upload multiple file

  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log(">> check error:", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFile = async (filesArr) => {
  try{
    let uploadPath = path.resolve(__dirname,"../public/images/upload");
    console.log('multiple file');
    let resultArr = [];
    let countSuccess = 0;
    for(let i = 0;i < filesArr.length; i++){
      // get image extension
      let extName = path.extname(filesArr[i].name);

      //get image (without extension)
      let baseName = path.basename(filesArr[i].name,extName);

      //create final path
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;
      
      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
            status: 'success',
            path: finalName,
            fileName: filesArr[i].name,
            error: null
        })
        countSuccess++;
      }catch(err){
        resultArr.push({
          status: 'false',
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err)
        })
      }
    }
    return {
      countSuccess: countSuccess,
      detail: resultArr
    }
  }catch(error){
    console.log(error);
  }
}

module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
