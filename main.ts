loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Air_Temperature", input.temperature()))
})
