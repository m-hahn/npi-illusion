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
	n1 = remainder[0];
	n2 = remainder[1];
	v3 = remainder[2];
	v4 = remainder[3];
	v5 = remainder[4];
        question = remainder[5];
	question = question.replace("XXXX", noun);
	console.log(question);
	answer = remainder[6];
	condition = conditionAssignment[itemOrder];
	sentence = "The "+noun+" that "+n1+" who "+n2
	if(condition == 0) {
		sentence= sentence + " " + v3 + " " + v4 + " " + v5 + "."
	} else if (condition == 2) {
		sentence= sentence + " " + v3 + " " + v5 + "."
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
nounsAndVerbs.push(["the school principal",       "the teacher",        "had an affair with",                     "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.push(["the famous sculptor",        "the painter",        "admired more than anyone",            "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.push(["the marketing whiz",  "the artist",         "had hired",                  "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.push(["the marathon runner",         "the psychiatrist",       "treated for his illness",                "was actually doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.push(["the frightened child",           "the medic",          "rescued from the flood",    "was completely unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.push(["the alleged criminal",        "the officer",        "arrested after the murder",                  "was not in fact guilty",             "was entirely bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.push(["the college student",         "the professor",      "accused of cheating",                     "was dropping the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.push(["the suspected mobster",         "the media",          "portrayed in detail",               "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.push(["the leading man", 	         "the starlet",        "fell in love with",                    "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.push(["the old preacher",        "the parishioners",   "fired yesterday",                     "stole money from the church",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.push(["the young violinist",      "the sponsors",       "backed financially",                    "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.push(["the conservative senator",        "the diplomat",       "opposed in the election",                   "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs.push(["the military commander",        "the president",       "appointed last month",   "was pushing for war",         "troubled people", "Did the XXXX trouble people?", "Y"])
nounsAndVerbs.push(["the injured victims",        "the criminal",       "had assaulted",   "were going to survive",         "calmed everyone down", "Did the XXXX calm everyone down?", "Y"])
nounsAndVerbs.push(["the savvy politician",        "the banker",       "gave thousands of dollars",   "was laundering money",         "came as a shock to his supporters", "Did the XXXX come as a shock?", "Y"])
nounsAndVerbs.push(["the famous surgeon",        "the patient",       "accused of malpractice",   "had a fake degree",         "was not a surprise", "Was the XXXX unsurprising?", "Y"])
nounsAndVerbs.push(["the violent extremist",        "the agent",       "had just tracked down",                   "was going to get an award",         "was disconcerting", "Was the XXXX disconcerting?", "Y"])
nounsAndVerbs.push(["the office clerk",        "the customer",       "called on the phone",   "was a super hero",         "seemed absurd", "Did the XXXX seem absurd?", "Y"])
nounsAndVerbs.push(["the shady trader",        "the businessman",       "consulted for advice",   "acted on insider information",         "was confirmed", "Was the XXXX confirmed?", "Y"])
nounsAndVerbs.push(["the successful CEO",        "the employee",       "impressed with his enthusiam",   "wanted to retire",         "was entirely correct", "Was the XXXX correct?", "Y"])
nounsAndVerbs.push(["the taxi driver", "the tourist", "asked for directions", "was lying", "seemed hard to believe", "", "Y"])
nounsAndVerbs.push(["the angry bookseller", "the thief", "stole ten books from", "got a heart attack", "shocked his family", "", "Y"])
nounsAndVerbs.push(["the odd neighbor", "the woman", "shouted at yesterday", "killed her dog", "was a lie", "", "Y"])
nounsAndVerbs.push(["the mad scientist", "the mayor", "trusted with everything", "had faked data", "was only a malicious smear", "", "Y"])
nounsAndVerbs.push(["the ambitious student", "the bully", "beat up every day", "plagiarized his homework",  "devastated his parents", "", "Y"])
nounsAndVerbs.push(["the cunning trickster", "the woman", "recognized in the store", "was finally caught", "calmed people down", "", "Y"])
nounsAndVerbs.push(["the aspiring entrepreneur", "the philanthropist", "lent millions", "wasted everything on a yacht", "came as a disappointment", "", "Y"])
nounsAndVerbs.push(["the courageous lifesaver", "the swimmer", "called in desperation", "saved the drowning children", "impressed the whole city", "", "Y"])


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
topNouns.push("evidence")
topNouns.push("proof")
topNouns.push("finding")
topNouns.push("indication")



topNouns.push("claim")
topNouns.push("conclusion")
topNouns.push("suggestion")
topNouns.push("speculation")
topNouns.push("suspicion")
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

for(var w=0; w<28; w++) {
   processCritical(w , critical, conditionAssignment, w, topNouns[w], nounsAndVerbs[w])
}

     
     addStimulus(fillers, "filler", "filler", "Since when it storm, the grass gets wet.", "Will the garden be cut?", "N")
     addStimulus(fillers, "filler", "filler", "The lecturer spoke to the man in the classroom wearing a blue suit which had good seating and blackboards.", "Was the man wearing a blue suit?", "Y") // Extraposition
     addStimulus(fillers, "filler", "filler", "The librarian delivered the books which horses depicted.", "Did the librarian deliver the books?", "Y") // Extraposition
     addStimulus(fillers, "filler", "filler", "The astronaut flew the spaceship with two tanks to the moon which were filled with fuel.", "Did the spaceship have three tanks?", "N") // Extraposition
     addStimulus(fillers, "filler", "filler", "The delivery man left the package with two labels on the porch which were printed with an address.", "Was the package left in the mailbox?", "N") // Extraposition
     addStimulus(fillers, "filler", "filler", "Jonathan will buy the red sports car as soon as he returns from his vacation in the Caribbean.", "Was Jonathan vacationing in the Caribbean?", "Y")
     addStimulus(fillers, "filler", "filler", "The soccer team easily defeated their opponents with an impressive show of speed, cleverness and tenacity.", "Did the soccer team defeat their opponents?", "Y")
     addStimulus(fillers, "filler", "filler", "When my father lived in Australia, he would often go surfing along the coastal waters of Melbourne.", "Did my father surf?", "Y")
     addStimulus(fillers, "filler", "filler", "The police officer will guard the crosswalk as the children pass by on the way to elementary school.", "Will the police officer guard the crosswalk?", "Y")
     addStimulus(fillers, "filler", "filler", "The board of directors announced that the business acquisition strategy was proceeding as planned.", "Did the board of directors make an announcement?", "Y")
     addStimulus(fillers, "filler", "filler", "In 1945, Germany and Japan surrendered to the Allied forces, ending one of the bloodiest conflicts in history.", "Did Japan surrender to Germany?", "N")
     addStimulus(fillers, "filler", "filler", "Harvard University recently purchased a large tract of land to be used as a new boathouse for the rowing team.", "Did Stanford University purchase land?", "N")
     addStimulus(fillers, "filler", "filler", "Maple trees is nothing pines Norwegian evergreen.", "Are maple and Norwegian pine trees classified similarly?", "N")
     addStimulus(fillers, "filler", "filler", "The two children walked slowly in front of their mother as they gradually approached the playground.", "Did the children run in front of their mother?", "N")
     addStimulus(fillers, "filler", "filler", "The city of San Francisco is considered an expensive place to live, as rental rates routinely approach thousands of dollars.", "Is San Francisco considered an inexpensive place to live?", "N")
     addStimulus(fillers, "filler", "filler", "The team decided that the strategy that the visitors from Arkansas that were known to be troublemakers had used to win the tournament was a form of cheating.", "Were the visitors from Arkansas known to be troublemakers?", "Y")
     addStimulus(fillers, "filler", "filler", "The man that drove the car that had the paint job that was peeling ran into a pedestrian.", "Did the man run into a pedestrian?", "Y")
     addStimulus(fillers, "filler", "filler", "When the boat reached the shore Philip tried to start the engine and escape from the soldiers.", "Did Philip try to escape from the soldiers?", "Y")
     addStimulus(fillers, "filler", "filler", "Because if when after besides since the baby is crying, the mother gets upset.", "Will the father help?", "Y")
     addStimulus(fillers, "filler", "filler", "The professor said that the student that the committee that was visiting picked would present at the conference.", null, null)
     addStimulus(fillers, "filler", "filler", "The student petitioned the instructor about the college who was writing a thesis on Philosophy.", null, null)
     addStimulus(fillers, "filler", "filler", "The parent called the teacher about the class who was being giving bad grades to foreign students.", "Were foreign students given good grades?", "N")
     addStimulus(fillers, "filler", "filler", "The neighbor approached the owner about the dog who was building a doghouse over the property line.", null, null)
     addStimulus(fillers, "filler", "filler", "The policeman questioned the driver about the bus who was directing tourists to the restricted ruins.", null, null)
     addStimulus(fillers, "filler", "filler", "The chairman consulted the executive about the company who was playing golf at the country club.", null, null)
     addStimulus(fillers, "filler", "filler", "The reporter approached the victim about the attack who was injured by the suicide bomber.", null, null)
     addStimulus(fillers, "filler", "filler", "The principal questioned the member about the clique who was mouthing off to teachers.", null, null)
     addStimulus(fillers, "filler", "filler", "The homeowner consulted the architect about the house who was worried about being behind schedule.", null, null)
     addStimulus(fillers, "filler", "filler", "The sportscaster interviewed by the captain about the team who were leading his team to the championship.", null, null)
     addStimulus(fillers, "filler", "filler", "The colonel cautioned the commander about the platoon who was ordering the troops to continue fighting.", null, null)
     addStimulus(fillers, "filler", "filler", "The book that no critic liked found any fans.", null, null)

     addStimulus(fillers, "filler", "filler", "Ron gave the letter to Nancy to the postman.", null, null) // (Gibson 1991)
     addStimulus(fillers, "filler", "filler", "The cook placed the cake in the oven onto the table.", null, null) // (Gibson 1991)

     // Obviously bad/weird
     addStimulus(fillers, "filler", "filler", "Pat and Kim walks together in the park every Thursday afternoon.", null, null)
     addStimulus(fillers, "filler", "filler", "The child ate a bowl of international trade for breakfast.", null, null)
     addStimulus(fillers, "filler", "filler", "The book read the little girl.", null, null)
     addStimulus(fillers, "filler", "filler", "The cook baked a cake Lucy.", null, null)
     addStimulus(fillers, "filler", "filler", "Onto the cat jumped a table as Mary entered the room.", "Did Mary enter the room?", "Y")
     addStimulus(fillers, "filler", "filler", "The guest ate a giant spoon with the broccoli.", "Did the guest use a fork?", "N")
     addStimulus(fillers, "filler", "filler", "The rebels who were the jungle were captured the diplomat after they threatened his family.", null, null)
     addStimulus(fillers, "filler", "filler", "The company was sure that its new product, which its researchers had developed, would soon be sold out.", null, null)
     addStimulus(fillers, "filler", "filler", "The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate.", null, null)
     addStimulus(fillers, "filler", "filler", "The hippies who the police at the concert arrested complained to the officials while the last act was going on stage.", null, null)
     addStimulus(fillers, "filler", "filler", "The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape.", null, null)
//     addStimulus(fillers, "filler", "filler", "The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet.", null, null)
//     addStimulus(fillers, "filler", "filler", "The audience who was at the club booed the singer before the owner of the bar could remove him from the stage.", null, null)

//"The book, John had read it from front to back in a single day."

     // Other
     //addStimulus(fillers, "filler", "filler", "Talent John has, money he has not."

//"In went Mr X"
//
//"It was with enormous pleasure that the judge announced the verdict."
//
//'Only after dinner did I make up my mind to go there' 

     addStimulus(fillers, "filler", "filler", "The dog walked to the park was chasing the squirrel.", "Was the dog chasing the squirrel?", "Y") //(Gibson 1991)
     addStimulus(fillers, "filler", "filler", "John gave the boy the dog bit a dollar.", "Did the boy bite John?", "N") // (Gibson 1991)
     addStimulus(fillers, "filler", "filler", "The coach smiled at the player tossed a frisbee.", "Was the coach smiling?", "Y") 
     addStimulus(fillers, "filler", "filler", "Because he always jogs a mile seems a short distance to him.", null, null)

     addStimulus(fillers, "filler", "filler", "Because if Steven checks the mail, he doesn't wear his robe, Steven's neighbors complain.", "Does Steven complain?", "N") //(Gibson 1991)

     addStimulus(fillers, "filler", "filler", "Yesterday, a patient complained who had missed his noon appointment so the doctor agreed to see him early tomorrow.", null, null)
     addStimulus(fillers, "filler", "filler", "This morning, a manager stayed who is rarely in the office so the employees were very well behaved.", null, null)
     addStimulus(fillers, "filler", "filler", "The reporter interviewed the actors about the movie.", "Did the reporter interview the actors?", "Y")
     addStimulus(fillers, "filler", "filler", "The student petitioned the professors regarding the course.", null, null)
     addStimulus(fillers, "filler", "filler", "The agent approached the publicists about the photo-shoot.", null, null)
     addStimulus(fillers, "filler", "filler", "The socialite praised the hostesses for the party which was held yesterday in a luxurious ballroom.", "Was the party held in a ballroom?", "Y")
     addStimulus(fillers, "filler", "filler", "The publisher complimented the editors on the magazine.", null, null)
     addStimulus(fillers, "filler", "filler", "The counselor consoled the students about the competition.", null, null)
addStimulus(fillers, "filler", "filler", "The locksmith can crack the safe easily.", null, null)
addStimulus(fillers, "filler", "filler", "Dinosaurs ate other reptiles during the stone age.", null, null)
addStimulus(fillers, "filler", "filler", "The private tutor explained the assignment carefully.", null, null)
addStimulus(fillers, "filler", "filler", "The showman travels to different cities every month.", "Does the showman stay in the same city throughout the year?", "N")
addStimulus(fillers, "filler", "filler", "The photographer processed the film on time.", "Did the photographer process the film?", "Y")
addStimulus(fillers, "filler", "filler", "The office-worker worked through the stack of files on his desk quickly, which had been piling up for weeks.", null, null)
addStimulus(fillers, "filler", "filler", "The teacher doubted that the test that had taken him a long time to design would be easy to answer, but the students proved him wrong.", "Was the test easy to answer?", "Y")
addStimulus(fillers, "filler", "filler", "The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient.", "Was the new plan convenient?", "N")
addStimulus(fillers, "filler", "filler", "The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider.", "Did the dog scare the spider?", "N")
addStimulus(fillers, "filler", "filler", "The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room.", null, null)
addStimulus(fillers, "filler", "filler", "The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints.", null, null)
addStimulus(fillers, "filler", "filler", "The driver who arrested by the police were run a light because.", "Did the police let the driver go?", "N")
addStimulus(fillers, "filler", "filler", "The casino hired the daredevil because he was confident that everything would go according to plan.", "Did the casino hire the daredevil?", "Y")
addStimulus(fillers, "filler", "filler", "The janitor who knew the was guilty doorman.", null, null)
addStimulus(fillers, "filler", "filler", "The firemen at the scene were apprehended the arsonist because there was a great deal of evidence pointing to his guilt.", "Did the fireman consider the arsonist innocent?", "N")
addStimulus(fillers, "filler", "filler", "The gangster implicated the waitress because the police suspected he had murdered the shopkeeper.", null, null)
addStimulus(fillers, "filler", "filler", "The manager because he have instituted a new dress code for all employees.", "Was there a new dress code?", "Y")
addStimulus(fillers, "filler", "filler", "The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater.", null, null)
addStimulus(fillers, "filler", "filler", "The trainee knew director the task had set for him was impossible within to finish a week.", "Was it possible to finish the task within a week?", "N")
addStimulus(fillers, "filler", "filler", "The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room.", null, null)
addStimulus(fillers, "filler", "filler", "The surgeon who John asked why was famous had no clue.", "Did someone question the coroner?", "Y")
addStimulus(fillers, "filler", "filler", "The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home.", "Did the demonstrators support the environmentalist?", "Y")
addStimulus(fillers, "filler", "filler", "Mary asked which astronaut who the journalists worshipped.", "Was there a potential leak in the tank?", "Y")
addStimulus(fillers, "filler", "filler", "The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help.", "Did the philosopher baffle the mathematician?", "N")



     practice = [];
     addStimulus(practice, "filler", "filler", "This is a simple sentence to get you started.", null, null)
     addStimulus(practice, "filler", "filler", "This sense no sense makes and is unacceptable.", null, null)
     addStimulus(practice, "filler", "filler", "Remember to keep your fingers on the e and i keys and provide an answer quickly.", null, null)
     addStimulus(practice, "filler", "filler", "The next sentence will start the experiment.", null, null)
     addStimulus(practice, "filler", "filler", "The semester will start next week, but the students and teachers are not ready.", null, null)
     addStimulus(practice, "filler", "filler", "The mother of the prisoner sent him packages that contained cookies and novels.", null, null)
     addStimulus(practice, "filler", "filler", "The reporter had dinner yesterday with the baseball player who Kevin.", null, null)
     addStimulus(practice, "filler", "filler", "The therapist set up a meeting with the upset woman and her husband yesterday.", null, null)

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

