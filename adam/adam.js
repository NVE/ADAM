/**
 * Created by kmu on 01.11.2016.
 */

var CMAH_def = {

    "sensitivity_to_triggers": {
        "label": "Sensitivity to triggers",
        "unreactive": {
            "label": "Un-reactive",
            "natural_trigger": "No avalanches",
            "human_trigger": "No avalanches"
        },
        "stubborn": {
            "label": "Stubborn",
            "natural_trigger": "Few",
            "human_trigger": "Difficult to trigger"
        },
        "reactive": {
            "label": "Reactive",
            "natural_trigger": "Several",
            "human_trigger": "Easy to trigger"
        },
        "touchy": {
            "label": "Touchy",
            "natural_trigger": "Numerous",
            "human_trigger": " Triggering almost certain"
        }
    },

    "spatial_distribution": {
        "label": "Spatial distribution",
        "classes": {
            "isolated": {
                "label": "Isolated",
                "description_1": "The instability is spotty and found in only a few terrain features.",
                "description_2": "Evidence is rare and hard to find."
            },
            "specific": {
                "label": "Specific",
                "description_1": "The instability exists in terrain features with common characteristics.",
                "description_2": "Evidence exists but is not always obvious."
            },
            "widespread": {
                "label": "Widespread",
                "description_1": "The instability is found in many locations and terrain features.",
                "description_2": "Evidence is everywhere and easy to find."
            }
        }
    }
};

function setLabels(ADAMlabels) {
    /*
     $("#").text(ADAMlabels.);
     */

// Setting up ADAM
    //Spatial distribution
    $("#widespread_l").text(ADAMlabels.spatial_distribution.classes.widespread.label);
    $("#specific_l").text(ADAMlabels.spatial_distribution.classes.specific.label);
    $("#isolated_l").text(ADAMlabels.spatial_distribution.classes.isolated.label);

    //Sensitivity to triggers
    $("#sensitivity_l").text(ADAMlabels.sensitivity_to_triggers.label);
    $("#touchy_l").text(ADAMlabels.sensitivity_to_triggers.touchy.label);
    $("#reactive_l").text(ADAMlabels.sensitivity_to_triggers.reactive.label);
    $("#stubborn_l").text(ADAMlabels.sensitivity_to_triggers.stubborn.label);
    $("#unreactive_l").text(ADAMlabels.sensitivity_to_triggers.unreactive.label);

// Setting up the modals
    var sdc = ADAMlabels.spatial_distribution.classes;
    var i;
    for (i in sdc) {

        $("body").append(
            "<div id=\"modal" + sdc[i].label + "\" class=\"modal fade\" role=\"dialog\">" +
            "<div class=\"modal-dialog\">" +
            "<div class=\"modal-content\">" +
            "<div class=\"modal-header cmah_color\">" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>" +
            "<h4 class=\"modal-title\">Spatial Distribution: <u>" + sdc[i].label + "</u></h4>" +
            "</div>" +
            "<div class=\"modal-body\">" +
            "<p>" + sdc[i].description_1 + "</p>" +
            "<p>" + sdc[i].description_2 + "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        );
    }

}


$(document).ready(function () {
        //var ADAMlabels = CMAH_def;

        setLabels(CMAH_def);

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
    }
);

/*


 var adamdefs;
 $.getJSON("adam.json", function (json) {
 adamdefs = json;
 });


 function setLabel() {
 $("#humanTrigger").text(CMAH_def.sensitivity_to_triggers.stubborn);
 }

 function loadAdam() {
 $.getJSON("adam.json", function (adam_defs) {
 //alert(adam_def.ADAM.SensitivityToTriggers.Unreactive.natural_trigger);
 $("#sd").text(adam_def.ADAM.SpatialDistribution.Isolated.density);
 });
 };

 function setCMAH() {
 $.getJSON("adam.json", function (adam_defs) {
 $("#sensitivity_label").text(adam_defs.CMAH.sensitivity_to_triggers.label);
 });
 }


 var adam_def = (function () {
 var json = null;
 $.getJSON("adam.json", function (data) {
 json = data;
 });
 return json;
 })();

 */