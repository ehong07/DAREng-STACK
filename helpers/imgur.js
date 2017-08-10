var request = require('request');

var getImageFromImgurByUrl = (url, callback) => {
  var options = {
    method: 'GET',
    hostname: [
      'api',
      'imgur',
      'com'
    ],
    path: [
      '3',
      'image',
      url //URL here represents {{imageHash}} in imgur api
    ],
    headers: {
      authorization: 'Client-ID ca81384e1743235'
    }
  };

  request(options, (err, res) => {
    if (err) {
      throw err;
    } else {
      callback(JSON.parse(res.body));
    }
  });
}

var postImageToImgur = (image, callback) => {
  var options = {
    method: 'POST',
    hostname: [
      'api',
      'imgur',
      'com'
    ],
    path: [
      '3',
      'image'
    ],
    headers: {
      authorization: 'Client-ID ca81384e1743235'
    },
    data: {
      image: image, //imgur ex:localStorage.imageBase64
      type: 'base64'
    }
  }

  request(options, (err, res) => {
    if (err) {
      throw err;
    }
  });
}
