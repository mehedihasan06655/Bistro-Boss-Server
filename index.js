const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//bistroDB2
//iAMFpOffdKMvwkhc
//branching branch edited

app.get('/', (req, res) => {
    res.send('Hello World!')
});



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bistroNew:VmVr6Gs75ExrqjHg@cluster0.p4opdh4.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("bistroDB").collection("menu");
        const reviewCollection = client.db("bistroDB").collection("reviews");

        app.get('/menu', async (req, res) => {
            const result = await database.find().toArray();
            res.send(result);
        });
        app.get('/reviews', async (req, res) => {
            const result = await reviewCollection.find().toArray();
            res.send(result);
        });



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
