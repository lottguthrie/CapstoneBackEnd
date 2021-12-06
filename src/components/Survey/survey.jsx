Survey.StylesManager.applyTheme("modern");

var surveyJSON = {"title":"Workplace Climate Survey","logo":"Sophia Technology","pages":[{"name":"page1","elements":[{"type":"paneldynamic","name":"question1"}],"title":"Climate Survey"},{"name":"page2","elements":[{"type":"paneldynamic","name":"question2"}],"title":"Climate Survey"},{"name":"page3","elements":[{"type":"paneldynamic","name":"question3"}],"title":"Climate Survey"},{"name":"page4","elements":[{"type":"paneldynamic","name":"question4"}],"title":"Climate Survey"},{"name":"page5","elements":[{"type":"paneldynamic","name":"question5"}]},{"name":"page6","elements":[{"type":"paneldynamic","name":"question6"}]},{"name":"page7","elements":[{"type":"paneldynamic","name":"question7"}]},{"name":"page8","elements":[{"type":"paneldynamic","name":"question8"}]}],"showProgressBar":"top","progressBarType":"questions","maxTextLength":500,"maxOthersLength":500,"autoGrowComment":true,"questionStartIndex":"1","showPreviewBeforeComplete":"showAllQuestions"}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));