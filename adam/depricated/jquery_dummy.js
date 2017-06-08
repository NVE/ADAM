/**
 * Created by kmu on 04.11.2016.
 */


$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});