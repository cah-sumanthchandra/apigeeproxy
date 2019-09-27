 // Re-initialize the response. This variable currently holds the response from the
// getOKTAUser service
response.content = '';
response.headers['Content-Type'] = 'application/json';

// Create a brand-new JSON object for the response and fill it up
var r = response.content.asJSON;
r.pass = context.getVariable('user.userPassword');
r.mobile = context.getVariable('userFactor.mobile');
