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
        "name": "C/C++",
        "level": 4
    }
];

skills.forEach(function(e,i){
    var skillbar = $("<div class='skill-bar'><div class='cld-bar-cover'><div class='cld-bar'></div></div></div>");
    
    $("<img/>").attr("src","img/jet"+(i+1)+".svg").appendTo(skillbar.children().children());
    let j = e.level;
    while(j>0){
        $("<img/>").attr("src","img/cldpff.svg").appendTo(skillbar.children().children());
        j--;
    };
    
    skillbar
        .appendTo("#skills")
        .append("<h4>"+e.name+"</h4>");
    
});