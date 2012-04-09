$(document).ready(function() {
    var paper = new ScaleRaphael('vietnammap', '1220.464', '1913.021'); 
    paper.scaleAll(0.3);

    paper.setStart();

    for (var province in vietnam.shapes) {
        paper.path(vietnam.shapes[province]).attr({
            stroke: "#FEFEFE", 
            fill: "#DFDFDF", 
            "stroke-width": .2,
            "stroke-linejoin": "round", 
            "stroke-opacity": 0.25
        });
    } 

    var vn = paper.setFinish();   

    var over = function () {
            this.c = this.c || this.attr("fill");
            this.stop().animate({fill: "#AAA"}, 300);
        },
        out = function () {
            this.stop().animate({fill: this.c}, 300);
        };

    vn.hover(over, out);    
});