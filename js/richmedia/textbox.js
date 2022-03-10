
// PHONE NUMBER

async function inputTextNumberTagParser(index, label) {
  var html = ``;

  var template = `  <style='font-size: 12px;margin-bottom: 5px;position: relative'>${label}</label>
                    <br><input type='tel' id='input-text-${index}' placeholder='123-456-7890' pattern="03\d{2}-\d{7}" maxlength="12" oninput="this.value=this.value.replace(/([^-+0-9]+)/gi, '');" class='input-text-number'></input>
                     <br><label class='form-label-phoneNumber' style='font-size: 10px;margin-bottom: 5px;position: relative; color:red!important'>Please enter 10 digit Phone Number</label>
                    <br><center><button id='button-sumbit-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button></center>
    `;

  setTimeout(() => {
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
    $("#cx-chat-index-" + index + " .cx-message-text").append(template);
    $(".form-label-phoneNumber").hide();
    $(`#input-text-${index}`).intlTelInput({
      // whether or not to allow the dropdown
      allowDropdown: true,

      // if there is just a dial code in the input: remove it on blur, and re-add it on focus
      autoHideDialCode: true,

      // add a placeholder in the input with an example number for the selected country
      autoPlaceholder: "polite",

      // modify the auto placeholder
      customPlaceholder: null,

      // append menu to specified element
      dropdownContainer: null,

      // don't display these countries
      excludeCountries: [],

      // format the input value during initialisation and on setNumber
      formatOnDisplay: true,

      // geoIp lookup function
      geoIpLookup: null,

      // inject a hidden input with this name, and on submit, populate it with the result of getNumber
      hiddenInput: "",

      // initial country
      initialCountry: "",

      // localized country names e.g. { 'de': 'Deutschland' }
      localizedCountries: null,

      // don't insert international dial codes
      nationalMode: true,

      // display only these countries
      onlyCountries: [],

      // number type to use for placeholders
      placeholderNumberType: "MOBILE",

      // the countries at the top of the list. defaults to united states and united kingdom
      preferredCountries: [ "us", "gb" ],

      // display the country dial code next to the selected flag so it's not part of the typed number
      separateDialCode: false,


    })

  }, 40);
  return `#input-text-${index},#button-sumbit-${index}`;
}

async function inputTextNumberSender(data) {
  await $(() => {
    var split = data.split(",");
    function addHyphen () {

  if($(`body ${split[0]}`).val().length < 10) {
        let val = $(`body ${split[0]}`).val();   //s Remove dash (-) if mistakenly entered.
       // let finalVal = val.match(/.{1,3}/g).join('-');    // Add (-) after 3rd every char.
        $(`body ${split[0]}`).val(finalVal);  // Update the input box.

      }
    }


     function disableButton() {
          $(`body .input-text-number`).prop("disabled", true);

      for (var i = 0; i < split.length; i++) {
           $(`body ${split[i]}`).prop("disabled", true);
        $(`body .button-submit`).css('pointer-events', 'none');
        $(`body .button-submit`).css('background', '#A5936E');
        $(`body .button-submit`).css('color', '#ffffff');
        $(`body .button-submit`).css('font-weight', '300');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      $(`body ${split[0]}`).on("keypress", (e) => {
        try {
         addHyphen();
    } catch (err) {}
      });

      $(`body ${split[0]}`).on("keyup", (e) => {
        if (e.keyCode === 13) {
         inputNumberSender(split[0]);
         // disableButton()
        }
      });

      $(`body ${split[1]}`).click(() => {
        inputNumberSender(split[0]);
       // disableButton()
        
      });      

    }, 80);

  });

  return await true;
}


async function inputNumberSender(value) {
  let val = $(`body ${value}`).val();

  if(val == '' || val.length < 10) {
       $(".form-label-phoneNumber").show();

  }else{
       camTyping();
        $(".form-label-phoneNumber").hide();
  await setTimeout(() => {
    $(`#cx_input`).focus();
    $(`#cx_input`).val(val);
    $(".cx-send").trigger("click");
  }, 50);
  }


}


// CONTRACT AND CLAIM NUMBER


async function inputTextClaimandContractTagParser(index, label) {
    var html = ``;

  var template = `<label class='form-label' style='font-size: 12px;margin-bottom: 5px;position: relative'>${label}</label>
                    <br><input type='text' id='input-text-${index}' placeholder='12345'  maxlength="5" oninput="this.value=this.value.replace(/[^0-9]/g,'');" class='input-text'></input>
                    <br><label class='form-label-claimandContract' style='font-size: 10px;margin-bottom: 5px;position: relative; color:red!important'>Please enter 5-digit number</label>
                    <br><button id='button-sumbit-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button>
    `;

  setTimeout(() => {
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
    $("#cx-chat-index-" + index + " .cx-message-text").append(template);
         $(".form-label-claimandContract").hide();

  }, 40);
  return `#input-text-${index},#button-sumbit-${index}`;
}

async function inputTextclaimandContractsender(data) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
         $(`body .button-submit`).css('pointer-events', 'none');
        $(`body .button-submit`).css('background', '#A5936E');
        $(`body .button-submit`).css('color', '#ffffff');
        $(`body .button-submit`).css('font-weight', '300');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {
      $(`body ${split[0]}`).on("keyup", (e) => {
        if (e.keyCode === 13) {
          inputClaimandContractSender(split[0]);
          disableButton()
        }
      });

      $(`body ${split[1]}`).click(() => {
        inputClaimandContractSender(split[0]);
       // disableButton()
        
      });      

    }, 80);

  });

  return await true;
}

async function inputClaimandContractSender(value, index) {
  let val = $(`body ${value}`).val();


  if(val == '' || val.length < 5) {
       $(".form-label-claimandContract").show();

  }else{
       camTyping();

  await setTimeout(() => {
    $(`#cx_input`).focus();
    $(`#cx_input`).val(val);
    $(".cx-send").trigger("click");
    $(".form-label-claimandContract").hide();

  }, 50);
  }


}




//// EMAIL ADDRESS

async function inputTextEmailTagParser(index, label) {
   var html = ``;

  var template = `<style='font-size: 12px;margin-bottom: 5px;position: relative'>${label}</style>
                  <br><input type='email' id='input-text-${index}' class='input-text' placeholder='abc@email.com'></input>
                  <br><label class='form-label-email' style='font-size: 10px;margin-bottom: 5px;position: relative;color:red!important'>Please enter correct email address</label>
                  <br><center><button id='button-sumbit-${index}' style='position: relative;top: 0px;' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button></center>
    `;

  setTimeout(() => {
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
    $("#cx-chat-index-" + index + " .cx-message-text").append(template);
     $(".form-label-email").hide();
  }, 40);
  return `#input-text-${index},#button-sumbit-${index}`;
}



async function inputEmailSender(value, index) {
  let val = $(`body ${value}`).val();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(val == '' || !val.match(mailformat)) {
       $(".form-label-email").show();
       return
  }else{
       camTyping();

  await setTimeout(() => {
    $(`#cx_input`).focus();
    $(`#cx_input`).val(val);
    $(".cx-send").trigger("click");
    $(".form-label-email").hide();

  }, 50);
  }


}

async function inputTextEmailSender(data) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
         $(`body .button-submit`).css('pointer-events', 'none');
        $(`body .button-submit`).css('background', '#A5936E');
        $(`body .button-submit`).css('color', '#ffffff');
        $(`body .button-submit`).css('font-weight', '300');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {
      $(`body ${split[0]}`).on("keyup", (e) => {
        if (e.keyCode === 13) {
          inputEmailSender(split[0]);
          disableButton()
        }
      });

      $(`body ${split[1]}`).click(() => {
        inputEmailSender(split[0]);
       // disableButton()
        
      });      

    }, 80);

  });

  return await true;
}




// NORMAL INPUT TEXT BOX WITH SUBMIT BUTTON ONLY

async function inputTextTagParser(index) {
  var template = `<br><br><input type='text' id='input-text-${index}' class='input-text'></input>
                   <br><button id='button-sumbit-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button>
    `;

  setTimeout(() => {
    $("#cx-chat-index-" + index + " .cx-message-text").append(template);
  }, 40);
  return `#input-text-${index},#button-sumbit-${index}`;
}

async function inputTextBigTagParser(index) {
  var template = `<br><br><input type='text' id='input-text-${index}' class='input-text' style='width:250px;height: 30px;'></input>
                   <br><button id='button-sumbit-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button>
    `;

  setTimeout(() => {
    $("#cx-chat-index-" + index + " .cx-message-text").append(template);
  }, 40);
  return `#input-text-${index},#button-sumbit-${index}`;
}


async function inputTextsender(data) {
  await $(() => {
    var split = data.split(",");
    var submitSkip = false;
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body .button-submit`).css('pointer-events', 'none');
          $(`body .button-skip`).css('pointer-events', 'none');


        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {
      $(`body ${split[0]}`).on("keyup", (e) => {
        if (e.keyCode === 13) {
          inputSender(split[0]);
          disableButton()
        }
      });

      $(`body ${split[1]}`).click(() => {

        inputSender(split[0]);
        if(submitSkip){
        $(`body .button-submit`).css('background', '#A5936E');
        $(`body .button-submit`).css('color', '#ffffff');
        $(`body .button-submit`).css('font-weight', '300');
      }
       // disableButton()
        
      });      
      $(`body ${split[2]}`).click(() => {
        setTimeout(() => {
          $(`#cx_input`).focus();
          $(`#cx_input`).val('SKIP');
          $(".cx-send").trigger("click");
        }, 50);
        $(`body .button-skip`).css('background', '#A5936E');
        $(`body .button-skip`).css('color', '#ffffff');
        $(`body .button-skip`).css('font-weight', '300');
      
       // disableButton()
        
      });     
    }, 80);

  });

  return await true;
}




async function inputSender(value) {
  
  let val = $(`body ${value}`).val();
  if(val == '') {

  }else{
       camTyping();

  setTimeout(() => {
      $(`#cx_input`).focus();
      $(`#cx_input`).val(val);
      $(".cx-send").trigger("click");
      submitSkip = true;
    }, 50);
  }


}



async function inputTextAreaParser(index, center) {
  var template = `<br><br><textarea id='input-text-${index}' class='input-text' style='width:250px;'></textarea>
                  <br><label class='form-label-textBig' style='font-size: 10px; top: -15px; margin-bottom: 0; position: relative; color:red!important'>Please tell us about the issue</label>
                   <br><center><button id='button-sumbit-${index}' style='position: relative;  top: -15px;' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button>
                   <button id='button-skip-${index}' style='position: relative;  top: -15px;' class='button-skip cx-skip cx-btn cx-btn-primary i18n'>SKIP</button></center>`;
  var template2 = `<br><br><textarea id='input-text-${index}' class='input-text' style='width:250px;'></textarea>
  <br><label class='form-label-textBig' style='font-size: 10px; top: -15px; margin-bottom: 0; position: relative; color:red!important'>Please tell us about the issue</label>
   <br><button id='button-sumbit-${index}' style='position: relative; left: 74px; top: -25px' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button>
`
  setTimeout(() => {
    (center) ? $("#cx-chat-index-" + index + " .cx-message-text").append(template) : $("#cx-chat-index-" + index + " .cx-message-text").append(template2);
    $(".form-label-textBig").hide();
    
  }, 40);
  return `#input-text-${index},#button-sumbit-${index},#button-skip-${index}`;
}

async function inputTextAreasender(data) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body .button-submit`).css('pointer-events', 'none');
          $(`body .button-skip`).css('pointer-events', 'none');


        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {
      $(`body ${split[0]}`).on("keyup", (e) => {
        if (e.keyCode === 13) {
          inputAreaSender(split[0]);
          disableButton()
        }
      });

      $(`body ${split[1]}`).click(() => {
        inputAreaSender(split[0]);


       // disableButton()
        
      });   
      $(`body ${split[2]}`).click(() => {
        setTimeout(() => {
          $(`#cx_input`).focus();
          $(`#cx_input`).val('SKIP');
          $(".cx-send").trigger("click");
        }, 50);
        $(`body .button-skip`).css('background', '#A5936E');
        $(`body .button-skip`).css('color', '#ffffff');
        $(`body .button-skip`).css('font-weight', '300');
       // disableButton()
        
      });     
    }, 80);

  });

  return await true;
}

async function inputAreaSender(value) {
  let val = $(`body ${value}`).val().trim();

  if(val == '') {
    $(".form-label-textBig").show();
  }else{
    $(".form-label-textBig").hide();
       camTyping();

  await setTimeout(() => {
    $(`#cx_input`).focus();
    $(`#cx_input`).val(val);
    $(".cx-send").trigger("click");
    $(`body .button-submit`).css('background', '#A5936E');
    $(`body .button-submit`).css('color', '#ffffff');
    $(`body .button-submit`).css('font-weight', '300');


  }, 50);
  }


}