/*Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05*/

const start = new Date()
const year = start.getFullYear() 
const month = start.getMonth() + 1 
const date = start.getDate()
const hours = start.getHours() 
const minutes = start.getMinutes()
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
//Isn't this contingent on the actual time my computer has? Am I supposed to manually input the time (hours and minutes) so I can prove that I can make (07hours and 05minutes) work? If that is not the case then the answer is complete.