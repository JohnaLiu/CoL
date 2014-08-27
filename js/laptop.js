var picAddr = "../CoL/data/";
var selectLaptops = 0;
var selectLaptopsTitle = new Array();
var mainContainer;

var LAPTOP_VISUAL_WIDTH = 220;
var LAPTOP_VISUAL_HEIGHT = 220;
var PADDING = 32;



var c = 0;
var r = 0;

function setup() {

    mainContainer = document.getElementById("laptopContainer");
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.lastChild);
    }
    console.log(laptopQueue);
    var searchIt = localStorage.getItem("searchIt");

    if (searchIt == "true") {
        showSearchResults();
        for (var t in laptopQueue) {
            //console.log(laptopQueue[t]);
            showLaptopsInQueue(laptopQueue[t]);
        }
    } else {
        for (var t in AmazonLaptopsInfoDic) {
            //console.log(AmazonLaptopsInfoDic[t]);
            showLaptopsInQueue(AmazonLaptopsInfoDic[t]);

        }
    }

    c = 0;
    r = 0;
    sortLaptopsBy("name");


}

function showSearchResults(){
    var length = parseFloat(localStorage.getItem("wordLength"));
    console.log(length);

for(var i=0;i<length;i++){
    var key = "keyword"+i;
    console.log(key);
    keywords[i]=localStorage.getItem(key);
}
console.log(keywords);

    laptopQueue = [];
    var names = [];
    var numLaptopInQ = 0;
    //console.log(keywords);
    //var check = 0;
    for (var i in keywords){
        for(var t in AmazonLaptopsInfoDic){
            //for (var value in AmazonLaptopsInfoDic[t]){
                var title = AmazonLaptopsInfoDic[t].title.toLowerCase();
                            var res = title.search(keywords[i].toLowerCase());
                            //console.log(AmazonLaptopsInfoDic[t].title);
            //console.log(res);
            //}
            if(res>=0){
                names[numLaptopInQ] = AmazonLaptopsInfoDic[t];
                numLaptopInQ++;
            }


        }
    }
localStorage.setItem("wordLength", keywords.length);
$.each(names, function(i, el){
    if($.inArray(el, laptopQueue) === -1) laptopQueue.push(el);
});


}

function showLaptopsInQueue(laptopMetadata) {


    // for (i in laptopsLits) {
    //     console.log(c +' , '+r);

    // }
    var columns = Math.floor(mainContainer.getClientRects()[0].width / (LAPTOP_VISUAL_WIDTH + PADDING));


    //console.log(laptopMetadata);
    //mainContainer = document.getElementById("laptopContainer");
    var vis = document.createElement('div');
    vis.className = "laptopVisual";

    var x = 12 + (LAPTOP_VISUAL_WIDTH + PADDING) * c;
    var y = 36 + (LAPTOP_VISUAL_HEIGHT + PADDING) * r;

    vis.style.top = y + 'px';
    vis.style.left = x + 'px';

    vis.style.width = LAPTOP_VISUAL_WIDTH + "px";
    vis.style.height = LAPTOP_VISUAL_WIDTH + "px";

    c++;

    if (c == columns) {
        c = 0
        r++;
    }


    var div = document.createElement('div');
    div.className = "laptop";
    var check = document.createElement('img');
    check.className = "bigCheck";
    check.src = picAddr + "bigCheck.png";
    check.id = laptopMetadata.title;

    var img = document.createElement('img');
    img.src = laptopMetadata.image;

    div.appendChild(img);
    var url = document.createElement('a');

    url.onclick = function() {
        outputLaptop(laptopMetadata.title);
    }
    url.href = "product.html";

    var title = document.createElement('h4');
    title.textContent = laptopMetadata.title;
    url.appendChild(title);

    var rating = document.createElement("div");
    rating.className = "rating-box";
    var rate = document.createElement("div");

    rate.className = "rating";
    //console.log(laptopMetadata);
    var percentage = Math.floor((laptopMetadata.rating / 5) * 100);
    // rate = rate.Math.floor;
    rate.textContent = percentage + "%";
    rate.style.width = percentage + "%";
    // rating.textContent = laptopMetadata.overall_rating;
    rating.appendChild(rate);

    var price = document.createElement('h5');
    price.textContent = "$ " + laptopMetadata.price;

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    //checkbox.id = this.title;
    // checkbox.onclick = "changeVisibility('"+checkbox.id+"')";

    checkbox.onchange = function() {

        if (checkbox.checked) {
            selectLaptops += 1;
            selectLaptopsTitle.push(check.id);
            document.getElementById(check.id).style.visibility = "visible";
        } else {
            selectLaptops -= 1;
            selectLaptopsTitle.pop(check.id);
            document.getElementById(check.id).style.visibility = "hidden";
        }
        //console.log(selectLaptopsTitle);
        selectedPercentagePieChart(selectLaptops);
        //console.log(selectLaptops);
    }
    //console.log("checkbox"+checkbox);
    //var iFrame = document.getElementById("try");
    var compareButton = document.getElementById("compareButton");
    compareButton.onclick = function() {
        //changeToCompare('Compare.html',selectLaptopsTitle);

        localStorage.setItem("selectLaptopsTitle", JSON.stringify(selectLaptopsTitle));

        //laptopsForCompare(selectLaptopsTitle);
        location.reload();
        location.href = 'compare.html';
        //getSelectLaptopInfo(selectLaptopsTitle);
    }



    // vis.appendChild(img);
    vis.appendChild(div);
    vis.appendChild(check);
    vis.appendChild(url);
    vis.appendChild(rating);
    vis.appendChild(price);
    vis.appendChild(checkbox);
    mainContainer.appendChild(vis);

}


function selectedPercentagePieChart(selectLaptops) {
    var data = [{
        value: selectLaptops / 5,
        color: '#2c7f30'
    }, {
        value: (5 - selectLaptops) / 5,
        color: '#b6d375'
    }];
    var pie = document.getElementById("Pie");
    pie.style.width = "30px";
    pie.style.height = "30px";
    pie.width = "30";
    pie.height = "30";
    var ctx = document.getElementById("Pie").getContext("2d");
    //console.log(ctx);
    var option = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth: 0.5,

        //Boolean - Whether we should animate the chart 
        animation: true,

        //Number - Amount of animation steps
        animationSteps: 100,

        //String - Animation easing effect
        animationEasing: "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Pie
        animateRotate: true,

        //Boolean - Whether we animate scaling the Pie from the centre
        animateScale: false,

        //Function - Will fire on animation completion.
        onAnimationComplete: null
    }

    var myNewChart = new Chart(ctx).Pie(data, option);
    pie.style.width = "30px";
    pie.style.height = "30px";
    pie.width = "30";
    pie.height = "30";
    if(selectLaptops==5){
        alert("Your compare list is full. Please click the compare button.");
    }
}


function changeToCompare(addr, selectLaptopsTitle) {


    //console.log(titleList);
    //console.log(selectLaptopsTitle);

    buildList();
    getSelectLaptopInfo(titleList);
}
