// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1. 
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

exp.condition = 0; //Math.floor(Math.random()*2);
console.log("Condition "+exp.condition)

var ships = _.shuffle(["AUTO-COLOR-few-NUM.svg", "AUTO-COLOR-many-NUM.svg"]) //, "rocket1.png", "rocket2.png", "rocket3.png", "rocket4.png", "rocket5.png", "rocket-6.jpg", "saucer-2.png", "saucer-3.png", "saucer-4.jpg", "saucer-5.jpg", "saucer-6.png"];

// randomize whether adjective means saucer or rocket

var     shipsGroupB1 = [ships[0]]; //"rocket1.png", "rocket2.png"] //, "rocket3.png", "rocket4.png", "rocket5.png", "rocket-6.jpg"];
var     shipsGroupB2 = [ships[1]]; //, "saucer-2.png"] //, "saucer-3.png", "saucer-4.jpg", "saucer-5.jpg", "saucer-6.png"];


// set the adjective set
// also, should randomize the orders in the questionnaires at the end
//var     adjectives = _.sample(["twell","lann","cref"],2) //_.sample(["broff", "kolch", "muic", "yunt", "plach", "lann", "physs", "scrib", "glab"], 2);

biglist = ["grirped","brirk","clou","fonns","spunes","spyck","fruith","squalf","phoys","jite","dwake","twad","therv","cuint","ghoice","yafs","blef","niege","trunce","preathe","joids","heaned","slalps","twawls","jaund","brame","irv","snurts","duilts","bamn","spraived","praife","juints","crooch","scorcs","fict","ceched","thomps","cref","gwigs","trafes","milbed","anns","toch","rhould","lised","olm","gelt","hafs","twell","broff", "kolch", "muic", "yunt", "plach", "lann", "physs", "scrib", "glab"]

// those with positive mean slope in 61: ["kolch","trafes","twawls","trunce","lised","snurts","twell","yafs","squalf","yunt","bamn","glab","fonns","toch","duilts","slalps","clou","jite","plach","phoys","irv","anns","rhould","spyck","dwake","ceched","brame"]



var adjectives = _.sample(biglist, 2)

var     adjectivesOrdered = _.shuffle(adjectives.concat());


// adjective1 is subjective, adjective2 is objective

var     shipsGroupA1 = [];
var     shipsGroupA2 = [];
     for(var i = 0; i<shipsGroupB1.length; i++) {
        if(i % 2 == 0) {
          shipsGroupA1.push(shipsGroupB1[i])
          shipsGroupA1.push(shipsGroupB2[i])
        } else {
          shipsGroupA2.push(shipsGroupB1[i])
          shipsGroupA2.push(shipsGroupB2[i])
        }
     }



     // in condition0:
var     shipsGroupC1 = ["rocket5", "saucer-1"] // Adj1, according to Alien1
var     shipsGroupC2 = ["rocket5", "saucer-2"] // Adj1, according to Alien2


var learning_block_1 = [];
var learning_block_2 = [];
var learning_block_3 = [];
var learning_block_4 = [];
var learning_block_5 = [];
var learning_block_6 = [];
var learning_block_7 = [];
var learning_block_8 = [];


var testing_block_1 = [];
var testing_block_2 = [];
var testing_block_3 = [];
var testing_block_4 = [];
var testing_block_5 = [];
var testing_block_6 = [];
var testing_block_7 = [];
var testing_block_8 = [];



//function allowDrop(ev) {
//    ev.preventDefault();
//}
//
//function drag(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//}
//
//function drop(ev) {
//    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
//}

console.log(adjectives);
console.log(ships);

var stimuliContext =  makeStimsContext();


function sampleExcept(from, accept) {
  
  for(var i=0; i<50; i++) {
    result = _.sample(from);
    if(accept(result)) {
      return result;
    }
  }
  console.log("Sampling failed");
  console.log(from);
  console.log(accept);
  return result;

}

var production_block_1 = []; // simple, group 1
var production_block_2 = []; // simple, group 2
var production_block_3 = []; // difficult, at most one alien adjective
var production_block_4 = []; // difficult, only alien adjectives


var production_block_click_1 = production_block_1
var production_block_click_2 = production_block_2
var production_block_click_3 = production_block_3
var production_block_click_4 = production_block_4

var production_block_1 = []; // simple, group 1
var production_block_2 = []; // simple, group 2
var production_block_3 = []; // difficult, at most one alien adjective
var production_block_4 = []; // difficult, only alien adjectives



//function selectLatinSquareCritical(critical) {
//	return critical;
//}

function processCritical(itemOrder, stimsHere, conditionAssignment, item, topNoun, remainder) {
	noun = topNoun;
	condition = conditionAssignment[itemOrder];
	if(condition == 0) {
   	       sentence = "The "+noun+" that no "+remainder[0];
	} else if (condition == 2) {
   	       sentence = "No "+noun+" that the "+remainder[0];
	} else {
		crash()
	}
  stimulus = {
		      "item" : item,
		      "condition" : condition,
		      "sentence" : sentence,
		      "question" : null,
		      "answer" : null
                 };
          stimsHere.push(stimulus);
}

function makeStimsContext() {
     console.log("MAKE STIMS CONTEXT")



     function addStimulus(stimsHere, item, condition, sentence, question, answer) {
          stimulus = {
		      "item" : item,
		      "condition" : condition,
		      "sentence" : sentence,
		      "question" : question,
		      "answer" : answer
                 };
          stimsHere.push(stimulus);
     }
     fillers = [];
     stimsExplanation = [];
     stims = [];
     stimsTraining = [];
	critical = [];
     //addStimulus("The child playing in the...", "The child was playing in the...", "filler")
     //addStimulus("The page torn in half...", "The page was torn in half...", "filler")


//     addStimulus(stimsExplanation, "filler", "", "10_SC_RC") 
     
     
     	// Latin Square Logic
     conditionAssignment = [];
     conditionsCounts = [0, 0, 0, 0];
     for(var i=0; i<14; i++) {
	if(Math.random() > 0.5) {
     	   conditionAssignment.push(2)
     	   conditionAssignment.push(0)
	} else {
     	   conditionAssignment.push(0)
     	   conditionAssignment.push(2)
	}
     }
     console.log(conditionAssignment); 
    

nounsAndVerbs = []

nounsAndVerbs.push(["critics recommended the best-selling novel has ever been proven."])
nounsAndVerbs.push(["diplomats supported the war has ever turned out to be false."])
nounsAndVerbs.push(["ambassadors consulted the diplomats has ever been acknowledged."])
nounsAndVerbs.push(["professors wanted any negativity in a class debate has ever been claimed."])
nounsAndVerbs.push(["customers expressed any optimism for a full refund has ever been reported in the newspaper."])
nounsAndVerbs.push(["comments caused any bitterness toward the media has ever been substantiated."])
nounsAndVerbs.push(["detergent caused damage to the delicate clothing has ever been debunked."])
nounsAndVerbs.push(["lawyers received criticism for a bad trial has ever been disputed. "])
nounsAndVerbs.push(["teacher punished the students for cheating has ever been proven true"])
nounsAndVerbs.push(["actors were hurt in the dangerous stunt has ever been proven to be bogus."])
nounsAndVerbs.push(["teacher sparked any inspiration in the students has ever concerned the parents."])
nounsAndVerbs.push(["librarians helped the students has ever made the rounds."])
nounsAndVerbs.push(["nurse showed patience in the operating room has ever been known outside the hospital."])
nounsAndVerbs.push(["employee was kind to the rude customers has ever been reported to the manager."])
nounsAndVerbs.push(["accountant saw a rise in the quarterly profits has ever been claimed."])
nounsAndVerbs.push(["suspect was nervous in the court room has ever been reported."])
nounsAndVerbs.push(["politician was trusted by the rural communities has ever caused concern."])
nounsAndVerbs.push(["medic rescued the victim has never caused outrage."])
nounsAndVerbs.push(["coach drafted the player has ever made him nervous."])
nounsAndVerbs.push(["student succeeded in the math class has ever been taken seriously by the principal."])


nounsAndVerbs = _.shuffle(nounsAndVerbs)

// can also make this a more balanced set
// but make sure it's the same number as the nouns+verbs
topNouns = []

topNouns.push("report")
topNouns.push("story")
topNouns.push("admission")
topNouns.push("declaration")
topNouns.push("disclosure")
topNouns.push("confirmation")
topNouns.push("remark")
topNouns.push("news")
topNouns.push("allegation")
topNouns.push("information")
//topNouns.push("evidence")
//topNouns.push("proof")
//topNouns.push("finding")
//topNouns.push("indication")



//topNouns.push("claim")
//topNouns.push("conclusion")
//topNouns.push("suggestion")
//topNouns.push("speculation")
//topNouns.push("suspicion")
topNouns.push("revelation")
topNouns.push("presumption")
topNouns.push("assurance")
topNouns.push("realization")
topNouns.push("assertion")
topNouns.push("assumption")
topNouns.push("inkling")
topNouns.push("belief")
topNouns.push("fact")
//


//123           report         10.235450        9.6436800        5.7071103 --------------------
//146            story         11.709249       10.6950537        7.2167095 --------------------
//3          admission          8.057377        6.5012897        3.5835189 ----------------------
//38       declaration          8.729397        7.1016760        4.9272537 ----------------------
//161       disclosure          7.122867        4.8362819        3.6375862 ------------------------
//31      confirmation          7.343426        5.3327188        4.0073332 ------------------------
//121           remark          8.114624        6.3297209        4.8362819 ----------------------------
//88              news         10.979837        9.4131996        7.9131552 ----------------------------
//4         allegation          9.034319        6.7900972        6.0354814 -------------------------------
//73       information         10.052080        8.0904023        7.1131421 --------------------------
//	52          evidence          9.568085        7.7497534        6.6982681 -------------------------
//107            proof          8.118505        7.1292975        5.2678582 ---------------------------
//59           finding          8.777710        7.6774004        6.0684256 -----------------------------
//71        indication          6.302619        4.5538769        3.7135721 -------------------------------

//27           concern          8.507345        6.3135480        5.9454206 --------------------------------
//122         reminder          5.517453        2.5649494        3.0445224 ----------------------------
//136            rumor          7.832014        6.0707377        5.4249500 -------------------------------
//7       announcement          9.387733        8.0133432        7.0942348 --------------------------------
//162          thought          8.602820        6.1590954        6.4085288 -----------------------------
//145        statement          9.136155        7.8148034        7.0012456 ------------------------------
//57           feeling          8.745762        6.0980743        6.7546041 ----------------------------------
//68              idea         11.519057       10.0081178        9.6440689 -------------------------------

//23             claim          9.891364        7.8200380        8.1356399 -------------------------------
//28        conclusion         10.319596        7.3492308        8.5883970 -------------------------------
//148       suggestion          8.925986        6.4922398        7.2320103 --------------------------------
//143      speculation          6.559615        4.9487599        4.9416424 ------------------------------
//149        suspicion          7.346655        4.9767337        5.8998974 -----------------------------------
//130       revelation          8.242493        6.4754327        6.8469431 --------------------------------------
//102      presumption          6.854355        4.7621739        5.7462032 ----------------------------------------
//13         assurance          6.530878        3.0445224        5.4510385 -----------------------------
//115      realization          8.120886        5.4930614        7.1436176 --------------------------------------
//10         assertion          7.488294        5.4205350        6.7190132 -----------------------------------
//12        assumption          8.961366        6.6707663        8.3848040 -----------------------------------
//74           inkling          1.945910        1.0986123        1.3862944 ----------------------------------------
//15            belief          9.418086        6.8638034        8.9621354 ---------------------------------------
//55              fact         11.771621        9.5173102       11.3993199 ---------------------------------------
//


	criticalStims = []

for(var w=0; w<20; w++) {
   processCritical(w , critical, conditionAssignment, w, topNouns[w], nounsAndVerbs[w])
}

   


addStimulus(fillers, "filler", "filler", "No geologist's premonition that evacuations would be necessary to avoid the volcano's lava flow was relayed to the island town."),
addStimulus(fillers, "filler", "filler", "No historian's conjecture that a consensus would emerge on how to ration food fairly was supported by historical data."),
addStimulus(fillers, "filler", "filler", "No conservationist's admission that an energy shortage would be caused by the new drilling technique was questioned by the committee."),
addStimulus(fillers, "filler", "filler", "No analyst's projection that an increased lending rate would stimulate the economy was communicated to the financial executives."),
addStimulus(fillers, "filler", "filler", "No environmentalist's conjecture that the local wildlife would be affected by the oil spill was discussed with the Coast Guard."),
addStimulus(fillers, "filler", "filler", "No geologist's premonition that evacuations would be necessary to avoid the volcano's lava flow was relayed to the island town."),
addStimulus(fillers, "filler", "filler", "No farmer's admission that food additives are necessary to preserve freshness was confirmed by the Food Safety Administration."),
addStimulus(fillers, "filler", "filler", "No conservationist's admission that an energy shortage would be caused by the new drilling technique was questioned by the committee."),
addStimulus(fillers, "filler", "filler", "No blogger's hunch that a main character from the hit show would die next season was given much consideration by the show's producers."),
addStimulus(fillers, "filler", "filler", "The mayor's argument that no local residents would experience noise from the airport was discussed in a city council meeting."),
addStimulus(fillers, "filler", "filler", "The professor's speculation that no practical counter-examples would turn up in the article was justified."),
addStimulus(fillers, "filler", "filler", "The accountant's speculation that no tax cuts would be made in the near future was quite troubling for many small businesses."),
addStimulus(fillers, "filler", "filler", "The astronomer's contention that no telescope would have enough power to capture the distant galaxy was debated at the national space conference."),
addStimulus(fillers, "filler", "filler", "The psychologist's opinion that no individual could succeed without a college education was mentioned in the university brochure."),
addStimulus(fillers, "filler", "filler", "The statistician's conclusion that no fish stocks in the U.S. would be overfished until 2012 was welcome in the small port town."),
addStimulus(fillers, "filler", "filler", "The senator's opinion that no farm subsidies could stimulate the economy was strongly disputed in the debate."),
addStimulus(fillers, "filler", "filler", "The programmer's opinion that no software would sell without attractive packaging was taken seriously by the retailers."),
addStimulus(fillers, "filler", "filler", "The nurse's hunch that no abnormalities would be found in the brain scan was debated by his supervisor."),
addStimulus(fillers, "filler", "filler", "The secretary's intuition that no emails would reach the employees during the system upgrade was revealed in his weekly meeting with the boss."),
addStimulus(fillers, "filler", "filler", "The beautician's statement that no other salon in town would give a better deal was quite reassuring for his clients."),
addStimulus(fillers, "filler", "filler", "The secretary's unsettlingly premonition that no raises would be given this year was mentioned to his coworkers during the lunch break."),
addStimulus(fillers, "filler", "filler", "The pilot's estimation that there would be no turbulence during the flight was communicated to her passengers."),
addStimulus(fillers, "filler", "filler", "The firefighter's hunch that no nearby buildings would be safe from the massive fire was communicated to her chief."),
addStimulus(fillers, "filler", "filler", "The electrician's estimation that no building on the block would need to be rewired was made clear to her boss."),
addStimulus(fillers, "filler", "filler", "The sailor's judgment that no ship would reach land before the storm was mentioned in the log that she kept daily."),
addStimulus(fillers, "filler", "filler", "The flight attendant that were aboard the intercontinental flight had no time to sleep before landing."),
addStimulus(fillers, "filler", "filler", "The papers that the students wants to write for the introductory course have no errors at all."),
addStimulus(fillers, "filler", "filler", "The boat that have took all of the international tourists out for the fishing expedition have new life jackets aboard."),
addStimulus(fillers, "filler", "filler", "The soccer players that could won the tournament were very upset with their coach."),
addStimulus(fillers, "filler", "filler", "The actors that plays in recent major films are paid millions of dollars for his talent."),
addStimulus(fillers, "filler", "filler", "The companies that needs young business often advertise in the magazines that many men enjoys reading."),
addStimulus(fillers, "filler", "filler", "The programmer that work for the largest computer server corporation have could many experience in customer service"),
addStimulus(fillers, "filler", "filler", "The students that has good grades often feel that they should had get into a good school."),
addStimulus(fillers, "filler", "filler", "The courses that no college student wanted to attend were often taught by inexperienced teaching assistants."),
addStimulus(fillers, "filler", "filler", "The minivans that no families wanted to purchase were redesigned to be more affordable and attractive."),
addStimulus(fillers, "filler", "filler", "The computer files that no employee could access were corrupted beyond recovery and had to be deleted."),
addStimulus(fillers, "filler", "filler", "The books that the elementary school board approved for class were ever banned from reading lists nationwide."),
addStimulus(fillers, "filler", "filler", "The items that no family member needed were sold at the neighborhood yard sale."),
addStimulus(fillers, "filler", "filler", "The exhibits that no tourist visited during summer vacation were advertised very poorly."),
addStimulus(fillers, "filler", "filler", "The rocky roads that no regular sedan could handle were quite easy to drive on in a large truck."),
addStimulus(fillers, "filler", "filler", "The horses that no jockey wanted to ride were sold to nearby farms and rented out to trainers."),
addStimulus(fillers, "filler", "filler", "The apartments that no family wanted to inhabit are rumored to be haunted by a mean ghost."),
addStimulus(fillers, "filler", "filler", "The secret documents that no spy could find were hidden in an underground vault."),
addStimulus(fillers, "filler", "filler", "The lectures that no students wanted to attend were often taught by very boring professors."),
addStimulus(fillers, "filler", "filler", "The flowers that no customer wanted to buy were donated to the nearby funeral home."),
addStimulus(fillers, "filler", "filler", "The rainforests that were the subject of much debate has been unders federal protection."),
addStimulus(fillers, "filler", "filler", "Most poets that are considered to be extremely famous has written  poems about current events. "),
addStimulus(fillers, "filler", "filler", "Most computers that the senior citizens are capable of using correctly have uses outdated technology."),
addStimulus(fillers, "filler", "filler", "Most parks that the forest rangers have patrolled vigilantly during the summer has had forest fires."),
addStimulus(fillers, "filler", "filler", "The nuclear physicists that were hired to work on the reactor are allowed to knows details about the plant's projects"),


     practice = [];
     addStimulus(practice, "filler", "filler", "This is a simple sentence to get you started.", null, null)
     addStimulus(practice, "filler", "filler", "Remember to keep your fingers on the e and i keys and provide an answer quickly.", null, null)
     addStimulus(practice, "filler", "filler", "The next sentence will start the experiment.", null, null)

function separatedShuffle(x, y) {
	indices_x = [...Array(x.length).keys()].map(function(x){ return ["x",x]})
	indices_y = [...Array(y.length).keys()].map(function(x){ return ["y",x]})
	if(indices_x.length <= indices_y.length+5) {
		CRASH()
	}
	console.log(indices_x);
	console.log(indices_y);
	result = indices_x.concat(indices_y);
	attempts_order = 0;
	console.log("SHUFFLING");
	result = _.shuffle(result);
	for(i=0; i+1<result.length; i++) {
		if(result[i][0] == "y" && result[i+1][0] == "y") {
			candidate_positions = [];
	                for(j=0; j+2<result.length; j++) {
                           if(result[j][0] == "x" && result[j+1][0] == "x" && result[j+2][0] == "x") {
				   candidate_positions.push(j+1);
			   }
			}
			console.log(i, "CANDIDATES", candidate_positions);
			SELECTED_NEW_POSITION = _.sample(candidate_positions, 1)[0];
			X = result[i];
			Y = result[SELECTED_NEW_POSITION]
			result[SELECTED_NEW_POSITION] = X;
			result[i] = Y;
		}
	}
	for(i=0; i+1<result.length; i++) {
		if(result[i][0] == "y" && result[i+1][0] == "y") {
			console.log("THIS SHOULD NOT HAPPEN", i);
		}
	}
	result_ = []
	for(i = 0; i<result.length; i++) {
		if(result[i][0] == "x") {
			result_.push(x[result[i][1]]);
		} else {
			result_.push(y[result[i][1]]);
		}
	}
	return result_;
}

     fillersAndCritical = separatedShuffle(fillers, critical);

     fullStimuli = (practice).concat(fillersAndCritical);
console.log(fillers.length, critical.length);
console.log(fillersAndCritical.length);
     console.log( fullStimuli);
     return fullStimuli;
     
}

