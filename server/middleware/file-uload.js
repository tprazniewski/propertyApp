const multer = require('multer')
const uuid = require('uuid')
const MIME_TYPE_MAP= {
  'image/jpeg': 'jpeg',
  'image/png': 'png'
}

const fileUpload = multer({
  limits: 150000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/images')
    },
    filename: (req, file, cb) =>{
    const ext = MIME_TYPE_MAP(file.mimetype)
    //ceaes a file with the right extensionn
    cb(null, uuid() + '.' + ext )
    }
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[mimetype]
    cb(null)
  }
})

module.exports = fileUpload;