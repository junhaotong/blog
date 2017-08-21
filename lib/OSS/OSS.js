/**
 * Created by tjh on 2017/8/20.
 */
let OSS = require('ali-oss').Wrapper;
let urllib = OSS.urllib;
let Buffer = OSS.Buffer;
let STS = OSS.STS;

var client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAI3wAEx3Q5uxaP',
    accessKeySecret: 'Tv4l9gEdXji3D0sH9qlWVPX8JnKnzL',
    bucket: 'jeremy-blog'
});

// client.list().then(function (result) {
//     console.log(result);
// }).catch(function (err) {
//     console.error(err);
// });

// client.put('image', './loginBG.jpg').then(function (val) {
//     // console.log(val);
//     return client.get('image');
// }).then(function (val) {
//     console.log(client.get('image'));
//     // console.log(val.content.toString());
// });

client.get('image')
    .then(data => {
        console.log(data);
    })
