/**
 * Created by kmu on 01.11.2016.
 */

function load() {
    //var adam_def = JSON.parse('adam');
    $.getJSON("adam.json", function (adam_def) {
        alert(adam_def.ADAM.SensitivityToTriggers.Unreactive.natural_trigger);
        adam_def.ADAM.SpatialDistribution.appendTo( "body" );
    });
}