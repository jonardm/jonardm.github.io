async function engineGenerator(index,tag) {
	await htmlwrpper(index).then(data =>{
		 setTimeout(() =>{
		 	switch(tag){
		 		case 'inputText':
		 		inputText(index).then(htmlTag =>{
		 			$(`body ${data}`).append(htmlTag)
		 		})
		 		
		 	}
		 	
		 },40)
	})
	

}
async function htmlwrpper(index){
	var html = `<div id='form-${index}'</div>`
	await setTimeout(() => {
        $("#cx-chat-index-" + index + " .cx-message-text").append(html);
      }, 40);
	return `#form-${index}`
}

async function radioCard(toArray, index,label) {
var html = `<style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</style><br><br>
         
`;

  var split = toArray.split("|");
  var optionBuilder = "";
  var top = 0
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<div class='label-wrapper' style='margin-top: -${top}px; top: -15px!important;'>
    <label class="radio-inline" >
      <input type="radio" class='radioInput' id='optradio${index}' name="optradio${index}" value='${value}'>${value}
    </label>
    </div><br>
    
    
    `;
    top += 20
  });
  html += optionBuilder;
  html += `</div>`


  return html;
}

async function radioRepair(toArray, index,label) {
  var html = `<label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label><br><br>
           
  `;
  
    var split = toArray.split("|");
    var optionBuilder = "";
    var top = 0
    await _.forEach(split, (data) => {
      let value = data.trim();
      optionBuilder += `<div class='label-wrapper' style='margin-top: -${top}px; top: -15px!important;'>
      <label class="radio-inline" >
        <input type="radio" class='radioInput' id='optradio${index}' name="optradio${index}" value='${value}'>${value}
      </label>
      </div><br>
      
      `;
      top += 20
    });
    html += optionBuilder;
    html += `</div>`

  
    return html;
  }


async function selectDeparture(message, toArray, index,label) {
	var html = `
    <style='font-size: 14px;margin-bottom: 5px;position: relative'>${message}</style>
	<br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
	<select id='departure-${index}' class='select-tag' style='width: 100%;position: relative'>`;

  var split = toArray.split("|");
  var optionBuilder = "";
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<option value='${value}'>${data}</option>`;
  });
  html += optionBuilder;
  html += "</select>";
  

  return html;
}

async function selectArrival(toArray, index,label) {
	var html = `
	<br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
	<select id='selectProduct-${index}' class='select-tag' style='width: 100%;position: relative'>`;

  var split = toArray.split("|");
  var optionBuilder = "";
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<option value='${value}'>${data}</option>`;
  });
  html += optionBuilder;
  html += "</select>";
  

  return html;
}

async function selectType(toArray, index,label) {
  var html = `
  <br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <select id='type-${index}' class='select-tag' style='width: 100%;position: relative'>`;

  var split = toArray.split("|");
  var optionBuilder = "";
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<option value='${value}'>${data}</option>`;
  });
  html += optionBuilder;
  html += "</select>";
  

  return html;
}

async function selectExperience(toArray, index,label) {
  var html = `
  <br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <select id='selectExp-${index}' class='select-tag' style='width: 100%;position: relative'>`;

  var split = toArray.split("|");
  var optionBuilder = "";
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<option value='${value}'>${data}</option>`;
  });
  html += optionBuilder;
  html += "</select>";
  

  return html;
}

async function selectExperienceOnly(toArray, index,label) {
  var html = `
  <style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><br><select id='selectExpOnly-${index}' class='select-tag-exp' style='width: 100%;position: relative'>`;

  var split = toArray.split("|");
  var optionBuilder = "";
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<option value='${value}'>${data}</option>`;
  });
  html += optionBuilder;
  html += "</select>";
  

  return html;
}

async function selectTime(toArray, index, label) {
  var html = `
  <label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><br><select id='selectTime-${index}' class='select-tag' style='width: 100%;position: relative'>`;

  var split = toArray.split("|");
  var optionBuilder = "";
  await _.forEach(split, (data) => {
    let value = data.trim();
    optionBuilder += `<option value='${value}'>${data}</option>`;
  });
  html += optionBuilder;
  html += "</select>";
  

  return html;
}


async function inputTextRefNumberFlight(toArray,index,label) {
	return`
  <style='font-size: 14px;margin-bottom: 5px;position: relative'>${toArray}</label>
	<br><br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}<label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative; color: #A5936E!important'>*</label>
	<input class='form-input-model' type='text' placeholder='BOOKING REFERENCE NUMBER' id='input-textModel-${index}' style='width: 100%;position: relative' />`

}
async function inputTextlastNameFlight(index,label) {
  return`
  <br><br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}<label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative; color: #A5936E!important'>*</label>
  <input class='form-input-serial' type='text' placeholder='LAST NAME' id='input-textSerial-${index}' style='width: 100%;position: relative' />`

}

async function inputTextFrom(toArray,index,label) {
  return`
  <style='font-size: 14px;margin-bottom: 5px;position: relative'>${toArray}</label>
  <br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <input class='form-input-departure' type='text' placeholder='DEPARTURE AIRPORT' id='input-departure-${index}' style='width: 100%;position: relative' />`

}
async function inputTextTo(index,label) {
  return`
  <br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <input class='form-input-arrival' type='text' placeholder='ARRIVAL AIRPORT' id='input-arrival-${index}' style='width: 100%;position: relative' />`

}

async function inputTextinstructions(index,label) {
  return`
   <label class='form-label-time' style='font-size: 10px;position: relative; color:red!important; left:-70px!important; top: 10px;'>Please select the required slot</label>
  <br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative;top: -25px'>${label}</label>
  <br><textarea class='form-input-intructions' placeholder='Instructions for Servicer' id='input-textModel-${index}' style='width: 100%;position: relative; top: -20px' ></textarea>`

}

async function inputTextRepairInstructions(index,label) {
  return`
   <label class='form-label-repair' style='font-size: 10px;position: relative; color:red!important; left:-110px!important; top: 12px;'>Please select the required slot</label>
  <br><br><label class='form-labelRepair' style='font-size: 14px;margin-bottom: 5px;position: relative; top: 8px'>${label}</label>
  <br><textarea class='form-input-repair' placeholder='Instructions for Servicer' id='input-repair-${index}' style='width: 100%;position: relative; top: 10px' /></textarea>`

}

async function inputLastName(index,label) {
  return`
  <style='font-size: 14px;margin-bottom: 5px;position: relative'>Please provide the following information.</label>
  <br><br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><input class='form-input-lastName' type='text' placeholder='PLEASE ENTER LAST NAME' id='input-lastName-${index}' style='width: 100%;position: relative' />`

}async function inputHouseNumber(index,label) {
  return`
  <br><br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><input class='form-input-house' type='text' placeholder='PLEASE ENTER HOUSE NUMBER' id='input-houseNumber-${index}' style='width: 100%;position: relative' />`

}async function inputZipcode(index,label) {
  return`
  <br><br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><input class='form-input-zip' type='text' pattern='[0-9]{3}' oninput="this.value=this.value.replace(/([^-+0-9]+)/gi, '');" maxlength='5' placeholder='PLEASE ENTER ZIP CODE' id='input-zipCode-${index}' style='width: 100%;position: relative' />
  <br><label class='form-label-zip' style='font-size: 10px;margin-bottom: 5px;position: relative; color:red!important'>Please enter 5 digit ZIP Code</label>`

}

async function inputTextServicer1(index,label,messages) {
  return`
  

  <div class='form-servicer' style='font-size: 14px; color: #A5936E!important'>${messages}</style></div>
  <br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><input class='form-input1' type='text' placeholder='${label}' id='input-textServicer1-${index}' style='width: 100%;position: relative' />`

}


async function inputTextServicer2(index,label) {
  return`
  <br><br><style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><input class='form-input2' type='text' placeholder='${label}' oninput="this.value=this.value.replace(/([^-+0-9]+)/gi, '');"  id='input-textServicer2-${index}' style='width: 100%;position: relative' />`

}
async function inputTextServicer3(index,label) {
  return`
  <br><br><label class='form-label-textServicer3' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
  <br><textarea class='form-input3' type='text' placeholder='${label}' id='input-textServicer3-${index}' style='width: 100%;position: relative'></textarea>`

}
async function buttonServicer(index,top) {
   return `<br><br><center><button id='button-servicer-${index}' class='button-servicer cx-servicer cx-btn cx-btn-primary i18n style='width: 88px'>SUBMIT</button>
   <button id='button-servicerSkip-${index}' class='button-servicerSkip cx-servicerSkip cx-btn cx-btn-primary i18n style='width: 88px'>SKIP</button></center>`
}

/// PAYMENT


async function inputTextPaymentAmount(index,label) {
  return `
  <form id="payment-form" method="POST" action="/payment"><center><div class='form-trade'style='font-size: 14px; color: #A5936E!important'>Pay Your Booking Amount</label></center>
  <img class ="cardTypeImages" src="img/cardList.jpg"><br><br>
  <label>Payment Amount</label>
  <input class='form-paymentAmount' type='text' oninput="this.value=this.value.replace(/[^0-9]/g,'');" value='SAR648' id='input-paymentAmount-${index}' style='width: 100%;position: relative;height: 32px;' />
  <br>
  <div class="card-brand-icon-container"><i class="fas fa-credit-card"></i></div>
  <label>Card Number</label>
  <input class='form-ccNumber' type='password' placeholder='**** **** **** ****' maxlength="16" id='input-ccNumber-${index}' required="required" autocomplete="off"  style='width: 100%;height: 30px;position: relative' />
  <br>
  <label>Expiration Date </label> <br>
  <input class='form-expDate' id='input-expDate-${index}' required="" autocomplete="cc-exp" autocorrect="off" spellcheck="false" name="exp-date" type="text" maxlength="5" inputmode="numeric" aria-label="Credit or debit card expiration date" placeholder="MM/YY" aria-invalid="false" value="" style='width: 30%;height: 30px;position: relative' />
  <label class='form-securityCode' style='left: 42px;position: relative;'>Security Code</style></label><br>
  <input class='form-secCode' type="password" placeholder='****' maxlength="4" id='input-secCode-${index}'  style='left: 120px;top: -30px;width: 30%;height: 30px;position: relative;' />

  <label class='form-label-expdate' style='font-size: 10px;top:-5px;left: -80px;position: relative; color:red!important'>Please enter card details</label>
  <center>
  </center>
  </form>`
}


async function inputTextCCNumber(index,label) {
//   return`
//   <style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
//   <br><input class='form-ccNumber' type='password' placeholder='**** **** **** ****' maxlength="16" id='input-ccNumber-${index}' required="required" autocomplete="off"  style='width: 100%;height: 30px;position: relative' />
//   <div class="eyeicon"><i class="fas fa-eye-slash" id="eye"></i></div></span>
//   <ul class="card_logos">
// 	<li class="card_visa">Visa</li>
// 	<li class="card_mastercard">Mastercard</li>
// 	<li class="card_amex">American Express</li>
// 	<li class="card_discover">Discover</li>
// 	<li class="card_jcb">JCB</li>
// 	<li class="card_diners">Diners Club</li>
// </ul>`
// return `<style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
//   <br><div class="card-brand-icon-container"><i class="fas fa-credit-card"></i></div>
//   <style='font-size: 14px;margin-bottom: 5px;position: relative' class='form-label-exp'>${label}</label>
//   <br><input class='form-expDate' id='input-expDate-${index}' required="" autocomplete="cc-exp" autocorrect="off" spellcheck="false" name="exp-date" type="text" maxlength="5" inputmode="numeric" aria-label="Credit or debit card expiration date" placeholder="MM/YY" aria-invalid="false" value="" style='width: 30%;height: 30px;position: relative' />
//   <style='position: relative; font-size: 14px; class='form-securityCode'>${label}</style>
//   <input class='form-secCode' type="password" placeholder='***' maxlength="4" id='input-secCode-${index}'  style='left: -90px;top: 24px;width: 30%;height: 30px;position: relative;' />
//   <div class="eyeicon"><i class="fas fa-eye-slash" id="eyeSecCode" style='left: -100px; top: 2px;'></i></div></span>
//   <label class='form-label-expdate' style='font-size: 10px;top:-50px;left: 0px;position: relative; color:red!important'>Please enter card details</label>
//    <center><button id='button-paymentcc-${index}' type="submit" class='button-paymentcc cx-paymentcc cx-btn cx-btn-primary i18n style='width: 88px'>PAY</button>
//    <button id='button-cancelcc-${index}' class='button-cancelcc cx-cancelcc cx-btn cx-btn-primary i18n style='width: 88px'>CANCEL</button></center>`

}

async function inputTextExpDate(index,label) {
  return`
  <style='font-size: 14px;margin-bottom: 5px;position: relative' class='form-label-exp'>${label}</label>
  <br><input class='form-expDate' id='input-expDate-${index}' required="" autocomplete="cc-exp" autocorrect="off" spellcheck="false" name="exp-date" type="text" maxlength="5" inputmode="numeric" aria-label="Credit or debit card expiration date" placeholder="MM/YY" aria-invalid="false" value="" style='width: 30%;height: 30px;position: relative' />`

}


async function inputTextSecCode(index,label) {
  return`
  <style='position: relative; font-size: 14px; class='form-securityCode'>${label}</style>
  <input class='form-secCode' type="password" placeholder='***' maxlength="4" id='input-secCode-${index}'  style='left: -90px;top: 24px;width: 30%;height: 30px;position: relative;' />
 `
}

async function buttonPayment(index,top) {
   return `
  <label class='form-label-expdate' style='font-size: 10px;top:-50px;left: 0px;position: relative; color:red!important'>Please enter card details</label>
   <center><button id='button-paymentcc-${index}' class='button-paymentcc cx-paymentcc cx-btn cx-btn-primary i18n style='width: 88px'>PAY</button>
   <button id='button-cancelcc-${index}' class='button-cancelcc cx-cancelcc cx-btn cx-btn-primary i18n style='width: 88px'>CANCEL</button></center>`
}



async function inputText2(index,label) {
	return`
	<label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
	<br><input class='form-input' type='text' placeholder='${label}' id='input-text-${index}' style='width: 100%;position: relative' /><br>`

}
async function datepicker(index,label){
	return`
	<br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative'>${label}</label>
	<input type='text' placeholder='MM/DD/YYYY' class='form-input'  type='number' id='input-textDate-${index}' style='width: 100%;position: relative' /><br>`
}


async function buttonSubmitCard(index,top) {
	 return `

   <br><br><label class='form-label' style='font-size: 14px;margin-bottom: 5px;position: relative; color: #A5936E!important'>(*) Mandatory Field</label>
   <br><br><center><button id='button-sumbitCard-${index}' class='button-sumbitCard cx-sumbitCard cx-btn cx-btn-primary i18n'>SUBMIT</button></center></button>`
}

async function buttonSubmitCarddeparture(index,top) {
   return `

   <br><br><center><button id='button-sumbitCard-${index}' class='button-sumbitCard cx-sumbitCard cx-btn cx-btn-primary i18n'>BOOK FLIGHT</button></center></button>`
}

async function buttonExperience(index,top) {
   return `<br><br><center><button id='button-sumbitExp-${index}' class='button-sumbitExp cx-sumbitExp cx-btn cx-btn-primary i18n style='width: 88px'>SUBMIT</button></center>`
}

async function button3(index,top) {
   return `<button id='button-modifyExp-${index}' class='button-modifyExp cx-modifyExp cx-btn cx-btn-primary i18n style='width: 88px'>MODIFY</button>`
}

async function buttonClaim(index,top) {
   return `<br><center><button id='button-sumbitClaim-${index}' class='button-sumbitClaim cx-sumbitClaim cx-btn cx-btn-primary i18n style='width: 88px'>SUBMIT</button></center>`
}

async function buttonSubTime(index,top) {
   return `<br><center><button id='button-subTime-${index}' class='button-subTime cx-subTime cx-btn cx-btn-primary i18n style='width: 88px;'>SUBMIT</button></center>`
}
async function buttonSubRepair(index,top) {
  return `<br><center><button id='button-subRepair-${index}' class='button-subRepair cx-subRepair cx-btn cx-btn-primary i18n style='width: 88px;'>SUBMIT</button></center>`
}

async function formSender(data,radio) {
  await $(() => {
    var split = data.split(",");

    setTimeout(() => {
      

      $(`body ${split[0]}`).click(() => {
        sender('SONY');
      });
      $(`body ${split[2]}`).click(() => {
        sender('MODIFY');
      });
    }, 80);
  });
  return await true;
}

async function foreachCallbackOne(array){
  var toreturn = ''
  await _.forEach(array,value =>{
              // toreturn += $(`body ${value}`).val()+',';                              
            toreturn += $(`body ${value}`).val();                        
              })

  return toreturn

}
async function foreachCallback(array){
  var toreturn = ''
  await _.forEach(array,value =>{
                  toreturn += $(`body ${value}`).val()+',';
                    // toreturn += $(`body ${value}`).val();  
            })

  return toreturn

}

