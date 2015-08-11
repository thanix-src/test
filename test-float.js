var searchFloat = (function() {
    
    var $ = null; 
    
    function init() {
        if (!window.jQuery) {
            //load jQuery here
            console.log('no jQuery found!');
        } else {
            console.log('jQuery found.');
            $ = window.jQuery; 
            $('.pull-right > .nav-item').text('Retail');
        }
    }

    function changeStuff() {

    }

    return {
        init: init, 
        change: changeStuff
    };

})();

window.onLoad(searchFloat.init);
