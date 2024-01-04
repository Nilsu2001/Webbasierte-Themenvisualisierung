/** create rectangles for each topic */
function createRectangles(topics) {

  //iterate through topics
  topics.forEach(function (topic) {
	  
	const rectangles = document.getElementById('rects');
	
	//create rectangles for each topic and add attributes 
	var rect = document.createElement('div');
	rect.classList.add('hover');
	rect.classList.add(topic.name + 'Rect');
	rect.setAttribute('onclick', 'open'+ topic.name + '()');
	rectangles.append(rect);
	
	// create text for rectangles
    var topicName = document.createElement('p');
	topicName.classList.add('topicName');
	topicName.innerHTML = topic.name;
    rect.appendChild(topicName);
	
	//display total number of questions 
	var questions = topic.questions.length;
	var numberQuestion = document.createElement("div");
    numberQuestion.innerHTML = questions + " Fragen";
	  
    rect.appendChild(numberQuestion).classList.add("numberQuestions");
	  

	var smartphones = document.getElementsByClassName('SmartphonesRect')[0];
	var internet = document.getElementsByClassName('InternetRect')[0];
	var sicherheit = document.getElementsByClassName('SicherheitRect')[0];
	var gesundheit = document.getElementsByClassName('GesundheitRect')[0];
	var sozial = document.getElementsByClassName('SozialRect')[0];
	var anwendungen = document.getElementsByClassName('AnwendungenRect')[0];
	var allgemein = document.getElementsByClassName('AllgemeinRect')[0];
	   
	/* change the opacity of the background color 
	based on the total number of questions in each topic */ 
	
	/* if a topic doesn't contain any questions,
	change the color of the topic to grey and remove the click event*/
	if(questions == 0) {
		rect.style.backgroundColor = '#E0E0E0';
		rect.removeAttribute('onclick');
	    rect.classList.remove('hover');
	}
	   
	if(questions == 1 ) {
		
		if(topic.name == 'Smartphones') {
			smartphones.style.backgroundColor = 'rgba(201, 162, 237, 0.5)';
		}
		if(topic.name == 'Internet') {
		   internet.style.backgroundColor = 'rgba(173, 161, 251, 0.5)';
		}
		if(topic.name == 'Sicherheit') {
		   sicherheit.style.backgroundColor = 'rgba(117, 190, 202, 0.5)';
		}
		if(topic.name == 'Gesundheit') {
		   gesundheit.style.backgroundColor = 'rgba(133, 214, 204, 0.5)';
		}
		if(topic.name == 'Sozial') {
		   sozial.style.backgroundColor = 'rgba(142, 159, 249, 0.5)';
		}
		if(topic.name == 'Anwendungen') {
		   anwendungen.style.backgroundColor = 'rgba(118, 185, 246, 0.5)';
		}
		if(topic.name == 'Allgemein') {
		   allgemein.style.backgroundColor = 'rgba(154, 235, 176, 0.5)';
		}
		
	}
	  
	  
	if(questions >= 2 && questions < 4 ) {
		
		if(topic.name == 'Smartphones') {
			smartphones.style.backgroundColor = 'rgba(201, 162, 237, 0.6)';
		}
		if(topic.name == 'Internet') {
		   internet.style.backgroundColor = 'rgba(173, 161, 251, 0.6)';
		}
		if(topic.name == 'Sicherheit') {
		   sicherheit.style.backgroundColor = 'rgba(117, 190, 202, 0.6)';
		}
		if(topic.name == 'Gesundheit') {
		   gesundheit.style.backgroundColor = 'rgba(133, 214, 204, 0.6)';
		}
		if(topic.name == 'Sozial') {
		   sozial.style.backgroundColor = 'rgba(142, 159, 249, 0.6)';
		}
		if(topic.name == 'Anwendungen') {
		   anwendungen.style.backgroundColor = 'rgba(118, 185, 246, 0.6)';
		}
		if(topic.name == 'Allgemein') {
		   allgemein.style.backgroundColor = 'rgba(154, 235, 176, 0.6)';
		}
		
	}
	  
	if(questions >= 4 && questions < 8 ) {
		
		if(topic.name == 'Smartphones') {
			smartphones.style.backgroundColor = 'rgba(201, 162, 237, 0.7)';
		}
		if(topic.name == 'Internet') {
		   internet.style.backgroundColor = 'rgba(173, 161, 251, 0.7)';
		}
		if(topic.name == 'Sicherheit') {
		   sicherheit.style.backgroundColor = 'rgba(117, 190, 202, 0.7)';
		}
		if(topic.name == 'Gesundheit') {
		   gesundheit.style.backgroundColor = 'rgba(133, 214, 204, 0.7)';
		}
		if(topic.name == 'Sozial') {
		   sozial.style.backgroundColor = 'rgba(142, 159, 249, 0.7)';
		}
		if(topic.name == 'Anwendungen') {
		   anwendungen.style.backgroundColor = 'rgba(118, 185, 246, 0.7)';
		}
		if(topic.name == 'Allgemein') {
		   allgemein.style.backgroundColor = 'rgba(154, 235, 176, 0.7)';
		}
	}
	  
	if(questions >= 8 && questions < 10 ) {
		
		if(topic.name == 'Smartphones') {
			smartphones.style.backgroundColor = 'rgba(201, 162, 237, 0.8)';
		}
		if(topic.name == 'Internet') {
		   internet.style.backgroundColor = 'rgba(173, 161, 251, 0.8)';
		}
		if(topic.name == 'Sicherheit') {
		   sicherheit.style.backgroundColor = 'rgba(117, 190, 202, 0.8)';
		}
		if(topic.name == 'Gesundheit') {
		   gesundheit.style.backgroundColor = 'rgba(133, 214, 204, 0.8)';
		}
		if(topic.name == 'Sozial') {
		   sozial.style.backgroundColor = 'rgba(142, 159, 249, 0.8)';
		}
		if(topic.name == 'Anwendungen') {
		   anwendungen.style.backgroundColor = 'rgba(118, 185, 246, 0.8)';
		}
		if(topic.name == 'Allgemein') {
		   allgemein.style.backgroundColor = 'rgba(154, 235, 176, 0.8)';
		}
	}  

	  
	if(questions >= 10 && questions < 12 ) {
		
		if(topic.name == 'Smartphones') {
			smartphones.style.backgroundColor = 'rgba(201, 162, 237, 0.9)';
		}
		if(topic.name == 'Internet') {
		   internet.style.backgroundColor = 'rgba(173, 161, 251, 0.9)';
		}
		if(topic.name == 'Sicherheit') {
		   sicherheit.style.backgroundColor = 'rgba(117, 190, 202, 0.9)';
		}
		if(topic.name == 'Gesundheit') {
		   gesundheit.style.backgroundColor = 'rgba(133, 214, 204, 0.9)';
		}
		if(topic.name == 'Sozial') {
		   sozial.style.backgroundColor = 'rgba(142, 159, 249, 0.9)';
		}
		if(topic.name == 'Anwendungen') {
		   anwendungen.style.backgroundColor = 'rgba(118, 185, 246, 0.9)';
		}
		if(topic.name == 'Allgemein') {
		   allgemein.style.backgroundColor = 'rgba(154, 235, 176, 0.9)';
		}
	}
	  
	if(questions >= 12) {
		
		if(topic.name == 'Smartphones') {
			smartphones.style.backgroundColor = 'rgba(201, 162, 237, 1)';
		}
		if(topic.name == 'Internet') {
		   internet.style.backgroundColor = 'rgba(173, 161, 251, 1)';
		}
		if(topic.name == 'Sicherheit') {
		   sicherheit.style.backgroundColor = 'rgba(117, 190, 202, 1)';
		}
		if(topic.name == 'Gesundheit') {
		   gesundheit.style.backgroundColor = 'rgba(133, 214, 204, 1)';
		}
		if(topic.name == 'Sozial') {
		   sozial.style.backgroundColor = 'rgba(142, 159, 249, 1)';
		}
		if(topic.name == 'Anwendungen') {
		   anwendungen.style.backgroundColor = 'rgba(118, 185, 246, 1)';
		}
		if(topic.name == 'Allgemein') {
		   allgemein.style.backgroundColor = 'rgba(137, 222, 159, 1)';
		}
	}
	   
  });	
	
}
