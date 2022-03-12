// replace these values with those generated in your TokBox Account
var apiKey = "47464171";
var sessionId = "1_MX40NzQ2NDE3MX5-MTY0NzEwMzU1OTExNn40eW1RK0M3YnZpekl5N3J0NytpdVJkYmh-fg";
var token = "T1==cGFydG5lcl9pZD00NzQ2NDE3MSZzaWc9YjY3NmExNzNmYmZmZDNjYTg2MjM2NTFkMjE0NDg1NjA2Yjc0NTgyMTpzZXNzaW9uX2lkPTFfTVg0ME56UTJOREUzTVg1LU1UWTBOekV3TXpVMU9URXhObjQwZVcxUkswTTNZblpwZWtsNU4zSjBOeXRwZFZKa1ltaC1mZyZjcmVhdGVfdGltZT0xNjQ3MTAzNTU5Jm5vbmNlPTAuMzIxODk1NDkyMDU4NzI1OCZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNjQ3NzA4MzU5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});