var express = require('express');
var router = express.Router();
require('winston-syslog').Syslog;

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Syslog({
      host: '192.168.175.128',
      port: 514,
      protocol: 'udp',
      facility: 'auth', // Adjust facility as needed
      app_name: 'nodejs', // Specify your application name
    })
  ]
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/rsyslog', function(req, res, next) {
  console.log(req.body)
  logger.info(`${req.body.user} ${req.body.action} using ${req.body.email}`);

  res.status(200).json({
    status : 200
  })
});


module.exports = router;
