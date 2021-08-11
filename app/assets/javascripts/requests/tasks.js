function Request() {
  this.type = "";
  this.url = "";
  this.data = {};
  this.dataType = "json";
  this.success = function (response) {};
  this.error = function (response) {};
  this.headers = {
    "X-CSRF-Token": $("meta[name='csrf-token']").attr("content"),
  };
}

function postTask(content, successCB, errorCB) {
  var newRequest = new Request();
  newRequest["type"] = "POST";
  newRequest["url"] = "api/tasks?api_key=1";
  newRequest["data"] = {
    task: {
      content: content,
    },
  };
  newRequest["success"] = function (response) {
    return successCB(response);
  };
  newRequest["error"] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

function getAllTasks(successCB, errorCB) {
  var newRequest = new Request();
  newRequest["type"] = "GET";
  newRequest["url"] = "api/tasks?api_key=1";
  newRequest["success"] = function (response) {
    return successCB(response);
  };
  newRequest["error"] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

function deleteOneTask(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest["type"] = "DELETE";
  newRequest["url"] = "api/tasks/" + id + "?api_key=1";
  newRequest["success"] = function (response) {
    console.log(response);

    return successCB(response);
  };
  newRequest["error"] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

function markTaskAsComplete(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest["type"] = "PUT";
  newRequest["url"] = "api/tasks/" + id + "/mark_complete?api_key=1";
  newRequest["success"] = function (response) {
    return successCB(response);
  };
  newRequest["error"] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}

function markTaskAsActive(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest["type"] = "PUT";
  newRequest["url"] = "api/tasks/" + id + "/mark_active?api_key=1";
  newRequest["success"] = function (response) {
    return successCB(response);
  };
  newRequest["error"] = function (request, errorMsg) {
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
}
