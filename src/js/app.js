var timeline = require('./timeline');

var PIN_ID = "timeline-push-pin-test";

Pebble.addEventListener('ready', function() {
  console.log('PebbleKit JS ready!');

  // An hour ahead
  var date = new Date();
  date.setHours(date.getHours() + 1);

  // Create the pin
  var pin = {
    "id": "pin-" + PIN_ID,
    "time": date.toISOString(),
    "layout": {
      "type": "genericPin",
      "title": "Example Pin",
      "body": "This is an example pin from the timeline-push-pin example app!",
      "tinyIcon": "system://images/SCHEDULED_EVENT"
    }
  };

  console.log('Inserting pin in the future: ' + JSON.stringify(pin));

  timeline.insertUserPin(pin, function(responseText) { 
    console.log('Result: ' + responseText);
  });
});
