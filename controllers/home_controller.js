const path = require('path');
const Data = require("../models/data");
const axios = require('axios');
module.exports.addData =async function(req, res) {                 //data sent to database
    try {
      setInterval(await function(){ 
        
        const response =  axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video');
        let fetchedData = response.data;
        Data.create({title:fetchedData.title});
      
      }, 3000);
      
      res.status(200).send('ok');
    } catch (error) {
      console.error(error);
    }
  }


  module.exports.findData =async function(req, res) {           
    try {
      
      per_page = parseInt(req.query.per_page) || 10
      page_no = parseInt(req.query.page_no) || 1
      var pagination = {
        limit: per_page ,
        skip:per_page * (page_no - 1)
      }
      const pushedData = await Data.find({title:req.body.title}).limit(pagination.limit).skip(pagination.skip);


      return res.send(pushedData);
    } catch (error) {
      console.error(error);
    }
  }

