import { db } from "../db/db.js";
import { scrapeData } from "../scrape/scrape.js";

export const rootHandler = (req, res) => {
    res.status(200).json({name : halo})
  }
  
  // Route handler for the root endpoint
export const postData = async (req, res) => {
    
    try {
        const data = req.body
        console.log(data)
        // Post the data to Firestore
        await db.collection('Disease').add(data);
        res.send('Data stored successfully!');
        }
    catch (error) {

        res.status(500).send('Error storing data.' + error);
    }
};

export const findTreatment = async (req, res) => {
    try {
  
      const collectionRef = db.collection('Disease');
      const querySnapshot = await collectionRef.where('Tanaman', '==', req.body.tanaman)
      .where('Keyword', '==', req.body.keyword)
      .get();
  
      if (!querySnapshot.empty) {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push(doc.data());
        });
  
        const scrapedData = [];
        for (const element of documents[0].Treatment) {
          const scrape = await scrapeData(element);
          scrapedData.push(scrape);
        }
  
        console.log('Retrieved documents:', documents[0].Treatment);
        res.status(200).json(scrapedData);
      } else {
        console.log('No documents found');
        res.status(404).json({ error: 'No documents found' });
      }
    } catch (error) {
      console.error('Error retrieving document:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };