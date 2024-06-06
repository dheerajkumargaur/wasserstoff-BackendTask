
# wasserstoff BackendTask

This project provides a robust back-end system built with Node.js, utilizing MongoDB for database services and AWS S3 for image storage. It features capabilities to process images to extract text and subjects and allows data to be downloaded in various formats (CSV, XML, JSON). Access to the API is restricted to admin users only.


## Local Setup
```bash
Clone : git clone https://github.com/dheerajkumargaur/wasserstoff-BackendTask
Install dependencies : npm install
Run : npm start
```

## Environment  Setup
In this repository, there is a `.env.example` file present, where all the required environment variables are provided for reference but if you did not get it then here is also a sample of that file.
```bash
PORT=4000
ADMIN_SECRET = 
AWS_ACCESS_KEY_ID = 
AWS_SECRET_ACCESS_KEY = 
AWS_S3_REGION = 
AWS_S3_BUCKET_NAME = 
MONGODB_URI=
JWT_SECRET=qwefhjklgkg
```

## End Points
```bash
User: 
For Signup for Both Admin and User: /api/register ,Method POST (body : "fullName":"", "email":"", "password":"", "role":"user || admin")
For Login for Both Admin and User : api/login ,Mothod POSt (body : "email":"", "password":"")

For uploading File :/api/upload ,Method POST (form-data :image :file ,set JWT token in Bearer Token)

Admin:
For rejecting annotation : /admin/UpdateStatusReject , Method POST (et JWT token in Bearer Token ,body :  "fileID":"") 
For Review annotation : /admin/UpdateStatusReview , Method POST (et JWT token in Bearer Token,body :  "fileID":"") 
For Approve annotation : /admin/UpdateStatusApprovet , Method POST (et JWT token in Bearer Token,body :  "fileID":"") 
For Download Into CSV : /admin/DownloadIntoCSV , Method POST (et JWT token in Bearer Token)
For Download Into Json : /admin/DownloadJson , Method POST (et JWT token in Bearer Token)
For Download Into Xml : /admin/DownloadXml , Method POST (et JWT token in Bearer Token) 
```