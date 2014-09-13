/*
jQuery.RollOvers

[Usage]

jQuery(document).ready(function($){

    navRollOvers("img.navBtn");
    RollOvers("img.btn");

});// End

*/

// ナビゲーションImageロールオーバー  現在地のURLを判定して同じであれば_onを付ける + hoverで_onを付ける
function navRollOvers(target){
    $(target).each(function(i){
        var preLoadImg         = new Object();
        var url                = $(this).parent('a').attr('href');
        var imgSrc             = this.src;
        var sep                = imgSrc.lastIndexOf('.');
        var onSrc              = imgSrc.substr(0, sep) + '_on' + imgSrc.substr(sep, 4);
        var baseUrl            = location.href.match(/^https?:\/\/[^\/]+/)+'/';
        var currentUrl         = location.href;
        preLoadImg[imgSrc]     = new Image();
        preLoadImg[imgSrc].src = onSrc;
        if(location.href.match(url)){
            $(this).attr('src', onSrc);
            $(this).addClass("active");
        }
        else {
            $(this).hover(
                function() { this.src = onSrc; },
                function() { this.src = imgSrc; }
            );
        }
        if(location.href.match(url) == '/' && baseUrl !== currentUrl) {
            $(this).attr('src', imgSrc);
            $(this).addClass("active");
            $(this).hover(
                function() { this.src = onSrc; },
                function() { this.src = imgSrc; }
            );
        }
    });
}

// hoverで_onを付ける
function RollOvers(target){
    $(target).each(function(){
        var preLoadImg = new Object();
        var url = $(this).parent('a').attr('href');
        var imgSrc = this.src;
        var sep = imgSrc.lastIndexOf('.');
        var onSrc = imgSrc.substr(0, sep) + '_on' + imgSrc.substr(sep, 4);
        preLoadImg[imgSrc] = new Image();
        preLoadImg[imgSrc].src = onSrc;

            $(this).hover(
                function() { this.src = onSrc; },
                function() { this.src = imgSrc; }
            );
    });
}
