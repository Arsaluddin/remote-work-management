const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const path = require('path');
const fs = require('fs');

const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Load tokens from a file (you need to implement this)
const TOKEN_PATH = path.join(__dirname, 'token.json');
const token = fs.readFileSync(TOKEN_PATH);
oAuth2Client.setCredentials(JSON.parse(token));

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

exports.createMeeting = async (summary, description, start, end) => {
  const event = {
    summary,
    description,
    start: {
      dateTime: start,
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: end,
      timeZone: 'America/Los_Angeles',
    },
    conferenceData: {
      createRequest: {
        requestId: '7qxalsvy0e',
        conferenceSolutionKey: {
          type: 'hangoutsMeet',
        },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data;
};
