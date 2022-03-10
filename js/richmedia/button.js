// BUTTONS

var poolAndSpa = false;
var refrigerator = false;
var plumbingSystem = false;
var centralHeat = false;


async function sender(value) {

   camTyping();
    $(`#cx_input`).focus();
    $(`#cx_input`).val(value);
    $(".cx-send").trigger("click");

}




///////////////////////////////// SAUDI //////////////////////////////////////////////////

async function proceedOnlyimageButtonParser(toArray, index){
  
  var html = toArray;

  html += `<center><br>
<img src="img/qr.png" alt="aigImage" width="250" height="180"></img>
  <br><button id='button-proceedOnlyimage-${index}' class='button-proceedOnlyimage cx-proceedOnlyimage cx-btn cx-btn-primary i18n' style='width: 140px'>DONE</button>

  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-proceedOnlyimage-${index}`;
}


async function proceedOnlyimageButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



async function gotItButtonParser(toArray, index){
  console.log(toArray)
  var html = `${toArray[0]}.<br><br>${toArray[1]}.`;
   html += `<br><br><center>
  <button id='button-gotit-${index}' class='button-gotit cx-gotit cx-btn cx-btn-primary i18n' style='width: 150px'>GOT IT</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-gotit-${index}`;
}

async function gotItButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function IgotItButtonParser(toArray, index){
  console.log(toArray)
  var html = `${toArray[0]}.<br><br>${toArray[1]}.${toArray[2]}.`;
   html += `<br><br><center>
  <button id='button-gotit-${index}' class='button-gotit cx-gotit cx-btn cx-btn-primary i18n' style='width: 150px'>PAY SAR648</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-gotit-${index}`;
}

async function IgotItButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



async function yesNoButtonParser(toArray, index){
    var html = toArray;


  html += `<center>
  <button id='button-yes-${index}' class='button-yes cx-yes cx-btn cx-btn-primary i18n' style='width: 70px'>YES</button>
  <button id='button-no-${index}' class='button-no cx-no cx-btn cx-btn-primary i18n' style='width: 70px'>NO</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-yes-${index},#button-no-${index}`;
}


async function yesNoButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}




async function gotItAgentButtonParser(toArray, index){
  
  var html = `${toArray[0]}.<br><br>${toArray[1]}.${toArray[2]}.`;
  html += `<br><br><center>
 <button id='button-gotit-${index}' class='button-gotit cx-gotit cx-btn cx-btn-primary i18n' style='width: 100px'>GOT IT</button>
  <button id='button-agentreq-${index}' class='button-agentreq cx-agentreq cx-btn cx-btn-primary i18n' style='width: 120px'>LIVE AGENT</button>

 </center>
 </div>`
 await setTimeout(() => {
   //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
   $("#cx-chat-index-" + index + " .cx-message-text").html(null);
   $("#cx-chat-index-" + index + " .cx-message-text").html(html);

 }, 40);

return `#button-gotit-${index},#button-agentreq-${index}`;
}

async function gotItAgentButtonSender(data,radio) {
 await $(() => {
   var split = data.split(",");
    function disableButton() {
     for (var i = 0; i < split.length; i++) {
         $(`body ${split[i]}`).prop("disabled", true);
         $(`body ${split[i]}`).css('pointer-events', 'none');
       }
     }
     for (var j = 0; j < split.length; j++) {
        $(".cx-send").on("keyup click", function (e) {
           disableButton()
       })
      }
   setTimeout(() => {

     for (let k = 0; k <= split.length - 1; k++) {

       $(`body ${split[k]}`).click(() => {

       $(`body ${split[k]}`).css('background', '#A5936E');
       $(`body ${split[k]}`).css('color', '#ffffff');
       $(`body ${split[k]}`).css('font-weight', '300');
      disableButton();    
     sender($(split[k]).text().toUpperCase().trim());

       });
     }

   }, 50);
 });
 return await true;
}




async function InfoButtonParser(toArray, index){
  var html = toArray;

  html += `<br><br><center>
  <button id='button-phone-${index}' class='button-phone cx-phone cx-btn cx-btn-primary i18n' style='width: 150px'>PHONE NUMBER</button>
  <button id='button-email-${index}' class='button-email cx-email cx-btn cx-btn-primary i18n' style='width: 150px'>EMAIL ADDRESS</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-phone-${index},#button-email-${index}`;
}

async function InfoButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



async function flightButtonParser(toArray, index){
  var html = toArray;

  html += `<br><br><center>
  <button id='button-flight-${index}' class='button-flight cx-flight cx-btn cx-btn-primary i18n' style='width: 210px'>FLIGHT STATUS</button>
  <button id='button-visa-${index}' class='button-visa cx-visa cx-btn cx-btn-primary i18n' style='width: 210px'>VISA SUPPORT</button>
  <button id='button-modifybook-${index}' class='button-modifybook cx-modifybook cx-btn cx-btn-primary i18n' style='width: 210px'>MODIFY BOOKING</button>
  <button id='button-ground-${index}' class='button-ground cx-ground cx-btn cx-btn-primary i18n' style='width: 210px'>ON GROUND SUPPORT</button>
  <button id='button-tripcancel-${index}' class='button-tripcancel cx-tripcancel cx-btn cx-btn-primary i18n' style='width: 210px'>TRIP CANCELLATION/ REFUND</button>
  <button id='button-specialreq-${index}' class='button-specialreq cx-specialreq cx-btn cx-btn-primary i18n' style='width: 210px'>SPECIAL SERVICE REQUEST</button>
  <button id='button-others-${index}' class='button-others cx-others cx-btn cx-btn-primary i18n' style='width: 210px'>OTHERS</button>

  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 50);

return `#button-flight-${index},#button-visa-${index},#button-modifybook-${index},#button-ground-${index},#button-tripcancel-${index},#button-specialreq-${index},#button-others-${index}`;
}

async function flightButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[0]}`).click(() => {
        refrigerator = true;
        
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());
        });
      }

    }, 50);
  });
  return await true;
}


async function foodButtonParser(toArray, index){
  var html = toArray;

  html += `<br><br><center>
  <button id='button-chicken-${index}' class='button-chicken cx-chicken cx-btn cx-btn-primary i18n' style='width: 270px; margin-left: -10px;'>CHICKEN SALAMI WITH SPROUT SALAD</button>
  <button id='button-lobster-${index}' class='button-lobster cx-lobster cx-btn cx-btn-primary i18n' style='width: 270px; margin-left: -10px;'>LOBSTER IN OYSTER SAUCE</button>
  <button id='button-cottage-${index}' class='button-cottage cx-cottage cx-btn cx-btn-primary i18n' style='width: 270px; margin-left: -10px;'>COTTAGE CHEESE TIKKA MASALA</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 50);

return `#button-chicken-${index},#button-lobster-${index},#button-cottage-${index}`;
}




async function foodtButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[0]}`).click(() => {
        refrigerator = true;
        
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());
        });
      }

    }, 50);
  });
  return await true;
}



async function foodChickenButtonParser(toArray, index){
  var html = toArray;

  html += `<br><br><center>
  <button id='button-biryani-${index}' class='button-biryani cx-biryani cx-btn cx-btn-primary i18n' style='width: 270px; margin-left: -10px;'>CHICKEN BIRYANI</button>
  <button id='button-lamb-${index}' class='button-lamb cx-lamb cx-btn cx-btn-primary i18n' style='width: 270px; margin-left: -10px;'>LAMB IN HOT GARLIC SAUCE</button>
  <button id='button-sauteed-${index}' class='button-sauteed cx-sauteed cx-btn cx-btn-primary i18n' style='width: 270px; margin-left: -10px;padding-left: 10px;'>SAUTEED MUSHROOM, CARROTS, AND BEANS</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 50);

return `#button-biryani-${index},#button-lamb-${index},#button-sauteed-${index}`;
}

async function foodChickenButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[0]}`).click(() => {
        refrigerator = true;
        
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());
        });
      }

    }, 50);
  });
  return await true;
}

async function expectationButtonParser(toArray, index){
  var html = toArray;

  html += `<br><br><center>
  <button id='button-local-${index}' class='button-local cx-local cx-btn cx-btn-primary i18n' style='width: 200px;'>LOCAL SUPPORT</button>
  <button id='button-covid-${index}' class='button-covid cx-covid cx-btn cx-btn-primary i18n' style='width: 200px;'>COVID-19 TEST SUPPORT</button>
   <button id='button-othersflight-${index}' class='button-othersflight cx-othersflight cx-btn cx-btn-primary i18n' style='width: 200px;'>OTHERS</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 50);

return `#button-local-${index},#button-covid-${index},#button-othersflight-${index}`;
}

async function expectationButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[0]}`).click(() => {
        refrigerator = true;
        
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());
        });
      }

    }, 50);
  });
  return await true;
}



async function undestandButtonParser(toArray, index){
  var html = toArray;

  html += `<br><br><center>
  <button id='button-sitting-${index}' class='button-sitting cx-sitting cx-btn cx-btn-primary i18n' style='width: 235px;'>SITTING/ WAITING ARRANGEMENT</button>
  <button id='button-baggage-${index}' class='button-baggage cx-baggage cx-btn cx-btn-primary i18n' style='width: 235px;'>BAGGAGE SUPPORT</button>
  <button id='button-foodbev-${index}' class='button-foodbev cx-foodbev cx-btn cx-btn-primary i18n' style='width: 235px;'>FOOD & BEVERAGHES</button>
   <button id='button-visaport-${index}' class='button-visaport cx-visaport cx-btn cx-btn-primary i18n' style='width: 235px;'>VISA SUPPORT</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 50);

return `#button-sitting-${index},#button-baggage-${index},#button-foodbev-${index},#button-visaport-${index}`;
}

async function undestandButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[0]}`).click(() => {
        refrigerator = true;
        
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());
        });
      }

    }, 50);
  });
  return await true;
}




async function dynamicCarouselParser(toArray, index) {


var html = toArray;


var carouselBuilder = "";
var appIndex = 0;



html += `<br><br><div class="slideshow-container">




<div class="mySlides" id="services3-${index}">
<img id="slide3" src="./img/services3.png" style="width:100%">
</div>


<div class="mySlides" id="services2-${index}">
<img id="slide2" src="./img/services2.png" style="width:100%">
</div>


<div class="mySlides" id="services1-${index}">
<img id="slide1" src="./img/services1.png" style="width:100%">
</div>


<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>`;



await setTimeout(() => {
// document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
$("#cx-chat-index-" + index + " .cx-message-text").html(null);
$("#cx-chat-index-" + index + " .cx-message-text").html(html);



}, 40);



return `#services1-${index},#services2-${index},#services3-${index}`;
}




async function dynamicCarouselSender(messages, data, index) {
await $(() => {
var split = data.split(",");
var message = messages.split(",");



function disableButton() {
for (var i = 0; i < message.length; i++) {
$(`.btn-${index}-${i}`).prop("disabled", true);
$(`.btn-${index}-${i}`).css('pointer-events', 'none');
}
}
for (var j = 0; j < message.length; j++) {
$(".cx-send").on("keyup click", function(e) {
disableButton();
});
}
    $(`body ${split[0]}`).css('pointer-events', 'auto');
    $(`body ${split[1]}`).css('pointer-events', 'auto');
setTimeout(() => {
  $(`body ${split[0]}`).click(() => {
    setTimeout(() => {
      $(`body ${split[0]}`).css('pointer-events', 'none');
        $(`body ${split[1]}`).css('pointer-events', 'none');
        $(`body ${split[2]}`).css('pointer-events', 'none');

    $(`#cx_input`).focus();
    $(`#cx_input`).val('Relaxing Ayurvedic Spa Services');
    $(".cx-send").trigger("click");
  }, 50);




  });



$(`body ${split[1]}`).click(() => {
  setTimeout(() => {
      $(`body ${split[0]}`).css('pointer-events', 'none');
      $(`body ${split[1]}`).css('pointer-events', 'none');
      $(`body ${split[2]}`).css('pointer-events', 'none');
  $(`#cx_input`).focus();
  $(`#cx_input`).val('Enjoy quick classic dishes');
  $(".cx-send").trigger("click");
  }, 50);

});
$(`body ${split[2]}`).click(() => {
  setTimeout(() => {
      $(`body ${split[0]}`).css('pointer-events', 'none');
      $(`body ${split[1]}`).css('pointer-events', 'none');
      $(`body ${split[2]}`).css('pointer-events', 'none');
  $(`#cx_input`).focus();
  $(`#cx_input`).val('Lounge Stay');
  $(".cx-send").trigger("click");
  }, 50);
  
  });
}, 80);
});
return await true;
}

/////////////////////////////////SAUDI////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


async function flightFirsLoadButtonSender(data,radio) {

  $(`body .buttonHeader-flight`).css('background', '#A5936E');
  $(`body .buttonHeader-flight`).css('color', '#ffffff');
  $(`body .buttonHeader-flight`).css('font-weight', '300');
  $(`body .buttonHeader-flight`).css('pointer-events', 'none');

  $(`body .buttonHeader-visa`).css('pointer-events', 'none');
  $(`body .buttonHeader-modifybook`).css('pointer-events', 'none');
  $(`body .buttonHeader-ground`).css('pointer-events', 'none');
  $(`body .buttonHeader-tripcancel`).css('pointer-events', 'none');
  $(`body .buttonHeader-specialreq`).css('pointer-events', 'none');

  setTimeout(() => {
          $(`#cx_input`).focus();
           $(`#cx_input`).val('YES');
           $(".cx-send").trigger("click");
         }, 50);

}

async function visaFirsLoadButtonSender(data,radio) {
  $(`body .buttonHeader-visa`).css('background', '#A5936E');
  $(`body .buttonHeader-visa`).css('color', '#ffffff');
  $(`body .buttonHeader-visa`).css('font-weight', '300');
  $(`body .buttonHeader-visa`).css('pointer-events', 'none');


  $(`body .buttonHeader-flight`).css('pointer-events', 'none');
  $(`body .buttonHeader-modifybook`).css('pointer-events', 'none');
  $(`body .buttonHeader-ground`).css('pointer-events', 'none');
  $(`body .buttonHeader-tripcancel`).css('pointer-events', 'none');
  $(`body .buttonHeader-specialreq`).css('pointer-events', 'none');
  setTimeout(() => {
    $(`#cx_input`).focus();
     $(`#cx_input`).val('NO');
     $(".cx-send").trigger("click");
   }, 50);
}

async function modifybookFirsLoadButtonSender(data,radio) {

  $(`body .buttonHeader-modifybook`).css('background', '#A5936E');
  $(`body .buttonHeader-modifybook`).css('color', '#ffffff');
  $(`body .buttonHeader-modifybook`).css('font-weight', '300');
  $(`body .buttonHeader-modifybook`).css('pointer-events', 'none');


  $(`body .buttonHeader-flight`).css('pointer-events', 'none');
  $(`body .buttonHeader-visa`).css('pointer-events', 'none');
  $(`body .buttonHeader-ground`).css('pointer-events', 'none');
  $(`body .buttonHeader-tripcancel`).css('pointer-events', 'none');
  $(`body .buttonHeader-specialreq`).css('pointer-events', 'none');
  setTimeout(() => {
          $(`#cx_input`).focus();
           $(`#cx_input`).val('YES');
           $(".cx-send").trigger("click");
         }, 50);

}

async function groundFirsLoadButtonSender(data,radio) {
  $(`body .buttonHeader-ground`).css('background', '#A5936E');
  $(`body .buttonHeader-ground`).css('color', '#ffffff');
  $(`body .buttonHeader-ground`).css('font-weight', '300');
  $(`body .buttonHeader-ground`).css('pointer-events', 'none');

  $(`body .buttonHeader-flight`).css('pointer-events', 'none');
  $(`body .buttonHeader-visa`).css('pointer-events', 'none');
  $(`body .buttonHeader-modifybook`).css('pointer-events', 'none');
  $(`body .buttonHeader-tripcancel`).css('pointer-events', 'none');
  $(`body .buttonHeader-specialreq`).css('pointer-events', 'none');
  setTimeout(() => {
    $(`#cx_input`).focus();
     $(`#cx_input`).val('NO');
     $(".cx-send").trigger("click");
   }, 50);
}

async function tripcancelFirsLoadButtonSender(data,radio) {
  $(`body .buttonHeader-tripcancel`).css('background', '#A5936E');
  $(`body .buttonHeader-tripcancel`).css('color', '#ffffff');
  $(`body .buttonHeader-tripcancel`).css('font-weight', '300');
  $(`body .buttonHeader-tripcancel`).css('pointer-events', 'none');


  $(`body .buttonHeader-flight`).css('pointer-events', 'none');
  $(`body .buttonHeader-visa`).css('pointer-events', 'none');
  $(`body .buttonHeader-modifybook`).css('pointer-events', 'none');
  $(`body .buttonHeader-ground`).css('pointer-events', 'none');
  $(`body .buttonHeader-specialreq`).css('pointer-events', 'none');

  setTimeout(() => {
    $(`#cx_input`).focus();
     $(`#cx_input`).val('NO');
     $(".cx-send").trigger("click");
   }, 50);
}

async function tripcancelFirsLoadButtonSender(data,radio) {
  $(`body .buttonHeader-specialreq`).css('background', '#A5936E');
  $(`body .buttonHeader-specialreq`).css('color', '#ffffff');
  $(`body .buttonHeader-specialreq`).css('font-weight', '300');
  $(`body .buttonHeader-specialreq`).css('pointer-events', 'none');


  $(`body .buttonHeader-flight`).css('pointer-events', 'none');
  $(`body .buttonHeader-visa`).css('pointer-events', 'none');
  $(`body .buttonHeader-modifybook`).css('pointer-events', 'none');
  $(`body .buttonHeader-ground`).css('pointer-events', 'none');
  $(`body .buttonHeader-tripcancel`).css('pointer-events', 'none');

  setTimeout(() => {
    $(`#cx_input`).focus();
     $(`#cx_input`).val('NO');
     $(".cx-send").trigger("click");
   }, 50);
}



async function likeButtonParser(toArray, index){
  var html = `${toArray[0]}.${toArray[1]}.<br><br>${toArray[2]}.`;

  // html += `<button id='button-sumbit-${index}' class="btnLike"><img src="img/thumbsUp.png" width="25" height="25"/></button>
  // <button id='button-none-${index}' class="btnDislike"><img src="img/thumbsDown.png" width="25" height="25"/></button></div>`
  html += `<br><br><button id='button-sumbit-${index}' class="btnLike"><i class="far fa-thumbs-up fa-2x"></i></button>
  <button id='button-none-${index}' class="btnDislike"><i class="far fa-thumbs-down fa-2x"></i></button></div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))

    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-sumbit-${index},input[type='radio'][name='optradio${index}']:checked,#button-none-${index}`;
}

async function likeButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {
      $(`body ${split[0]}`).click(() => {
        sender('EXCELLENT');
        $('.btnLike i').addClass('fa fa-thumbs-up fa-2x');
        $('.btnLike i').css('color', "#A5936E");
          disableButton()
      });
      $(`body ${split[2]}`).click(() => {
        sender('BAD');
        $('.btnDislike i').addClass('fa fa-thumbs-down fa-2x');
        $('.btnDislike i').css('color', "#A5936E");
          disableButton()
      });
    }, 40);
  });
  return await true;
}


async function AppliancesButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-app-${index}' class='button-app cx-app cx-btn cx-btn-primary i18n' style='width: 165px'>APPLIANCES</button>
  <button id='button-elec-${index}' class='button-elec cx-elec cx-btn cx-btn-primary i18n' style='width: 165px'>ELECTRICAL</button>
  <button id='button-heat-${index}' class='button-heat cx-heat cx-btn cx-btn-primary i18n' style='width: 165px'>HEATING & AIR</button>
  <button id='button-plumb-${index}' class='button-plumb cx-plumb cx-btn cx-btn-primary i18n' style='width: 165px'>PLUMBING</button>
  <button id='button-indoor-${index}' class='button-indoor cx-indoor cx-btn cx-btn-primary i18n' style='width: 165px'>INDOOR/OUTDOOR</button>
  <button id='button-noneof-${index}' class='button-noneof cx-noneof cx-btn cx-btn-primary i18n' style='width: 165px'>NONE OF THESE</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-app-${index},#button-elec-${index},#button-heat-${index},#button-plumb-${index},#button-indoor-${index},#button-noneof-${index}`;
}

async function AppliancesButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



async function InfoClaimButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-phone-${index}' class='button-phone cx-phone cx-btn cx-btn-primary i18n' style='width: 150px'>PHONE NUMBER</button>
  <button id='button-claim-${index}' class='button-claim cx-claim cx-btn cx-btn-primary i18n' style='width: 150px'>CLAIM NUMBER</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-phone-${index},#button-claim-${index},#button-email-${index},#button-contract-${index}`;
}

async function InfoClaimButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function confirmButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-confirm-${index}' class='button-confirm cx-confirm cx-btn cx-btn-primary i18n' style='width: 105px'>CONFIRM</button>
  <button id='button-modify-${index}' class='button-modify cx-modify cx-btn cx-btn-primary i18n' style='width: 105px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-confirm-${index},#button-modify-${index}`;
}

async function confirmButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function confirmCancelClaimButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-confirmClaim-${index}' class='button-confirmClaim cx-confirmClaim cx-btn cx-btn-primary i18n' style='width: 110px'>CONFIRM</button>
  <button id='button-cancelClaim-${index}' class='button-cancelClaim cx-cancelClaim cx-btn cx-btn-primary i18n' style='width: 130px'>CANCEL CLAIM</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-confirmClaim-${index},#button-cancelClaim-${index}`;
}

async function confirmCancelClaimButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function yesButtonParser(toArray, index, thanks=false){
  var html = toArray;

  html += (thanks) ? `<center><br>
  <button id='button-yes-${index}' class='button-yes cx-yes cx-btn cx-btn-primary i18n' style='width: 70px'>YES</button>
  <button id='button-no-${index}' class='button-no cx-no cx-btn cx-btn-primary i18n'>NO THANKS</button>
  </center>
  </div>` : `<center><br>
  <button id='button-yes-${index}' class='button-yes cx-yes cx-btn cx-btn-primary i18n' style='width: 70px'>YES</button>
  <button id='button-no-${index}' class='button-no cx-no cx-btn cx-btn-primary i18n' style='width: 70px'>NO</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-yes-${index},#button-no-${index}`;
}

async function yesButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();   

      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function yesNoThanksButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();   
      if($(split[k]).text().toUpperCase().trim().includes('THANKS')){
        sender('NO');
      } else {
        sender($(split[k]).text().toUpperCase().trim());
      }
      

        });
      }

    }, 50);
  });
  return await true;
}


async function yesModifyButtonParser(toArray, index){
  var html = '';

  html += `<center>
  <button id='button-yesMod-${index}' class='button-yesMod cx-yesMod cx-btn cx-btn-primary i18n' style='width: 70px'>YES</button>
  <button id='button-noMod-${index}' class='button-noMod cx-noMod cx-btn cx-btn-primary i18n' style='width: 90px'>MODIFY</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-yesMod-${index},#button-noMod-${index}`;
}

async function yesModifyButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function yesEmailButtonParser(toArray, index){
  var html = '';

  html += `<center>
  <button id='button-yesEmail-${index}' class='button-yesEmail cx-yesEmail cx-btn cx-btn-primary i18n' style='width: 70px'>YES</button>
  <button id='button-updateEmail-${index}' class='button-updateEmail cx-updateEmail cx-btn cx-btn-primary i18n' style='width: 130px'>UPDATE EMAIL</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-yesEmail-${index},#button-updateEmail-${index}`;
}

async function yesEmailButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}







async function yesNoSureButtonParser(toArray, index){
    var html = ``;


  html += `<center>
  <button id='button-yesSure-${index}' class='button-yesSure cx-yesSure cx-btn cx-btn-primary i18n' style='width: 55px; padding-left: 15px;'>YES</button>
  <button id='button-noSure-${index}' class='button-noSure cx-noSure cx-btn cx-btn-primary i18n' style='width: 50px; padding-right: 35px;'>NO</button>
   <button id='button-notsure-${index}' class='button-notsure cx-notsure cx-btn cx-btn-primary i18n' style='width: 120px'> I'M NOT SURE</button>

  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-yesSure-${index},#button-noSure-${index},#button-notsure-${index}`;
}

async function yesNoSureButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}




async function submitButtonParser(toArray, index){
  var html = ``;

  html += `<center><br>
  <button id='button-sub-${index}' class='button-sub cx-sub cx-btn cx-btn-primary i18n' style='width: 88px'>SUBMIT</button>
  <button id='button-modifySub-${index}' class='button-modifySub cx-modifySub cx-btn cx-btn-primary i18n' style='width: 88px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-sub-${index},#button-modifySub-${index}`;
}

async function submitButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}
async function submitSkipButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-subSkip-${index}' class='button-subSkip cx-subSkip cx-btn cx-btn-primary i18n' style='width: 88px'>SUBMIT</button>
  <button id='button-skip-${index}' class='button-skip cx-skip cx-btn cx-btn-primary i18n' style='width: 88px'>SKIP</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-subSkip-${index},#button-skip-${index}`;
}

async function submitSKipButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function proceedButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-proceed-${index}' class='button-proceed cx-proceed cx-btn cx-btn-primary i18n' style='width: 110px'>PROCEED</button>
  <button id='button-tcf-${index}' class='button-tcf cx-tcf cx-btn cx-btn-primary i18n' style='width: 130px'>WHAT IS TCF?</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-proceed-${index},#button-tcf-${index}`;
}

async function proceedButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function paymentButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-payment-${index}' class='button-payment cx-payment cx-btn cx-btn-primary i18n' style='width: 160px'>PAYMENT SUCCESS</button>
  <button id='button-fail-${index}' class='button-fail cx-fail cx-btn cx-btn-primary i18n' style='width: 160px'>PAYMENT FAILURE</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-payment-${index},#button-fail-${index}`;
}

async function paymentButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



async function successOneButtonParser(toArray, index){
  var html = ``;

  html += `<center><br>
  <button id='button-successBtn-${index}' class='button-successBtn cx-successBtn cx-btn cx-btn-primary i18n' style='width: 150px'>SUCCESS</button>
  <button id='button-successOne-${index}' class='button-successOne cx-successOne cx-btn cx-btn-primary i18n' style='width: 150px'>SUCCESSONE</button>
   <button id='failureBtn-${index}' class='button-failureBtn cx-failureBtn cx-btn cx-btn-primary i18n' style='width: 150px'>FAILURE</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-successBtn-${index},#button-successOne-${index},#button-failureBtn-${index}`;
}

async function successOneButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}




async function gotItOnlyButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function proceedOnlyButtonParser(toArray, index){
  
  var html = toArray;

  html += `<center>

  <button id='button-proceedOnly-${index}' class='button-proceedOnly cx-proceedOnly cx-btn cx-btn-primary i18n' style='width: 150px'>PROCEED</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-proceedOnly-${index}`;
}
async function proceedOnlyButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function proceedEndChatButtonParser(toArray, index){
  
  var html = toArray;

  html += `<center>

  <br><button id='button-proceedEnd-${index}' class='button-proceedEnd cx-proceedEnd cx-btn cx-btn-primary i18n' style='width: 120px'>PROCEED</button>
    <button id='button-endChat-${index}' class='button-endChat cx-endChat cx-btn cx-btn-primary i18n' style='width: 120px'>END CHAT</button>

  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-proceedEnd-${index},#button-endChat-${index}`;
}
async function proceedEndChatButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



async function proCanButtonParser(toArray, index){
  
  var html = `<img src="img/image1.jpg" alt="aigImage" width="250" height="180"><br>You are being redirected to HWA's payment web page. Please keep your card details handy`;

  html += `<center><br>
  <button id='button-procan-${index}' class='button-procan cx-procan cx-btn cx-btn-primary i18n' style='width: 150px'>PROCEED</button>
  <button id='button-canpro-${index}' class='button-canpro cx-canpro cx-btn cx-btn-primary i18n' style='width: 150px'>CANCEL</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-procan-${index},#button-canpro-${index}`;
}

async function proCanButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}





async function gotIt24hoursButtonParser(toArray, index){
  
  var html = toArray;
  html += `<center>
 <button id='button-gotit-${index}' class='button-gotit cx-gotit cx-btn cx-btn-primary i18n' style='width: 150px'>GOT IT</button>
 </center>
 </div>`
 await setTimeout(() => {
   //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
   $("#cx-chat-index-" + index + " .cx-message-text").html(null);
   $("#cx-chat-index-" + index + " .cx-message-text").html(html);

 }, 40);

return `#button-gotit-${index}`;
}

async function gotIt24hoursButtonSender(data,radio) {
 await $(() => {
   var split = data.split(",");
    function disableButton() {
     for (var i = 0; i < split.length; i++) {
         $(`body ${split[i]}`).prop("disabled", true);
         $(`body ${split[i]}`).css('pointer-events', 'none');
       }
     }
     for (var j = 0; j < split.length; j++) {
        $(".cx-send").on("keyup click", function (e) {
           disableButton()
       })
      }
   setTimeout(() => {

     for (let k = 0; k <= split.length - 1; k++) {

       $(`body ${split[k]}`).click(() => {

       $(`body ${split[k]}`).css('background', '#A5936E');
       $(`body ${split[k]}`).css('color', '#ffffff');
       $(`body ${split[k]}`).css('font-weight', '300');
      disableButton();    
     sender($(split[k]).text().toUpperCase().trim());

       });
     }

   }, 50);
 });
 return await true;
}


async function claimButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-file-${index}' class='button-file cx-file cx-btn cx-btn-primary i18n' style='width: 160px; padding-bottom: 8px;'>FILE A NEW CLAIM</button>
  <button id='button-status-${index}' class='button-status cx-status cx-btn cx-btn-primary i18n' style='width: 160px'>VIEW CLAIM STATUS</button><br>
  <button id='button-another-${index}' class='button-another cx-another cx-btn cx-btn-primary i18n' style='width: 160px'>ANOTHER REQUEST</button><br>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-file-${index},#button-status-${index},#button-another-${index}`;
}

async function claimButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');

       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 40);
  });
  return await true;
}



async function garageButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-gar-${index}' class='button-gar cx-gar cx-btn cx-btn-primary i18n' style='width: 205px'>GARAGE DOOR OPENER</button>
  <button id='button-int-${index}' class='button-int cx-int cx-btn cx-btn-primary i18n' style='width: 205px'>ELECTRICAL SYSTEM</button>
  <button id='button-door-${index}' class='button-door cx-door cx-btn cx-btn-primary i18n' style='width: 205px'>DOORBELL</button>
  <button id='button-tel-${index}' class='button-tel cx-tel cx-btn cx-btn-primary i18n' style='width: 205px'>PHONE LINE</button>
  <button id='button-ceil-${index}' class='button-ceil cx-ceil cx-btn cx-btn-primary i18n' style='width: 205px'>CEILING OR EXHAUST FAN</button>
  <button id='button-garageNone-${index}' class='button-garageNone cx-garageNone cx-btn cx-btn-primary i18n' style='width: 205px'>NONE OF THESE</button>
  <button id='button-modi-${index}' class='button-modi cx-modi cx-btn cx-btn-primary i18n' style='width: 205px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-gar-${index},#button-int-${index},#button-door-${index},#button-tel-${index},#button-ceil-${index},#button-garageNone-${index},#button-modi-${index}`;
}

async function garageButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function dishButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-dish-${index}' class='button-dish cx-gdishar cx-btn cx-btn-primary i18n' style='width: 170px'>DISHWASHER</button>
  <button id='button-micro-${index}' class='button-micro cx-micro cx-btn cx-btn-primary i18n' style='width: 170px'>MICROWAVE</button>
  <button id='button-central-${index}' class='button-central cx-central cx-btn cx-btn-primary i18n' style='width: 170px'>CENTRAL VACUUM</button>
  <button id='button-waterdis-${index}' class='button-waterdis cx-waterdis cx-btn cx-btn-primary i18n' style='width: 170px'>HOT WATER DISPENSER</button>
  <button id='button-trash-${index}' class='button-trash cx-trash cx-btn cx-btn-primary i18n' style='width: 170px'>TRASH COMPACTOR</button>
  <button id='button-foodcenter-${index}' class='button-foodcenter cx-foodcenter cx-btn cx-btn-primary i18n' style='width: 170px'>FOOD CENTER</button>
  <button id='button-freezer-${index}' class='button-freezer cx-freezer cx-btn cx-btn-primary i18n' style='width: 170px'>FREEZER</button>
  <button id='button-wahsdry-${index}' class='button-wahsdry cx-wahsdry cx-btn cx-btn-primary i18n' style='width: 170px'>WASHER/DRYER</button>
  <button id='button-changecat-${index}' class='button-changecat cx-changecat cx-btn cx-btn-primary i18n' style='width: 170px'>CHANGE CATEGORY</button>
  <button id='button-dishNone-${index}' class='button-dishNone cx-dishNone cx-btn cx-btn-primary i18n' style='width: 170px'>NONE OF THESE</button>
  <button id='button-dishModify-${index}' class='button-dishModify cx-dishModify cx-btn cx-btn-primary i18n' style='width: 170px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-dish-${index},#button-micro-${index},#button-central-${index},#button-waterdis-${index},#button-trash-${index},#button-foodcenter-${index},#button-freezer-${index},#button-wahsdry-${index},#button-changecat-${index},#button-dishNone-${index},#button-dishModify-${index}`;
}

async function dishButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
            disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function centralButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-central-${index}' class='button-central cx-central cx-btn cx-btn-primary i18n' style='width: 210px'>CENTRAL HEATING SYSTEM</button>
  <button id='button-cntrl-${index}' class='button-cntrl cx-cntrl cx-btn cx-btn-primary i18n' style='width: 210px'>AC SYSTEM</button>
  <button id='button-heatduct-${index}' class='button-heatduct cx-heatduct cx-btn cx-btn-primary i18n' style='width: 210px'>DUCTWORK</button>
   <button id='button-noneCentral-${index}' class='button-noneCentral cx-noneCentral cx-btn cx-btn-primary i18n' style='width: 210px'>NONE OF THESE</button>
  <button id='button-modifyCentral-${index}' class='button-modifyCentral cx-modifyCentral cx-btn cx-btn-primary i18n' style='width: 210px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-central-${index},#button-cntrl-${index},#button-heatduct-${index},#button-noneCentral-${index},#button-modifyCentral-${index}`;
}

async function centralButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

     $(`body ${split[0]}`).click(() => {
         centralHeat = true;
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function burglerButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-burgler-${index}' class='button-burgler cx-burgler cx-btn cx-btn-primary i18n' style='width: 220px'>SECURITY AND FIRE SYSTEM</button>
  <button id='button-rekey-${index}' class='button-rekey cx-rekey cx-btn cx-btn-primary i18n' style='width: 220px'>RE-KEY</button>
  <button id='button-pest-${index}' class='button-rekey cx-rekey cx-btn cx-btn-primary i18n' style='width: 220px'>PEST CONTROL</button>
  <button id='button-roof-${index}' class='button-rekey cx-rekey cx-btn cx-btn-primary i18n' style='width: 220px'>ROOF</button>
  <button id='button-spa-${index}' class='button-rekey cx-rekey cx-btn cx-btn-primary i18n' style='width: 220px'>SWIMMING POOL & SPA</button>
  <button id='button-termite-${index}' class='button-rekey cx-rekey cx-btn cx-btn-primary i18n' style='width: 220px'>TERMITE TREATMENT</button>
  <button id='button-noneBurgler-${index}' class='button-noneBurgler cx-noneBurgler cx-btn cx-btn-primary i18n' style='width: 220px'>NONE OF THESE</button>
  <button id='button-modifyBurgler-${index}' class='button-modifyBurgler cx-modifyBurgler cx-btn cx-btn-primary i18n' style='width: 220px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-burgler-${index},#button-rekey-${index},#button-pest-${index},#button-roof-${index},#button-spa-${index},#button-termite-${index},#button-noneBurgler-${index},#button-modifyBurgler-${index}`;
}

async function burglerButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[4]}`).click(() => {
        poolAndSpa = true;
        
      });

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}

async function waterButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-water-${index}' class='button-water cx-water cx-btn cx-btn-primary i18n' style='width: 200px'>WATER HEATER</button>
  <button id='button-plumbSys-${index}' class='button-plumbSys cx-plumbSys cx-btn cx-btn-primary i18n' style='width: 200px'>PLUMBING SYSTEM</button>
  <button id='button-externalwater-${index}' class='button-externalwater cx-externalwater cx-btn cx-btn-primary i18n' style='width: 200px'>EXTERNAL WATER LINE</button>
  <button id='button-sewer-${index}' class='button-sewer cx-sewer cx-btn cx-btn-primary i18n' style='width: 200px'>SEWAGE EJECTOR PUMP</button>
  <button id='button-septic-${index}' class='button-septic cx-septic cx-btn cx-btn-primary i18n' style='width: 200px'>SEPTIC SYSTEM</button>
  <button id='button-wellpump-${index}' class='button-wellpump cx-wellpump cx-btn cx-btn-primary i18n' style='width: 200px'>WELL PUMP</button>
  <button id='button-noneWater-${index}' class='button-noneWater cx-noneWater cx-btn cx-btn-primary i18n' style='width: 200px'>NONE OF THESE</button>
  <button id='button-modifyWater-${index}' class='button-modifyWater cx-modifyWater cx-btn cx-btn-primary i18n' style='width: 200px'>BACK</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-water-${index},#button-plumbSys-${index},#button-externalwater-${index},#button-sewer-${index},#button-septic-${index},#button-wellpump-${index},#button-noneWater-${index},#button-modifyWater-${index}`;
}

async function waterButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

      $(`body ${split[1]}`).click(() => {
          plumbingSystem = true;
      });   

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function InfoProceedButtonParser(toArray, index){
  var html = ``;

  html += `<center>
  <button id='button-proupdate-${index}' class='button-proupdate cx-proupdate cx-btn cx-btn-primary i18n' style='width: 170px'>PROCEED</button>
  <button id='button-phoneupdate-${index}' class='button-phoneupdate cx-phoneupdate cx-btn cx-btn-primary i18n' style='width: 170px'>UPDATE PHONE</button>
  <button id='button-emailupdate-${index}' class='button-emailupdate cx-emailupdate cx-btn cx-btn-primary i18n' style='width: 170px'>UPDATE EMAIL</button>
  <button id='button-incorrect-${index}' class='button-incorrect cx-incorrect cx-btn cx-btn-primary i18n' style='width: 170px'>INCORRECT ADDRESS</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-proupdate-${index},#button-phoneupdate-${index},#button-emailupdate-${index},#button-incorrect-${index}`;
}

async function InfoProceedButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}


async function claimLastButtonParser(toArray, index){
  var html = toArray;

  html += `<center>
  <br><button id='button-proupdate-${index}' class='button-proupdate cx-proupdate cx-btn cx-btn-primary i18n' style='width: 160px'>FILE A NEW CLAIM</button>
  <button id='button-phoneupdate-${index}' class='button-phoneupdate cx-phoneupdate cx-btn cx-btn-primary i18n' style='width: 160px'>VIEW CLAIM STATUS</button>
  <button id='button-emailupdate-${index}' class='button-emailupdate cx-emailupdate cx-btn cx-btn-primary i18n' style='width: 160px'>NO THANKS</button>
  </center>
  </div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

return `#button-proupdate-${index},#button-phoneupdate-${index},#button-emailupdate-${index}`;
}

async function claimLastButtonSender(data,radio) {
  await $(() => {
    var split = data.split(",");
     function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {

      for (let k = 0; k <= split.length - 1; k++) {

        $(`body ${split[k]}`).click(() => {

        $(`body ${split[k]}`).css('background', '#A5936E');
        $(`body ${split[k]}`).css('color', '#ffffff');
        $(`body ${split[k]}`).css('font-weight', '300');
       disableButton();    
      sender($(split[k]).text().toUpperCase().trim());

        });
      }

    }, 50);
  });
  return await true;
}



////////// DYNAMIC BUTTON ////////////////////

async function dynamicCategoryButtonParser(toArray, index) {
  var html = ``;
  var split = toArray.split(",");
  var buttonBuilder = "";
  var appIndex = 0;

  await _.forEach(split, data => {
    let value = data.trim();
//     var width = value.offsetWidth;

//     maxWidth = width;
//     for (var i = 1; i < value.length; i++) {
//       console.log(Math.max(maxWidth))
// };


    buttonBuilder += `<button id='btn-${index}' class='btn-${index} cx-${index} btn-${index}-${appIndex} cx-btn cx-btn-primary i18n'  value='${value}' style='width: 190px'>${value.toUpperCase()}</button>`;
    appIndex++;
  });

  html += `<center>${buttonBuilder}</center></div>`;

  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);

  }, 40);

  return `#btn-${index}`;
}

// SUB Category



async function dynamicAppliancesButtonParser(toArray, index) {
  var html = ``;
  var split = toArray.split(",");
  var buttonBuilder = "";
  var appIndex = 0;

  await _.forEach(split, data => {
    let value = data.trim();

    buttonBuilder += `<button id='btn-${index}' class='button-${index} cx-${index} btn-${index}-${appIndex} cx-btn cx-btn-primary i18n'  value='${value}' style='width: 230px'>${value.toUpperCase()}</button>`;
    appIndex++;
  });

  html += `<center>${buttonBuilder}</center></div>`;

  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
  }, 40);

  return `#btn-${index}`;
}

async function dynamicElectricalButtonParser(toArray, index) {
  var html = ``;
  var split = toArray.split(",");
  var buttonBuilder = "";
  var appIndex = 0;

  await _.forEach(split, data => {
    let value = data.trim();

    buttonBuilder += `<button id='btn-${index}' class='button-${index} cx-${index} btn-${index}-${appIndex} cx-btn cx-btn-primary i18n'  value='${value}' style='width: 230px'>${value.toUpperCase()}</button>`;
    appIndex++;
  });

  html += `<center>${buttonBuilder}</center></div>`;

  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
  }, 40);

  return `#btn-${index}`;
}

async function dynamicPlumbingButtonParser(toArray, index) {
  var html = ``;
  var split = toArray.split(",");
  var buttonBuilder = "";
  var appIndex = 0;

  await _.forEach(split, data => {
    let value = data.trim();

    buttonBuilder += `<button id='btn-${index}' class='button-${index} cx-${index} btn-${index}-${appIndex} cx-btn cx-btn-primary i18n'  value='${value}' style='width: 230px'>${value.toUpperCase()}</button>`;
    appIndex++;
  });

  html += `<center>${buttonBuilder}</center></div>`;

  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
  }, 40);

  return `#btn-${index}`;
}


async function dynamicCategoryButtonSender(messages, data, index) {
  await $(() => {
    var split = data.split(",");
    var message = messages.split(",");

    function disableButton() {
      for (var i = 0; i < message.length; i++) {
        $(`.btn-${index}-${i}`).prop("disabled", true);
        $(`.btn-${index}-${i}`).css('pointer-events', 'none');
      }
    }
    for (var j = 0; j < message.length; j++) {
      $(".cx-send").on("keyup click", function(e) {
        disableButton();
      });
    }
    
    setTimeout(() => {
      for (let k = 0; k <= message.length - 1; k++) {

        $(`.btn-${index}-${k}`).click(() => {

          $(`.btn-${index}-${k}`).css('background', '#A5936E');
          $(`.btn-${index}-${k}`).css('color', '#ffffff');
          $(`.btn-${index}-${k}`).css('font-weight', '300');
          sender($(`body ${split}`)[k].value.toUpperCase());

          disableButton();
        });
      }
    }, 80);
  });
  return await true;
}
