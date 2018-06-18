/** animate.js
* skrollr related animation
*/

const animation = [
    {
        "id" : "#blnb",
        "trigger" : "#profile",
        "still" : "(-40%,0)",
        "pre" : "(40%,0)",
        "post" : "(-120%,0)"
    },
    {
        "id" : "#bln1",
        "trigger" : "#education",
        "still" : "(0,0%)",
        "pre" : "(0,50%)",
        "post" : "(0,-50%)"
    },
    {
        "id" : "#bln2",
        "trigger" : "#education",
        "still" : "(0,40%)",
        "pre" : "(0,120%)",
        "post" : "(0,-100%)"
    },
    {
        "id" : "#bln3",
        "trigger" : "#education",
        "still" : "(0,0%)",
        "pre" : "(0,150%)",
        "post" : "(0,-200%)"
    },
    {
        "id" : "#cld1",
        "trigger" : "",
        "still" : "(50%,0)",
        "pre" : "(80%,0)",
        "post" : "(20%,0)"
    },
    {
        "id" : "#cld2",
        "trigger" : "",
        "still" : "(20%,0)",
        "pre" : "(5%,0)",
        "post" : "(45%,0)"
    },
    {
        "id" : "#cld3",
        "trigger" : "",
        "still" : "(40%,-10%)",
        "pre" : "(-5%,-10%)",
        "post" : "(75%,-10%)"
    },
    {
        "id" : "#cld4",
        "trigger" : "",
        "still" : "(40%,-15%)",
        "pre" : "(60%,-15%)",
        "post" : "(20%,-15%)"
    },
        {
        "id" : "#cld5",
        "trigger" : "",
        "still" : "(10%,-25%)",
        "pre" : "(-20%,-25%)",
        "post" : "(40%,-25%)"
    },
]

$(document).ready(function(){

    animation.forEach(function(e) {
        if(e.trigger){ $(e.id).attr( "data-anchor-target" , e.trigger) };
        $(e.id).attr({
            "data-bottom-top" : "-webkit-transform: translate" +e.pre+ ";",
//            "data-center" : "-webkit-transform: translate" + e.still +";",
            "data-top-bottom" : "-webkit-transform: translate"+e.post+";"
        });
    });
    
    $(".cld-bar").attr({
//        "data-anchor-target" : "#skills",
        "data-bottom-top" : "-webkit-transform: translateX(100%);",
        "data-70p-top-bottom" : "-webkit-transform: translate(0%);"
    });
    
    function setAni(id,startX,startY,endX,endY) {
        $(id).attr("data-bottom-top", "-webkit-transform: translate(" + startX + "%," + startY + "%);" );
        $(id).attr("data-top-bottom", "-webkit-transform: translate(" + endX + "%," + endY + "%);" );
    }
    

    
//    setAni("#blnb",50,0,-100,0);
    
//    setAni("#bln1",0,0,0,-20);
//    setAni("#bln2",0,0,0,-150);
//    setAni("#bln3",0,0,0,-300);
    
//    setAni("#cld1",0,0,-30,0);
//    setAni("#cld2",-20,0,40,0);
//    setAni("#cld3",10,0,-30,0);
//    setAni("#cld4",20,0,-40,0);
//    setAni("#cld5",-20,0,20,0);
//    
//    setAni("#cld-sm1",-20,0,80,0);
//    setAni("#cld-sm2",40,0,-30,0);
//    setAni("#cld-sm3",50,0,-40,0);
//    setAni("#cld-sm4",-20,0,40,0);
//    
    setAni("#hashtags img",0,0,400,300);
    
    
    s.refresh();
    
    

    

});