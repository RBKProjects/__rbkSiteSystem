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
    alert('info are matched');
    return true;
  } else {
    alert("info aren't matched");
    return false;
  }
}

$(document).ready(function() {
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
    if (!validateText("confirmEmail")) {
      return false;
    }
    if (!confirmData("email", "confirmEmail")) {
      return false;
    }
    if (!validateText("password")) {
      return false;
    }
    if (!validateText("confirmPassword")) {
      return false;
    }
    if (!confirmData("password", "confirmPassword")) {
      return false;
    }
    $("valSignUp").submit();
  });
});

// ==================   END OF FOR VALIDATION    ================== //
