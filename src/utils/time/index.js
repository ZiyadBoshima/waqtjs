export function getTime(settings) {
    const config = Object.entries(settings)
    .filter(([key, value]) => value !== undefined)
    .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
    
    return Intl.DateTimeFormat('en-US', 
    config).format(new Date())
}