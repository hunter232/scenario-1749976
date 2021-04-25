// Any functions you define here will be available in your other modifier scripts.

function bringJoy(string) {
  return string.replace(/\b(sad|angry)\b/g, 'happy')
};



function getTime() {
  var d = new Date(new Date().toLocaleString("en-US", { timeZone: 'US/Eastern' }));
  var pm = '';
  var hh = d.getHours();
  if (hh > 12) {
    hh -= 12;
    pm = 'Pm'
  } else if (hh == 0) {
    hh = 12;
    pm = 'Am'
  } else { pm = 'Am' }
  var mm = d.getMinutes()
  return String(hh + ':' + mm + ' ' + pm)
}





//       |||
// wip   VVV
function containsTime(str) {
  if (str.includes("am") || str.includes("pm") || str.includes(":")) return true;
  return false;
}



function eventCheck(str) {
  str = trim(str);
  if (containsTime(str)) {
    if (str.includes("at")) {
      timeParts = str.split("at");
      str_event = timeParts[0];
      str_time = timeParts[1];
      events.push(new Event(str_time, str_event));
    }
  }
}
  class Event {
    constructor(str_time, str_event) {


      this.time = str_time;// need to convert user inputed times into js Date objects
      this.event = str_event;
    }

 hasPassed() {
    this.date = new Date();
    this.time_passed = this.date.getTime() - this.time;
    if (this.time_passed >= 0) {
      return true;
    } else { return false; }
  }
}