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

nouns = [];
critical = []
for(i = 0; i<20; i++) {
	critical[i] = []
        nouns.push(i);
}
nouns = _.shuffle(nouns);

critical[0].push({s: "The "+topNouns[nouns[0]]+" that the principal who the teacher liked was fired was quoted in the newspaper.", a:"x-x-x imposes soul ago involving glad holy instead chest cent medal lake brooks let camp involving."})
critical[0].push({s: "The "+topNouns[nouns[0]]+" that the principal who the teacher liked was quoted in the newspaper.", a:"x-x-x imposes soul ago involving glad holy instead chest lake brooks let camp involving."})
critical[1].push({s: "The "+topNouns[nouns[1]]+" that the sculptor who the painter admired wasn't talented was completely untrue.", a:"x-x-x compiles join map competed okay wide extends grilled strong threaten mid commission toured."})
critical[1].push({s: "The "+topNouns[nouns[1]]+" that the sculptor who the painter admired was completely untrue.", a:"x-x-x compiles join map competed okay wide extends grilled mid commission toured."})
critical[2].push({s: "The "+topNouns[nouns[2]]+" that the consultant who the artist hired was a fraud shocked everyone.", a:"x-x-x unlocks boy okay irrelevant us eye asleep smell east bill mills tourist consider."})
critical[2].push({s: "The "+topNouns[nouns[2]]+" that the consultant who the artist hired shocked everyone.", a:"x-x-x unlocks boy okay irrelevant us eye asleep smell tourist consider."})
critical[3].push({s: "The "+topNouns[nouns[3]]+" that the runner who the psychiatrist treated was doping was ridiculous.", a:"x-x-x narrates pro buy detect holy lord enthusiastic ongoing sun bidder cent exhibition."})
critical[3].push({s: "The "+topNouns[nouns[3]]+" that the runner who the psychiatrist treated was ridiculous.", a:"x-x-x narrates pro buy detect holy lord enthusiastic ongoing cent exhibition."})
critical[4].push({s: "The "+topNouns[nouns[4]]+" that the child who the medic rescued was unharmed relieved everyone.", a:"x-x-x symbolizes wish what there trip hot vases fascist link tortoise tracking involved."})
critical[4].push({s: "The "+topNouns[nouns[4]]+" that the child who the medic rescued relieved everyone.", a:"x-x-x symbolizes wish what there trip hot vases fascist tracking involved."})
critical[5].push({s: "The "+topNouns[nouns[5]]+" that the criminal who the officer arrested was guilty was entirely bogus.", a:"x-x-x violates ice him together foot map however identity data vision mean universe maids."})
critical[5].push({s: "The "+topNouns[nouns[5]]+" that the criminal who the officer arrested was entirely bogus.", a:"x-x-x violates ice him together foot map however identity mean universe maids."})
critical[6].push({s: "The "+topNouns[nouns[6]]+" that the student who the professor hated dropped out made the professor happy.", a:"x-x-x protects sea mom towards me true including brush license ass pick ass everybody gonna."})
critical[6].push({s: "The "+topNouns[nouns[6]]+" that the student who the professor hated made the professor happy.", a:"x-x-x protects sea mom towards me true including brush pick ass everybody gonna."})
critical[7].push({s: "The "+topNouns[nouns[7]]+" that the mobster who the media portrayed had disappeared turned out to be true.", a:"x-x-x realizes slow hear agrees oh cent which footsteps trip importantly summer week cup sick rate."})
critical[7].push({s: "The "+topNouns[nouns[7]]+" that the mobster who the media portrayed turned out to be true.", a:"x-x-x realizes slow hear agrees oh cent which footsteps summer week cup sick rate."})
critical[8].push({s: "The "+topNouns[nouns[8]]+" that the actor who the starlet loved was missing made her cry.", a:"x-x-x commemorates wild ass forth holy wide retains miles note comment walk mid gear."})
critical[8].push({s: "The "+topNouns[nouns[8]]+" that the actor who the starlet loved made her cry.", a:"x-x-x commemorates wild ass forth holy wide retains miles walk mid gear."})
critical[9].push({s: "The "+topNouns[nouns[9]]+" that the preacher who the parishioners fired stole money proved to be true.", a:"x-x-x assumes vote hear donating yeah jobs mysteriously medal float click desert wall wife am."})
critical[9].push({s: "The "+topNouns[nouns[9]]+" that the preacher who the parishioners fired proved to be true.", a:"x-x-x assumes vote hear donating yeah jobs mysteriously medal desert wall wife am."})
critical[10].push({s: "The "+topNouns[nouns[10]]+" that the violinist who the sponsors backed abused drugs is likely true.", a:"x-x-x reappears slow hear isolating dad port hurries victor phases brain sir finish year."})
critical[10].push({s: "The "+topNouns[nouns[10]]+" that the violinist who the sponsors backed is likely true.", a:"x-x-x reappears slow hear isolating dad port hurries victor sir finish year."})
critical[11].push({s: "The "+topNouns[nouns[11]]+" that the senator who the diplomat opposed was winning really made him angry.", a:"x-x-x endorses air me confirm ass ways rewarded masters bus century happen web wall drama."})
critical[11].push({s: "The "+topNouns[nouns[11]]+" that the senator who the diplomat opposed really made him angry.", a:"x-x-x endorses air me confirm ass ways rewarded masters happen web wall drama."})
critical[12].push({s: "The "+topNouns[nouns[12]]+" that the commander who the president appointed was corrupt troubled people.", a:"x-x-x stimulates tax apt wondering hall tree therefore emergency idea tourism organic listen."})
critical[12].push({s: "The "+topNouns[nouns[12]]+" that the commander who the president appointed troubled people.", a:"x-x-x stimulates tax apt wondering hall tree therefore emergency organic listen."})
critical[13].push({s: "The "+topNouns[nouns[13]]+" that the victims who the criminal assaulted were surviving calmed everyone down.", a:"x-x-x derives yeah wow connect lake mid continue accessing sort animation duplex standing ha."})
critical[13].push({s: "The "+topNouns[nouns[13]]+" that the victims who the criminal assaulted calmed everyone down.", a:"x-x-x derives yeah wow connect lake mid continue accessing duplex standing ha."})
critical[14].push({s: "The "+topNouns[nouns[14]]+" that the politician who the banker bribed laundered money came as a shock to his supporters.", a:"x-x-x avoids ice eyes emphasized fine but bamboo nieces catalysis stuff yeah camp eat meets eyes born vegetables."})
critical[14].push({s: "The "+topNouns[nouns[14]]+" that the politician who the banker bribed came as a shock to his supporters.", a:"x-x-x avoids ice eyes emphasized fine but bamboo nieces yeah camp eat meets eyes born vegetables."})
critical[15].push({s: "The "+topNouns[nouns[15]]+" that the surgeon who the patient thanked had no degree was not a surprise.", a:"x-x-x instructs food lot extends hot lake selling leaking fear vote remain ball walk sun sections."})
critical[15].push({s: "The "+topNouns[nouns[15]]+" that the surgeon who the patient thanked was not a surprise.", a:"x-x-x instructs food lot extends hot lake selling leaking ball walk sun sections."})
critical[16].push({s: "The "+topNouns[nouns[16]]+" that the extremist who the agent caught got an award was disconcerting.", a:"x-x-x approximates fire hear interpret sick okay apply battle mid kids throw wind psychoanalyst."})
critical[16].push({s: "The "+topNouns[nouns[16]]+" that the extremist who the agent caught was disconcerting.", a:"x-x-x approximates fire hear interpret sick okay apply battle wind psychoanalyst."})
critical[17].push({s: "The "+topNouns[nouns[17]]+" that the clerk who the customer called was a hero seemed absurd.", a:"x-x-x berates old see acres wind old reaching forget anti win rid levels circus."})
critical[17].push({s: "The "+topNouns[nouns[17]]+" that the clerk who the customer called seemed absurd.", a:"x-x-x berates old see acres wind old reaching forget levels circus."})
critical[18].push({s: "The "+topNouns[nouns[18]]+" that the trader who the businessman consulted had insider information was confirmed.", a:"x-x-x specializes sad hear pushes laws yeah constraints patiently wall cyclone competitive anti afternoon."})
critical[18].push({s: "The "+topNouns[nouns[18]]+" that the trader who the businessman consulted was confirmed.", a:"x-x-x specializes sad hear pushes laws yeah constraints patiently anti afternoon."})
critical[19].push({s: "The "+topNouns[nouns[19]]+" that the CEO who the employee impressed was retiring was entirely correct.", a:"x-x-x befriends lord oh Ms ways okay annoying ancestors okay scissors send agencies command."})
critical[19].push({s: "The "+topNouns[nouns[19]]+" that the CEO who the employee impressed was entirely correct.", a:"x-x-x befriends lord oh Ms ways okay annoying ancestors send agencies command."})



criticalChosen = []
	for(i = 0; i<20; i++) {
//		if(conditionAssignment[nouns[i]] == 0) {
			criticalChosen.push(critical[i][0])
                        critical[i][0].noun = topNouns[nouns[i]];
                        critical[i][0].item = "Critical_"+i
                        critical[i][0].condition = "grammatical"
//		} else {
//			criticalChosen.push(critical[i][1])
//                        critical[i][1].noun = topNouns[nouns[i]];
//                        critical[i][1].item = "Critical_"+i
//                        critical[i][1].condition = "ungrammatical"
//		}
	}

fillers = []
fillers.push({s:"The divorcee has come to love her life ever since she got divorced.", a:"x-x-x nearly else bed took fell lord cup air stand base web keyboard."}) 
fillers.push({s:"The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help.", a:"x-x-x rebelling trip lot corpses audible kept inspections appeared card branch moving happen polish oh."}) 
fillers.push({s:"The showman travels to different cities every month.", a:"x-x-x citing terrain hall certainly listen write rates."}) 
fillers.push({s:"The roommate takes out the garbage every week.", a:"x-x-x attest doubt sold lose enables worst anti."}) 
fillers.push({s:"The dragon wounded the knight although he was far too crippled to protect the princess.", a:"x-x-x endorses funding plan borrow question walk tree pop key teammate stay society map indicate."}) 
fillers.push({s:"The office-worker worked through the stack of files on his desk quickly.", a:"x-x-x appreciating forget arrived lady prone wife treat fall born rain western."}) 
fillers.push({s:"The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt.", a:"x-x-x originate war sure among outsourcing cent deviance anymore mouth fun us enter laws yes produced observer plus bill weigh."}) 
fillers.push({s:"During the season, the choir holds rehearsals in the church regularly.", a:"x-x-x nice called, us haunt anger prophecies laws thus issues customers."}) 
fillers.push({s:"The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room.", a:"x-x-x criticises holy sad activated fraction upside mom files cases lot know port lord holy products port van guy how."}) 
fillers.push({s:"The milkman punctually delivers the milk at the door every day.", a:"x-x-x obstruct clerestory lesbians lose quit ass nor took weird join."}) 
fillers.push({s:"The quarterback dated the cheerleader although this hurt her reputation around school.", a:"x-x-x empties fairy sit propagation violence tell east lake represents access placed."}) 
fillers.push({s:"The citizens of France eat oysters.", a:"x-x-x allege anti Amount girl lattice."}) 
fillers.push({s:"The bully punched the kid after all the kids had to leave to go to class.", a:"x-x-x arousing rituals eat what birth felt ha ha sun lake forms link jack size feels."}) 
fillers.push({s:"After the argument, the husband ignored his wife.", a:"x-x-x plus suggests, cent without harmony seen here."}) 
fillers.push({s:"The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints.", a:"x-x-x succumbing oh ha defend feet mine ones ha shouting rescind ounces sort including ass happen infantry laws far protecting."}) 
fillers.push({s:"The librarian put the book onto the shelf.", a:"x-x-x impede east grow this wave grow bacon."}) 
fillers.push({s:"The photographer processed the film on time.", a:"x-x-x prematurely eliminate ago yes non nor."}) 
fillers.push({s:"The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider.", a:"x-x-x enclosing sad cent been hell pro say jack earn resource expert file gets ended list per decide lady anti imagine quotes."}) 
fillers.push({s:"The sportsman goes jogging in the park regularly.", a:"x-x-x incurring hear outback hope fell been processes."}) 
fillers.push({s:"The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient.", a:"x-x-x equates okay yeah bill sun maybe desperate wish wondered married link an unfortunately chronic miss yes residence inscriptions."}) 
fillers.push({s:"The private tutor explained the assignment carefully.", a:"x-x-x reproduce bumps amendment lot kilometers centuries."}) 
fillers.push({s:"The audience who was at the club booed the singer before the owner of the bar could remove him from the stage.", a:"x-x-x solidly anti mid sir why me levee glad argued larger rich lying east done yes worse allows term file rose there."}) 
fillers.push({s:"The defender is constantly scolding the keeper.", a:"x-x-x disembark sick definition dilation yeah albeit."}) 
fillers.push({s:"The hippies who the police at the concert arrested complained to the officials while the last act was going on stage.", a:"x-x-x possesses sale room anyone oh fit writers resource completion kill cup discussed worst damn yes grow sick worry sir older."}) 
fillers.push({s:"The natives on the island captured the anthropologist because she had information that could help the tribe.", a:"x-x-x emanating fat else forget managers plan misconceptions release pick away combination die gonna damn gets shake."}) 
fillers.push({s:"The trainee knew that the task which the director had set for him was impossible to finish within a week.", a:"x-x-x recursively easy jack eat earn prime note together wind word lose anti girl commission gun served degree cup thus."}) 
fillers.push({s:"The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room.", a:"x-x-x unmask hell fact forth none anti scales detectives pungent nice smoky match lake islands boys imagine view luck recommend able."}) 
fillers.push({s:"The company was sure that its new product, which its researchers had developed, would soon be sold out.", a:"x-x-x closely mind dad sir cent nor another, throw drug accompanied eyes everybody, south page ha trip whom."}) 
fillers.push({s:"The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank.", a:"x-x-x supervises oh oh necessarily bed sure size yeah hungry vigorously calculated died reinforcements gotta rose electrical kept countries dean pain told laid cat."}) 
fillers.push({s:"The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it.", a:"x-x-x conclude fat us intakes east ones miss ha today bedding mid tendency vote woods oh law however healthy rest kid wide road lake jack."}) 
fillers.push({s:"The technician at the show repaired the robot while people were taking a break for coffee.", a:"x-x-x devoting hate been guys comrades cup sells sweet stupid sale policy met today sale cannot."}) 
fillers.push({s:"The salesman feared that the printer which the customer bought was damaged.", a:"x-x-x dosing robust walk bar knocked weeks mid sciences impact map premier."}) 
fillers.push({s:"The students studied the surgeon whenever he performed an important operation.", a:"x-x-x reused summary stay advised indicate file something cent president companies."}) 
fillers.push({s:"The locksmith can crack the safe easily.", a:"x-x-x exert okay firms met took agreed."}) 
fillers.push({s:"The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet.", a:"x-x-x seeking cool sea hear ass basically plain lie jerseys reached eyes came mom sit football bell cent enters."}) 
fillers.push({s:"Yesterday the swimmer saw only a turtle at the beach.", a:"x-x-x nice hurdles ways fund web intake anti sold china."}) 
fillers.push({s:"The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain.", a:"x-x-x responding way web belonging bad girl ways soul hope databases profitable soul bullion playing hour explores ball won fun hope statement town windows."}) 
fillers.push({s:"The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper.", a:"x-x-x rejoining lack how arbitrary far came held economic contracted park realizes animals read except religions bed case displays size furthering."}) 
fillers.push({s:"During the party everybody was dancing to rock music.", a:"x-x-x buy comes otherwise few monster pay ago agree."}) 
fillers.push({s:"The fans at the concert loved the guitarist because he played with so much energy.", a:"x-x-x besting holy via citizen older seat cooperate limited keep cancer sit does mass months."}) 
fillers.push({s:"The intern comforted the patient because he was in great pain.", a:"x-x-x predate receptive wind noticed percent kid move park basis win."}) 
fillers.push({s:"The casino hired the daredevil because he was confident that everything would go according to plan.", a:"x-x-x commences sword yes universes protect does her describes add understand china six authority ways down."}) 
fillers.push({s:"The beggar is often scrounging for cigarettes.", a:"x-x-x officially mid feels concourses fan agreements."}) 
fillers.push({s:"The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate.", a:"x-x-x diversifying heat god whoever communist legalized jack den perfect keep account oh affiliates feet learn description."}) 
fillers.push({s:"The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape.", a:"x-x-x certainly luck fine aimed suitable teaming mind invent congress mom grow boy describes pick author walk poetry."}) 
fillers.push({s:"The passer-by threw the cardboard box into the trash-can with great force.", a:"x-x-x succumbs quiet draw equitable his lord wish quarterly born agree agree."}) 
fillers.push({s:"The biker who the police arrested ran a light since he was driving under the influence of alcohol.", a:"x-x-x rehabilitate risk glad except breaking pain goal exist reach till loss opinion rules nor presented find discuss."}) 
fillers.push({s:"The scientists who were in the lab studied the alien while the blood sample was run through the computer.", a:"x-x-x evict holy yes add goes bob monster son lacks wanna lie agree update wish ha reality note everyone."}) 
fillers.push({s:"The student quickly finished his homework assignments.", a:"x-x-x putting healthy southern wife airports magistrates."}) 
fillers.push({s:"The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home.", a:"x-x-x angering yeah sad perpendicular bed lot valve marketing spills best laugh spend contract me sure mom function hair."}) 
fillers.push({s:"The producer shoots a new movie every year.", a:"x-x-x shortly pierce page anti enjoy peace mom."}) 
fillers.push({s:"The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands.", a:"x-x-x memorably girl body soul girl visits memories card nuisance feels guys scientists says able move please pain ball nostalgic sir learn drivers."}) 
fillers.push({s:"Dinosaurs ate other reptiles during the stone age.", a:"x-x-x earl write exporter minute guys wants dad."}) 
fillers.push({s:"The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees.", a:"x-x-x contemplates anti map walks tenuous voted ass goal anti devoid skip weekend star mind veterinary lose dad sides want rose knew indicates."}) 
fillers.push({s:"The teacher doubted that the test that had taken him a long time to design would be easy to answer.", a:"x-x-x totalling grinder star feet them your miss miles song anti oh her ha posted enjoy door fund foot county."}) 
fillers.push({s:"The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater.", a:"x-x-x admirably trip cell justify cool lose wanting rough collapse runs thirds gold term miss rate evolved ideas bill code mean miles yeah hear their acquire."}) 

for(i=0; i<fillers.length; i++) {
	fillers[i].condition = "filler"
	fillers[i].item = "Filler_"+i
}

	practice = [];

practice.push({s:"The semester will start next week, but the students and teachers are not ready.", a:"x-x-x thrives anti wages body sold, sin sky entitled sky concrete oil him goods."})
practice.push({s:"The mother of the prisoner sent him packages that contained cookies and novels.", a:"x-x-x defraud dry arm amounted rare nor rhythmic fund authority blossom me defect."})
practice.push({s:"The reporter had dinner yesterday with the baseball player who Kevin admired.", a:"x-x-x quantify joy reduce organisms rise sum attained tended sin Troop flowing."})
practice.push({s:"The therapist set up a meeting with the upset woman and her husband yesterday.", a:"x-x-x forestall ten sit sum absence wave ran keeps exist dry sum settled remainder."})

for(i=0; i<practice.length; i++) {
	practice[i].condition = "filler"
	practice[i].item = "Practice_"+i
}









     fullStimuli = _.shuffle(practice).concat(_.shuffle(fillers.concat(criticalChosen)));
     console.log( fullStimuli);
     return fullStimuli;
     
}

