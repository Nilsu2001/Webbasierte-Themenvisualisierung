/** create slideshows */ 
function createTopicSlideshows(topics) {

    const jsonFile = document.getElementById("slideshows");
	
  //create slideshow element for each topic
  topics.forEach(function (topic) {
	  
    //create grid conatiner
    var gridContainer = document.createElement("div");
	gridContainer.setAttribute("id", topic.name + "-container");
	
	//append container to file div
    jsonFile.appendChild(gridContainer).classList.add("grid-container");

    //create slideshow container
    var slideshowContainer = document.createElement("div");
    slideshowContainer.setAttribute("id", topic.name);
	 
    //append a slideshow container to each grid container
    gridContainer.appendChild(slideshowContainer).classList.add("slideshow-container");

    //create image and append to grid container
    var image = document.createElement("img");
    gridContainer.appendChild(image);

    //create next/prev buttons
    var next = document.createElement("span");
    var prev = document.createElement("span");
    next.innerHTML = "&#8250;";
    prev.innerHTML = "&#8249;";
    slideshowContainer.appendChild(prev).classList.add("prev");
    slideshowContainer.appendChild(next).classList.add("next");

    //create button to go back to the chart
    var closeSlideshow = document.createElement("input");
    closeSlideshow.setAttribute("id", "closeSlideshow");
    closeSlideshow.setAttribute("type", "button");+
    closeSlideshow.setAttribute("value", "zurück");
	closeSlideshow.setAttribute("onclick", "closeSlideshows()");
    slideshowContainer.appendChild(closeSlideshow);
	
	//create button to go back to the chart
	var openListView = document.createElement("input");
    openListView.setAttribute("id", "openList");
    openListView.setAttribute("type", "button");
    openListView.setAttribute("value", "Listenansicht");
	  
		   
    //open list view
	openListView.addEventListener("click", function () {
		list.classList.add('show');
		closeListView.classList.add('show');
    });
	  
	slideshowContainer.appendChild(openListView);
	
	//create list to display all questions
	var textTopic = document.createElement("h1");
	textTopic.innerHTML = topic.name;
    var list = document.createElement("div");
	list.appendChild(textTopic);
	list.setAttribute("id", topic.name + "List");
    
	var lists = document.getElementById("lists");
	slideshowContainer.appendChild(list).classList.add('list');
	  
    //create button to go back to the chart
	var closeListView = document.createElement("input");
    closeListView.setAttribute("id", "closeList");
    closeListView.setAttribute("type", "button");
    closeListView.setAttribute("value", "schließen");
	  
	//close list view 
	closeListView.addEventListener("click", function () {
		list.classList.remove('show');
		closeListView.classList.remove('show');
    });
	  
	slideshowContainer.appendChild(closeListView);

	//call the functions to fill the slideshows and lists with questions
    fillSlideshowWithQuestions(slideshowContainer, topic);
	fillListWithQuestions(list, topic);
	

/** fill each slideshow with the topic, question and details */
function fillSlideshowWithQuestions(slideshowContainer, topic) {
  topic.questions.forEach(function (question, i) { //i = index of question

    //create html-elements
    var textTopic = document.createElement("h1");
    var textQuestion = document.createElement("p");
    var textPerson = document.createElement("p");

    //add text value (Object value)
    textTopic.innerHTML = topic.name;
    textQuestion.innerHTML = question.Frage;
    textPerson.innerHTML = question.Alter + "/" + question.Geschlecht + "," + " fragt:";
	  
    //display current and total number of questions 
    var numberQuestion = document.createElement("div");
    numberQuestion.innerHTML =
      "Frage " + (i + 1) + " von " + topic.questions.length;
	  
	//create div for slider and add to slideshow container
    var slider = document.createElement("div");

    slideshowContainer.appendChild(slider).classList.add("mySlides");

    //add question and details to each slider
    slider.appendChild(numberQuestion).classList.add("anzahlFragen");
    slider.appendChild(textTopic).classList.add("thema");
    slider.appendChild(textPerson).classList.add("person");
    slider.appendChild(textQuestion).classList.add("frage");
  });
	
}

    var slides = slideshowContainer.querySelectorAll(".mySlides");
	//break loop if a slideshow doesn't contain any questions 
	if (slides.length == 0) return;
    var slideIndex = 0;

	/** display slides in ordner 
	and update slideshow by clicking on next/prev buttons */
    function updateSlideshow() {

      /* start at first index
	  if the index is bigger than length of the slides */
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
		
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      
	  //any slide other than the current is not displayed
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
	  
	  //show current slider 
      slides[slideIndex].style.display = "block";
	
    }
   
	//show next slide by clicking on the next button
    next.addEventListener("click", function () {
      slideIndex++;
      updateSlideshow();
    });
	 
	//show next slide by clicking on the prev button
    prev.addEventListener("click", function () {
      slideIndex--;
      updateSlideshow();
    });

    updateSlideshow();
  });

  /** create list of all questions for each topic */	
  function fillListWithQuestions(list, topic) {
	  
	  topic.questions.forEach(function (question) {

		//create html-elements 
		var textQuestion = document.createElement("p");

		//add text value (Object value) 
		textQuestion.innerHTML = question.Frage + "<br>";

		//append questions to list 
		list.appendChild(textQuestion);

	  });
  };
};

