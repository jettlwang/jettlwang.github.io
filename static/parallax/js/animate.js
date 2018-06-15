/** animate.js
* skrollr related animation
*/

const animation = [
    {
        "id" : "#blnb",
        "trigger" : "#profile",
        "still" : "(-40%,0)",
        "xPre" : "(50%,0)",
        "xPost" : "(-150%,0)" //TODO
    }

]

$(document).ready(function(){
    
    
    function setAni(id,startX,startY,endX,endY) {
        $(id).attr("data-bottom-top", "-webkit-transform: translate(" + startX + "%," + startY + "%);" );
        $(id).attr("data-top-bottom", "-webkit-transform: translate(" + endX + "%," + endY + "%);" );
    }
    
    animation.forEach(function(e) {
        console.log(e.id);
        $(e.id).attr({
            "data-anchor-target" : e.trigger,
            "data-bottom-top" : "-webkit-transform: translate" +e.pre+ ";",
            "data-center" : "-webkit-transform: translate" + e.still +";",
            "data-top-bottom" : "-webkit-transform: translate"+e.post+";"
        });
    });
    
//    setAni("#blnb",50,0,-100,0);
    
//    setAni("#bln1",0,0,0,-20);
//    setAni("#bln2",0,0,0,-150);
//    setAni("#bln3",0,0,0,-300);
    
    setAni("#cld1",0,0,-30,0);
    setAni("#cld2",-20,0,40,0);
    setAni("#cld3",10,0,-30,0);
    setAni("#cld4",20,0,-40,0);
    setAni("#cld5",-20,0,20,0);
    
    setAni("#cld-sm1",-20,0,80,0);
    setAni("#cld-sm2",40,0,-30,0);
    setAni("#cld-sm3",50,0,-40,0);
    setAni("#cld-sm4",-20,0,40,0);
    
    setAni("#hashtags img",0,0,400,300);
    
    
    s.refresh();
    
    

    

});