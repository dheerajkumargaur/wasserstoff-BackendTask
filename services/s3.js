import AWS from 'aws-sdk'; 
const s3 = new AWS.S3({ 
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export function uploadFileToS3(file) {
    // console.log(file.image,"filllelele")
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME, 
        Key: file.image.name, 
        Body: file.image.data
    };
    return s3.upload(params).promise();  
}