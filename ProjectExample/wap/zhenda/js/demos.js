$(function () {
  'use strict';
  //picker
  $(document).on("pageInit", "#page-picker", function(e, id, page) {
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
        \
      </button>\
      <button class="button button-link pull-right close-picker">\
      确定\
      </button>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['不限','选项一', '选项二', '选项三', '选项四', '选项五', '选项六', '选项七', '选项八', '选项九', '选项十', '选项十一', '选项十二'],
          cssClass: 'picker-items-col-normal'
        }
      ]
    });
  });
  
  $(document).on("pageInit", "#page-city-picker", function(e) {
    $("#city-picker").cityPicker({
        value: ['不限', '不限']
        //value: ['四川', '内江', '东兴区']
    });
  });
  
  $.init();
});
