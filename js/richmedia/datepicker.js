var hasData = false;

async function datePickerDisableParser(message, index) {
  var template = ``;

  template = `<style='position: relative top: 5px!important;'>${message}</style>
              &nbsp;&nbsp;<center><input id='date-picker-${index}' style='width:90px; position: relative; top: 0px!important;' type='text' placeholder='MM/DD/YYYY'  class='dates-picker' />
              &nbsp;<button id='button-sumbit-${index}' style='position: relative; top: -2px!important; height: 23px; padding-top: 1px;' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button></center>

    `;

var dateToday = new Date(); 

   await setTimeout(() => {
    $("#cx-chat-index-" + index + " .cx-message-text").html(null);
    $("#cx-chat-index-" + index + " .cx-message-text").html(template);
    $("#date-picker-" + index).datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: dateToday,
      maxDate: new Date(2024, 11, 30)
    });
      }, 40);
      return `#date-picker-${index},#button-sumbit-${index}`;

   
}


async function datePickerParser(index) {
  var template = `<br><center><input id='date-picker-${index}' style='width:100px; position: relative; top: 7px!important;'' type='text' placeholder='MM/DD/YYYY'  class='dates-picker' />
                  &nbsp<button id='button-sumbit-${index}' style='position: relative; height: 23px; padding-top: 1px;' class='button-submit cx-submit cx-btn cx-btn-primary i18n'>SUBMIT</button></center>
    `;



var dateToday = new Date(); 

   await setTimeout(() => {
        $("#cx-chat-index-" + index + " .cx-message-text").append(template);
        console.log(index)
    $("#date-picker-" + index).datepicker({
      changeMonth: true,
      changeYear: true,
       maxDate: dateToday

    });
      }, 40);
      return `#date-picker-${index},#button-sumbit-${index}`;

   
}


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [month, day, year].join('-');
}

async function dateSender(value) {
  let val = $(`body ${value}`).val();

  if(formatDate(val) == 'NaN-NaN-NaN'){
    hasData = false;
    return;
  }
    camTyping();
    hasData = true;
    console.log(formatDate(val))
  await setTimeout(() => {
    $(`#cx_input`).focus();
    $(`#cx_input`).val(formatDate(val));
    $(".cx-send").trigger("click");
  }, 50);
}

async function dateTextsender(data) {
  await $(() => {
    var split = data.split(",");
    setTimeout(() => {

      $(`body ${split[1]}`).click(() => {
        dateSender(split[0]);
        if(hasData == true) {
           $(`body .dates-picker`).prop("disabled",true);
          $(`body ${split[1]}`).prop("disabled", true);
          $(`body ${split[1]}`).css('background', '#A5936E');
        $(`body ${split[1]}`).css('color', '#ffffff');
        $(`body ${split[1]}`).css('font-weight', '300');
        $(`body ${split[1]}`).css('pointer-events', 'none');

        }
      });
    }, 40);
  });

  return await true;
}
