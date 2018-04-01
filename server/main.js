const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
console.log(path.join(__dirname, '../dist'))
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/query', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  const type = req.query.type;
  const postid = req.query.postid;
  request(`http://www.kuaidi100.com/query?type=${type}&postid=${postid}`, (err, response, body) => {
    res.send(response.body);
  })
})

app.listen(3000, () => {
  console.log('success')
});