var laptopsList = {};
var totalNum = 0;
var count = 0;
var AmazonMetaDataList = [];
var BestbuyMetaDataList = [];
var EbayMetaDataList = [];
var selectedLaptopMetadataList = [];

var laptopMetadataDic = {};


function buildList(titleList) {
    console.log(titleList);
    for (var t in titleList) {
        for (var i in AmazonLaptopsInfoDic) {
            if (titleList[t] == AmazonLaptopsInfoDic[i].title) {
                selectedLaptopMetadataList[t] = AmazonLaptopsInfoDic[i];
            }

        }
    }
    console.log(selectedLaptopMetadataList);

}

// function laptopsForCompare(titleList) {
//     selectLaptopsTitle = titleList;
//     //alert(selectLaptopsTitle);
// }


function getSelectLaptopInfo(titleList) {
    var laptopsTitleAndPic = document.getElementById("laptopsTitleAndPic");
    //console.log(laptopsTitleAndPic);


    for (t in titleList) {
        //console.log(titleList[t]);
        var laptop = document.createElement("div");
        laptop.className = "laptopTitleAndPic";
        var title = document.createElement("h4");
        title.textContent = selectedLaptopMetadataList[t].title;
        var n = 800 / titleList.length;
        var p = 200 / titleList.length;
        //console.log(n);
        title.style.position = "absolute";
        title.style.left = t * (n + p) + 'px';
        title.style.width = n + 'px';
        //console.log(title);
        laptop.appendChild(title);
        var pic = document.createElement("img");
        pic.style.position = "absolute";
        pic.style.left = t * (n + p) + 'px';
        pic.style.top = '80px';
        pic.style.width = n + 'px';

        pic.src = selectedLaptopMetadataList[t].image;
        laptop.appendChild(pic);
        laptopsTitleAndPic.appendChild(laptop);
    }
    drawPolarArea(titleList);
    drawSpecifications(titleList, 1000 / titleList.length + "px");

    // return 
}


function drawPolarArea(titleList) {
    var CPUs = [];
    var HDs = [];
    var SSs = [];
    var RAMs = [];
    //console.log(titleList);
    for (var t in titleList) {
        CPUs[t] = parseFloat(selectedLaptopMetadataList[t]["Processor"].split(" ")[0]);
        HDs[t] = parseFloat(selectedLaptopMetadataList[t]["Hard Drive"].split(" ")[0]);
        SSs[t] = selectedLaptopMetadataList[t]["Screen Size"];
        RAMs[t] = parseFloat(selectedLaptopMetadataList[t]["RAM"]);

    }
    var maxCPU = Math.max.apply(Math, CPUs);
    console.log(maxCPU);
    var maxHD = Math.max.apply(Math, HDs);
    console.log(maxHD);
    var maxScreen = Math.max.apply(Math, SSs);
    console.log(maxScreen);
    var maxRAM = Math.max.apply(Math, RAMs);
    console.log(maxRAM);

    var data = [];
    var PolarCharts = document.getElementById("PolarCharts");
    var n = 800 / titleList.length;
    var p = 200 / titleList.length;

    for (var i in CPUs) {
        var div = document.createElement('div');
        div.className = "polarWithLabel";
        console.log(i);
        var canvas = document.createElement('canvas');
        canvas.className = "PolarChart";
        canvas.id = titleList[i];
        console.log(titleList[i]);


        //console.log(n);
        div.style.width = canvas.style.width;
        div.style.left = i * (n + p) + 'px';
        div.style.position = "absolute";

        var labelCPU = document.createElement('h5');
        labelCPU.className = "labelCPU";
        labelCPU.textContent = "CPU";
        var labelHD = document.createElement('h5');
        labelHD.className = "labelHD";
        labelHD.textContent = "Hard Drive";
        var labelSS = document.createElement('h5');
        labelSS.className = "labelSS";
        labelSS.textContent = "Screen Size";
        var labelRAM = document.createElement('h5');
        labelRAM.className = "labelRAM";
        labelRAM.textContent = "RAM";

        div.appendChild(labelCPU);
        div.appendChild(labelHD);
        div.appendChild(labelSS);
        div.appendChild(labelRAM);
        div.appendChild(canvas);
        PolarCharts.appendChild(div);
        data[i] = [{
            value: CPUs[i] / maxCPU,
            color: "#a4c461"
        }, {
            value: HDs[i] / maxHD,
            color: "#4a93dc"
        }, {
            value: SSs[i] / maxScreen,
            color: "#ac45a1"
        }, {
            value: RAMs[i] / maxRAM,
            color: "#e54b56"
        }];
        var totalScore = CPUs[i] / maxCPU + HDs[i] / maxHD + SSs[i] / maxScreen + RAMs[i] / maxRAM;
        if (totalScore == 4) {
            var option = { //Boolean - If we want to override with a hard coded scale
                scaleOverride: true,
                //** Required if scaleOverride is true **
                //Number - The number of steps in a hard coded scale
                scaleSteps: 0.1,
                //Number - The value jump in the hard coded scale
                scaleStepWidth: 1,
                //Number - The centre starting value
                scaleStartValue: 0,

            }
        }


        var ctx = document.getElementById(titleList[i]).getContext("2d");
        if (totalScore == 4) {
            var myNewChart = new Chart(ctx).PolarArea(data[i], option);
        } else {
            var myNewChart = new Chart(ctx).PolarArea(data[i]);
        }

        drawStars(selectedLaptopMetadataList[i], div);

    }

    var rgbaFill = ["rgba(1,1,1,0.3)", "rgba(220,220,220,0.3)", "rgba(151,187,205,0.3)", "rgba(121,157,205,0.3)", "rgba(221,157,205,0.3)", "rgba(21,157,5,0.3)"];
    var rgbaStroke = ["rgba(1,1,1,1)", "rgba(220,220,220,1)", "rgba(151,187,205,1)", "rgba(121,157,205,1)", "rgba(221,157,205,1)", "rgba(21,157,5,1)"]; //rgba(151,187,205,1)
    var datasets = [];
    for (var i in CPUs) {
        var layer = {
            fillColor: rgbaFill[i],
            strokeColor: rgbaStroke[i],
            pointColor: rgbaStroke[i],
            pointStrokeColor: "#fff",
            data: [CPUs[i] / maxCPU, HDs[i] / maxHD, SSs[i] / maxScreen, RAMs[i] / maxRAM]
        };
        datasets[i] = layer;

    }
    console.log(datasets);
    var dataForAll = {
        labels: ["CPU", "Hard Drive", "Screen Size", "RAM"],
        datasets: datasets
    }
    var ctx0 = document.getElementById("RadarChart").getContext("2d");
    var myNewChart = new Chart(ctx0).Radar(dataForAll);

}


function drawStars(laptopMetadataAmazon, div) {
    var rating = document.createElement("div");
    rating.className = "rating-boxCompare";

    var rate = document.createElement("div");
    rate.className = "rating";
    console.log(laptopMetadataAmazon.rating);
    var percentage = Math.floor((laptopMetadataAmazon.rating / 5) * 100);
    // rate = rate.Math.floor;
    rate.textContent = percentage + "%";
    rate.style.width = percentage + "%";
    // rating.textContent = laptopMetadata.overall_rating;
    rating.appendChild(rate);
    var score = document.createElement("h4");
    score.id = "score";
    score.textContent = laptopMetadataAmazon.rating + "/5";


    div.appendChild(rating);
    div.appendChild(score);

}

function drawSpecifications(titleList, width) {
    var specs = document.getElementById("specificationCompare");
    //console.log(specs);
    var specifications = document.createElement("div");
    specifications.className = "specsCompare";
    specs.appendChild(specifications);
    // var spec = document.createElement("h3");
    // spec.textContent = "Specifications";
    var table = document.createElement("table");


    var trPrice = document.createElement("tr");
    var tdPrice = document.createElement("td");
    tdPrice.className = "specTitle";
    tdPrice.textContent = "Price";
    trPrice.appendChild(tdPrice);
    for (var i in titleList) {
        var tdPriceData = document.createElement("td");
        tdPriceData.className = "data";
        tdPriceData.style.width = width;
        //console.log(width);
        tdPriceData.textContent = "$ " + selectedLaptopMetadataList[i]["price"];
        trPrice.appendChild(tdPriceData);
    }
    table.appendChild(trPrice);

    var trOS = document.createElement("tr");
    var tdOS = document.createElement("td");
    tdOS.className = "specTitle";
    tdOS.textContent = "Operating System";
    trOS.appendChild(tdOS);
    for (var i in titleList) {
        var tdOSData = document.createElement("td");
        tdOSData.className = "data";
        tdOSData.style.width = width;
        //console.log(width);
        tdOSData.textContent = selectedLaptopMetadataList[i]["Operating System"];
        trOS.appendChild(tdOSData);
    }
    table.appendChild(trOS);

    var trGraphics = document.createElement("tr");
    var tdGraphics = document.createElement("td");
    tdGraphics.className = "specTitle";
    tdGraphics.textContent = "Graphics Coprocessor";
    trGraphics.appendChild(tdGraphics);
    for (var i in titleList) {
        var tdGraphicsData = document.createElement("td");
        tdGraphicsData.className = "data";
        tdGraphicsData.style.width = width;
        //console.log(width);
        tdGraphicsData.textContent = selectedLaptopMetadataList[i]["Graphics Coprocessor"];
        trGraphics.appendChild(tdGraphicsData);
    }
    table.appendChild(trGraphics);


    var trWeight = document.createElement("tr");
    var tdWeight = document.createElement("td");
    tdWeight.className = "specTitle";
    tdWeight.textContent = "Item Weight";
    trWeight.appendChild(tdWeight);
    for (var i in titleList) {
        var tdWeightData = document.createElement("td");
        tdWeightData.className = "data";
        tdWeightData.style.width = width;
        //console.log(width);
        tdWeightData.textContent = selectedLaptopMetadataList[i]["Item Weight"] + " pounds";
        trWeight.appendChild(tdWeightData);
    }
    table.appendChild(trWeight);

    var trResolution = document.createElement("tr");
    var tdResolution = document.createElement("td");
    tdResolution.className = "specTitle";
    tdResolution.textContent = "Screen Resolution";
    trResolution.appendChild(tdResolution);
    for (var i in titleList) {
        var tdResolutionData = document.createElement("td");
        tdResolutionData.className = "data";
        tdResolutionData.style.width = width;
        //console.log(width);
        tdResolutionData.textContent = selectedLaptopMetadataList[i]["Screen Resolution"];
        trResolution.appendChild(tdResolutionData);
    }
    table.appendChild(trResolution);


    var trColor = document.createElement("tr");
    var tdColor = document.createElement("td");
    tdColor.className = "specTitle";
    tdColor.textContent = "Color";
    trColor.appendChild(tdColor);
    for (var i in titleList) {
        var tdColorData = document.createElement("td");
        tdColorData.className = "data";
        tdColorData.style.width = width;
        //console.log(width);
        tdColorData.textContent = selectedLaptopMetadataList[i]["Color"];
        trColor.appendChild(tdColorData);
    }
    table.appendChild(trColor);

    var trWireless = document.createElement("tr");
    var tdWireless = document.createElement("td");
    tdWireless.className = "specTitle";
    tdWireless.textContent = "Wireless Type";
    trWireless.appendChild(tdWireless);
    for (var i in titleList) {
        var tdWirelessData = document.createElement("td");
        tdWirelessData.className = "data";
        tdWirelessData.style.width = width;
        //console.log(width);
        tdWirelessData.textContent = selectedLaptopMetadataList[i]["Wireless Type"];
        trWireless.appendChild(tdWirelessData);
    }
    table.appendChild(trWireless);

        var trSeries = document.createElement("tr");
    var tdSeries = document.createElement("td");
    tdSeries.className = "specTitle";
    tdSeries.textContent = "Series";
    trSeries.appendChild(tdSeries);
    for (var i in titleList) {
        var tdSeriesData = document.createElement("td");
        tdSeriesData.className = "data";
        tdSeriesData.style.width = width;
        //console.log(width);
        tdSeriesData.textContent = selectedLaptopMetadataList[i]["Series"];
        trSeries.appendChild(tdSeriesData);
    }
    table.appendChild(trSeries);
    specifications.appendChild(table);

    specs.appendChild(specifications);
    specs.appendChild(triangle);
}
