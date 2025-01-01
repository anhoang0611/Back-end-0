const path = require('path');
const uploadSingleFile = async (fileObject) => {
    // Lấy thời gian hiện tại
    const timestamp = Date.now();

    // Tạo đường dẫn upload với tên tệp mới
    // let uploadPath = __dirname + '/../public/images/upload/' + timestamp + '-' + fileObject.name;
    let uploadPath = path.resolve(__dirname, '../public/images/upload/');

    //lấy đuôi ảnh
    let extName = path.extname(fileObject.name);

    //lấy tên file
    let baseName = path.basename(fileObject.name, extName);

    //tạo đường dẫn 
    let finalName = `${baseName}-${timestamp}${extName}`;

    //tạo đường dẫn upload
    let finalPath = path.join(uploadPath, finalName);

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalPath,
            err: null
        }
    }
    catch (err) {
        console.log(">>> err", err);
        return {
            status: 'failed',
            path: null,
            err: JSON.stringify(err)
        }
    }
}

const uploadMultipleFile = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, '../public/images/upload/');
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            let timestamp = Date.now();
            let extName = path.extname(filesArr[i].name);

            //lấy tên file
            let baseName = path.basename(filesArr[i].name, extName);

            //tạo đường dẫn 
            let finalName = `${baseName}-${timestamp}${extName}`;

            //tạo đường dẫn upload
            let finalPath = path.join(uploadPath, finalName);

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalPath,
                    fileName: filesArr[i].name,
                    err: null
                })
                countSuccess++;
            }
            catch (err) {
                console.log(">>> err", err);
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    err: JSON.stringify(err)
                })
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    }
    catch (err) {
        console.log(">>> err", err);
        return {
            countSuccess: 0,
            detail: []
        }
    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}

