const dirTree = require('directory-tree');
var fs = require('fs');
var express = require('express');
var Jimp = require('jimp');
var Tiff = require('tiff.js');
const { encode } = require('base64-arraybuffer');
var router = express.Router();

const BASE_DIRECTORY = '/media/hdd2/Carol/datasets';

const folderNameMap = {
  STDR: 'STDR_Fundus',
  CNTG: 'CNTG_Fundus'
};

router.get('/:study/directory', (req, res, next) => {
  if (req.params['study'].toUpperCase() in folderNameMap) {
    console.log(`Dir: ${BASE_DIRECTORY}/${folderNameMap[req.params['study'].toUpperCase()]}`);
    const tree = dirTree(`${BASE_DIRECTORY}/${folderNameMap[req.params['study'].toUpperCase()]}`);
    res.json(tree);
  } else {
    var err = new Error(`Code '${req.params['study']}' not found`);
    err.status = 404;
    next(err);
  }
});

// http://localhost:3000/studies/image/path/THE_TRUE_PATH
router.get('/image/:path*', (req, res, next) => {
  console.log(req.params['0']);
  if (fs.lstatSync(req.params['0']).isFile()) {
    // var mime_type = 'image/tiff';
    // With JIMP
    // Jimp.read(req.params['0'], (err, data) => {
    //   res.write(`<html><body><img src="data:${mime_type};base64,`)
    //   console.log(data.bitmap)
    //   res.write(data.bitmap['data'].toString('base64'));
    //   res.end('"/></body></html>');
    // })
    fs.readFile(req.params['0'], (err, data) => {
      if (err) throw err;
      const content = encode(data.buffer);
      res.json({ data: content });
    });

    // fs.readFile(req.params['0'], (err, data) => {
    //   if (err) throw err; // Fail if the file can't be read.
    //   // res.writeHead(200, {'Content-Type': 'image/jpeg'});
    //   // res.end(data); // Send the file data to the browser.
    //   var mime_type = 'image/tiff';
    //   if (req.params['0'].endsWith('.tif')) {mime_type = 'image/tiff';}
    //   res.write(`<html><body><img src="data:${mime_type};base64,`)
    //   res.write(Buffer.from(data).toString('base64'));
    //   res.end('"/></body></html>');
    // });
  } else {
    var err = new Error(`File '${req.params['0']}' not found.`);
    err.status = 404;
    next(err);
  }
});

module.exports = router;
