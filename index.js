const { google } = require('googleapis')
const Event = require('./calendar.js')

const { OAuth2 } = google.auth

const OAuth2Client = new OAuth2(
    '659521334313-q0b15p1ku6fuf1r1vfu1ejt5gvlff37r.apps.googleusercontent.com',
     'wxi8M8B-NQ2Ye8XdTFWA-ToX'
     )

OAuth2Client.setCredentials({
    refresh_token: '1//043GQEatLvkEvCgYIARAAGAQSNwF-L9IrAgDwwiSIOXRqWo_mfX_98lJ22u0l0zrTAdrwIgFQKhuVnuFEkybchPrQV0PGJJ7n1Ws'
})

let event = new Event(OAuth2Client);
event.addCalendarEvent('Summary','Description','2020-11-16T11:00:00','2020-11-18T11:00:00')
/*
const calendar = google.calendar({ version: 'v3', auth: OAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDate() + 2)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDate() + 2)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
    summary: 'Complete project',
    location: '40 St George St, Toronto, ON M5S 2E4',
    description: 'Completing project with Jiwoo and Chris',
    start: {
        dateTime: eventStartTime,
        timeZone: 'America/Toronto'
    },
    end: {
        dateTime: eventStartTime,
        timeZone: 'America/Toronto'
    },
    colorId: 1
}

calendar.freebusy.query(
    {
        resource: {
            timeMin: eventStartTime,
            timeMax: eventEndTime,
            timeZone: 'America/Toronto',
            items: [{ id: 'primary'}]
        },
    },
    (err, res) => {
        if(err) return console.error('Free busy query error', err)

        const eventsArr = res.data.calendars.primary.busy

        if(eventsArr.length == 0) return calendar.events.insert({calendarId: 'primary', resource: event}, 
        err => {
            if(err) return console.error('Calendar event creation error', err)

            return console.log('Calendar event created')
        }
        )
        return console.log('Sorry I\'m Busy')
    }
)
*/