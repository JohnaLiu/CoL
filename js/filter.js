var checkQueue = [];
var initialQueue = [];


function priceFilter(min, max) {
    for (var t in laptopQueue) {
        //console.log(laptopQueue[t].price);
        if (laptopQueue[t].price < min || laptopQueue[t].price > max) {
            delete checkQueue[t];
        } else if (initialQueue[t] != undefined) {
            if (initialQueue[t].price >= min && initialQueue[t].price <= max) {
                checkQueue[t] = initialQueue[t];
            }
        } else if (initialQueue[t] == undefined) {
            if (laptopQueue[t].price >= min && laptopQueue[t].price <= max) {
                checkQueue[t] = laptopQueue[t];
            }
        }


    }
    //console.log(laptopQueue);
    mainContainer = document.getElementById("laptopContainer");
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.lastChild);
    }
    for (var t in checkQueue) {
        //console.log(laptopQueue[t]);
        showLaptopsInQueue(checkQueue[t]);
    }
    c = 0;
    r = 0;
    initialQueue = checkQueue;
}

function manufacturerFilter() {
    var manuQ = [];
    for (var t in laptopQueue) {
        manuQ[t] = laptopQueue[t];
    }
    var Acer = document.getElementById("Acer");
    //console.log(Acer);
    Acer.onchange = function() {
        if (Acer.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Acer") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Acer") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }
    var Apple = document.getElementById("Apple");
    Apple.onchange = function() {
        if (Apple.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Apple") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Apple") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }
    var Asus = document.getElementById("Asus");
    Asus.onchange = function() {
        if (Asus.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Asus") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Asus") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }
    var Dell = document.getElementById("Dell");
    Dell.onchange = function() {
        if (Dell.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Dell") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Dell") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }
    var HP = document.getElementById("HP");
    HP.onchange = function() {
        if (HP.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "HP") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "HP") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }
    var Lenovo = document.getElementById("Lenovo");
    Lenovo.onchange = function() {
        if (Lenovo.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Lenovo") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Lenovo") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }
    var Samsung = document.getElementById("Samsung");
    Samsung.onchange = function() {
        if (Samsung.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Samsung") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Samsung") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }




    var Toshiba = document.getElementById("Toshiba");
    Toshiba.onchange = function() {
        if (Toshiba.checked) {
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Toshiba") {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                if (laptopQueue[t]["Brand Name"] == "Toshiba") {
                    delete manuQ[t];
                }
            }
        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }

}


function weightFilter(min, max) {

    for (var t in laptopQueue) {
        //console.log(laptopQueue[t]["Item Weight"]);
        if (laptopQueue[t]["Item Weight"] < min || laptopQueue[t]["Item Weight"] > max) {
            delete checkQueue[t];
        } else if (initialQueue[t] != undefined) {
            if (initialQueue[t]["Item Weight"] >= min && initialQueue[t]["Item Weight"] <= max) {
                checkQueue[t] = initialQueue[t];
            }
        } else if (initialQueue[t] == undefined) {
            if (laptopQueue[t]["Item Weight"] >= min && laptopQueue[t]["Item Weight"] <= max) {
                checkQueue[t] = laptopQueue[t];
            }
        }

    }
    mainContainer = document.getElementById("laptopContainer");
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.lastChild);
    }
    for (var t in checkQueue) {
        showLaptopsInQueue(checkQueue[t]);
    }
    c = 0;
    r = 0;
    initialQueue = checkQueue;
}

function CPUFilter() {
    var manuQ = [];
    for (var t in laptopQueue) {
        manuQ[t] = laptopQueue[t];
    }
    var Intel = document.getElementById("Intel");
    //console.log(Intel);
    Intel.onchange = function() {
        if (Intel.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/Intel/gi);
                console.log(laptopQueue[t]["Processor Brand"]);
                console.log(res);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/Intel/gi);
                console.log(res);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }

        var AMD = document.getElementById("AMD");
    //console.log(Intel);
    AMD.onchange = function() {
        if (AMD.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/AMD/gi);
                console.log(laptopQueue[t]["Processor Brand"]);
                console.log(res);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/AMD/gi);
                console.log(res);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }

        var Exynos = document.getElementById("Exynos");
    //console.log(Intel);
    Exynos.onchange = function() {
        if (Exynos.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/Samsung/gi);
                //console.log(laptopQueue[t]["Processor Brand"]);
                //console.log(res);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/Samsung/gi);
                console.log(res);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }

            var ARM = document.getElementById("ARM");
    //console.log(Intel);
    ARM.onchange = function() {
        if (ARM.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/ARM/gi);
                //console.log(laptopQueue[t]["Processor Brand"]);
                //console.log(res);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Processor Brand"].match(/ARM/gi);
                console.log(res);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        //console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);
            console.log(manuQ[t]);
        }
        c = 0;
        r = 0;
    }

}



function screenSizeFilter(min, max) {
    for (var t in laptopQueue) {
        //console.log(laptopQueue[t]["Item Weight"]);
        if (laptopQueue[t]["Screen Size"] < min || laptopQueue[t]["Screen Size"] > max) {
            delete checkQueue[t];
        } else if (initialQueue[t] != undefined) {
            if (initialQueue[t]["Screen Size"] >= min && initialQueue[t]["Screen Size"] <= max) {
                checkQueue[t] = initialQueue[t];
            }
        } else if (initialQueue[t] == undefined) {
            if (laptopQueue[t]["Screen Size"] >= min && laptopQueue[t]["Screen Size"] <= max) {
                checkQueue[t] = laptopQueue[t];

            }
        }

    }
    mainContainer = document.getElementById("laptopContainer");
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.lastChild);
    }
    for (var t in checkQueue) {
        showLaptopsInQueue(checkQueue[t]);
    }
    c = 0;
    r = 0;
    initialQueue = checkQueue;

}

function OSFilter() {
    var manuQ = [];
    for (var t in laptopQueue) {
        manuQ[t] = laptopQueue[t];
    }
    var Windows = document.getElementById("Windows");
    //console.log(Intel);
    Windows.onchange = function() {
        if (Windows.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Operating System"].match(/Windows/gi);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Operating System"].match(/Windows/gi);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);

        }
        c = 0;
        r = 0;
    }

        var OS = document.getElementById("OS X");
    //console.log(Intel);
    OS.onchange = function() {
        if (OS.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Operating System"].match(/OS X/gi);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Operating System"].match(/OS X/gi);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);

        }
        c = 0;
        r = 0;
    }

        var Chrome = document.getElementById("Chrome");
    //console.log(Intel);
    Chrome.onchange = function() {
        if (Chrome.checked) {
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Operating System"].match(/Chrome/gi);
                if (res != null) {
                    manuQ[t] = laptopQueue[t];
                }
            }
        } else {
            //console.log("not checked");
            for (var t in laptopQueue) {
                var res = laptopQueue[t]["Operating System"].match(/Chrome/gi);
                if (res != null) {
                    delete manuQ[t];
                }
            }

        }
        console.log(manuQ);
        mainContainer = document.getElementById("laptopContainer");
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.lastChild);
        }
        for (var t in manuQ) {
            showLaptopsInQueue(manuQ[t]);

        }
        c = 0;
        r = 0;
    }

}

function sortLaptops(event) {
    console.log("sorting laptops:");
    console.log(event);

    var sortBy = event.target.value;
    sortLaptopsBy(sortBy);
}

function sortLaptopsBy(sortBy) {
    // sort the laptops by the selection the user chose
    mainContainer = document.getElementById("laptopContainer");
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.lastChild);
    }
    var sortTitleList = [];
    for (var n in laptopQueue) {

        sortTitleList[n] = laptopQueue[n].title.toLowerCase();
    }

    console.log(laptopQueue);
    switch (sortBy) {
        case "name":
            sortTitleList.sort();
            //console.log(sortTitleList)
            for (var t in sortTitleList) {
                for (var m in AmazonLaptopsInfoDic) {
                    if (sortTitleList[t] == AmazonLaptopsInfoDic[m].title.toLowerCase()) {
                        showLaptopsInQueue(AmazonLaptopsInfoDic[m]);
                    }
                }
            }
            c = 0;
            r = 0;
            break;

        case "rating":
            var ratingList = {};
            for (var t in laptopQueue) {
                ratingList[laptopQueue[t].title] = laptopQueue[t].rating;
            }
            //console.log(ratingList);
            sortTitleList = [];
            //console.log(ratingList);
            for (var rating in ratingList) {
                sortTitleList.push([rating, ratingList[rating]]);
                //console.log(sortTitleList);
            }

            sortTitleList.sort(function(a, b) {
                //console.log(a);
                //console.log(b);
                if (a[1] < b[1]) return -1;
                if (a[1] > b[1]) return 1;
                return 0;
            });
            //console.log(sortTitleList);
            for (var t in sortTitleList) {
                for (var m in AmazonLaptopsInfoDic) {
                    if (sortTitleList[sortTitleList.length - 1 - t][0] == AmazonLaptopsInfoDic[m].title) {
                        showLaptopsInQueue(AmazonLaptopsInfoDic[m]);
                    }
                }
            }
            c = 0;
            r = 0;
            break;

        case "lowP":
            var priceList = {};
            for (var t in laptopQueue) {
                priceList[laptopQueue[t].title] = laptopQueue[t].price;
            }
            //console.log(ratingList);
            sortTitleList = [];
            //console.log(ratingList);
            for (var price in priceList) {
                sortTitleList.push([price, priceList[price]]);
                //console.log(sortTitleList);
            }

            sortTitleList.sort(function(a, b) {
                //console.log(a);
                //console.log(b);
                if (a[1] < b[1]) return -1;
                if (a[1] > b[1]) return 1;
                return 0;
            });
            //console.log(sortTitleList);
            for (var t in sortTitleList) {
                for (var m in AmazonLaptopsInfoDic) {
                    if (sortTitleList[t][0] == AmazonLaptopsInfoDic[m].title) {
                        showLaptopsInQueue(AmazonLaptopsInfoDic[m]);
                    }
                }
            }
            c = 0;
            r = 0;
            break;
                    case "highP":
            var priceList = {};
            for (var t in laptopQueue) {
                priceList[laptopQueue[t].title] = laptopQueue[t].price;
            }
            //console.log(ratingList);
            sortTitleList = [];
            //console.log(ratingList);
            for (var price in priceList) {
                sortTitleList.push([price, priceList[price]]);
                //console.log(sortTitleList);
            }

            sortTitleList.sort(function(a, b) {
                //console.log(a);
                //console.log(b);
                if (a[1] < b[1]) return -1;
                if (a[1] > b[1]) return 1;
                return 0;
            });
            //console.log(sortTitleList);
            for (var t in sortTitleList) {
                for (var m in AmazonLaptopsInfoDic) {
                    if (sortTitleList[sortTitleList.length - 1 - t][0] == AmazonLaptopsInfoDic[m].title) {
                        showLaptopsInQueue(AmazonLaptopsInfoDic[m]);
                    }
                }
            }
            c = 0;
            r = 0;
            break;
    }


}


