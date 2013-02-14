
    $(function(){
        var slider = new Slider("#slider").setDuration(3000);
        slider.setSize(400, 400);
        var transitions = ['squares', 'circles', 'circle', 'diamond', 'verticalSunblind', 'verticalOpen', 'clock', 'transition-flip', 'transition-left', 'transition-zoomout'];
        // setInterval(function() {
        //     var transition = transitions[ Math.floor( Math.random() * transitions.length)];
        //     if(SliderTransitionFunctions[transition]) {
        //         slider.setTransitionFunction( SliderTransitionFunctions[ transition ]);
        //     } else {
        //         slider.setTransition(transition);
        //     }
        // }, 5555);
        // var url = "hearstAPI.php";
        var sliderJson = {};
        var jsonItems = {};
//          slider.setPhotos(jsonItems);
        
        
   });
   
    (function( $ ){
        "use strict";
            $.getImages= function getImages( options, fn ){
                var ajaxOptions = {
                    url: 'http://hearst.api.mashery.com/ArticleImage/search',
                jsonp: '_callback',
                dataType: 'jsonp',
                cache: true
            };
                var validArgs = [
                    'article_category_id', 'article_id', 'article_section_id', 'article_source_id',
                    'article_template_id', 'article_type_id', 'author_id', 'body', 'caption', 
                    'creation_date_begin',
                    'creation_date_end', 'flow_id', 'import_ucid', 'is_an_import', 'issue_date',
                    'keywords', 'last_updated_by', 'last_updated_date_begin', 'last_updated_date_end',
                    'limit', 'print_issue_date', 'publish_date_begin', 'publish_date_end', 'published_only',
                    'rights_for_syndicate_id', 'shape', 'site_id', 'sort', 'start', 'sub_heading', 'api_key',
                    'ad_category_id', 'teaser', 'title', 'url_name', 'verbose', '_debug', '_pretty', '_callback'
                ], validArgCount = 0; //keep track of valid options
            
                for ( var prop in options ){
                    if ( options.hasOwnProperty(prop) ){
                        if ( validArgs.indexOf( prop ) > -1 ){
                            validArgCount++; //increment the number of valid args we have
                        } else {
                            console.warn('getImages: ' + prop + ' is not a valid option.');
                            delete options[ prop ];
                        }
                    }
                }
                //if we dont have at least one valid arg, throw an error
                if ( validArgCount < 1 ){ throw new Error('getArticles: Invalid Options'); }
                //add the arguments and the callback to the ajax options
                
                $.extend( ajaxOptions, {
                data:    options,
                success: ( $.isFunction(fn) ) ? fn : $.noop
            });
            return $.ajax( ajaxOptions );
        };
    })( jQuery );


(function($){
        
    var options = {
        api_key: 'fb9ub8896njk5ghyrkn7praz',
            site_id: 817,
            limit: 10,
            caption: 'street chic',
            start: 0,
            shape: 'full'
        };
            
        var photoItems = getImages();
                    
    function getImages(){
        var xhr = $.getImages( options );
        xhr.done(function(json){
            var photoItems = $.map(
                json.items,
                function(article){
                    var desc = article.description;
                    if(article.credit != "") { desc = "<a href=\"\#\"\>" + "Buy?" + "\<\/a>" }
                    return {
                        link: '',
                        src: article.url,
                        name: desc
                    }
                });
                var slider = new Slider("#slider").setDuration(4000);
                // var slider1 = new Slider("#slider1").setDuration(4000);
                // var slider = new Slider("#slider").setDuration(4000);
                // var slider = new Slider("#slider").setDuration(4000);
                // // slider.setSize(550, 800);
                slider.setSize(487, 617);
                // slider.setSize(609, 765);
                var transitions = ['transition-zoomout'];
                setInterval(function() {
                    var transition = transitions[ Math.floor( Math.random() * transitions.length)];
                    
                }, 5555);
                slider.setPhotos(photoItems);

                return photoItems;
            }
        );
    }
    
    
   })(jQuery);