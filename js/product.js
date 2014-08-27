var SEMANTIC_SERVICE_URL = "http://ecology-service.cse.tamu.edu/BigSemanticsService/";
var laptopURL = "http://www.amazon.com/Dell-Inspiron-15-6-Inch-Laptop-i15RV-954BLK/dp/B00HRLSSKO/ref=zg_bs_565108_4";
//"http://www.amazon.com/Acer-C720-Chromebook-11-6-Inch-2GB/dp/B00FNPD1VW/ref=zg_bs_565108_1";

var laptop;
var mainLaptopInfo;
var metaDataList = new Array();
var count = 0;



function getLaptopInfo(urlA, urlB, urlE) {
    //console.log(urlA);
    //console.log(urlB);
    //console.log(urlE);

    getMetadata(urlA, "metaDataFromThreeSources");
    getMetadata(urlB, "metaDataFromThreeSources");
    getMetadata(urlE, "metaDataFromThreeSources");
}

function metaDataFromThreeSources(title) {
    for (var t in AmazonLaptopsInfoDic) {
        if (AmazonLaptopsInfoDic[t].title == title) {
            show(AmazonLaptopsInfoDic[t], BestbuyLaptopsInfoDic[t], EbayLaptopsInfoDic[t]);
        }
    }


}



function show(laptopMetadataAmazon, laptopMetadataBestbuy, laptopMetadataEbay) {
    //console.log(laptopMetadataAmazon);
    //console.log(laptopMetadataBestbuy);
    //console.log(laptopMetadataEbay);


    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));

    //laptop reviews and rating
    var mainLaptopInfo = document.getElementById("laptopInfo");
    var laptop = document.createElement("div");
    laptop.className = "laptopContent";
    var title = document.createElement("h1");
    title.textContent = laptopMetadataAmazon.title;
    laptop.appendChild(title);

    var review = document.createElement("div");
    review.className = "review";
    var goodReview = document.createElement("div");
    goodReview.className = "goodReview";
    var reviewGoodImg = document.createElement("img");
    reviewGoodImg.src = dir + "/data/good.png";
    var reviewContent1 = document.createElement("h4");
    reviewContent1.textContent = findReview("good", laptopMetadataAmazon.reviews); //laptopMetadataAmazon.reviews[0].content.split(".")[0];

    var line = document.createElement("hr");
    var line1 = document.createElement("hr");

    var badReview = document.createElement("div");
    badReview.className = "badReview";
    var reviewBadImg = document.createElement("img");
    reviewBadImg.src = dir + "/data/bad.png";
    var reviewContent2 = document.createElement("h4");
    reviewContent2.textContent = findReview("bad", laptopMetadataAmazon.reviews); //laptopMetadataAmazon.reviews[1].content.split(".")[0];


    var rating = document.createElement("div");
    rating.className = "rating-box";
    var rate = document.createElement("div");

    rate.className = "rating";
    //console.log(laptopMetadataAmazon.rating);
    var percentage = Math.floor((laptopMetadataAmazon.rating / 5) * 100);
    // rate = rate.Math.floor;
    rate.textContent = percentage + "%";
    rate.style.width = percentage + "%";
    // rating.textContent = laptopMetadata.overall_rating;
    rating.appendChild(rate);
    goodReview.appendChild(reviewGoodImg);
    goodReview.appendChild(reviewContent1);
    badReview.appendChild(reviewBadImg);
    badReview.appendChild(reviewContent2);

    review.appendChild(goodReview);
    review.appendChild(line);
    review.appendChild(badReview);
    review.appendChild(line1);
    //review.appendChild(moreReviewButton);
    review.appendChild(rating);

    laptop.appendChild(review);



    // laptop image area
    var laptopImg = document.createElement("div");
    laptopImg.className = "laptopImg";
    var img = document.createElement("img");
    console.log("laptopMetadata.image.locaiton: " + laptopMetadataAmazon.image);
    img.src = laptopMetadataAmazon.image;
    laptopImg.appendChild(img);
    laptop.appendChild(laptopImg);


    // laptop prices area
    var laptopPrices = document.createElement("div");
    laptopPrices.className = "laptopPrices";
    var Amazon = document.createElement("h4");
    Amazon.textContent = "Amazon.com";
    var aPrice = document.createElement("h4");
    aPrice.className = "price";
    aPrice.textContent = "$ " + laptopMetadataAmazon.price;
    laptopPrices.appendChild(Amazon);
    laptopPrices.appendChild(aPrice);

    var Bestbuy = document.createElement("h4");
    Bestbuy.textContent = "Bestbuy.com";
    var bPrice = document.createElement("h4");
    bPrice.className = "price";
    bPrice.textContent = "$ " + laptopMetadataBestbuy;
    laptopPrices.appendChild(Bestbuy);
    laptopPrices.appendChild(bPrice);

    var Ebay = document.createElement("h4");
    Ebay.textContent = "eBay.com";
    var ePrice = document.createElement("h4");
    ePrice.className = "price";
    ePrice.textContent = "$ " + laptopMetadataEbay.price;
    laptopPrices.appendChild(Ebay);
    laptopPrices.appendChild(ePrice);

    laptop.appendChild(laptopPrices);

    showSpecifications(laptop, laptopMetadataAmazon);
    showAllReviews(laptop, laptopMetadataAmazon);
    mainLaptopInfo.appendChild(laptop);


}


function showSpecifications(laptop, laptopMetadataAmazon) {
    // var laptopMetadataBestbuy = bestSellerListMetadataBestbuy;
    console.log(laptopMetadataAmazon);

    // laptop specifications
    var specifications = document.createElement("div");
    specifications.className = "specifications";
    var spec = document.createElement("h4");
    spec.textContent = "Specifications";
    var table = document.createElement("table");

    var trProcessors = document.createElement("tr");
    var tdProcessors = document.createElement("td");
    tdProcessors.className = "specTitle";
    tdProcessors.textContent = "Processors";
    var tdProcessorsData = document.createElement("td");
    tdProcessorsData.className = "data";
    tdProcessorsData.textContent = laptopMetadataAmazon["Processor"];
    trProcessors.appendChild(tdProcessors);
    trProcessors.appendChild(tdProcessorsData);
    table.appendChild(trProcessors);

    var trMemory = document.createElement("tr");
    var tdMemory = document.createElement("td");
    tdMemory.className = "specTitle";
    tdMemory.textContent = "RAM";
    var tdMemoryData = document.createElement("td");
    tdMemoryData.className = "data";
    tdMemoryData.textContent = laptopMetadataAmazon["RAM"];
    trMemory.appendChild(tdMemory);
    trMemory.appendChild(tdMemoryData);
    table.appendChild(trMemory);

    var trHD = document.createElement("tr");
    var tdHD = document.createElement("td");
    tdHD.className = "specTitle";
    tdHD.textContent = "Hard Drive";
    var tdHDData = document.createElement("td");
    tdHDData.className = "data";
    tdHDData.textContent = laptopMetadataAmazon["Hard Drive"];
    trHD.appendChild(tdHD);
    trHD.appendChild(tdHDData);
    table.appendChild(trHD);

    var trGraphics = document.createElement("tr");
    var tdGraphics = document.createElement("td");
    tdGraphics.className = "specTitle";
    tdGraphics.textContent = "Graphics Coprocessor";
    var tdGraphicsData = document.createElement("td");
    tdGraphicsData.className = "data";
    tdGraphicsData.textContent = laptopMetadataAmazon["Graphics Coprocessor"];
    trGraphics.appendChild(tdGraphics);
    trGraphics.appendChild(tdGraphicsData);
    table.appendChild(trGraphics);

    var triangle = document.createElement("div");
    triangle.className = "triangle";


    specifications.appendChild(spec);
    specifications.appendChild(table);
    specifications.appendChild(triangle);

    laptop.appendChild(specifications);

}

function showAllReviews(laptop, laptopMetadataAmazon) {
    var reviewNum = laptopMetadataAmazon.reviews.length;
    console.log(reviewNum);
    var reviews = document.createElement("div");
    reviews.className = "reviews";
    var revTitle = document.createElement("h4");
    revTitle.textContent = "Reviews";
    var rev = document.createElement("div");
    rev.style.overflow = "scroll";
    rev.style.height = "200px";
    var everyRev = new Array();

    for (var i = 0; i < reviewNum; i++) {
        //console.log(laptopMetadataAmazon.reviews[i].content);
        var text = document.createElement("h5");
        text.textContent = laptopMetadataAmazon.reviews[i].content;
        var line = document.createElement("hr");

        rev.appendChild(text);
        rev.appendChild(line);
    }
    reviews.appendChild(revTitle);
    reviews.appendChild(rev);
    laptop.appendChild(reviews);

}

function findReview(label, reviewList) {
console.log(reviewList);
    var text = "";
    if (label == "good") {

        for (var t in reviewList) {
            
            if (parseFloat(reviewList[t].rating.split(" ")[0]) >= 4.5) {
                text = text + reviewList[t].content.split(".")[0] + ". ";
                break;
            }
        }
        //console.log(text);
        return text;
    }
    if (label == "bad") {
        for (var t in reviewList) {
            if (parseFloat(reviewList[t].rating.split(" ")[0]) < 4.5) {
                text = text + reviewList[t].content.split(".")[0] + ".";
                break;
            }
        }
        //console.log(text);
        return text;
    }

}
