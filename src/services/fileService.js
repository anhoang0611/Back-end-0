const uploadSingleFile = async (fileObject) => {

    let uploadPath = __dirname + '/../public/images/upload/' + fileObject.name;

    // Use the mv() method to place the file somewhere on your server

    // save => public/images/upload
    // abc.png => abc-timestamp.png
    //upload multiple file


    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
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

const uploadMultipleFile = () => {

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}

