

async function radioButtonParser(toArray, index, submitOnly){
  var html = ``;

  var split = toArray.split(":");
  var optionBuilder = "";
  var top = 0
  html += `<p>${split[0]}</p><br>`
  var items = split[1].split(',')
  await _.forEach(items, (data) => {
    let value = data.trim();
    optionBuilder += `<div class='label-wrapper' style='margin-top: -${top}px; top: -15px!important;'>
    <label class="radio-inline" >
      <input type="radio" class='radioInput' id='optradio${index}' name="optradio${index}" value='${value}'>${value}
    </label>
    </div><br>`;
    top += 25
  });
  html += optionBuilder;

  html += (submitOnly) ? `<div class='radiobtnwrapper'><center><button style="position: relative; left: -64px" id='button-sumbit-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button></center></div>` : `<div class='radiobtnwrapper'><button id='button-sumbit-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button><button id='button-none-${index}' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>NONE OF THESE</button></div>`
  await setTimeout(() => {
    //    document.getElementById("cx-chat-index-"+e.data.messages[i].index).append(json2html.render(data,template))

    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(html);
  }, 40);

return (submitOnly) ? `#button-sumbit-${index},input[type='radio'][name='optradio${index}']:checked` : `#button-sumbit-${index},input[type='radio'][name='optradio${index}']:checked,#button-none-${index}`;
}

async function radioSender(data,radio) {
  await $(() => {
    var split = data.split(",");
    function disableButton() {
      for (var i = 0; i < split.length; i++) {
          $(`body ${split[i]}`).prop("disabled", true);
          $(`body ${split[i]}`).css('pointer-events', 'none');
          $(`body .radioInput`).css('pointer-events', 'none');
          $(`body .radioInput`).prop("disabled",true);

        }
      }
      for (var j = 0; j < split.length; j++) {
         $(".cx-send").on("keyup click", function (e) {
             disableButton()
        })
       }
    setTimeout(() => {
      $(`body ${split[0]}`).click(() => {
        camTyping();
        disableButton()
        setTimeout(() => {
            $(`#cx_input`).focus();
            $(`#cx_input`).val("SUBMIT");
            $(".cx-send").trigger("click");
            
            $(`body ${split[0]}`).css('background', '#A5936E');
            $(`body ${split[0]}`).css('color', '#ffffff');
            $(`body ${split[0]}`).css('font-weight', '300');
          }, 50);
      });
      $(`body ${split[2]}`).click(() => {
        camTyping();
        disableButton()
        setTimeout(() => {
            $(`#cx_input`).focus();
            $(`#cx_input`).val("NONE OF THESE");
            $(".cx-send").trigger("click");
            
            $(`body ${split[2]}`).css('background', '#A5936E');
            $(`body ${split[2]}`).css('color', '#ffffff');
            $(`body ${split[2]}`).css('font-weight', '300');
          }, 50);
      });
      
    }, 80);
  });
  return await true;
}



