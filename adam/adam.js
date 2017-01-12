/**
 * Created by kmu on 01.11.2016.
 */

$(document).ready(function () {
    $("#setCMAH").click(function () {
        ADAMlables = CMAH_def;
        $("#sensitivity_label").text(ADAMlables.sensitivity_to_triggers.label);
    });
    $("#setEAWS").click(function () {
        ADAMlables = EAWS_def;
        $("#sensitivity_label").text("Additional loading");
    });
    $("#btn3").click(function () {
        $("#test3").val("Dolly Duck");
    });
});

/*

 function setLabel() {
 $("#humanTrigger").text(CMAH_def.sensitivity_to_triggers.stubborn);
 }

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

 */