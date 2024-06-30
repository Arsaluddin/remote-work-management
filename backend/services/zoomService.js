const Zoom = require('zoomus')({
    key: process.env.ZOOM_API_KEY,
    secret: process.env.ZOOM_API_SECRET,
  });
  
  exports.createMeeting = (topic, startTime, duration) => {
    return new Promise((resolve, reject) => {
      const options = {
        topic,
        type: 2, // Scheduled meeting
        start_time: startTime,
        duration,
      };
  
      Zoom.meeting.create(options, (err, response) => {
        if (err) {
          return reject(err);
        }
        resolve(response);
      });
    });
  };
  