var SEMANTIC_SERVICE_URL = "http://ecology-service.cse.tamu.edu/BigSemanticsService/";


var laptops = [];
var laptopQueue = [];

var AmazonLaptopsInfoDic = [];
var BestbuyLaptopsInfoDic = [];
var EbayLaptopsInfoDic = [];

var AmazonMetaDataList = [];
var BestbuyMetaDataList = [];
var EbayMetaDataList = [];
var laptopTitleList = [];

var brandList = [];
var CPUList = [];
var OSList = [];
var keywords = [];



function changePage(url) {
    var ContentContainer = document.getElementById("try");
    console.log(ContentContainer);
    ContentContainer.src = url;
    console.log(ContentContainer.src);
}

function changeToCompare(addr, titlelist) {

    //var addr = url;
    console.log(addr);
    console.log(document.getElementById("try"));
    var ContentContainer = document.getElementById("try");
    console.log(ContentContainer);
    ContentContainer.src = addr;
    console.log(ContentContainer.src);
}

function buildLaptopsDics() {
    for (var t in LAPTOPS_METADATA_AMAZON) {
        returnMetadata(LAPTOPS_METADATA_AMAZON[t], t);
        returnMetadata(LAPTOPS_METADATA_BESTBUY[t], t);
        returnMetadata(LAPTOPS_METADATA_EBAY[t], t);
    }

    makeDic();
    var searchIt = localStorage.getItem("searchIt");

    if (searchIt != "true") {
    for (var t in AmazonLaptopsInfoDic) {
        laptopQueue[t] = AmazonLaptopsInfoDic[t];
        //console.log(AmazonLaptopsInfoDic[t]);
    }

    }

}



function returnMetadata(metadataOriginal, t) {
    //console.log(metadataOriginal);

    if (metadataOriginal.hasOwnProperty("amazon_product")) {
        AmazonMetaDataList[t] = metadataOriginal.amazon_product;
        laptopTitleList[t] = metadataOriginal.amazon_product.title;
    }
    if (metadataOriginal.hasOwnProperty("bestbuy_product")) {
        BestbuyMetaDataList[t] = metadataOriginal.bestbuy_product;
    }
    if (metadataOriginal.hasOwnProperty("ebay_product")) {
        EbayMetaDataList[t] = metadataOriginal.ebay_product;
    }


}

function checkDataCondition() {
    //alert("Metadata prepared!");
    if ((AmazonMetaDataList.length == LAPTOPS.length) && (BestbuyMetaDataList.length == LAPTOPS.length) && (EbayMetaDataList.length == LAPTOPS.length)) {
        alert("Metadata prepared!");
    }
    //alert("Metadata prepared!");
    //console.log(AmazonMetaDataList);
    makeDic();
}

function makeDic() {

    for (var i in AmazonMetaDataList) {

        var laptopDetails = {};
        laptopDetails["title"] = AmazonMetaDataList[i].title;
        laptopDetails.title = AmazonMetaDataList[i].title;
        var pA = AmazonMetaDataList[i].price.replace("$", "");

        laptopDetails["price"] = parseFloat(pA.replace(",", ""));
        var r = AmazonMetaDataList[i].overall_rating.split(" ");
        laptopDetails["rating"] = parseFloat(r[0]);
        if (AmazonMetaDataList[i].image.location == undefined) {
            laptopDetails["image"] = EbayMetaDataList[i].image.location;
            AmazonMetaDataList[i].image.location = EbayMetaDataList[i].image.location;
        } else {
            laptopDetails["image"] = AmazonMetaDataList[i].image.location;
        }

        laptopDetails["reviews"] = AmazonMetaDataList[i].reviews;
        var specs = AmazonMetaDataList[i].detailed_specifications[0].specifications;

        for (var j in specs) {
            //console.log(specs[j].title);
            if (specs[j].title == "Item Weight") {
                laptopDetails[specs[j].title] = parseFloat(specs[j].description.split(" ")[0]);
            } else if (specs[j].title == "Screen Size") {
                laptopDetails[specs[j].title] = parseFloat(specs[j].description.split(" ")[0]);
            } else {
                laptopDetails[specs[j].title] = specs[j].description;
            }
            if (specs[j].title == "Brand Name") {
                //console.log( brandList.indexOf(specs[j].description));
                if (brandList.indexOf(specs[j].description) < 0) {
                    brandList.push(specs[j].description);
                }

            }
            if (specs[j].title == "Processor") {
                //console.log( brandList.indexOf(specs[j].description));
                if (CPUList.indexOf(specs[j].description) < 0) {
                    CPUList.push(specs[j].description);
                }

            }
            if (specs[j].title == "Operating System") {
                //console.log( brandList.indexOf(specs[j].description));
                if (OSList.indexOf(specs[j].description) < 0) {
                    OSList.push(specs[j].description);
                }

            }
        }
        //console.log(laptopDetails);
        AmazonLaptopsInfoDic[i] = laptopDetails;
        //console.log(BestbuyMetaDataList[i]);
        var pB = BestbuyMetaDataList[i].price;
        BestbuyLaptopsInfoDic[i] = parseFloat(pB.replace(",", ""));
        var eInfo = {};
        var p = EbayMetaDataList[i].price.split(" ");
        var pE = p[1].replace("$", "");
        eInfo["price"] = parseFloat(pE.replace(",", ""));
        eInfo["image"] = EbayMetaDataList[i].image.location;
        EbayLaptopsInfoDic[i] = eInfo;

    }
    console.log(AmazonLaptopsInfoDic);
    console.log(BestbuyLaptopsInfoDic);
    console.log(EbayLaptopsInfoDic);
}



function getMetadata(url, callback) {
    var serviceURL = SEMANTIC_SERVICE_URL + "metadata.jsonp?callback=" + callback + "&url=" + encodeURIComponent(url);
    doJSONPCall(serviceURL);
    console.log("requesting semantics service for metadata: " + serviceURL);
}

function doJSONPCall(jsonpURL) {
    var script = document.createElement('script');
    script.src = jsonpURL;
    document.head.appendChild(script);
    //console.log(document.head.appendChild(script));
}

function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}


function outputLaptop(title) {
    //alert(title);
    localStorage.setItem("laptopInProductPage", title);

    //laptopsForCompare(selectLaptopsTitle);
    location.reload();
    location.href = 'product.html';
    // changePage('');
}

function search(){
	    keywords = document.getElementById("search").value.split(" ");
    for (var i in keywords){
        var label = "keyword"+i;
        console.log(label);
        localStorage.setItem(label, keywords[i]);
    }
//console.log(names);
//console.log(laptopQueue);
localStorage.setItem("searchIt", true);

var length = keywords.length;
localStorage.setItem("wordLength",length);
console.log(keywords.length);

    var mainArea = document.getElementById("try");
    mainArea.src = 'product_list.html';

}
function enableSearch(){

var searchButton = document.getElementById("searchButton");
	//console.log(searchButton);
searchButton.onclick = function(){
	search();
	//console.log("OK!");
}
}