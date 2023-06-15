import express from 'express';
import { db } from '../db/db.js';
import { findTreatment, postData, rootHandler } from '../controller/controller.js';
import { scrapeData } from '../scrape/scrape.js';

const router = express.Router();



// Define the routes
router.get('/', rootHandler);
router.post('/addDisease', postData);
router.post('/findTreatment', findTreatment);
router.get('/scrape', scrapeData)




export default router;

