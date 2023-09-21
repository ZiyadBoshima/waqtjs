export function getTime({timezone}) {
    return Intl.DateTimeFormat('en-US', 
    {timeZone: timezone, timeStyle: 'medium', hour12: false,}).format(new Date())
}