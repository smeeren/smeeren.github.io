const express = require('express');
const axios = require('axios')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Website of Boopala Arul' });
});
router.get('/resume', function(req, res, next) {
	res.render('resume', { title: 'Resume | Boopala Arul' });
});

router.get('/althistory', function(req, res, next) {
  res.render('althistmain', { title: 'AltHist/SpecFic Projects | Boopala Arul' });
});
router.get('/althistory/xasar', function(req, res, next) {
  res.render('althistxasar', { title: 'Xasar Script, White Huns | Boopala Arul' });
});
router.get('/althistory/lorag', function(req, res, next) {
  res.render('althistfiverivers', { title: 'Five Rivers Script, Lands of Red and Gold | Boopala Arul' });
});
router.get('/animations', function(req, res, next) {
  res.render('raycaster', { title: 'Simple Raytracing/Raycasting | Boopala Arul' });
});
router.get('/demos', function(req, res, next) {
  res.render('diarydistiller', { title: 'Diary Distiller: Let a Robot Figure You Out! | Boopala Arul' });
});
router.post('/query/diarydistiller', function(req, res, next) {
  const tokens = req.body;
  //console.log(tokens);
  axios
  .post('http://diadist.herokuapp.com/v1/models/diarydistiller/versions/1:predict', tokens)
  .then(fromModel => {
    //console.log(`statusCode: ${fromModel.status}`)
    //console.log(fromModel.data.predictions)
    res.send(fromModel.data.predictions)
  })
  .catch(error => {
    res.send(error)
  })

  // headers I guess express auto-adds 'Access-Control-Allow-Origin'?
  
});

module.exports = router;
