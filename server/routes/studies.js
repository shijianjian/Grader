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

// Load the tree structure of a folder by the study code
router.get('/directory/:study*', (req, res, next) => {
  let path;
  if (req.params['study'].toUpperCase() in folderNameMap && !req.params['0']) {
    path = `${BASE_DIRECTORY}/${folderNameMap[req.params['study'].toUpperCase()]}`;
  } else {
    path = `/${req.params['study']}${req.params['0']}`;
  }
  console.log(path);
  const tree = dirTree(path, { exclude: /^\./ });
  res.status = 200;
  res.json(tree);
});

// http://localhost:3000/studies/image/path/THE_TRUE_PATH
router.get('/image/:path*', (req, res, next) => {
  console.log(req.params['0']);
  if (fs.lstatSync(req.params['0']).isFile()) {
    fs.readFile(req.params['0'], (err, data) => {
      if (err) throw err;
      const content = encode(data.buffer);
      res.json({ data: content });
    });
  } else {
    var err = new Error(`File '${req.params['0']}' not found.`);
    err.status = 404;
    next(err);
  }
});

module.exports = router;
