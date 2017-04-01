//图片列表左右轮播配置js

stepcarousel.setup({
galleryid: 'mygallery', //id of carousel DIV
beltclass: 'belt', //class of inner "belt" DIV containing all the panel DIVs
panelclass: 'panel', //class of panel DIVs each holding content
panelbehavior: {speed:300, wraparound:true, persist:true},
autostep: {enable:false, moveby:4, pause:1000},
defaultbuttons: {enable: true, moveby: 4, leftnav: ['images/arrow_left.png', 0, 80], rightnav: ['images/arrow_right.png', -11, 80]},
statusvars: ['statusA', 'statusB', 'statusC'], //register 3 variables that contain current panel (start), current panel (last), and total panels
contenttype: ['inline'], //content setting ['inline'] or ['external', 'path_to_external_file']
oninit:function(){
isloaded=true
$("#displaycssbelt").css("visibility","visible");
}
})
