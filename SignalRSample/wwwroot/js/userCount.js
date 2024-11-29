
//create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

//connect to methods that hub invokes aka receive notifications from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCpuntSpan = document.getElementById("totalViewsCounter");
    newCpuntSpan.innerText = value.toString();
});
connectionUserCount.on("updateTotalUsers", (value) => {
    var newCpuntSpan = document.getElementById("totalUsersCounter");
    newCpuntSpan.innerText = value.toString();
});

//invoke hub methods aka send notifications to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}


// start connection
function fuflfilled() {
    newWindowLoadedOnClient();
    console.log("Connection to User Hub Successful");
}
function rejected() {
    console.log("Connection to the User Hub UnSuccessful");
}

connectionUserCount.start().then(fuflfilled, rejected)