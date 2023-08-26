import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const Schema = mongoose.Schema;

const app = express();
const PORT = process.env.PORT || 5000;

//Let middleware cors allow all requests
app.use(cors());

//Connect to DB
await mongoose.connect(process.env.DB_CONNECT);

//Create cig Schema
const cigSchema = new Schema({
    count: Number,
});

//Create cig model
const Cig = mongoose.model('cigarette', cigSchema);

app.get('/counter', async (req, res) => {
    //Find cig document
    const doc = await Cig.findOne();

    if (!doc) {
        //Return 0 if doc doesn't exist
        res.json({ cigaretteCount: 0 });
    } else {
        //Return cig count if doc exists
        res.json({ cigaretteCount: doc.count });
    }
});

//Handle adding cigarette when click Add cig btn
app.post('/addCig', async (req, res) => {
    //Find cig document
    const doc = await Cig.findOne();

    if (!doc) {
        //Create new cig doc if it doesn't exist
        await Cig.create({ count: 1 });
        res.json({ cigaretteCount: 1 });

        console.log('Cig count created and set to 1');
    } else {
        //Update cig count if doc exists
        await Cig.updateOne({}, { $inc: { count: 1 } });
        const updatedDoc = await Cig.findOne();
        res.json({ cigaretteCount: updatedDoc.count });

        console.log('Cig count incremented by 1');
    }
});

//Handle decrasing cigs number when click Decrease cig btn
app.post('/removeCig', async (req, res) => {
    //Find cig doc
    const doc = await Cig.findOne();

    if (doc.count == 0) {
        //SKIP, there is nothing to delete
        res.status(400).json({ error: 'You cant unsmoke cigs under the zero, that would be too easy' });
    } else {
        //Update cig count
        await Cig.updateOne({}, { $inc: { count: -1 } });
        const updatedDoc = await Cig.findOne();
        res.json({ cigaretteCount: updatedDoc.count });

        console.log('Decrased the number, hope you dont lie!');
    }
});

app.listen(PORT, () => {
    console.log(`Server běži na portu ${PORT}`);
});
