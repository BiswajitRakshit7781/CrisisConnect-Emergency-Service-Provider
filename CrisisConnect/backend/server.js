import express from 'express'
import MongoClient  from 'mongodb';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const uri = 'mongodb://localhost:27017'; // Your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/signup', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('yourDatabaseName'); // Replace 'yourDatabaseName' with your actual database name
    const collection = database.collection('users'); // Replace 'users' with your actual collection name

    // Extract form data from the request body
    const userData = req.body;

    // Insert the form data into the MongoDB collection
    await collection.insertOne(userData);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error occurred while inserting user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
