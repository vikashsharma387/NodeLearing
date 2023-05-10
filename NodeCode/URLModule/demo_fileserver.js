console.log(" Demo fileserver.js file has loaded........ The URL module splits up a web address into readable parts")

var url= require('url')
var http = require('http')
var fs = require('fs')

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host)
console.log(q.hostname)
console.log(q.path)
var qdata = q.query
console.log(q.query)

console.log(qdata.year)
console.log(qdata.Year)
console.log(qdata.year1)


