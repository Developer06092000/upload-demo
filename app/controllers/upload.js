const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        Image.create({
            image: req.file.path,
        }).then((image) => {
            return res.send(`File has been uploaded.`);
        });
    } catch (error) {
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};
