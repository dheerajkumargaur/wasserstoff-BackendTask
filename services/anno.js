import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config(); 

// Function to configure AWS SDK with credentials from environment variables
function configureAWS() {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_S3_REGION
    });
}

// Function to detect labels in an image using AWS Rekognition service
export async function detectLabelsff(photo) {
    // Configure AWS SDK
    configureAWS(); 
    
    // Create a new instance of AWS Rekognition client
    const client = new AWS.Rekognition();
    
    // Set parameters for detecting labels in the image
    const params = {
        Image: {
            S3Object: {
                Bucket: process.env.AWS_S3_BUCKET_NAME, // Bucket name from environment variables
                Name: photo, // Name of the photo to analyze
            },
        },
        MaxLabels: 20, // Maximum number of labels to return
        MinConfidence: 70, // Minimum confidence level for returned labels
    };

    try {
        // Call AWS Rekognition's detectLabels method to detect labels in the image
        const data = await client.detectLabels(params).promise();
        
        // Log label information to the console
        data.Labels.forEach(label => {
            // Log label name and confidence
            console.log(`Label:      ${label.Name}`)
            console.log(`Confidence: ${label.Confidence}`)
            
            // Log bounding box information for instances of the label
            console.log("Instances:")
            label.Instances.forEach(instance => {
                let box = instance.BoundingBox
                console.log("  Bounding box:")
                console.log(`    Top:        ${box.Top}`)
                console.log(`    Left:       ${box.Left}`)
                console.log(`    Width:      ${box.Width}`)
                console.log(`    Height:     ${box.Height}`)
                console.log(`  Confidence: ${instance.Confidence}`)
            })
            
            // Log parent labels
            console.log("Parents:")
            label.Parents.forEach(parent => {
                console.log(`  ${parent.Name}`)
            })
            
            // Log separator for each label
            console.log("------------")
            console.log("")
        });
        
        // Return the detected labels data
        return data;
    } catch (error) {
        // If an error occurs, throw an error with message
        throw new Error('Error detecting labels');
    }
}

// Function to extract label information
function extractLabelInfo(label) {
    return {
        name: label.Name,
        confidence: label.Confidence,
        instances: label.Instances,
        parents: label.Parents
    };
}