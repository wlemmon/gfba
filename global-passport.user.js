// ==UserScript==
// @name       Global Passport
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @include     /^https?://.*\.com(:\d+)?/gp/.*$/
// @copyright  2012+, You
// ==/UserScript==

$(document).ready( 
    function(){
    	$("#sc-top-nav-root").append(
            '<li class="sc-level1 sc-drop-nav sc-hover-nav "> \
                 <!--[if IE 6]><iframe src="javascript:false;" class="sc-nav-iframeShim"></iframe><![endif]--> \
                 <a href="https://'+document.domain+'/gp/global-selling/features/global-passport.html" class="sc-menu-trigger sc-tab-a">Global Passport</a></li>');
    });