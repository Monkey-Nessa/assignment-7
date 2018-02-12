console.log ('connected');

var states = ["ACT", "NT", "NSW", "SA", "TAS", "VIC", "WA"];
//var optionTags = ""

states.forEach(function(state) {
  $('#states').append("<option>" + state + "</option>");
})
