
//create connection
var connectionUserCount = new signalR.HubConnectionBuilder.withUrl("/hubs/userCount").build();

//connect to methods that hub invokes aka receive notifications from hub
connectionUserCount.on("updateTotalViews", (Value) => {
    var newCpuntSpan = document.getElementById("totalViewsCounter");
    newCpuntSpan.innerText = value.toString();
});

//invoke hub methods aka send notifications to hub
function newWindowLoadedOnClient() {
    connectionUserCount.Send("NewWindowLoaded");
}


// start connection
function fuflfilled() {
    console.log("Connection to User Hub Successful");
}
function rejected() {

}

connectionUserCount.start().then(fuflfilled, rejected)