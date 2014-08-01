// ==UserScript==
// @name       Global Passport
// @namespace    https://rawgit.com/wlemmon/gfba/master/global-passport.user.js
// @downloadURL  https://rawgit.com/wlemmon/gfba/master/global-passport.user.js
// @updateURL    https://rawgit.com/wlemmon/gfba/master/global-passport.user.js
// @version    0.1
// @description  enter something useful
// @include     /^https?://sellercentral-ags-eu\.integ\.amazon\.com/.*$/
// @require  https://code.jquery.com/jquery-1.11.1.min.js
// @copyright  2012+, You
// ==/UserScript==

$(document).ready( 
    function(){
    	$("#sc-top-nav-root").append(
            '<li class="sc-level1 sc-drop-nav sc-hover-nav "> \
                 <!--[if IE 6]><iframe src="javascript:false;" class="sc-nav-iframeShim"></iframe><![endif]--> \
                 <a href="'+location.origin+'/gp/global-selling/global-passport" class="sc-menu-trigger sc-tab-a">Global Passport</a></li>');
    });
