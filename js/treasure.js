var getRandomNumber=function(size) {
    return Math.floor(Math.random() * size);
};

var getDistance =function (event, target) {
     var diffX = event.offsetX - target.x;
     var diffY =event.offsetY - target.y;
     return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function(distance) {
    if (distance< 10) {
            return "Обпалишся!";
        } else if (distance < 20) {
            return "Дуже гаряче";
        }else if (distance < 40) {
            return "Гаряче!";
        }else if (distance < 80) {
            return "Тепло!";
        }else if (distance < 160) {
            return "Холодно!";
        } else if (distance < 320) {
            return "Дуже холодно!";
        } else {
            return "Замерзнеш!";
        }
};

    var width=500;
    var height=500;
    var clicks=0;

var  target= {
          x: getRandomNumber(width),
          y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 8) {
    alert("Скарб знайдено! Зроблено кліків: " + clicks);
    }
});