var search = document.getElementById('submit')



function displaySearch() {
    var article = $(this).attr("data-name");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=eIeGJ5ZOKIKObIKzOFis7zmGU1AICmgT"



    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        $('#articles').text(<h1> + response.response.docs.headline.main + </h1>)
    })
}

function getArticles() {
    var searchTerm = 'sanders'
    var count = 0
    var sYear = 0
    var eYear = 0
}

