/**
 * Created by kmu on 01.11.2016.
 */

function loadAdam() {
    $.getJSON("adam.json", function (adam_defs) {
        //alert(adam_def.ADAM.SensitivityToTriggers.Unreactive.natural_trigger);
        $("<div>" + adam_def.ADAM.SpatialDistribution.Isolated.density+ "</div>").appendTo( "body" );
    });
}

function setCMAH() {
    $.getJSON("adam.json", function (adam_defs) {
        $("#sensitivity_label").text(adam_defs.CMAH.sensitivity_to_triggers.label);
    });
}