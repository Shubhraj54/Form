import mongoose from 'mongoose';

const formSchema = new mongoose.schema({
    userId :{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})
const Form = mongoose.model('Form', formSchema);
export default Form;