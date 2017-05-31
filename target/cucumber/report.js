$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality no exists 1",
  "description": "",
  "id": "cucumberjava;login-functionality-no-exists-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Usuario as \"trytryte\" and Contrasena as \"trytryte\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 12028567421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trytryte",
      "offset": 20
    },
    {
      "val": "trytryte",
      "offset": 49
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 16812690997,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 9483527612,
  "status": "passed"
});
});