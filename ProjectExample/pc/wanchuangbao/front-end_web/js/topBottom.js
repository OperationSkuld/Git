$(document).ready(function(){
    $(".navBox li").click(function(){
        var $this = $(this),
            $thisASiblings = $this.parents("a").siblings("a").find("li");
        $this.attr("class","navBorder2");
        $thisASiblings.attr("class","navBorder1");
    });
})