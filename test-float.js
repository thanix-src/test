var searchFloat = (function() {
    
    var $ = null; 
    
    function init() {
        if (!window.jQuery) {
            //load jQuery here
            console.log('no jQuery found!');
        } else {
            console.log('jQuery found.');
            $ = window.jQuery; 
            //$('.pull-right > .nav-item').text('Retail');
            $('#head-top-bg label:contains("Search")').text('Birch');
            var searchWrap = $('#global-header .menu-wrapper').html();
            //$('#head-top-bg').appendTo(searchWrap);
            searchWrap.appendTo('#head-top-bg');
        }
    }

    function changeStuff() {

    }

    return {
        init: init, 
        change: changeStuff
    };

})();

searchFloat.init();
