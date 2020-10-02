const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {

    var hours = Math.floor(value / 3600);
    console.log(hours);

    var minutes = Math.floor((value - (hours * 3600)) / 60);
    minutes;
    console.log(minutes);
    if (minutes < 10){
        if (minutes == 0){

        } else {
            minutes = `0${minutes}`;
        }
    }

    var seconds = value - ((hours * 3600) + (minutes * 60));
    console.log(seconds);

    return `${hours}:${minutes}:${seconds}`
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:02:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:02:5")