/**
 * Created by kmu on 04.11.2016.
 */


$(document).ready(function () {
    // Get JSON-formatted data from the server
    $.getJSON("adam.json", function (adam) {
        var ele = document.getElementById("specific_density");
        $(ele).text("TEST");


    }
    //$( "<p id=\"#specific_density\">").text(adam.ADAM.SpatialDistribution.Specific.Density);

    // Log each key in the response data
    // $("div#field_name").text(fieldName);

    $("button").click(function () {
        $("p").hide();
    });
});