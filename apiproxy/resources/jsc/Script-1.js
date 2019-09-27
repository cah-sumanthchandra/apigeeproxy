 response.content = '';
response.headers['Content-Type'] = 'application/json';
var r = response.content.asJSON;
r.status = context.getVariable('user.status');
r.factorType = context.getVariable('user.id');