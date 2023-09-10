const moment = require('moment');

const details = (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const currentDay = moment().format('dddd');
    const currentUTCTime = moment().format('YYYY-MM-DDTHH:mm:ss[Z]');

    const jsonResponse = {
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: currentUTCTime,
        track: track,
        github_file_url: 'https://github.com/Dev-Teelaw/HNGX/blob/main/task1/app.js',
        github_repo_url: 'https://github.com/Dev-Teelaw/HNGX/tree/main/task1',
        status_code: 200,
    };

    res.json(jsonResponse);
};

module.exports = {
    details,
};