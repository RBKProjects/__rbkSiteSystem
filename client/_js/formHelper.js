// ==================   BEGINNING OF THE VALIDATION    ================== //

function validateText(id) {
  if ($("#" + id).val() == null || $("#" + id).val() == "") {
    var div = $("#" + id).closest("div");
    div.removeClass("has-success");
    $("#glypcn" + id).remove();
    div.addClass("has-error has-feedback");
    div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-remove form-control-feedback"></span>');
    return false;
  } else {
    var div = $("#" + id).closest("div");
    div.removeClass("has-error");
    $("#glypcn" + id).remove();
    div.addClass("has-success has-feedback");
    div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
  }
}

function validateEmail(id) {
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test($("#" + id).val())) {
    var div = $("#" + id).closest("div");
    div.removeClass("has-success");
    $("#glypcn" + id).remove();
    div.addClass("has-error has-feedback");
    div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-remove form-control-feedback"></span>');
    return false;
  } else {
    var div = $("#" + id).closest("div");
    div.removeClass("has-error");
    $("#glypcn" + id).remove();
    div.addClass("has-success has-feedback");
    div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
  }
}

function confirmData(id1, id2) {
  if ($("#" + id1).val() === $("#" + id2).val()) {
    var div = $("#" + id2).closest("div");
    div.removeClass("has-error");
    $("#glypcn" + id2).remove();
    div.addClass("has-success has-feedback");
    div.append('<span id="glypcn' + id2 + '" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
  } else {
    var div = $("#" + id2).closest("div");
    div.removeClass("has-success");
    $("#glypcn" + id2).remove();
    div.addClass("has-error has-feedback");
    div.append('<span id="glypcn' + id2 + '" class="glyphicon glyphicon-remove form-control-feedback"></span>');
    alert("Inputs didn't matched! Please confirm the inputs");
    return false;
  }
}

$(document).ready(function() {
  $('#confirmEmail').bind("cut copy paste", function(e) {
    e.preventDefault();
  });
  $('#confirmPassword').bind("cut copy paste", function(e) {
    e.preventDefault();
  });
  $("#valSignIn").click(function() {
    if (!validateText("email")) {
      return false;
    }
    if (!validateText("password")) {
      return false;
    }
  });
  $("#valSignUp").click(function() {
    if (!validateText("firstName")) {
      return false;
    }
    if (!validateText("lastName")) {
      return false;
    }
    if (!validateEmail("email")) {
      return false;
    }
    if (!confirmData("email", "confirmEmail")) {
      return false;
    }
    if (!validateText("password")) {
      return false;
    }
    if (!confirmData("password", "confirmPassword")) {
      return false;
    }
    $("valSignUp").submit();
  });
});

// ==================   END OF FOR VALIDATION    ================== //
