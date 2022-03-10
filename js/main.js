/**********************************************************************/


var deleteTimers;
var firstLoad = true;
var typing = false;
var chatEnded = false;
let timeOutChat = 1;
var hideAdaptivecard = false;
let missingMessageLoad = 0;
var showTimeout = false;
var numbersOnly = false;
let plugin = CXBus.registerPlugin("TestExtension");
let frameLoaded = false;
let iframe;
let invalidCard = true;
var slideIndex = 1;



if (!window._genesys) window._genesys = {};
if (!window._genesys.widgets) window._genesys.widgets = {};
if (!window._genesys.widgets.extensions)
  window._genesys.widgets.extensions = {};

window._genesys = {
  widgets: {
    main: {
      theme: "light"
    },
    webchat: {
      transport: {
        type: "purecloud-v2-sockets",
         dataURL: "https://api.mypurecloud.ie",
          deploymentKey: "92a7ba43-bf20-43c2-aabf-cb5adbefa947",
          orgGuid: "773b0fee-6e0d-4de1-8500-d798e2eb4a57",

        interactionData: {
          routing: {
            targetType: "QUEUE",
            targetAddress: "HWA_TESTCHAT_QUEUE",
            priority: 2
          }
        }
      }
    }
  }
};

plugin.subscribe("WebChatService.messageReceived", function(e) {
  for (var i = 0; i < e.data.messages.length; i++) {
    var messages = e.data.messages[i].text;

    if(showTimeout) {
    if (e.data.messages[i].from.type == "Client") {
        timeoutMessage();
      }     
  }

    try {
        var firstMessage = e.data.messages[2].text;
        var secondMessage = e.data.messages[3].text;
    //   renderMissingMessage(messages, firstMessage, secondMessage);

    } catch (err) {}

    $(".cx-message.cx-system").css("visibility", "visible");
    $(`body .typing`).remove();
    console.log(messages);

    switch (messages) {
      case "EXCELLENT":
        const indexLike = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexLike + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexLike + " .cx-message-text").html(
            saysomething
          );
          $("#cx-chat-index-" + indexLike + "").remove();
          // $("div").remove(".cx-message-group");
        }, 30);

        break;

      case "BAD":
        const indexdisLike = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexdisLike + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexdisLike + " .cx-message-text").html(
            saysomething
          );
          $("#cx-chat-index-" + indexdisLike + "").remove();
          // $("div").remove(".cx-message-group");
        }, 30);

        break;

      case "FILE A NEW CLAIM , VIEW CLAIM STATUS , ANOTHER REQUEST":

        claimButtonParser(messages, e.data.messages[i].index).then(data => {
          claimButtonSender(data).then(() => {});
        });
        break;

      case "PROCEED , UPDATE PHONE , UPDATE EMAIL , INCORRECT ADDRESS":
        InfoProceedButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          InfoProceedButtonSender(data).then(() => {});
        });
        break;
      case "PHONE NUMBER , EMAIL ADDRESS , CONTRACT NUMBER":
        InfoButtonParser(messages, e.data.messages[i].index).then(data => {
          InfoButtonSender(data).then(() => {});
        });
        break;

      case "Phone Number , Claim Number":
        InfoClaimButtonParser(messages, e.data.messages[i].index).then(data => {
          InfoClaimButtonSender(data).then(() => {});
        });
        break;
      case "PHONE NUMBER:":
        if (e.data.messages[i].from.type == "Bot") {
          inputTextNumberTagParser(
            e.data.messages[i].index,
            messages
          ).then(data => {
            inputTextNumberSender(data).then(() => {});
          });
        }
        break;

      case "Claim Number":
        inputTextClaimandContractTagParser(
          e.data.messages[i].index,
          messages
        ).then(data => {
          inputTextclaimandContractsender(data).then(() => {});
        });

        break;
      case "Contract Number":
        inputTextClaimandContractTagParser(
          e.data.messages[i].index,
          messages
        ).then(data => {
          inputTextclaimandContractsender(data).then(() => {});
        });

        break;

      case "Email address:":
        inputTextEmailTagParser(
          e.data.messages[i].index,
          messages
        ).then(data => {
          inputTextEmailSender(data).then(() => {});
        });

        break;

      case "CONFIRM , BACK":
        confirmButtonParser(messages, e.data.messages[i].index).then(data => {
          confirmButtonSender(data).then(() => {});
        });
        break;

      case "CONFIRM , CANCEL CLAIM":
        confirmCancelClaimButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          confirmCancelClaimButtonSender(data).then(() => {});
        });
        break;

      case "YES , NO":
        yesNoButtonParser(messages, e.data.messages[i].index).then(data => {
          yesNoButtonSender(data).then(() => {});
        });
        break;
      case "YES , MODIFY":
        yesModifyButtonParser(messages, e.data.messages[i].index).then(data => {
          yesModifyButtonSender(data).then(() => {});
        });
        break;

      case "YES , UPDATE EMAIL":
        yesEmailButtonParser(messages, e.data.messages[i].index).then(data => {
          yesEmailButtonSender(data).then(() => {});
        });
        break; 

      case "YES , NO , I'M NOT SURE":
        yesNoSureButtonParser(messages, e.data.messages[i].index).then(data => {
          yesNoSureButtonSender(data).then(() => {});
        });
        break;
      case "Is your product more than a year old?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;
      case "Does your product need priority service?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;

      case "If you'd prefer, you can call us at (888) 492-7359 for further assistance. Your estimated wait time is 16 minutes. Can I connect you to a live chat agent?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;

      case "Do you want to proceed?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;

      case "Thank you for your valuable feedback. Is there anything you want me to improve?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;

      case "I GOT IT":
        if (e.data.messages[i].from.type == "Bot") {
          gotItButtonParser(messages, e.data.messages[i].index).then(data => {
            gotItButtonSender(data).then(() => {});
          });
        }
        break;

        case "We're locating a servicer and will contact you within 24 hours to schedule service.":
          if (e.data.messages[i].from.type == "Bot") {
            gotIt24hoursButtonParser(messages, e.data.messages[i].index).then(data => {
              gotIt24hoursButtonSender(data).then(() => {});
            });
          }
          break;
        

      case "Thanks. Is there anything else you want me to improve?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;

      case "You are being redirected to HWA's payment web page. Please keep your card details handy. PROCEED , CANCEL":
        proCanButtonParser(messages, e.data.messages[i].index).then(data => {
          proCanButtonSender(data).then(() => {});
        });
        break;
      case "Can I connect you to a live chat agent?":
        yesButtonParser(messages, e.data.messages[i].index).then(data => {
          yesButtonSender(data).then(() => {});
        });
        break;
        

      case "Please provide your contract purchase date":
        datePickerParser(e.data.messages[i].index).then(data => {
          dateTextsender(data).then(() => {});
        });
        break;
      case "Product Purchase Date":
        // case "Product purchase date":

        datePickerParser(e.data.messages[i].index).then(data => {
          dateTextsender(data).then(() => {});
        });
        break;

      case "When did you start experiencing this issue?":
        datePickerParser(e.data.messages[i].index).then(data => {
          dateTextsender(data).then(() => {});
        });
        break;
      case "The estimated wait time to connect with a live chat agent is approximately 2 minutes.":
        proceedOnlyButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          proceedOnlyButtonSender(data).then(() => {});
        });
        break;

        case "The estimated wait time to connect with a live chat agent is approximately 2 minutes":
             // case "The estimated wait time to connect with a live chat agent is approximately 2 minutes":

        proceedEndChatButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          proceedEndChatButtonSender(data).then(() => {});
        });
        break;
      case "The TCF amount due is $100.45.":
        proceedOnlyButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          proceedOnlyButtonSender(data).then(() => {});
        });
        break;
      case "Please keep your card details handy.":
        proceedOnlyimageButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          gotItOnlyButtonSender(data).then(() => {});
        });
        break;
      case "Can I help you with anything else today?":
        claimLastButtonParser(messages, e.data.messages[i].index).then(data => {
          claimLastButtonSender(data).then(() => {});
        });

        break;
      case "SUBMIT , MODIFY":
        submitButtonParser(messages, e.data.messages[i].index).then(data => {
          submitButtonSender(data).then(() => {});
        });
        break;
      case "SUBMIT , SKIP":
        submitSkipButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          submitSKipButtonSender(data).then(() => {});
        });
        break;
      case "PROCEED , WHAT IS TCF?":
        proceedButtonParser(messages, e.data.messages[i].index).then(data => {
          proceedButtonSender(data).then(() => {});
        });
        break;

      case "SUCCESS , FAILURE":
        paymentButtonParser(messages, e.data.messages[i].index).then(data => {
          paymentButtonSender(data).then(() => {});
        });
        break;
      case "SUCCESS , SUCCESSONE , FAILURE":
        successOneButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          successOneButtonSender(data).then(() => {});
        });
        break;

      case "APPLIANCES , ELECTRICAL , HEATING & AIR , PLUMBING , INDOOR/OUTDOOR , NONE OF THESE":
        AppliancesButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          AppliancesButtonSender(data).then(() => {});
        });

        break;
      case "REFRIGERATOR , WASHER , DRYER , GARBAGE DISPOSAL , RANGE, OVEN OR STOVE , VIEW MORE , BACK":
        refButtonParser(messages, e.data.messages[i].index).then(data => {
          refButtonSender(data).then(() => {});
        });
        break;

      case "GARAGE DOOR OPENER , ELECTRICAL SYSTEM , DOORBELL , PHONE LINE , CEILING OR EXHAUST FAN , NONE OF THESE , BACK":
        garageButtonParser(messages, e.data.messages[i].index).then(data => {
          garageButtonSender(data).then(() => {});
        });
        break;
      case "DISHWASHER , MICROWAVE , CENTRAL VACUUM , HOT WATER DISPENSER , TRASH COMPACTOR , FOOD CENTER , FREEZER , WASHER/DRYER , CHANGE CATEGORY , NONE OF THESE , BACK":
        dishButtonParser(messages, e.data.messages[i].index).then(data => {
          dishButtonSender(data).then(() => {});
        });
        break;

      // case `Refrigerator , Dryer , Washer , Garbage Disposer , Range/Oven/Stove , Others , Goback`:
      //   e.data.messages[i].text = `dont erase me`;
      //   //convert to select option tag
      //   selectTagParser(messages, e.data.messages[i].index).then((data) => {
      //     selectTagSender(data);
      //   });
      //   break;
      // case `SONY , SAMSUNG , LG , PANASONIC ISSUE DESCRIPTION`:
      //   e.data.messages[i].text = `dont erase me`;

      //   //convert to select option tag
      //   selectTagParser(messages, e.data.messages[i].index).then((data) => {
      //     selectTagSender(data);
      //   });
      //   break;
      case "SECURITY AND FIRE SYSTEM , RE-KEY , PEST CONTROL , ROOF , SWIMMING POOL & SPA , TERMITE TREATMENT , NONE OF THESE , BACK":
        burglerButtonParser(messages, e.data.messages[i].index).then(data => {
          burglerButtonSender(data).then(() => {});
        });
        break;

      case "WATER HEATER , PLUMBING SYSTEM , EXTERNAL WATER LINE, SEWAGE EJECTOR PUMP , SEPTIC SYSTEM , WELL PUMP , NONE OF THESE , BACK":
        waterButtonParser(messages, e.data.messages[i].index).then(data => {
          waterButtonSender(data).then(() => {});
        });
        break;

      case "CENTRAL HEATING SYSTEM , AC SYSTEM , DUCTWORK , NONE OF THESE , BACK":
        centralButtonParser(messages, e.data.messages[i].index).then(data => {
          centralButtonSender(data).then(() => {});
        });
        break;

      case "ISSUE DESCRIPTION":
        inputTextTagParser(e.data.messages[i].index).then(data => {
          inputTextsender(data).then(() => {});
        });
        break;

      case "Purchase Date":
        datePickerParser(e.data.messages[i].index).then(data => {
          dateTextsender(data).then(() => {});
        });
        break;
       

      case "What would we do to improve?":
        inputTextAreaParser(e.data.messages[i].index, true).then(data => {
          inputTextsender(data).then(() => {});
        });

        textAreaAutoResize();

        break;

        case "What should we improve?":

        inputTextAreaParser(e.data.messages[i].index, true).then(data => {
          inputTextAreasender(data).then(() => {});
        });
        textAreaAutoResize()

        break;

      case "Please provide a brief description of the issue.":
        //Please provide a brief description of the issue.
        inputTextAreaParser(e.data.messages[i].index, true).then(data => {
          inputTextAreasender(data).then(() => {});
        });
        textAreaAutoResize()

        break;

      case "👍,👎":

        likeButtonParser(messages, e.data.messages[i].index).then(data => {
          likeButtonSender(data).then(() => {});
        });

        break;

      case "Last Name , House Number , Zip Code":
        const indexClaim = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexClaim + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexClaim + " .cx-message-text").html(
            saysomething
          );
        }, 30);
        htmlwrpper(indexClaim).then(data => {
          setTimeout(() => {
            var collector = "";

            inputLastName(indexClaim, `Last Name`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `#input-lastName-${indexClaim}`;
              }, 50);
            });

            inputHouseNumber(indexClaim, `House Number`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-houseNumber-${indexClaim}`;
              }, 60);
            });

            inputZipcode(indexClaim, `Zip Code`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-zipCode-${indexClaim}`;
                $(".form-label-zip").hide();
              }, 70);
            });

            const top = 50;
            buttonClaim(indexClaim, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);

                $(`body #button-sumbitClaim-${indexClaim}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;

                    if ($(".form-input-zip").val().length < 5) {
                      $(".form-label-zip").show();
                      return;
                    }
                    if (
                      dataCard.includes(",,") ||
                      $(".form-input-lastName").val() == ""
                    ) {
                      return;
                    }

                    $(`body #button-sumbitClaim-${indexClaim}`).prop("disabled",true);
                    $(`body .form-input-lastName`).prop("disabled",true);
                    $(`body .form-input-house`).prop("disabled",true);
                    $(`body .form-input-zip`).prop("disabled",true);
                    $(`body #button-sumbitClaim-${indexClaim}`).css('background', '#A5936E');
                    $(`body #button-sumbitClaim-${indexClaim}`).css('color', '#ffffff');
                    $(`body #button-sumbitClaim-${indexClaim}`).css('font-weight', '300');
                    $(`body #button-sumbitClaim-${indexClaim}`).css('pointer-events', 'none');
                    console.log(dataCard);
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(dataCard);
                      $(".cx-send").trigger("click");
                      $(".form-label-zip").hide();

                      hideAdaptivecard = true;
                    }, 50);
                  });
                });
              }, 110);
            });
          }, 40);
        });

        break;

            case "Product Brand* , Product Description* , Model Number , Serial Number":
            // case "Product Brand* , Product Description* , Model Number , Serial Number":

     

        break;

      case "What issue are you experiencing?":
        const indexIssue = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexIssue + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexIssue + " .cx-message-text").html(
            saysomething
          );
        }, 30);
        htmlwrpper(indexIssue).then(data => {
          setTimeout(() => {
            var collector = "";
            var issueLists;
            console.log(poolAndSpa)
            if(poolAndSpa == true){
                 issueLists = `Hot tub cover issue|Pump is not working|Low pressure|Pump is leaking|Pump making loud noise`;
                 poolAndSpa = false;
            }else if(refrigerator == true){
                    issueLists = `Will not power on|Filter issue|Ice dispenser not working|Refrigerator is freezing food|Door handle is loose`;
                    refrigerator = false;
            }else if(plumbingSystem == true) {
                    issueLists = `Plumbing Stoppages - Drain is clogged|Plumbing Stoppages - Slow draining|Pipe Burst|Pipe(s) Leaking|Sump Pump - Sump pump failed|Toilet constantly running or leaking`;
                    plumbingSystem = false;
            }else if(centralHeat == true){
                    issueLists = `Will not power on|Unit is not heating|Unit not heating properly|Gas Smell (Gas Unit Only)|Error Code is displayed|Unit is leaking water`;
                    centralHeat = false;
            }else{

                 issueLists = `WILL NOT POWER ON|PUMP IS NOT WORKING|Washer drawer is broken|NO ICE PRODUCTION|ICE MAKER IS NOT FUNCTIONING PROPERLY|ICE DISPENSER NOT WORKING|REFRIGERATOR AND/OR FREEZER NOT COOLING|REFRIGERATOR IS FREEZING FOOD|REFRIGERATOR TEMPERATURE IS TOO WARM`;

            }
            selectExperienceOnly(
              issueLists,
              indexIssue,
              messages
            ).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                collector += `,#selectExpOnly-${indexIssue}`;
              }, 50);
            });

            const top = 50;
            buttonExperience(indexIssue, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                $(`body #button-sumbitExp-${indexIssue}`).click(() => {
                  let tmp = collector.split(`,`);
                  $(`body #button-sumbitExp-${indexIssue}`).prop(
                    "disabled",
                    true
                  );
                    $(`body .select-tag-exp`).prop("disabled",true);
                   $(`body #button-sumbitExp-${indexIssue}`).css('background', '#A5936E');
                    $(`body #button-sumbitExp-${indexIssue}`).css('color', '#ffffff');
                    $(`body #button-sumbitExp-${indexIssue}`).css('font-weight', '300');
                    $(`body #button-sumbitExp-${indexIssue}`).css('pointer-events', 'none');
                  foreachCallbackOne(tmp).then(datafor => {
                    console.log(datafor);
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(datafor);
                      $(".cx-send").trigger("click");
                     // hideAdaptivecard = true;
                    }, 50);
                  });
                });
              }, 110);
            });
          }, 40);
        });
        break;

      case "Date":
        datePickerDisableParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          dateTextsender(data).then(() => {});
        });

        break;

      case "Time , Special instructions for the Servicer":
        // case "Enter time , Any specific instructions for the servicer: , Submit":




        break;
        
  
       case "Please choose from the following repair options:":

          const indexRepair = e.data.messages[i].index;
          setTimeout(() => {
            $("#cx-chat-index-" + indexRepair + " .cx-message-text").html(null);
            let saysomething = ` `;
            $("#cx-chat-index-" + indexRepair + " .cx-message-text").html(
              saysomething
            );
          }, 30);
          htmlwrpper(indexRepair).then(data => {
            setTimeout(() => {
              var collector = "";
  
        
  
              inputTextRepairInstructions(
                indexRepair,
                `Special instructions for the Servicer`
              ).then(htmlTag => {
                setTimeout(() => {
                  $(`body ${data}`).append(htmlTag);
                  //remove comma at the first one
                  collector += `,#input-repair-${indexRepair}`;
                  $(".form-label-repair").hide();
                  $(`.form-labelRepair`).hide();                 
                    $(`.form-input-repair`).hide();

                  
                }, 80);
              });
              textAreaAutoResize()



              const top = 50;
              buttonSubRepair(indexRepair, top).then(htmlTag => {
                setTimeout(() => {
                  $(`body ${data}`).append(htmlTag);
  
                  $(`body #button-subRepair-${indexRepair}`).click(() => {
                    let tmp = collector.split(`,`);
  
                    foreachCallback(tmp).then(datafor => {
                      var dataforFinal = datafor.replace(/(.+),$/, "$1");
                      var dataCard = dataforFinal;

                      var dataCardFinal = dataCard.replace(/<[^>]+>/g, '');
                      if (dataCard.includes("undefined")) {
                        $(".form-label-repair").show();
  
                        return;
                      }
  
                      $(`body #button-subRepair-${indexRepair}`).prop(
                        "disabled",
                        true
                      );
                      $(`body .form-input-repair`).prop("disabled",true);
                       $(`body .radioInput`).prop("disabled",true);
                       $(`body #button-subRepair-${indexRepair}`).css('background', '#A5936E');
                      $(`body #button-subRepair-${indexRepair}`).css('color', '#ffffff');
                      $(`body #button-subRepair-${indexRepair}`).css('font-weight', '300');
                      $(`body #button-subRepair-${indexRepair}`).css('pointer-events', 'none');
                      console.log(dataCardFinal);
                      $(".form-label-repair").hide();
                      setTimeout(() => {
                        $(`#cx_input`).focus();
                        $(`#cx_input`).val(dataCardFinal);
                        $(".cx-send").trigger("click");
                        hideAdaptivecard = true;
                      }, 50);
                    });
                  });
                }, 110);
              });
            }, 40);
          });
  
  
          break;
          


    case "Please provide your servicer details:":
      // case "Servicer Name , Servicer Phone Number , Special instructions for servicer":


        const indexServicer = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexServicer + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexServicer + " .cx-message-text").html(
            saysomething
          );
        }, 30);
        htmlwrpper(indexServicer).then(data => {
          setTimeout(() => {
            var collector = "";

            inputTextServicer1(indexServicer, `Servicer Name`, messages).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `#input-textServicer1-${indexServicer}`;
              }, 50);
            });

            inputTextServicer2(
              indexServicer,
              `Servicer Phone Number`
            ).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-textServicer2-${indexServicer}`;
              }, 60);
            });

            inputTextServicer3(
              indexServicer,
              `Special instructions for Servicer`
            ).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-textServicer3-${indexServicer}`;
              }, 70);
            });
            textAreaAutoResize()

            const top = 50;
            buttonServicer(indexServicer, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);

                $(`body #button-servicer-${indexServicer}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    $(`body #input-textServicer1-${indexServicer}`).prop("disabled",true);
                    $(`body #input-textServicer2-${indexServicer}`).prop("disabled",true);
                    $(`body #input-textServicer3-${indexServicer}`).prop("disabled",true);
                    $(`body #button-servicerSkip-${indexServicer}`).prop("disabled",true);
                    $(`body #button-servicer-${indexServicer}`).css('background', '#A5936E');
                    $(`body #button-servicer-${indexServicer}`).css('color', '#ffffff');
                    $(`body #button-servicer-${indexServicer}`).css('font-weight', '300');
                    $(`body #button-servicer-${indexServicer}`).css('pointer-events', 'none');
                    $(`body #button-servicerSkip-${indexServicer}`).css('pointer-events', 'none');
                    $(`body #button-servicer-${indexServicer}`).prop(
                      "disabled",
                      true
                    );
                    console.log(dataCard);
                    $(".form-label-time").hide();
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(dataCard + ',Submit');
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });

                $(`body #button-servicerSkip-${indexServicer}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    $(`body #input-textServicer1-${indexServicer}`).prop("disabled",true);
                    $(`body #input-textServicer2-${indexServicer}`).prop("disabled",true);
                    $(`body #input-textServicer3-${indexServicer}`).prop("disabled",true);
                    $(`body #button-servicerSkip-${indexServicer}`).prop("disabled",true);
                    $(`body #button-servicerSkip-${indexServicer}`).css('background', '#A5936E');
                    $(`body #button-servicerSkip-${indexServicer}`).css('color', '#ffffff');
                    $(`body #button-servicerSkip-${indexServicer}`).css('font-weight', '300');
                    $(`body #button-servicerSkip-${indexServicer}`).css('pointer-events', 'none');
                    $(`body #button-servicer-${indexServicer}`).css('pointer-events', 'none');
                    $(`body #button-servicer-${indexServicer}`).prop(
                      "disabled",
                      true
                    );
                    console.log(dataCard);
                    $(".form-label-time").hide();
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(dataCard + ',Skip');
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });




              }, 110);
            });
          }, 40);
        });

        break;
        
      case "Pay Your Booking Amount":



      //AMOUNT , CREDIT CARD NUMBER , EXPIRATION DATE , SECURITY CODE , PAY/CANCEL
        //PAYMENT
            tokenexMain();
            const indexPayment = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexPayment + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexPayment + " .cx-message-text").html(
            saysomething
          );
        }, 30);
        htmlwrpper(indexPayment).then(data => {
          setTimeout(() => {
            var collector = "";

            inputTextPaymentAmount(indexPayment, `Payment Amount`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `#input-paymentAmount-${indexPayment}`;
                collector += `,#input-ccNumber-${indexPayment}`;
                // $(`body #input-ccNumber-${indexPayment}`).creditCardTypeDetector({ 'credit_card_logos' : '.card_logos' });
                 $(`body #input-paymentAmount-${indexPayment}`).css('pointer-events', 'none');
                collector += `,#input-expDate-${indexPayment}`;
                $(".form-label-expdate").hide();
                $("#payment-form").submit(function (e) {
                 // console.log('payment form submit')
                  //return false;
                });

                 inputTextCCNumber(
              indexPayment,
              `Card Number`
            ).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-ccNumber-${indexPayment}`;
                $(`body #input-ccNumber-${indexPayment}`).creditCardTypeDetector({ 'credit_card_logos' : '.card_logos' });

                window.keypressed = {};
                $(`body #input-ccNumber-${indexPayment}`).keydown(function(e){
                  if ( window.keypressed[e.which] ) {
                    e.preventDefault();
                  } else {
                    window.keypressed[e.which] = true;
                  }
                }).keyup(function(e){
                  window.keypressed[e.which] = false;
                  if($('.card_logos').hasClass('is_nothing')){
                   // $('.form-label-expdate').show()
                  //  $('.form-label-expdate').html('Invalid Card Number')
                  } else {
                    $('.form-label-expdate').hide()
                  }
                  
                }).blur(function(e){
                  validateCreditCard(indexPayment)
                  
                  
                });



                
      $(`body #input-ccNumber-${indexPayment}`).keypress(function(evt) {

        
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        console.log(charCode)

         if (charCode > 48 && (charCode < 59)) {
                numbersOnly = true;

        }
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            numbersOnly = false;
            return false;

          }

          

       });

       

    $('body #eye').click(function(){
       
      if($(this).hasClass('fa-eye-slash')){
         
         $(this).removeClass('fa-eye-slash');
        
        $(this).addClass('fa-eye');
        
        $(`body #input-ccNumber-${indexPayment}`).attr('type','text');

          
      }else{
       
         $(this).removeClass('fa-eye');
        
         $(this).addClass('fa-eye-slash');  
         $(`body #input-ccNumber-${indexPayment}`).attr('type','password');

      }
  });

              }, 60);
            });


                // $(`body #button-paymentcc-${indexPayment}`).click(e => {
                //  // submitForm(indexPayment);
                // });
                window.keypressed = {};
                setTimeout(function(){
                  $(`body #input-expDate-${indexPayment}`).inputmask({
                    alias: 'datetime',
                    inputFormat: 'mm/yy',
                    placeholder: 'MM/YY',
                    min: moment().add(1, 'M').format('MM/YY'),
                    max: moment().add(9, 'Y').format('MM/YY')
                  })

                  
                }, 2000)
                var iframeConfig = {
                  styles: {
                    base: 'width: 240px; height: 30px; box-shadow: 0 0px 0px #dae1e8; border-color: #dae1e8; border-width: 1px',

                    placeholder: 'color: #c6c6c6;opacity: 1;font-size: 11px',
                    cvv: {
                        base: $("#cvv-base-styles").val(),
                        focus: $("#cvv-focus-styles").val(),
                        error: $("#cvv-error-styles").val(),
                        placeholder: $("#cvv-placeholder-styles").val()
                    }
                  },
                  origin: $("#txOrigin").val(),
                  timestamp: $("#txTimestamp").val(),
                  tokenExID: $("#txID").val(),
                  tokenScheme: $("#txTokenScheme").val(),
                  authenticationKey: $("#txHMAC").val(),
                  pci: true,
                  inputType: "text", //Options are number, tel or text. The default is text"
                  enablePrettyFormat: true,
                  debug: false,
                  placeholder: "CC Number",
                  allowUnknownCardTypes: false,
                  enableValidateOnBlur: true,
                  // cvv: true,
                  // cvvContainerID: "input-secCode"
                };
                //create a new instance of the iframe, and add the container ID and config object
                iframe = new TokenEx.Iframe("card-element", iframeConfig);
      
                //add event listeners
                iframe.on("load", function () {
                  console.log("CC iFrame Loaded");
                  
                });
                iframe.on("focus", function () {
                  console.log("CC iFrame focus");
                });
                iframe.on("blur", function () {
                  console.log("CC iFrame blur");
                });
                iframe.on("change", function () {
                  console.log("CC iFrame Change:");
                });
                iframe.on("validate", function (data) {
                  console.log("CC iFrame validate:" + JSON.stringify(data));
                  if (!data.isValid) { 
                    invalidCard = true;
                  } else {
                    invalidCard = false;
                  }
                  
                });
                iframe.on("cardTypeChange", function (data) {
                  console.log("CC iFrame cardTypeChange:" + JSON.stringify(data));
      
                  if (data.possibleCardType === "unknown" || data.cardType === "unknown") {
                      $('.card-brand-icon-container i').removeClass().addClass('fas fa-credit-card');
                  } else if (data.possibleCardType === "diners" || data.cardType === "diners") {
                      $('.card-brand-icon-container i').removeClass().addClass('fab fa-cc-diners-club');
                  } else if (data.possibleCardType === "jcb" || data.cardType === "jcb") {
                      $('.card-brand-icon-container i').removeClass().addClass('fab fa-cc-jcb');
                  } else if (data.possibleCardType === "americanExpress" || data.cardType === "americanExpress") {
                      $('.card-brand-icon-container i').removeClass().addClass('fab fa-cc-amex');
                  } else if (data.possibleCardType === "discover" || data.cardType === "discover") {
                      $('.card-brand-icon-container i').removeClass().addClass('fab fa-cc-discover');
                  } else if (data.possibleCardType === "masterCard" || data.cardType === "masterCard") {
                      $('.card-brand-icon-container i').removeClass().addClass('fab fa-cc-mastercard');
                  } else if (data.possibleCardType === "visa" || data.cardType === "visa") {
                      $('.card-brand-icon-container i').removeClass().addClass('fab fa-cc-visa');
                  }
        
                });
                iframe.on("tokenize", function (data) {
                  console.log("CC iFrame Tokenize:" + JSON.stringify(data));
                });
                iframe.on("error", function (data) {
                  console.log("CC iFrame error:" + JSON.stringify(data));
                });
                iframe.on("cvvFocus", function () {
                  console.log("CVV iFrame focus");
                });
                iframe.on("cvvBlur", function () {
                  console.log("CVV iFrame blur");
                });
      
                //calling the iframe's load function adds the iframe to the DOM.
                iframe.load();
                
                collector += `,#input-secCode-${indexPayment}`;

                $(`body #input-secCode-${indexPayment}`).keypress(function(evt) {
                    var charCode = (evt.which) ? evt.which : evt.keyCode;
                    console.log(charCode)

                    if (charCode > 48 && (charCode < 59)) {
                          numbersOnly = true;
                    }
                    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                      numbersOnly = false;
                      return false;
                    }

                }).blur(function(e){
                  validateSecurityCode(indexPayment)
                });

                $('body #eyeSecCode').click(function(){
                
                  if($(this).hasClass('fa-eye-slash')){
                    
                    $(this).removeClass('fa-eye-slash');
                    
                    $(this).addClass('fa-eye');
                    
                    $(`body #input-secCode-${indexPayment}`).attr('type','text');
          
                  }else{
                  
                    $(this).removeClass('fa-eye');
                    
                    $(this).addClass('fa-eye-slash');  
                    
                    $(`body #input-secCode-${indexPayment}`).attr('type','password');

                  }
              });

                        }, 80);
                      });
                 const top = 50;
                 
            buttonPayment(indexPayment, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                     $(".form-label-expdate").hide();

                $(`body #button-paymentcc-${indexPayment}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;

                    // if ($(`body #input-paymentAmount-${indexPayment}`).val() == "" || $(`body #input-ccNumber-${indexPayment}`).val() == "" || $(`body #input-expDate-${indexPayment}`).val() == ""|| $(`body #input-secCode-${indexPayment}`).val() == "") {
                    //     $(".form-label-expdate").show();
                    //   return;
                    // }

                   // validateCreditCard(indexPayment)
                   // validateSecurityCode(indexPayment)
                    $('body #eye').css('pointer-events', 'none');
                    $('body #eyeSecCode').css('pointer-events', 'none');
                    $(`body #input-paymentName-${indexPayment}`).prop("disabled",true);
                    $(`body #input-paymentAmount-${indexPayment}`).prop("disabled",true);
                    $(`body #input-ccNumber-${indexPayment}`).prop("disabled",true);
                    $(`body #input-expDate-${indexPayment}`).prop("disabled",true);
                    $(`body #input-secCode-${indexPayment}`).prop("disabled",true);
                    $(`body #button-cancelcc-${indexPayment}`).prop("disabled",true);
                    $(`body #button-paymentcc-${indexPayment}`).css('background', '#A5936E');
                    $(`body #button-paymentcc-${indexPayment}`).css('color', '#ffffff');
                    $(`body #button-paymentcc-${indexPayment}`).css('font-weight', '300');
                    $(`body #button-paymentcc-${indexPayment}`).css('pointer-events', 'none');
                    $(`body #button-cancelcc-${indexPayment}`).css('pointer-events', 'none');
                    $(`body #button-paymentcc-${indexPayment}`).prop(
                      "disabled",
                      true
                    );
                    console.log(dataCard);
                    $(".form-label-time").hide();
                     $(".form-label-expdate").hide();
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val('PAY');
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });

              $(`body #button-cancelcc-${indexPayment}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    $('body #eye').css('pointer-events', 'none');
                    $('body #eyeSecCode').css('pointer-events', 'none');
                    $(`body #input-paymentName-${indexPayment}`).prop("disabled",true);
                    $(`body #input-paymentAmount-${indexPayment}`).prop("disabled",true);
                    $(`body #input-ccNumber-${indexPayment}`).prop("disabled",true);
                    $(`body #input-expDate-${indexPayment}`).prop("disabled",true);
                    $(`body #input-secCode-${indexPayment}`).prop("disabled",true);
                    $(`body #button-cancelcc-${indexPayment}`).prop("disabled",true);
                    $(`body #button-cancelcc-${indexPayment}`).css('background', '#A5936E');
                    $(`body #button-cancelcc-${indexPayment}`).css('color', '#ffffff');
                    $(`body #button-cancelcc-${indexPayment}`).css('font-weight', '300');
                    $(`body #button-paymentcc-${indexPayment}`).css('pointer-events', 'none');
                    $(`body #button-cancelcc-${indexPayment}`).css('pointer-events', 'none');
                    $(`body #button-paymentcc-${indexPayment}`).prop(
                      "disabled",
                      true
                    );
                    console.log(dataCard);
                    $(".form-label-time").hide();
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val('CANCEL');
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });



              }, 110);
            });
          }, 40);
        });


        break
      case "Any specific instructions for the servicer:":
        inputTextTagParser(e.data.messages[i].index).then(data => {
          inputTextsender(data).then(() => {});
        });
        break;
      

      default:
        if (hideAdaptivecard) {
          var hideAdaptive = e.data.messages[i].index;
          setTimeout(() => {
            $("#cx-chat-index-" + hideAdaptive + " .cx-message-text").html(
              null
            );
            let saysomething = ` `;
            $("#cx-chat-index-" + hideAdaptive + " .cx-message-text").html(
              saysomething
            );
            $("#cx-chat-index-" + hideAdaptive + "").remove();
            // $("div").remove(".cx-message-group");
          }, 30);
          hideAdaptivecard = false;
        }
        if(typeof messages === 'string' && messages.includes('Please try the following before continuing')){
            var splitMessage = messages.split('\n\n')
            renderList(splitMessage, e.data.messages[i].index)
          }

             /////////////////////SAUDI////////////////////////


          if (typeof messages === 'string' && messages.includes('start by looking up your flight details.')){
            // InfoButtonParser(e.data.messages[i].text, e.data.messages[i].index, true).then(data => {
            //   InfoButtonSender(data).then(() => {})
            // })
            firstLoad = false;

           const index = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + index + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + index + " .cx-message-text").html(saysomething);
        }, 30);
        htmlwrpper(index).then(data => {
          setTimeout(() => {
            var collector = "";

  

            inputTextRefNumberFlight(messages, index, `BOOKING REFERENCE NUMBER`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `#input-textModel-${index}`;
                 
              }, 80);
            });

            inputTextlastNameFlight(index, `LAST NAME`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-textSerial-${index}`;
              }, 90);
            });

            const top = 50;
            buttonSubmitCard(index, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);

                $(`body #button-sumbitCard-${index}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    $(`body #button-sumbitCard-${index}`).prop(
                      "disabled",
                      true
                    );
                    $(`body .form-input-model`).prop("disabled",true);
                    $(`body .form-input-serial`).prop("disabled",true);
                    $(`body .select-tag`).prop("disabled",true);
                    $(`body #button-sumbitCard-${index}`).css('background', '#A5936E');
                    $(`body #button-sumbitCard-${index}`).css('color', '#ffffff');
                    $(`body #button-sumbitCard-${index}`).css('font-weight', '300');
                    $(`body #button-sumbitCard-${index}`).css('pointer-events', 'none');
                    console.log($(`body #input-textModel-${index}`).val());
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val($(`body #input-textModel-${index}`).val());
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });
              }, 110);
            });
          }, 40);
        });


          }

          if (typeof messages === 'string' && messages.includes('Please enter the phone number you registered with.')){
             firstLoad = false;
          inputTextNumberTagParser(
            e.data.messages[i].index,
            messages
          ).then(data => {
            inputTextNumberSender(data).then(() => {});
          });
        
          }
         if (typeof messages === 'string' && messages.includes('Please enter the email ID you registered with.')){
             firstLoad = false;
          inputTextEmailTagParser(
            e.data.messages[i].index,
            messages
          ).then(data => {
            inputEmailSender(data).then(() => {});
          });
        
          }

          if(typeof messages === 'string' && messages.includes('I see you are travelling from Munich')){
            var agentreq = messages.split(".")

            gotItAgentButtonParser(agentreq, e.data.messages[i].index).then(data => {
              gotItAgentButtonSender(data).then(() => {});
            });
          }
          if(typeof messages === 'string' && messages.includes('At the very outset, we sincerely apologies for the change in your flight schedule')){
            var agentreq = messages.split(".")
             firstLoad = false;

            gotItAgentButtonParser(agentreq, e.data.messages[i].index).then(data => {
              gotItAgentButtonSender(data).then(() => {});
            });
          }

         if(typeof messages === 'string' && messages.includes('Thanks! Now, please also choose from the following options for your second  flight from Jeddah to Islamabad.')){
            foodChickenButtonParser(messages, e.data.messages[i].index).then(data => {
              foodChickenButtonSender(data).then(() => {});
            });
          }

        if(typeof messages === 'string' && messages.includes('Please tell me how can I help you today?')){

            flightButtonParser(messages, e.data.messages[i].index).then(data => {
              flightButtonSender(data).then(() => {});
            });
          }

        if(typeof messages === 'string' && messages.includes('I can see you are in Jeddah now. Hope you had a pleasant flight.')){
             firstLoad = false;
          }


       if(typeof messages === 'string' && messages.includes('Would you like to update this trip?')){
             firstLoad = false;

           yesNoButtonParser(messages, e.data.messages[i].index).then(data => {
                 yesNoButtonSender(data).then(() => {});
                    });
          }

       if(typeof messages === 'string' && messages.includes('Would you want me to book a hotel for you?')){

           yesNoButtonParser(messages, e.data.messages[i].index).then(data => {
                 yesNoButtonSender(data).then(() => {});
                    });
          }


       if(typeof messages === 'string' && messages.includes('Please choose from the following options for your first flight from Munich to Jeddah:')){

            foodButtonParser(messages, e.data.messages[i].index).then(data => {
              foodtButtonSender(data).then(() => {});
            });
          }

      if(typeof messages === 'string' && messages.includes('Please rate your experience')){
          var likeDislike = messages.split(".")
         likeButtonParser(likeDislike, e.data.messages[i].index).then(data => {
          likeButtonSender(data).then(() => {});
        });
       
          }
    if(typeof messages === 'string' && messages.includes('Kindly report at least 3 hours prior to flight departure at the airport.')){
          var report = messages.split(".")
            gotItButtonParser(report, e.data.messages[i].index).then(data => {
            gotItButtonSender(data).then(() => {});
          });
       
          }

     if(typeof messages === 'string' && messages.includes('Please note that we taken the liberty to preselect a complimentary breakfast')){
            var breakfast = messages.split(".")

            IgotItButtonParser(breakfast, e.data.messages[i].index).then(data => {
              IgotItButtonSender(data).then(() => {});
            });
          }

     if(typeof messages === 'string' && messages.includes('Sorry to hear that!')){
          expectationButtonParser(messages, e.data.messages[i].index).then(data => {
              expectationButtonSender(data).then(() => {});
            });
       
          }
     if(typeof messages === 'string' && messages.includes('Can you help me understand what was the issue?')){
          undestandButtonParser(messages, e.data.messages[i].index).then(data => {
              undestandButtonSender(data).then(() => {});
            });
       
          }
     if(typeof messages === 'string' && messages.includes('Can you help me understand the issue little better?')){
          undestandButtonParser(messages, e.data.messages[i].index).then(data => {
              undestandButtonSender(data).then(() => {});
            });
       
          }



     if(typeof messages === 'string' && messages.includes('Please tell me how can i help you today?')){
          flightButtonParser(messages, e.data.messages[i].index).then(data => {
              flightButtonSender(data).then(() => {});
            });
       
          }

     if(typeof messages === 'string' && messages.includes('Great choice. You are all set! Here is your QR that you can scan at our lounge for accessing the facilities.')){
            proceedOnlyimageButtonParser(
          messages,
          e.data.messages[i].index
        ).then(data => {
          proceedOnlyimageButtonSender(data).then(() => {});
        });
       
          }




     if(typeof messages === 'string' && messages.includes('Can you please describe your issue in detail?')){
        inputTextAreaParser(e.data.messages[i].index, true).then(data => {
          inputTextAreasender(data).then(() => {});
        });
        textAreaAutoResize()
          }
       if(typeof messages === 'string' && messages.includes('We have one of the best-in-class lounge services.')){
          dynamicCarouselParser(
            messages,
            e.data.messages[i].index).then(data => {
          dynamicCarouselSender(messages, data).then(() => {});
                  });
          setTimeout(function(){showSlides(slideIndex);}, 1000)
            }
     if(typeof messages === 'string' && messages.includes('Please enter your new trip details.')){
             const indexDetails = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexDetails + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexDetails + " .cx-message-text").html(saysomething);
        }, 30);
        htmlwrpper(indexDetails).then(data => {
          setTimeout(() => {
            var collector = "";

  
             const departure = `New Delhi (DEL)|Islamabad (ISB)|London (LHR)|Dubai (DXB)|and San Francisco (SFO)`;

            selectDeparture(messages, departure, indexDetails, `FROM`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `#departure-${indexDetails}`;
                 
              }, 60);
            });
              const arrival = `Jeddah (JED)`;

            selectArrival(arrival, indexDetails, `TO`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#arrival-${indexDetails}`;
              }, 70);
            });



           datepicker(indexDetails, `TRAVEL DATE`).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                //remove comma at the first one
                collector += `,#input-textDate-${indexDetails}`;
                  var dateToday = new Date(); 

    $("#input-textDate-" + indexDetails).datepicker({
      changeMonth: true,
      changeYear: true,
      minDate: dateToday,
      maxDate: new Date(2024, 11, 30)
    });
              }, 80);
            });


              const toArrayRepair = `FIRST|BUSINESS|GUEST`;
              selectType(toArrayRepair, indexDetails, `PLEASE CHOOSE YOUR TICKET TYPE`).then(htmlTag => {
                setTimeout(() => {
                  $(`body ${data}`).append(htmlTag);
                collector += `,#type-${indexDetails}`;           
               
         
                  
                }, 90);
              });

            const top = 50;
            buttonSubmitCarddeparture(indexDetails, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);

                $(`body #button-sumbitCard-${indexDetails}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    $(`body #button-sumbitCard-${indexDetails}`).prop(
                      "disabled",
                      true
                    );
                    $(`body .form-input-model`).prop("disabled",true);
                    $(`body .form-input-serial`).prop("disabled",true);
                    $(`body .select-tag`).prop("disabled",true);
                    $(`body #button-sumbitCard-${indexDetails}`).css('background', '#A5936E');
                    $(`body #button-sumbitCard-${indexDetails}`).css('color', '#ffffff');
                    $(`body #button-sumbitCard-${indexDetails}`).css('font-weight', '300');
                    $(`body #button-sumbitCard-${indexDetails}`).css('pointer-events', 'none');
                    console.log($(`body #input-textModel-${indexDetails}`).val());
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(dataCard);
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });
              }, 110);
            });
          }, 40);
        });

          }

     if(typeof messages === 'string' && messages.includes('Please choose any one of the following flights.')){
           const indexTime = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexTime + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexTime + " .cx-message-text").html(
            saysomething
          );
        }, 30);
        htmlwrpper(indexTime).then(data => {
          setTimeout(() => {
            var collector = "";

            const toArrayRadio = `Saudi Arabian Air 878 (DEP: 04:20 PM GMT
ARR: 11:35 PM GMT)|Saudi Arabian Air 720 (DEP: 06:30 AM GMT
ARR: 03:00 PM GMT)|Saudi Arabian Air 722 (DEP: 07:50 AM GMT .
ARR: 04:00 PM GMT)`;
            radioCard(toArrayRadio, indexTime, messages).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                collector += `input[type='radio'][name='optradio${indexTime}']:checked`;
              }, 70);
            });

            const top = 50;
            buttonSubTime(indexTime, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);

                $(`body #button-subTime-${indexTime}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    if (dataCard.includes("undefined")) {
                      $(".form-label-time").show();

                      return;
                    }

                    $(`body #button-subTime-${indexTime}`).prop(
                      "disabled",
                      true
                    );
                    $(`body .form-input-intructions`).prop("disabled",true);
                     $(`body .radioInput`).prop("disabled",true);
                     $(`body #button-subTime-${indexTime}`).css('background', '#A5936E');
                    $(`body #button-subTime-${indexTime}`).css('color', '#ffffff');
                    $(`body #button-subTime-${indexTime}`).css('font-weight', '300');
                    $(`body #button-subTime-${indexTime}`).css('pointer-events', 'none');
                    console.log(dataCard);
                    $(".form-label-time").hide();
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(dataCard);
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });
              }, 110);
            });
          }, 40);
        });


          }


 if(typeof messages === 'string' && messages.includes('Please choose any one of the following hotels.')){
           const indexTime2 = e.data.messages[i].index;
        setTimeout(() => {
          $("#cx-chat-index-" + indexTime2 + " .cx-message-text").html(null);
          let saysomething = ` `;
          $("#cx-chat-index-" + indexTime2 + " .cx-message-text").html(
            saysomething
          );
        }, 30);
        htmlwrpper(indexTime2).then(data => {
          setTimeout(() => {
            var collector = "";

            const toArrayRadio = `Jeddah Hilton (25 minutes away from Airport) - SAR747|Radisson Blu (20 minutes away from Airport) - SAR598|Intercontinental Jeddah (35 minutes away from Airport) - SAR648`;
            radioCard(toArrayRadio, indexTime2, messages).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);
                collector += `input[type='radio'][name='optradio${indexTime2}']:checked`;
              }, 70);
            });

            const top = 50;
            buttonSubTime(indexTime2, top).then(htmlTag => {
              setTimeout(() => {
                $(`body ${data}`).append(htmlTag);

                $(`body #button-subTime-${indexTime2}`).click(() => {
                  let tmp = collector.split(`,`);

                  foreachCallback(tmp).then(datafor => {
                    var dataforFinal = datafor.replace(/(.+),$/, "$1");
                    var dataCard = dataforFinal;
                    if (dataCard.includes("undefined")) {
                      $(".form-label-time").show();

                      return;
                    }

                    $(`body #button-subTime-${indexTime2}`).prop(
                      "disabled",
                      true
                    );
                    $(`body .form-input-intructions`).prop("disabled",true);
                     $(`body .radioInput`).prop("disabled",true);
                     $(`body #button-subTime-${indexTime2}`).css('background', '#A5936E');
                    $(`body #button-subTime-${indexTime2}`).css('color', '#ffffff');
                    $(`body #button-subTime-${indexTime2}`).css('font-weight', '300');
                    $(`body #button-subTime-${indexTime2}`).css('pointer-events', 'none');
                    console.log(dataCard);
                    $(".form-label-time").hide();
                    setTimeout(() => {
                      $(`#cx_input`).focus();
                      $(`#cx_input`).val(dataCard);
                      $(".cx-send").trigger("click");
                      hideAdaptivecard = true;
                    }, 50);
                  });
                });
              }, 110);
            });
          }, 40);
        });


          }



            /////////////////////SAUDI////////////////////////
            ///////////////////////////////////////////

          if(typeof messages === 'string' && messages.includes('May I have your name please?')){
            showTimeout = true;

          }
          if(typeof messages === 'string' && messages.includes('You have successfully filed a claim. Please keep the claim number and appointment details handy for future reference')){
            var appointmentDetails = messages.split(".")

            gotItAppointmentButtonParser(appointmentDetails, e.data.messages[i].index).then(data => {
              gotItAppointmentButtonSender(data).then(() => {});
            });
          }

  


          if (typeof messages === 'string' && messages.includes('I have located multiple plans for you.')){
            radioButtonParser(e.data.messages[i].text, e.data.messages[i].index, true).then(data => {
              radioSender(data).then(() => {})
            })
          }

          if (typeof messages === 'string' && messages.includes('I have identified multiple claims associated with you.')){
            radioButtonParser(e.data.messages[i].text, e.data.messages[i].index, false).then(data => {
              radioSender(data).then(() => {})
            })
          }

          if (typeof messages === 'string' && messages.includes('Thank you for your valuable feedback. Is there anything specific you want me to improve?')){
            yesButtonParser(messages, e.data.messages[i].index, true).then(data => {
              yesNoThanksButtonSender(data).then(() => {});
            });
          }

          if (typeof messages === 'string' && messages.indexOf("#Category") !== -1){

            let split = messages.split("#")[0];
            var dynamicIndex = e.data.messages[i].index;
            dynamicCategoryButtonParser(
              split,
              e.data.messages[i].index
            ).then(data => {
              dynamicCategoryButtonSender(split, data, dynamicIndex).then(() => {});
            });
          }


          if (typeof messages === 'string' && messages.indexOf("#Appliances") !== -1){
            let split = messages.split("#")[0];
            var dynamicIndex = e.data.messages[i].index;
            dynamicAppliancesButtonParser(
              split,
              e.data.messages[i].index
            ).then(data => {
              dynamicCategoryButtonSender(split, data, dynamicIndex).then(() => {});
            });
          }

          if (typeof messages === 'string' && messages.indexOf("#Electrical") !== -1){
            let split = messages.split("#")[0];
            var dynamicIndex = e.data.messages[i].index;
            dynamicElectricalButtonParser(
              split,
              e.data.messages[i].index
            ).then(data => {
              dynamicCategoryButtonSender(split, data, dynamicIndex).then(() => {});
            });
          }

          if (typeof messages === 'string' && messages.indexOf("#Plumbing") !== -1){
            let split = messages.split("#")[0];
            var dynamicIndex = e.data.messages[i].index;
            dynamicPlumbingButtonParser(
              split,
              e.data.messages[i].index
            ).then(data => {
              dynamicCategoryButtonSender(split, data, dynamicIndex).then(() => {});
            });
          }
        break;
    }
  }
});

plugin.subscribe("WebChatService.ready", function(e) {});

plugin.subscribe("WebChatService.started", function(e) {

  chatEnded = false;
  missingMessageLoad = 0;
  timeoutMessage()
  inProgress();
  $(".cx-icon.cx-button-minimize").on("keyup click", function(e) {
    if (
      $(".cx-icon.cx-button-minimize").attr("aria-label") ==
      "Live Chat Minimize"
    ) {
      if(!chatEnded){
        $("body .cx-subtitle").show();
        }
      } else {
      $("body .cx-subtitle").hide();
    }
  });
  $(".cx-icon.cx-button-close").on("keyup click", function(e) {
    $("body .cx-subtitle").hide();
  });

  $(".cx-send").on("keyup click", function(e) {
    camTyping();
  });

  $(".cx-input-container").on("keyup", e => {
    if (e.keyCode === 13) {
      camTyping();
    }
  });
});

plugin.subscribe("WebChatService.ended", function(e) {
  console.log("Chat ended", e);
  showTimeout = false;
  chatEnded = true;
  typing = false;
  missingMessageLoad = 0;
  firstLoad = true;
  $(`body .cx-btn-primary`).prop("disabled", true);
   $(`body .cx-widget input`).prop("disabled", true);
   $(`body .cx-widget select`).prop("disabled", true);
   $(`body .cx-btn-primary`).css('pointer-events', 'none');
   $('body #eye').css('pointer-events', 'none');
   $('body #eyeSecCode').css('pointer-events', 'none');
   removeTimeoutMessage();

});

plugin.command("WebChatService.sendMessage", function(e) {
  console.log("Chat sendMessage", e);
});

plugin.subscribe("WebChatService.clientTypingStopped", function(e) {});
//agents connections listener
plugin.subscribe("WebChatService.agentConnected", function(e) {
  typing = true;
});
plugin.subscribe("WebChatService.agentDisconnected", function(e) {
  typing = false;
});

/***********************************************************************************************************************************************/

/*******************************************************************************************************************/

function camTypingMessage() {
  setTimeout(() => {
    $("body .typing").remove();
    if (firstLoad) {
      $(`body .cx-transcript`).append(
        "<div class='typing' style='position: absolute;float: left;clear: both;width: 100%;display: block;top:630px;color: #888'>Nourah is typing...</div>"
      );
      //$(`body .cx-transcript`).scrollTop( 9999999999)
    } else {
      $(`body .cx-transcript`).append(
        "<div class='typing' style='position: relative;float: left;clear: both;width: 100%;display: block;bottom: 0px;color: #888'>Nourah is typing...</div>"
      );
      $(`body .cx-transcript`).scrollTop(9999999999);
    }
  }, 50);
}


function camTyping() {
  removeTimeoutMessage();
  setTimeout(() => {
    if (typing === false) {
      camTypingMessage();
    }
  }, 100);
}

function timeoutMessage() {
  if(chatEnded == true){
    return;
  }
  setTimeout(() => {
    deleteTimers = setInterval(function() {
      if (timeOutChat == 61) {
        $("body .timeoutChat1").remove();
        $(`body .cx-transcript`).append(
          "<center><div class='timeoutChat1' style='position: relative;float: center;clear: both;width: 100%;display: block;top: 5px;color: #A5936E; font-weight: bold'>Are you still there?</div><center>"
        );
        $(`body .cx-transcript`).scrollTop(9999999999);
      } else if (timeOutChat == 121) {
        $("body .timeoutChat2").remove();
        $(`body .cx-transcript`).append(
          "<center><div class='timeoutChat2' style='position: relative;float: center;clear: both;width: 100%;display: block;top: 5px;color: #A5936E; font-weight: bold'>The session will expire within 5 mins.</div><center>"
        );
        $(`body .cx-transcript`).scrollTop(9999999999);
      }
      //console.log = function(){};
       //console.log(timeOutChat++)
     timeOutChat++;
    }, 1000);
  }, 2000);
  $("body .timeoutChat1").remove();
  $("body .timeoutChat2").remove();
  timeOutChat = 1;
  clearInterval(deleteTimers);
}

function removeTimeoutMessage() {
  $("body .timeoutChat1").remove();
  $("body .timeoutChat2").remove();
  setTimeout(() => {
    $("body .timeoutChat1").remove();
    $("body .timeoutChat2").remove();
    timeOutChat = 1;
    clearInterval(deleteTimers);
  }, 1000);
}

function inProgress() {
  if (!chatEnded) {
    $(`body .cx-subtitle`).append(
      "<div class='subtitle' style='position: relative; display: block;'>- &nbsp; IN PROGRESS <div>"
    );
    $("body .cx-subtitle").hide();
  }
}


/***********************************************************************************************************************************************/

/*******************************************************************************************************************/
var customPlugin = CXBus.registerPlugin("Custom");

  function getAdvancedConfig() {
    return {
      form: {
        autoSubmit: true
      }
    };

  }

  var proActive = setTimeout(() => {
    customPlugin.command("WebChat.open", getAdvancedConfig());
    clearTimeout(proActive);
  }, 1000);


function renderMissingMessage(messages, firstMessage, secondMessage) {

  var firstChat = firstMessage;
  var secondChat = secondMessage;

  let html;
  let currentTime = formatAMPM(new Date());
  if (missingMessageLoad == 1) {
    html = `<div class="cx-message cx-participant cx-them cx-Bot cx-bot" tabindex="0" id="cx-chat-index-424561}" style="">
  
          <div class="cx-avatar-wrapper">
            <div class="cx-avatar bot"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" viewBox="0 0 100 100" focusable="false" role="img" aria-hidden="true" alt=""><path class="cx-svg-icon-tone1" d="M77.082 56.25c0-5.75-4.664-10.418-10.414-10.418S56.25 50.5 56.25 56.25c0 5.75 4.668 10.418 10.418 10.418 5.75-.043 10.414-4.668 10.414-10.418zM66.668 62.5a6.24 6.24 0 0 1-6.25-6.25 6.24 6.24 0 0 1 6.25-6.25 6.243 6.243 0 0 1 6.25 6.25c0 3.418-2.793 6.207-6.25 6.25zM43.75 56.25c0-5.75-4.668-10.418-10.418-10.418-5.75 0-10.414 4.668-10.414 10.418 0 5.75 4.664 10.418 10.414 10.418S43.75 62 43.75 56.25zm-16.668 0a6.243 6.243 0 0 1 6.25-6.25 6.24 6.24 0 0 1 6.25 6.25 6.24 6.24 0 0 1-6.25 6.25c-3.457-.043-6.25-2.832-6.25-6.25zm70.836-2.082h-6.375C90.457 41.207 79.668 31.25 66.668 31.25h-6.25v4.168h6.25c11.5 0 20.832 9.332 20.832 20.832v39.582h-75V56.25c0-11.5 9.332-20.832 20.832-20.832H50a2.063 2.063 0 0 0 2.082-2.086v-12.75c5.625-1.164 9.293-6.664 8.125-12.289C59.043 2.668 53.543-1 47.918.168c-5.625 1.164-9.293 6.664-8.125 12.289a10.427 10.427 0 0 0 8.125 8.125V31.25H33.332c-13 0-23.789 9.957-24.875 22.918H2.082A2.062 2.062 0 0 0 0 56.25V75c0 1.168.918 2.082 2.082 2.082h6.25v20.836A2.09 2.09 0 0 0 10.418 100h79.164a2.065 2.065 0 0 0 2.086-2.082V77.082h6.25A2.062 2.062 0 0 0 100 75V56.25a2.062 2.062 0 0 0-2.082-2.082zM43.75 10.418A6.24 6.24 0 0 1 50 4.168a6.24 6.24 0 0 1 6.25 6.25c0 3.414-2.793 6.25-6.25 6.25s-6.25-2.836-6.25-6.25zm-35.418 62.5H4.168V58.332h4.164zm87.5 0h-4.164V58.332h4.164zM49.957 86.293c-8.289 0-16.582-2.211-23.957-6.5l2-3.586a43.847 43.847 0 0 0 43.957 0l2.086 3.586c-7.5 4.289-15.793 6.5-24.086 6.5zm0 0"></path></svg></div>
          </div>  

          <div class="cx-bubble-arrow">
            <svg height="7" width="7" focusable="false">
              <polygon class="cx-left" points="0,0 7,0 7,7"></polygon>
              <polygon class="cx-right" points="0,0 0,7 7,0"></polygon>
            </svg>
          </div>
          <div class="cx-bubble">
            <span aria-hidden="true" class="cx-name"></span>
            <span class="aria-name" data-message="AriaTheySaid" role="text" aria-label="Bot  said"></span>
            <div class="cx-message-text">${firstChat}</div>
            <div class="cx-common-screen-reader cx-space" tabindex="-1" aria-hidden="true">&nbsp;&nbsp;&nbsp;</div>
            <span class="cx-time">${currentTime}</span>
          </div>

        </div>
        <div class="cx-message cx-participant cx-them cx-Bot cx-bot cx-NewTextBubble" tabindex="0" id="cx-chat-index-4225365" style="">
  
        <div class="cx-avatar-wrapper">
          <div class="cx-avatar bot"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" viewBox="0 0 100 100" focusable="false" role="img" aria-hidden="true" alt=""><path class="cx-svg-icon-tone1" d="M77.082 56.25c0-5.75-4.664-10.418-10.414-10.418S56.25 50.5 56.25 56.25c0 5.75 4.668 10.418 10.418 10.418 5.75-.043 10.414-4.668 10.414-10.418zM66.668 62.5a6.24 6.24 0 0 1-6.25-6.25 6.24 6.24 0 0 1 6.25-6.25 6.243 6.243 0 0 1 6.25 6.25c0 3.418-2.793 6.207-6.25 6.25zM43.75 56.25c0-5.75-4.668-10.418-10.418-10.418-5.75 0-10.414 4.668-10.414 10.418 0 5.75 4.664 10.418 10.414 10.418S43.75 62 43.75 56.25zm-16.668 0a6.243 6.243 0 0 1 6.25-6.25 6.24 6.24 0 0 1 6.25 6.25 6.24 6.24 0 0 1-6.25 6.25c-3.457-.043-6.25-2.832-6.25-6.25zm70.836-2.082h-6.375C90.457 41.207 79.668 31.25 66.668 31.25h-6.25v4.168h6.25c11.5 0 20.832 9.332 20.832 20.832v39.582h-75V56.25c0-11.5 9.332-20.832 20.832-20.832H50a2.063 2.063 0 0 0 2.082-2.086v-12.75c5.625-1.164 9.293-6.664 8.125-12.289C59.043 2.668 53.543-1 47.918.168c-5.625 1.164-9.293 6.664-8.125 12.289a10.427 10.427 0 0 0 8.125 8.125V31.25H33.332c-13 0-23.789 9.957-24.875 22.918H2.082A2.062 2.062 0 0 0 0 56.25V75c0 1.168.918 2.082 2.082 2.082h6.25v20.836A2.09 2.09 0 0 0 10.418 100h79.164a2.065 2.065 0 0 0 2.086-2.082V77.082h6.25A2.062 2.062 0 0 0 100 75V56.25a2.062 2.062 0 0 0-2.082-2.082zM43.75 10.418A6.24 6.24 0 0 1 50 4.168a6.24 6.24 0 0 1 6.25 6.25c0 3.414-2.793 6.25-6.25 6.25s-6.25-2.836-6.25-6.25zm-35.418 62.5H4.168V58.332h4.164zm87.5 0h-4.164V58.332h4.164zM49.957 86.293c-8.289 0-16.582-2.211-23.957-6.5l2-3.586a43.847 43.847 0 0 0 43.957 0l2.086 3.586c-7.5 4.289-15.793 6.5-24.086 6.5zm0 0"></path></svg></div>
        </div>  

        <div class="cx-bubble-arrow">
          <svg height="7" width="7" focusable="false">
            <polygon class="cx-left" points="0,0 7,0 7,7"></polygon>
            <polygon class="cx-right" points="0,0 0,7 7,0"></polygon>
          </svg>
        </div>

        <div class="cx-bubble">
          <span aria-hidden="true" class="cx-name"></span>
          <span class="aria-name" data-message="AriaTheySaid" role="text" aria-label="Bot  said"></span>
          <div class="cx-message-text">${secondChat}
          <br>
          <button id="buttonHeader-flight" onclick="flightFirsLoadButtonSender()" class="buttonHeader-yes cx-yes cx-btn cx-btn-primary i18n" style='width: 210px;margin-left: 22px;'>FLIGHT STATUS</button>
          <button id="buttonHeader-visa" onclick="visaFirsLoadButtonSender()" class="buttonHeader-no cx-no cx-btn cx-btn-primary i18n" style='width: 210px;margin-left: 22px;'>VISA SUPPORT</button>
          <button id="buttonHeader-modifybook" onclick="modifybookFirsLoadButtonSender()" class="buttonHeader-no cx-no cx-btn cx-btn-primary i18n" style='width: 210px;margin-left: 22px;'>MODIFY BOOKING</button>
          <button id="buttonHeader-ground" onclick="groundFirsLoadButtonSender()" class="buttonHeader-no cx-no cx-btn cx-btn-primary i18n" style='width: 210px;margin-left: 22px;'>ON GROUND SUPPORT</button>
          <button id="buttonHeader-tripcancel" onclick="tripcancelFirsLoadButtonSender()" class="buttonHeader-no cx-no cx-btn cx-btn-primary i18n" style='width: 210px;margin-left: 22px;'>TRIP CANCELLATION/ REFUND</button>
          <button id="buttonHeader-specialreq" onclick="specialreqFirsLoadButtonSender()" class="buttonHeader-no cx-no cx-btn cx-btn-primary i18n" style='width: 210px;margin-left: 22px;'>SPECIAL SERVICE REQUEST</button>

          <div class="cx-common-screen-reader cx-space" tabindex="-1" aria-hidden="true">&nbsp;&nbsp;&nbsp;</div>
          <span class="cx-time">${currentTime}</span>
        </div>

      </div>`;
    setTimeout(function() {
      $(".cx-message-group")
        .next()
        .html(null);
      $(".cx-message-group")
        .next()
        .html(html);
      if ($(".cx-message-group").length > 2) {

        $(".cx-message-group:last-child").remove();
      }
    }, 200);

  }
  missingMessageLoad++;
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function validateExpiration(indexPayment){
  var expiryMonth = $(`body #input-expDate-${indexPayment}`).val().split("/")[0];
  var expiryYear = $(`body #input-expDate-${indexPayment}`).val().split("/")[1];
  var expiryDate = new Date('20' + expiryYear, expiryMonth);

  //Set currentDate to beginning of current month
  var d = new Date();
  var currentMonth = d.getMonth();
  var currentYear = d.getFullYear();
  var currentDate = new Date(currentYear, currentMonth);

  if (expiryDate < currentDate || isNaN(Date.parse(expiryDate))) {
   // $('.form-label-expdate').show()
   // $('.form-label-expdate').html('Please enter a valid date')
      return false;
  } else {
    $('.form-label-expdate').hide()
      return true;
  }
}
function validateExpiryDate(date, indexPayment){
  const latestMonth = new Date().getMonth() + 1
  const pattern1 = /^(1[0-2]|0[1-9]|\d)\/([2][1-9]|30)$/;
  const pattern2 = /^(1[0-2]|0[1-9]|\d)\/([2][1])$/;
  if(pattern1.test(date)){
    if(pattern2.test(date)){
      if(latestMonth > date.substr(0,2)){
       // $('.form-label-expdate').html('Card already expired'); 
       // resetExpDate(indexPayment)
        $('.form-label-expdate').show()

      }
    }
  } else {
   // $('.form-label-expdate').show()
   // $('.form-label-expdate').html('Please enter a valid date')
    //resetExpDate(indexPayment);
  }
}
 
function resetExpDate(indexPayment){
  setTimeout(function(){ 
  //  $(`body #input-expDate-${indexPayment}`).val('')
    //$(".form-label-expdate").hide();
  }, 1000)
}
function validateCreditCard(indexPayment){
  if($('.card_logos').hasClass('is_visa')){
    ($(`body #input-ccNumber-${indexPayment}`).val().length === 16 || $(`body #input-ccNumber-${indexPayment}`).val().length === 13) ? validCreditCardType() : invalidCreditCardType();
  } else if ($('.card_logos').hasClass('is_mastercard') || $('.card_logos').hasClass('is_discover')){
    ($(`body #input-ccNumber-${indexPayment}`).val().length === 16) ? validCreditCardType() : invalidCreditCardType();
  } else if ($('.card_logos').hasClass('is_amex') || $('.card_logos').hasClass('is_jcb')){
    ($(`body #input-ccNumber-${indexPayment}`).val().length === 15) ? validCreditCardType() : invalidCreditCardType();
  } else if ($('.card_logos').hasClass('is_diners')) {
    ($(`body #input-ccNumber-${indexPayment}`).val().length === 14) ? validCreditCardType() : invalidCreditCardType();
  } 

  if($(`body #input-ccNumber-${indexPayment}`).val().length < 13){
    invalidCreditCardType();
  }
}

function validateSecurityCode(indexPayment){
  if($('.card_logos').hasClass('is_amex')){
    $(`body #input-secCode-${indexPayment}`).attr('maxlength','4');
    ($(`body #input-secCode-${indexPayment}`).val().length === 4) ? validCVVNumber() : invalidCVVNumber() 
  } else {
    $(`body #input-secCode-${indexPayment}`).attr('maxlength','3');
    ($(`body #input-secCode-${indexPayment}`).val().length === 3) ? validCVVNumber() : invalidCVVNumber()
  }
}

function validCreditCardType(){
  $('.form-label-expdate').hide()
}

function invalidCreditCardType(){
 // $('.form-label-expdate').show()
 // $('.form-label-expdate').html('Invalid Card Number')
}

function validCVVNumber(){
  $('.form-label-expdate').hide()
}

function invalidCVVNumber(){
  // $('.form-label-expdate').show()
  // $('.form-label-expdate').html('Invalid Security Code')
}

function textAreaAutoResize(){
  setTimeout(() => {
    $('textarea').on('input', function () { 
      this.style.height = 'auto'; 
      this.style.height = (this.scrollHeight) + 'px'; 
    }); 
  }, 1000)
}

function tokenexMain() {
  const time = moment(new Date()).utc().format('YYYYMMDDHHmmss') // dateFormat();
  const tokenexid = "7937914531799352"; //From client portal
  const clientSecretKey = "vU8qMkL59plNFFeeXQ5tbBueJlIulLMN3T6TrSL2"; //From client portal
  const tokenScheme = "10";
  const origin = "http://127.0.0.1:5500";
  const concatenatedString = `${tokenexid}|${origin}|${time}|${tokenScheme}`;
  console.log(time, 'date time')

  const AuthenticationKey = generateHMAC(concatenatedString, clientSecretKey);

  $("#txHMAC").val(AuthenticationKey)
  $("#txTimestamp").val(time)
  $("#txID").val(tokenexid)
  $("#txOrigin").val(origin)
  $("#txTokenScheme").val(tokenScheme)
}

function generateHMAC(concatenatedString, clientSecretKey) {
    var key = CryptoJS.enc.Utf8.parse(clientSecretKey);
    var prehash = CryptoJS.enc.Utf8.parse(concatenatedString);
    var hash = CryptoJS.HmacSHA256(prehash, key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    console.log(key,'key')
    console.log(prehash, 'prehash')
    console.log(clientSecretKey, 'clientSecretKey')
    console.log(concatenatedString, 'concatenatedString')
    console.log(hash, 'hash')
    console.log(signature, ' authentication key')

    return signature;
}


function submitForm(indexPayment){
  // $('#iframeform').reportValidity();
  // if (validateExpiration(indexPayment) && $('#payment-form')[0].checkValidity()) {
      
  //       if ($(`body #input-paymentAmount-${indexPayment}`).val() == "" || $(`body #input-expDate-${indexPayment}`).val() == ""|| $(`body #input-secCode-${indexPayment}`).val() == "") {
  //           $(".form-label-expdate").show();
  //         return;
  //       }

  //       if(invalidCard) {
  //         $('.form-label-expdate').show()
  //         $('.form-label-expdate').html('Invalid Card Number')
  //         return;
  //       }
      
  //       // if($(`body #input-ccNumber-${indexPayment}`).val().length < 13){

  //       //   invalidCreditCardType();
      
  //       // }

  //     // validateCreditCard(indexPayment)
  //       validateSecurityCode(indexPayment)
  //       validateExpiration(indexPayment)
  //       $('body #eye').css('pointer-events', 'none');
  //       $('body #eyeSecCode').css('pointer-events', 'none');
  //       $(`body #input-paymentName-${indexPayment}`).prop("disabled",true);
  //       $(`body #input-paymentAmount-${indexPayment}`).prop("disabled",true);
  //       // $(`body #input-ccNumber-${indexPayment}`).prop("disabled",true);
  //       $(`body #input-expDate-${indexPayment}`).prop("disabled",true);
  //       $(`body #input-secCode-${indexPayment}`).prop("disabled",true);
  //       $(`body #button-cancelcc-${indexPayment}`).prop("disabled",true);
  //       $(`body #button-paymentcc-${indexPayment}`).css('background', '#A5936E');
  //       $(`body #button-paymentcc-${indexPayment}`).css('color', '#ffffff');
  //       $(`body #button-paymentcc-${indexPayment}`).css('font-weight', '300');
  //       $(`body #button-paymentcc-${indexPayment}`).css('pointer-events', 'none');
  //       $(`body #button-cancelcc-${indexPayment}`).css('pointer-events', 'none');
  //       $(`body #button-paymentcc-${indexPayment}`).prop(
  //         "disabled",
  //         true
  //       );
  //       $(".form-label-time").hide();
  //       $(".form-label-expdate").hide();
  //       setTimeout(() => {
  //          $(`#cx_input`).focus();
  //          $(`#cx_input`).val('PAY');
  //          $(".cx-send").trigger("click");
  //          hideAdaptivecard = true;
  //       }, 50);

  //       iframe.tokenize();
  //       console.log('tokenize')
  // } else {
  //     iframe.validate();
  //     console.log('validate')
  //     invalidCreditCardType();
  // }

  // return false;
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function currentSlide(n) {

  showSlides(slideIndex = n);

}



function showSlides(n) {

  var i;

  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

  }


  slides[slideIndex-1].style.display = "block";


}

