import mongoose from 'mongoose';


const validRoles = ['user', 'admin'];
const FileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    path: {
        type: String,
        required: true
    },
    annotations: {
        type: Array,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



export const File = mongoose.model('File', FileSchema);
