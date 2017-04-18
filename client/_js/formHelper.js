// ==================   BEGINNING OF THE VALIDATION    ================== //

function validateText(id, leng) {
  if ($("#" + id).val() == null || $("#" + id).val() == "" || $("#" + id).val().length < leng ) {
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
function validateVerify(id) {
  var verify_regex = /^\d{5}$/;
  if (!verify_regex.test($("#" + id).val())) {
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
    //alert("Inputs didn't matched! Please confirm the inputs");
    return false;
  }
}

$(document).ready(function() {
  // prevent the copy and pastes
  $('#confirmEmail').bind("cut copy paste", function(e) {
    e.preventDefault();
  });
  $('#confirmPassword').bind("cut copy paste", function(e) {
    e.preventDefault();
  });

  // validate the sign in
  // $("#valSignIn").click(function() {
  //   if (!validateText("email")) {
  //     return false;
  //   }
  //   if (!validateText("password")) {
  //     return false;
  //   }
  // });
  // $("#verify").click(function() {
  //   if (!validateText("inputVerify")) {
  //     return false;
  //   }
  // });

  $('#firstName').on('input', function() {
    if (!validateText("firstName",3)) {
      return false;
    }
  });

  $('#lastName').on('input', function() {
    if (!validateText("lastName",3)) {
      return false;
    }
  });
  $('#email').on('input', function() {
    if (!validateEmail("email",6)) {
      return false;
    }
  });
  $('#password').on('input', function() {
    if (!validateText("password",3)) {
      return false;
    }
  });
  $('#confirmEmail').on('input', function() {
    if (!confirmData("email", "confirmEmail")) {
        return false;
      }
  });
  $('#confirmPassword').on('input', function() {
    if (!confirmData("password", "confirmPassword")) {
        return false;
      }
  });
  $('#phone').on('input', function() {
    if (!validateText("phone",6)) {
        return false;
      }
  });
  $('#nationality').on('input', function() {
    if (!validateText("nationality",2)) {
        return false;
      }
  });
  $('#city').on('input', function() {
    if (!validateText("city",2)) {
        return false;
      }
  });

  // $("#valSignUp").click(function() {
  //   if (!validateText("firstName")) {
  //     return false;
  //   }
  //   if (!validateText("lastName")) {
  //     return false;
  //   }
  //   if (!validateEmail("email")) {
  //     return false;
  //   }
  //   if (!confirmData("email", "confirmEmail")) {
  //     return false;
  //   }
  //   if (!validateText("password")) {
  //     return false;
  //   }
  //   if (!confirmData("password", "confirmPassword")) {
  //     return false;
  //   }
  //   $("valSignUp").submit();
  // });
});

// ==================   END OF FOR VALIDATION    ================== //
