



function make_slides(f) {
  var   slides = {};

  slides.consent = slide({
     name : "consent",
     start: function() {
      exp.startT = Date.now();
      $("#consent_2").hide();
      exp.consent_position = 0;      
     },
    button : function() {
        exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });



  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    start: function() {
      $(".instruction_condition").html("Between subject intruction manipulation: "+ exp.instruction);
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.instructions2 = slide({
    name : "instructions2",
    start: function() {
      $(".instruction_condition").html("Between subject intruction manipulation: "+ exp.instruction);
         $(".err").hide();
    }, 
    button : function() {
     var radio_button_list = document.getElementsByName('rating2');
     console.log(radio_button_list);
     var radio_button;
     var count;
         exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });



  slides.instructions3 = slide({
    name : "instructions3",
    start: function() { 
	    $(".err").hide();
    }, 
    button : function() {
       var radio_button_list = document.getElementsByName('rating3');
       console.log(radio_button_list);
       var radio_button;
       var count;
         rating = ""
       for(count = 0; count<radio_button_list.length; count++) {
           if(radio_button_list[count].checked) {
                   rating = count+1;
           }
       };
       if(rating == 2) { 
           exp.go(); //use exp.go() if and only if there is no "present" data.
       } else {
           $(".err").show();
    
       }
    }
  });

  slides.instructions4 = slide({
    name : "instructions4",
    start: function() { 
    	    $(".err").hide();
    }, 
    button : function() {
       var radio_button_list = document.getElementsByName('rating4');
       console.log(radio_button_list);
       var radio_button;
       var count;
         rating = ""
       for(count = 0; count<radio_button_list.length; count++) {
           if(radio_button_list[count].checked) {
                   rating = count+1;
           }
       };
       if(rating == 4 | rating == 5) { 
           exp.go(); //use exp.go() if and only if there is no "present" data.
       } else {
           $(".err").show();
    
       }
    }
  });

  slides.instructions5 = slide({
    name : "instructions5",
    start: function() {  }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.instructions6 = slide({
    name : "instructions6",
    start: function() {  }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.instructions7 = slide({
    name : "instructions7",
    start: function() {  }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });



  slides.instructions8 = slide({
    name : "instructions8",
    start: function() {  }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });




   var buttonFunction = function() {
       	//console.log(exp.sliderPost);
           //this.log_responses();
           _stream.apply(this); //use exp.go() if and only if there is no "present" data.
       }
   
   
   var learningPresentHandle = function(stim) {
         $(".err").hide();
         this.init_sliders();
         exp.sliderPost = null;
         this.stim = stim; //FRED: allows you to access stim in helpers
   
         $(".alien").html('<img id="pngFrame" src="images/'+stim.alien_image+'" style="height:130px;">');
   
         $(".object").html('<img id="pngFrame" src="images/'+stim.object_image+'" style="width:250px;">');

         article = "a"; //(["a","e","i","o","u"].includes(stim.adjective.substring(0,1))) ? "an" : "a"

   
         if(stim.negation == 1) {
           negation = "<b>not ";
         } else {
           negation = "<b>";
         }
         phrasing = negation+article+' '+stim.adjective+'</b>'
         if(stim.scalar_modifier != "SHOULD_NOT_BE_DISPLAYED") {
            phrasing = negation+article+''+['', '', '', ' very', 'n extremely'][stim.scalar_modifier-1]+' '+stim.adjective+'</b>'
         }

         $(".description").html('<p class=triangle-border left"> This is '+phrasing+' spaceship.</p>');
   
       }
   
   var init_slidersFunction_ctxt = function() {
         utils.make_slider("#slider0_ctxt", function(event, ui) {
           exp.sliderPost = ui.value;
         });
       }
   var init_slidersFunction = function() {
         utils.make_slider("#slider0", function(event, ui) {
           exp.sliderPost = ui.value;
         });
       }
   
   var present_handleSpeakerChoice = function(stim) {
         $("#choose_speaker_table").hide();
         $("#choice_request").hide()
         $("#choice_continue_1").hide()
         $("#choice_continue_2").hide()
   
         $("#speaker_choice_feedback").hide();
   
         
            $("#choose_speaker_table").show();
            $("#choice_request").show()
            $("#choice_continue_1").show()
            
         $(".err").hide();
         this.init_sliders();
         exp.sliderPost = null;
         this.stim = stim; //FRED: allows you to access stim in helpers
  
         $(".object").html('<img id="pngFrame" src="images/'+stim.alien_image+'" style="width:150px;">');

 
         var names_list = _.shuffle(names);
         $(".object1").html('<input type="image" onclick="_s.button_1(\'first\')" id="myimage_first" src="images/'+stim.object_image1+'" style="height:190px;"/>');
         $(".object2").html('<input type="image" onclick="_s.button_1(\'second\')" id="myimage_first" src="images/'+stim.object_image2+'" style="height:190px;"/>');

         if(stim.adj_index == 0) {
            modifier = "more "
         } else {
            modifier = ""
         }
         $(".description").html('<p class=triangle-border left"> Click on the <b>'+modifier+''+stim.adjective+'</b> spaceship.</p>');
         this.has_decided = false;
   
         for(w = 0; w < 2; w++) {
             document.getElementById("myimage_"+["first","second"][w]+"_out").style.border = "0px solid white";
         }
         this.response = undefined;
       }
   
   //console.log("MAYBE MAKE THE ADJECTIVE THING A GAME: PUT UP A FEW SPACESHIPS; AND PRODUCE A DESCRIPTION");
   
   
   var buttonSpeakerChoice = function(result) {
        if(this.response != undefined) {
           return 0;
        }
        this.response = result;
        $("#speaker_choice_feedback").show();

          document.getElementById("myimage_"+this.stim.correct_answer+"_out").style.border = "5px solid blue";


        if(this.stim.correct_answer == result) {
          document.getElementById("speaker_choice_feedback_p").style.color = "blue";
          feedback = "Correct!"

        } else {
          document.getElementById("speaker_choice_feedback_p").style.color = "red";
          feedback = "Incorrect!"
        }

       
        $("#speaker_choice_feedback").html(feedback);
        $("#choice_continue_1").hide()
        $("#choice_continue_2").show()

        this.log_responses();
    }

    var button2SpeakerChoice = function() {   
            _stream.apply(this); //use exp.go() if and only if there is no "present" data.
        }
    
    var init_slidersSpeakerChoice = function() {
          utils.make_slider("#slider0", function(event, ui) {
            exp.sliderPost = ui.value;
          });
        }
    
    
    learning_blocks = []
    learning_blocks.push(_.shuffle([].concat(_.sample(learning_block_1,30), _.sample(learning_block_2, 30), _.sample([].concat(learning_block_1, learning_block_2), 30)  )))
    learning_blocks.push(_.shuffle([].concat(_.sample(learning_block_5,30), _.sample(learning_block_6, 30), _.sample([].concat(learning_block_1, learning_block_2, learning_block_5, learning_block_6), 30)  )))
    
   
    log_responsesSpeakerChoice = function() {
        exp.data_trials.push({
          "quiz_response" : this.response,
          "correct_response" : this.stim.correct_answer,
          "object" : this.stim.object_image,
          "adjective" : this.stim.adjective,
          "slide_number" : exp.phase,
      //    "condition" : this.stim.condition,
//          "imgs" : this.stim.imgs,
  //        "item" : this.stim.item,
    //      "distractorValues" : this.stim.distractorValues
        });
    };


 
    for(var i=1; i<=learning_blocks.length; i++) {
       slides["learning"+i] = slide({
           name : "learning",
           present : learning_blocks[i-1],
           present_handle : learningPresentHandle,
           button : function() {
              _stream.apply(this); //use exp.go() if and only if there is no "present" data.
           },
           init_sliders : init_slidersFunction
         });
         //console.log("learning"+i);
    }
    
    testing_blocks = [];
    
    testing_blocks = []
    testing_blocks.push(_.shuffle([].concat(_.sample(testing_block_1,30), _.sample(testing_block_2, 30), _.sample([].concat(testing_block_1, testing_block_2), 30)  )))
    testing_blocks.push(_.shuffle([].concat(_.sample(testing_block_5,30), _.sample(testing_block_6, 30), _.sample([].concat(testing_block_1, testing_block_2, testing_block_5, testing_block_6), 30)  )))
    
    
    
    for(var i=1; i<=testing_blocks.length; i++) {
       slides["speaker_choice"+i] = slide({
           name : "speaker_choice",
           present : testing_blocks[i-1],
           present_handle : present_handleSpeakerChoice,
           button_1 : buttonSpeakerChoice,
           button_2 : button2SpeakerChoice,
           init_sliders : init_slidersSpeakerChoice,
           log_responses : log_responsesSpeakerChoice
         });
    }

 
  present_handle_production = function(stim) {
      if(!exp.hasDoneTutorialRevision && (exp.current_score / exp.total_quiz_trials < 0.5) && exp.total_quiz_trials > 8) {
          console.log("DOING REVISION");
          exp.shouldDoTutorialRevision = true;
          _stream.apply(this);
      }
      if(exp.hasDoneTutorialRevision && (!exp.shouldDoTutorialRevision)) {
           _stream.apply(this);
      }
      exp.hasEnteredInterativeQuiz = true;
      $("#score_field").html(exp.current_score+" Points <br>"+Math.floor(((exp.total_quiz_trials > 0) ? ((exp.current_score*100)/exp.total_quiz_trials) : 100))+"% Correct");
      $(".alien_production").html('<img id="pngFrame" src="images/'+(_.sample(["alien-1.jpg", "alien-2.png"]))+'" style="width:130px;">');


      this.stim = stim; //FRED: allows you to access stim in helpers

      $(".object1").html('<img id="pngFrame" src="images/'+this.stim.ships[0].fileName+'" style="width:140px;">');
      $(".object2").html('<img id="pngFrame" src="images/'+this.stim.ships[1].fileName+'" style="width:140px;">');
      $(".object3").html('<img id="pngFrame" src="images/'+this.stim.ships[2].fileName+'" style="width:140px;">');
      $(".object4").html('<img id="pngFrame" src="images/'+this.stim.ships[3].fileName+'" style="width:140px;">');

      for(var i = 1; i<=4; i++) {
         document.getElementById("object"+(i)+"_td").style.border = "5px solid white";
      }

      //console.log(stim.ships);
      targetElement = ([0,1,2,3].filter(function(x) { return stim.ships[x].index == 0}))[0]
      //console.log("object"+(targetElement+1))

      document.getElementById("object"+(targetElement+1)+"_td").style.border = "5px solid blue";

      document.getElementById("production_input").value = ""; 

        $("#prod_continue_2").hide()
        $("#prod_continue_3").hide()
        $("#prod_continue_4").hide()

        $("#prod_continue_1").show()
       $("#prod_feedback").hide();

    }

  button_production = function() {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
    }

  button_3_production = function() {

      for(var i = 1; i<=4; i++) {
         document.getElementById("object"+(i)+"_td").style.border = "5px solid white";
      }
      stim = this.stim;
      targetElement = ([0,1,2,3].filter(function(x) { return stim.ships[x].index == 0}))[0]
      document.getElementById("object"+(targetElement+1)+"_td").style.border = "5px solid blue";


       words = [];

       colors = [];
       alien = [];

       //console.log(this.stim);
       description = $("#production_input").val().replace("."," ").replace(","," ").toLowerCase();
       words = description.split(" ");

       //console.log(description);

       this.position = 0;
       for(var i=0; i < words.length; i++) {
         word = words[i];
         if(["red", "green", "blue"].includes(word)) {
           colors.push(word);
         } else if(adjectives.includes(word)) {
           alien.push(word);
         }

       }
       
       //console.log(words);
       //console.log(alien);
       //console.log(colors);
      
       maxrange = Math.max.apply(null, this.stim.ships.map(function(x) { return x.range }))
//       console.log(this.stim.ships.map(function(x) { return x.range }))
  //     console.log(maxrange);
       function isCompatible(ship) {
          negated = false;
          for(var i=0; i<words.length; i++) {
             word = words[i];
             if(["red", "green", "blue"].includes(word)) {
               if(word != ship.color) {
                  return negated ? true : false;
               }
             } else if(adjectives[0] == word) {
               if(maxrange > ship.range) {
                  return negated ? true : false;
               }
             } else if(adjectives[1] == word) {
               if(ship.type == ships[0]) {
                 return negated ? true : false;
               }
             } else if(word == "not") {
                negated = true;
             }
           }
         return true;
       }
       compatibleShips = []
       for(var i=0; i<4; i++) {
          if(isCompatible(this.stim.ships[i])) {
            compatibleShips.push(i);
            document.getElementById("object"+(i+1)+"_td").style.border = "5px solid orange";
          }
       }
       if(compatibleShips.length > 1) {
          feedback = "Your tutor couldn't figure out what you meant! The highlighted spaceships all seem to fit your description. Try to make it more precise."
          feedbackColor = "red";
          this.answer_status = "underspecified";
       }
       if(compatibleShips.length == 0) {
          feedback = "Your tutor couldn't figure out what you meant! Your description doesn't seem to match any ship."
          feedbackColor = "red";
          this.answer_status = "inconsistent";

//          compatibleShips = this.stim;
       }
       if(compatibleShips.length == 1) {
         if(this.stim.ships[compatibleShips[0]].index == 0) {
           feedback = _.sample(["That's right!", "Good job!", "You succeeded!", "That is a good description!", "You're on track!"])
           feedbackColor = "green";
          this.answer_status = "correct";

         } else {
           feedback = "Your tutor chose the wrong spaceship! Your description doesn't match."
           feedbackColor = "red";
          this.answer_status = "wrong";

         }
       }
       //console.log(this.stim.suggestion);
       if(this.stim.suggestion != undefined && feedbackColor == "red") {
         feedback += "<br/> Hint: You could say: &nbsp;<b>"+this.stim.suggestion.replace("ship", "spaceship")+"</b>"
       } else if(feedbackColor == "red") {
         feedback += "<br/> Hint: Combine multiple descriptions if necessary. You're allowed to use:<br/> <b>"+(["the", "spaceship", adjectivesOrdered[0], adjectivesOrdered[1], "red", "green", "blue"]).join(", ")+"</b>"
       }
       if(feedbackColor != "green") {
         feedback += '<br/>Press "Skip" to move on, or change your response and try again.'
       }
       //console.log(compatibleShips);
       chosenShip = _.sample(compatibleShips);
    //   console.log(chosenShip);

//       isCorrect = (this.stim.ships[chosenShip].index == 0);
       //frameColor = (isCorrect ? "green" : "red")
       //document.getElementById("object"+(chosenShip+1)).style.border = "5px solid "+frameColor;
       //feedback = isCorrect ? "You've succeeded!" : "Your partner has chosen the wrong spaceship."
       $("#prod_feedback").html(feedback);
       //console.log(feedback);
       document.getElementById("prod_feedback_p").style.color = feedbackColor;

       $("#prod_feedback").show();


        $("#prod_continue_1").hide()
        $("#prod_continue_3").show()

        if(this.answer_status != "correct") {
          $("#prod_continue_2").show()
          $("#prod_continue_3").show()
          $("#prod_continue_4").hide()

          document.getElementById("object"+(targetElement+1)+"_td").style.border = "5px solid blue";
        } else {
          $("#prod_continue_2").hide()
          $("#prod_continue_3").hide()
          $("#prod_continue_4").show()
        }

    }
 
  log_responses_production = function() {
        //console.log(this.stim.condition);
        exp.current_score += ((this.answer_status == "correct") ? 1 : 0)
        exp.total_quiz_trials += 1
        exp.data_trials.push({
          "enteredText" : $("#production_input").val().replace('\n',' NEW_LINE '),
          "correct" : this.answer_status,
          "slide_number" : exp.phase
        });
    }

  slides.production = slide({
    name : "production",
    present : [],
    present_handle : present_handle_production,
    button : button_production,
    button_3 : button_3_production,
    log_responses : log_responses_production,
  });


  slides.production2 = slide({
    name : "production",
    present : [],
    present_handle : present_handle_production,
    button : button_production,
    button_3 : button_3_production,
    log_responses : log_responses_production,
  });



  slides.production_click = slide({
    name : "production_click",
    present : [],
    present_handle : function(stim) {
      $("#score_field_click").html(exp.current_score_click+" Points <br>"+Math.floor(((exp.total_quiz_trials_click > 0) ? ((exp.current_score_click*100)/exp.total_quiz_trials_click) : 100))+"% Correct");
      $(".alien_production").html('<img id="pngFrame" src="images/'+(_.sample(["alien-1.jpg", "alien-2.png"]))+'" style="width:130px;">');

       this.position = 0;
       for(var i=1; i < 6; i++) {
         $("#textfield"+i).html("");
       }
      this.stim = stim; //FRED: allows you to access stim in helpers

      $(".object1").html('<img id="pngFrame" src="images/'+this.stim.ships[0].fileName+'" style="width:140px;">');
      $(".object2").html('<img id="pngFrame" src="images/'+this.stim.ships[1].fileName+'" style="width:140px;">');
      $(".object3").html('<img id="pngFrame" src="images/'+this.stim.ships[2].fileName+'" style="width:140px;">');
      $(".object4").html('<img id="pngFrame" src="images/'+this.stim.ships[3].fileName+'" style="width:140px;">');

      for(var i = 1; i<=4; i++) {
         document.getElementById("object"+(i)+"_td_click").style.border = "5px solid white";
      }

         document.getElementById("myimage_ADJ1").value = adjectivesOrdered[0];
         document.getElementById("myimage_ADJ2").value = adjectivesOrdered[1];


      //console.log(stim.ships);
      targetElement = ([0,1,2,3].filter(function(x) { return stim.ships[x].index == 0}))[0]
      //console.log("object"+(targetElement+1))

      document.getElementById("object"+(targetElement+1)+"_td_click").style.border = "5px solid blue";

      document.getElementById("production_input").value = ""; 

        $("#prod_click_continue_2").hide()
        $("#prod_click_continue_4").hide() // continue
        $("#prod_click_continue_3").show() // skip

        $("#prod_click_continue_1").show()
       $("#prod_click_feedback").hide();

        $("#prod_click_continue_0").show()


      this.position = 0;
    },

/*    button : function() {
    	//console.log(exp.sliderPost);
      if (exp.sliderPost != null) {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }
    },*/


   button : function() {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
    },

    button_1 : function(word) {
       this.position++;
       if(word == "ADJ1") {
          word = adjectivesOrdered[0]
       } else if(word == "ADJ2") {
          word = adjectivesOrdered[1]
       }
       $(".textfield"+this.position).html(word);
       $("#textfield"+this.position).html(word);
    },

    button_2 : function(word) {
       this.position = 0;
       for(var i=1; i < 6; i++) {
         $("#textfield"+i).html("");
       }

    },



    button_3 : function() {
       words = [];

      
       for(var i=1; i < 6; i++) {
         word = (document.getElementById("textfield"+i).innerHTML);
         words.push(word);

       }
       
       console.log(words);




      for(var i = 1; i<=4; i++) {
         document.getElementById("object"+(i)+"_td_click").style.border = "5px solid white";
      }
      stim = this.stim;
      targetElement = ([0,1,2,3].filter(function(x) { return stim.ships[x].index == 0}))[0]
      document.getElementById("object"+(targetElement+1)+"_td_click").style.border = "5px solid blue";


   //    words = [];

       colors = [];
       alien = [];

       //console.log(this.stim);
//       description = $("#production_input").val().replace("."," ").replace(","," ");
  //     words = description.split(" ");

       //console.log(description);

//       this.position = 0;
       for(var i=0; i < words.length; i++) {
         word = words[i];
         if(["red", "green", "blue"].includes(word)) {
           colors.push(word);
         } else if(adjectives.includes(word)) {
           alien.push(word);
         }

       }
       
       //console.log(words);
       //console.log(alien);
       //console.log(colors);
      
       maxrange = Math.max.apply(null, this.stim.ships.map(function(x) { return x.range }))
//       console.log(this.stim.ships.map(function(x) { return x.range }))
  //     console.log(maxrange);
       function isCompatible(ship) {
          negated = false;
          for(var i=0; i<words.length; i++) {
             word = words[i];
             if(["red", "green", "blue"].includes(word)) {
               if(word != ship.color) {
                  return negated ? true : false;
               }
             } else if(adjectives[0] == word) {
               if(maxrange > ship.range) {
                  return negated ? true : false;
               }
             } else if(adjectives[1] == word) {
               if(ship.type == ships[0]) {
                 return negated ? true : false;
               }
             } else if(word == "not") {
                negated = true;
             }
           }
         return true;
       }
       compatibleShips = []
       for(var i=0; i<4; i++) {
          if(isCompatible(this.stim.ships[i])) {
            compatibleShips.push(i);
            document.getElementById("object"+(i+1)+"_td_click").style.border = "5px solid orange";
          }
       }
       if(compatibleShips.length > 1) {
          feedback = "Your tutor couldn't figure out what you meant! The highlighted spaceships all seem to fit your description. Try to make it more precise."
          feedbackColor = "red";
          this.answer_status = "underspecified";
       }
       if(compatibleShips.length == 0) {
          feedback = "Your tutor couldn't figure out what you meant! Your description doesn't seem to match any ship."
          feedbackColor = "red";
          this.answer_status = "inconsistent";

//          compatibleShips = this.stim;
       }
       if(compatibleShips.length == 1) {
         if(this.stim.ships[compatibleShips[0]].index == 0) {
           feedback = _.sample(["That's right!", "Good job!", "You succeeded!", "That is a good description!", "You're on track!"])
           feedbackColor = "green";
          this.answer_status = "correct";

         } else {
           feedback = "Your tutor chose the wrong spaceship! Your description doesn't match."
           feedbackColor = "red";
          this.answer_status = "wrong";

         }
       }
       //console.log(this.stim.suggestion);
       if(this.stim.suggestion != undefined && feedbackColor == "red") {
         feedback += "<br/> Hint: You could say: &nbsp;<b>"+this.stim.suggestion.replace("ship", "spaceship")+"</b>"
       } else if(feedbackColor == "red") {
         feedback += "<br/> Hint: Combine multiple descriptions if necessary."
       }
       if(feedbackColor != "green") {
         feedback += '<br/>Press "Skip" to move on, or change your response and try again.'
       }
       //console.log(compatibleShips);
       chosenShip = _.sample(compatibleShips);
    //   console.log(chosenShip);

//       isCorrect = (this.stim.ships[chosenShip].index == 0);
       //frameColor = (isCorrect ? "green" : "red")
       //document.getElementById("object"+(chosenShip+1)).style.border = "5px solid "+frameColor;
       //feedback = isCorrect ? "You've succeeded!" : "Your partner has chosen the wrong spaceship."
       $("#prod_click_feedback").html(feedback);
       //console.log(feedback);
       document.getElementById("prod_click_feedback_p").style.color = feedbackColor;

       $("#prod_click_feedback").show();

        $("#prod_click_continue_0").show()

        $("#prod_click_continue_1").hide()
        $("#prod_click_continue_3").show()
        if(this.answer_status != "correct") {
          $("#prod_click_continue_2").show()
          document.getElementById("object"+(targetElement+1)+"_td_click").style.border = "5px solid blue";
        } else {
          $("#prod_click_continue_2").hide()
          $("#prod_click_continue_0").hide()
        $("#prod_click_continue_3").hide()
        $("#prod_click_continue_4").show()

        }
      
        
    },




 
  log_responses : function() {
        //console.log(this.stim.condition);
        exp.current_score_click += ((this.answer_status == "correct") ? 1 : 0)
        exp.total_quiz_trials_click += 1

       words = [];
       for(var i=1; i < 6; i++) {
         word = (document.getElementById("textfield"+i).innerHTML);
         words.push(word);
       }
             

        exp.data_trials.push({
          "enteredText" : words.join(" "),
          "correct" : this.answer_status,
          "slide_number" : exp.phase
        });
    },



    init_sliders : function() {
      utils.make_slider("#slider0", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

  });











  slides.what_things_mean = slide({
    name : "what_things_mean",
    start : function(stim) {
      console.log(stim);
      $(".err").hide();
      document.getElementById("rofky_input").value = "";
      document.getElementById("glab_input").value = "";

//      exp.order_questionnaires = _.sample([[0,1],[1,0]])


      document.getElementById("adjective_1").textContent = (adjectives[exp.order_questionnaires[0]])
      document.getElementById("adjective_2").textContent = (adjectives[exp.order_questionnaires[1]])

    },

    button : function() {
    	//console.log(exp.sliderPost);
      result1 = document.getElementById("rofky_input").value;
      result2 = document.getElementById("glab_input").value;

      if (result1 != "" && result2 != "") {
        this.log_responses();
        exp.go(); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }
    },

    log_responses : function() {
        //console.log(this.stim.condition);
        exp.data_trials.push({
          "adj1_response" : document.getElementById((exp.order_questionnaires[0] == 0 ? "rofky_input" : "glab_input")).value,
          "adj2_response" : document.getElementById((exp.order_questionnaires[1] == 0 ? "rofky_input" : "glab_input")).value,
          "order_questionnaires" : exp.order_questionnaires,
          "slide_number" : exp.phase
        });
    },
  });




  slides.disagreement = slide({
    name : "disagreement",
    start : function(stim) {
      console.log(stim);
      $(".err").hide();

//      exp.order_questionnaires = _.sample([[0,1],[1,0]])

      this.init_sliders();
      exp.sliderPost1 = null;
      exp.sliderPost2 = null;

      document.getElementById("adjective_1_d").textContent = (adjectives[exp.order_questionnaires[0]])
      document.getElementById("adjective_2_d").textContent = (adjectives[exp.order_questionnaires[1]])

    },

    button : function() {
      if (exp.sliderPost1 != null && exp.sliderPost2 != null) {
        this.log_responses();
        exp.go(); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }

    },

    log_responses : function() {
        //console.log(this.stim.condition);
        exp.data_trials.push({
          "adj1_disagreement" : (exp.order_questionnaires[0] == 0 ? exp.sliderPost1 : exp.sliderPost2),
          "adj2_disagreement" : (exp.order_questionnaires[0] == 0 ? exp.sliderPost2 : exp.sliderPost1),
          "slide_number" : exp.phase,
          "order_questionnaires" : exp.order_questionnaires,
        });
    },


    init_sliders : function() {
      utils.make_slider("#slider_disag_1", function(event, ui) {
        exp.sliderPost1 = ui.value;
      });
      utils.make_slider("#slider_disag_2", function(event, ui) {
        exp.sliderPost2 = ui.value;
      });
    },
  });



  slides.subjectivity = slide({
    name : "subjectivity",
    start : function(stim) {
      console.log(stim);
      $(".err").hide();

      //exp.order_questionnaires = _.sample([[0,1],[1,0]])

      this.init_sliders();
      exp.sliderPost1 = null;
      exp.sliderPost2 = null;

      document.getElementById("adjective_1_s").textContent = (adjectives[exp.order_questionnaires[0]])
      document.getElementById("adjective_2_s").textContent = (adjectives[exp.order_questionnaires[1]])

    },

    button : function() {
    	//console.log(exp.sliderPost);
      result1 = document.getElementById("rofky_input").value;
      result2 = document.getElementById("glab_input").value;

      if (exp.sliderPost1 != null && exp.sliderPost2 != null) {
        this.log_responses();
        exp.go(); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }

    },

    log_responses : function() {
        //console.log(this.stim.condition);
        exp.data_trials.push({
          "adj1_subj" : (exp.order_questionnaires[0] == 0 ? exp.sliderPost1 : exp.sliderPost2),
          "adj2_subj" : (exp.order_questionnaires[0] == 0 ? exp.sliderPost2 : exp.sliderPost1),
          "order_questionnaires" : exp.order_questionnaires,
          "slide_number" : exp.phase
        });
    },


    init_sliders : function() {
      utils.make_slider("#slider_subj_1", function(event, ui) {
        exp.sliderPost1 = ui.value;
      });
      utils.make_slider("#slider_subj_2", function(event, ui) {
        exp.sliderPost2 = ui.value;
      });
    },
  });





  slides.multi_slider_context = slide({
    name : "multi_slider_context",
    present : stimuliContext,
    present_handle : function(stim) {
      console.log(stim);
      $(".err").hide();
      $(".wrong").hide();

      //$(".err2").hide();
      this.init_sliders();
      exp.sliderPost = null;
      this.stim = stim; //FRED: allows you to access stim in helpers

      $(".first-sentence").html(stim.sentence);

      $(".question").html(stim.question);


      console.log("DONE PRESENTING");
//      document.getElementById("completion").value = "";

     var radio_button_list = document.getElementsByName('response');
     var radio_button;
     var count;
     for(count = 0; count<radio_button_list.length; count++) {
       radio_button_list[count].checked = false;
     };    
     var radio_button_list = document.getElementsByName('rating');
     console.log(radio_button_list);
     var radio_button;
     var count;
     for(count = 0; count<radio_button_list.length; count++) {
       radio_button_list[count].checked = false;
     };
   


     document.getElementById("sentence_div").style.display = "block"; 
     document.getElementById("question_div").style.display = "none"; 
   


    },

    button : function() {
      $(".err").hide();
       if(document.getElementById("sentence_div").style.display == "none" & document.getElementById("question_div").style.display == "none") {
            this.log_responses();
           _stream.apply(this); //use exp.go() if and only if there is no "present" data.
	   action = "NONE"
        } else if(this.stim.question != null & document.getElementById("sentence_div").style.display == "block") {
           action = "moveToQuestion"
       } else  if(this.stim.question != null & document.getElementById("sentence_div").style.display == "none") {
           action = "end_fromQ"
       } else if(this.stim.question == null) {
           action = "end_fromS"
       }
        if(action == "moveToQuestion" | action == "end_fromS") {

		hasValue = false;
     var radio_button_list = document.getElementsByName('rating');
     console.log(radio_button_list);
     var radio_button;
     var count;
     for(count = 0; count<radio_button_list.length; count++) {
       if(radio_button_list[count].checked) {
	       hasValue= true;
       }
     };
 


                if(!hasValue) {
                   $(".err").show();
        } else {
            if(action == "end_fromS") {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
        }
            else {
               document.getElementById("sentence_div").style.display = "none"; 
               document.getElementById("question_div").style.display = "block"; 
            }}
        } else if(action == "end_fromQ") {
		hasValue = false;
     var radio_button_list = document.getElementsByName('response');
     console.log(radio_button_list);
     var radio_button;
     var count;
     response = null;
     for(count = 0; count<radio_button_list.length; count++) {
       if(radio_button_list[count].checked) {
	       hasValue= true;
	       response = radio_button_list[count].value;
       }
     };
                 if(!hasValue) {
                   $(".err").show();
		 } else if(response != this.stim.answer) {
                   $(".wrong").show();
                   document.getElementById("question_div").style.display = "none"; 
        } else {
            this.log_responses();
            _stream.apply(this); //use exp.go() if and only if there is no "present" data.
        }

        }
    },

    init_sliders : function() {
      utils.make_slider("#slider0_ctxt", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
    log_responses : function() {
        //console.log(this.stim.condition);
	   if(this.stim.question != null) {
             answer = document.querySelector('input[name="response"]:checked').value;
		   correct_answer = this.stim.answer;
	   } else {
             answer = "NA";
		   correct_answer = "NA";
	   }
        exp.data_trials.push({
          "sentence" : this.stim.sentence,
          "item" : this.stim.item,
          "condition" : this.stim.condition,
          "correct_answer" : correct_answer,
          "given_answer" : answer,
          "rating" : document.querySelector('input[name="rating"]:checked').value,
          "slide_number" : exp.phase
        });
    },
  });




  slides.maze = slide({
    name : "maze",
    present : stimuliContext,
    present_handle : function(stim) {

      console.log(stim);
	    this.stim = stim;
	//    console.log(stim);
	this.words = this.stim.sentence.split(" ")
	this.order = [];
this.mazeResults = [];
		this.correct = [];
	    this.words = ["", "+++", "+++", "+++", "", ""].concat(this.words);
	    console.log(this.words);
        var t = this;
        var repeat = true;
	this.currentWord = 0;
	this.stoppingPoint = this.words.length
        $(".Maze-lword").hide();
        $(".Maze-rword").hide();
        $(".Maze-larrow").hide();
        $(".Maze-rarrow").hide();
        $(".Maze-error").hide();
        $(".Question").hide();

        $(".rvsp-word").html("Please press any key to read the next sentence.");

        this.start_listener = function(event) {
            console.log(event);
            console.log(t.currentWord);
            var time = new Date().getTime();
            var code = event.keyCode;
//            if (code == 69 || code==73) {
//		    t.response = code;
			    t.start_button();
//	    }
        }
        document.addEventListener( 'keydown', t.start_listener);

    this.start_button = function() {
	    console.log("CALL BUTTON");
        document.removeEventListener( 'keydown', this.start_listener);
        t.advancePresentation();

    }

	this.advancePresentation = function() {
		console.log("ADVANCE PRESENTATION");
	     if(t.currentWord < t.words.length) {
                 $(".rvsp-word").html(t.words[t.currentWord]);
		t.currentWord++;
		 window.setTimeout(t.advancePresentation, 300);
	     } else {
        $(".Question").show();

	                 $(".rvsp-word").html("");
	                              $(".Maze-lword").show();
                         $(".Maze-rword").show();
                         $(".Maze-larrow").show();
                         $(".Maze-rarrow").show();
        t.timeout = window.setTimeout(t.buttonTooSlow, 3000);
        document.addEventListener( 'keydown', t.listener);


	     }
	};
        this.listener = function(event) {
            console.log(event);
            console.log(t.currentWord);
            var time = new Date().getTime();
            var code = event.keyCode;
            if (code == 69 || code==73) {
		    t.response = code;
			    t.button();
	    }
        }
    this.button = function() {
	    console.log("CALL BUTTON");
	window.clearTimeout(t.timeout);
        document.removeEventListener( 'keydown', this.listener);
        t.log_responses();
        _stream.apply(t); //use exp.go() if and only if there is no "present" data.
	
    }
    this.buttonTooSlow = function() {
	    console.log("TOO SLOW");
        document.removeEventListener( 'keydown', t.listener);
	    t.response = "None";
        document.removeEventListener( 'keydown', this.listener);
                         $(".Maze-error").show();
        $(".Maze-lword").hide();
        $(".Maze-rword").hide();
        $(".Maze-larrow").hide();
        $(".Maze-rarrow").hide();
         window.setTimeout(t.button, 3000);


	
    }

    },


    init_sliders : function() {
      utils.make_slider("#slider0_ctxt", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
    log_responses : function() {
	    document.removeEventListener( 'keydown', this.listener);
	    byWords = [];
       dataForThisTrial = {
          "sentence" : this.stim.sentence,
          "item" : this.stim.item,
          "condition" : this.stim.condition,
	  "byWords" : byWords,
          "slide_number" : exp.phase,
	       "response" : this.response
        };
console.log(dataForThisTrial);
        exp.data_trials.push(dataForThisTrial);
	    //console.log(exp.data_trials[exp.data_trials.length-1]);

      dataExperiment= {
          "time_in_minutes" : (Date.now() - exp.startT)/60000,
	  "ProlificURL" : window.location.href
      };
xhr = new XMLHttpRequest();

	    xhr.open('POST', 'https://stanford.edu/~mhahn2/cgi-bin/experiments/serverByTrial/');
	    xhr.setRequestHeader('Content-Type', 'application/json');
	    jointData = JSON.stringify({"experiment" : dataExperiment, "trial" : dataForThisTrial});
	    //console.log(jointData);
//    xhr.onreadystatechange = function() {
//      if (xhr.readyState === 4) {
//	      console.log(xhr.status);
//          if (xhr.status === 200) {
//             console.log('successful');
//          } else {
//             $(".Maze-error").html("We're sorry, it seems your browser doesn't support this study, as it doesn't allow uploading your results to the server.");
//          }
//      }
//    }
	    xhr.send(jointData);


    },
  });





  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
//        colorblind : $("#colorblind").val(),
        comments : $("#comments").val(),
        suggested_pay : $("#suggested_pay").val(),
        condition : exp.condition,
        adjective1 : adjectives[0],
        adjective2 : adjectives[1],
        context_first : exp.context_first,
        tutorial : exp.tutorial,
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
        //  "trials" : exp.data_trials,
        //  "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          //"condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000,
	//  "experiment": "forgetting-rating-49",
	  "ProlificURL" : window.location.href
      };

	    // TURK
//      setTimeout(function() {turk.submit(exp.data);}, 1000);


	    //      PROLIFIC
xhr = new XMLHttpRequest();

	    xhr.open('POST', 'https://stanford.edu/~mhahn2/cgi-bin/experiments/serverByTrial/');

	    // set `Content-Type` header
	     xhr.setRequestHeader('Content-Type', 'application/json');
	    //
	    // // send rquest with JSON payload
	     xhr.send(JSON.stringify(exp.data));
      $(".redirect_prolific").html("Please click on this link to record your participation: <br><br><b><a href='https://app.prolific.co/submissions/complete?cc=27CAA9CF'>Record Participation</a></b><br><br>If you do not do this, you will NOT GET PAID.");

    }
  });

  return slides;
}

/// init ///
function init() {
repeatWorker = false;
//  (function(){
//      var ut_id = "adj-order-preference";
//      if (UTWorkerLimitReached(ut_id)) {
//        $('.slide').empty();
//        repeatWorker = true;
//        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
//      }
//})();

  exp.current_score_click = 0;
  exp.total_quiz_trials_click = 0;

  exp.current_score = 0;
  exp.total_quiz_trials = 0;
  exp.hasDoneTutorialRevision = false;
  exp.shouldDoTutorialRevision = false;
  exp.hasEnteredInterativeQuiz = false;

  exp.trials = [];
  exp.catch_trials = [];
  exp.instruction = _.sample(["instruction1","instruction2"]);
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
   exp.structure=[];
exp.structure.push('i0')
exp.structure.push('consent')
exp.structure.push( 'instructions1')
exp.structure.push( 'instructions2')
   exp.structure.push( 'maze')

exp.structure.push( 'subj_info')
exp.structure.push( 'thanks');


  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

      exp.order_questionnaires = _.sample([[0,1],[1,0]])

        exp.wordsSoFar = 0;

  exp.go(); //show first slide
}
