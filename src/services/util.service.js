export const utilService = {
    makeId,
    formatTime
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}



function formatTime(timestamp) {
    const date = new Date(timestamp);
  
    let hours = date.getHours();
    const minutes = date.getMinutes();
  
    const period = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Return formatted time in HH:mm AM/PM format
    return `${hours}:${formattedMinutes} ${period}`;
  }