var ping = require ("net-ping");

var session = ping.createSession();

session.pingHost ("173.194.112.112", function (error, target) {
    if (error)
        console.log (target + ": " + error.toString());
    else
        console.log (target + ": Alive");
});
