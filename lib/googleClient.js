import { google } from 'googleapis';

export const googleClient = google.auth.fromAPIKey(process.env.GOOGLE_API_KEY);
