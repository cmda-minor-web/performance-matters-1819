var webp = require('webp-converter')

//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option,result_callback)

const testFolder = './server/images'
const fs = require('fs')

//
// webp.cwebp('input.jpg', 'output.webp', '-q 80', function(status, error) {
//   //if conversion successful status will be '100'
//   //if conversion fails status will be '101'
//   console.log(status, error)
// })
