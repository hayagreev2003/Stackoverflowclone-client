/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const express = require("express");
const cors = require("cors");
const app = express();
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
app.use(cors({ origin: true }));

// Define your Firebase Cloud Functions below (e.g., app.get, app.post, etc.)

// Export your Express app as a Cloud Function
exports.api = functions.https.onRequest(app);

