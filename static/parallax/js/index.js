/** index.js
* jQuery dynamically added content only
*/

const skills = [
    {
        "name": "HTML/CSS",
        "level": 4
    },
    {
        "name": "jQuery",
        "level": 2
    },
    {
        "name": "Sketch",
        "level": 4
    },
    {
        "name": "Photoshop",
        "level": 3
    },
    {
        "name": "Illustrator",
        "level": 2
    },
    {
        "name": "Origami Studio",
        "level": 4
    },
    {
        "name": "Flinto",
        "level": 3
    }
];

$(document).ready(function(){
//    //display warning
//    let warning = $("<div id='warning'><div class='caption'><h1>Caution</h1><p>Due to the nature of this site its best viewed on bigger window sizes :)</p><a>proceed >></a></div></div>")
////        .text("warningss")
//        .css("display","none");
//    $("body").append(warning);
//    $(window).resize( function() {
//        console.log("showing");
//        if( $(window).width() < 957 ){
//            warning.css("display","block");
//        } else{
//            warning.css("display","none");
//        }
//    });
    
    
    //insert cldbar
    skills.forEach(function(e,i){
        var skillbar = $("<div class='skill-bar'><div class='cld-bar-cover'><div class='cld-bar'></div></div></div>");

        let j = e.level;
        while(j>0){
            $("<img/>").attr("src","img/cldpff.svg").appendTo(skillbar.children().children());
            j--;
        };
        $("<img/>").attr("src","img/jet"+(i+1)+".svg").appendTo(skillbar.children().children());

        skillbar
            .appendTo("#skills")
            .append("<h4>"+e.name+"</h4>");

    });
})