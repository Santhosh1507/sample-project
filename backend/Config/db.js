import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://santhoshmce1234:Santhosh2024@cluster0.q5q3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed');
    }
}

export default connect;