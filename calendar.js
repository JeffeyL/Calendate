const { google } = require('googleapis')

class Event {

    constructor(auth) {
        this.auth = auth;
        this.calendar = google.calendar({version: 'v3', auth})
    }

    addCalendarEvent(summary, desc, start_date, end_date) {

        let event = {
            'summary': summary,
            'desc': desc,
            'start': {
                'dateTime': start_date,
                'timeZone': 'America/Toronto',
            },
            'end': {
                'dateTime': end_date,
                'timeZone': 'America/Toronto',
            },
            colorId: 1,
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 15},
                ]
            }
        };

        //Request to Google Calendar API
        this.calendar.events.insert({
            auth: this.auth,
            calendarId: 'primary',
            resource: event,
        }, 
        function(err, event) {
            if (err) {
                console.log('There was an error making a request to Google Calendar API: ' + err);
                return;
            }
            console.log('Event created: %s', event.htmlLink);
        });
    }
}

module.exports = Event;