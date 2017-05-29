/**
 * Created by kmu on 01.11.2016.
 */


var CMAH_def = {
    "background_color": "rgb(0, 176, 240)",
    "sensitivity_to_triggers": {
        "label": "Sensitivity to triggers",
        "natural_trigger": "Natural trigger",
        "human_trigger": "Human trigger",
        classes: {
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


var ADAM_NO = [
    {//CMAH [0]
        "background_color": "rgb(0, 176, 240)",
        "likelihood_matrix": "Utløsningssannsynlighet",
        "danger_matrix": "Faregrad",

        "likelihoods": {
            label: "Utløsningssannsynlighet",
            classes: {
                "very_likley": "Meget sannsynlig",
                "likely": "Sannsynlig",
                "possible": "Mulig",
                "unlikely": "Lite sannsynlig"
            }
        },
        "sensitivity_to_triggers": {
            "label": "Snødekkestabilitet",
            "natural_trigger": "Naturlig utløste snøskred",
            "human_trigger": "Menneske utløste snøskred",
            classes: {
                "unreactive": {
                    "label": "God",
                    "natural_trigger": "Ingen snøskred",
                    "human_trigger": "Lite sannsynlig"
                },
                "stubborn": {
                    "label": "Sånn passe",
                    "natural_trigger": "Få",
                    "human_trigger": "Vanskelig å løse ut"
                },
                "reactive": {
                    "label": "Dårlig",
                    "natural_trigger": "Noen",
                    "human_trigger": "Lett å løse ut"
                },
                "touchy": {
                    "label": "Elendig",
                    "natural_trigger": "Mange",
                    "human_trigger": "Veldig lett å løse ut"
                }
            }
        },

        "spatial_distribution": {
            "label": "Utbredelse",
            "classes": {
                "isolated": {
                    "label": "Få",
                    "description_1": "Ustabil snø er lite utbredt og finnes kun i få (ofte ekstreme) heng.",
                    "description_2": "Faretegn er sjelden og/eller vanskelig å se."
                },
                "specific": {
                    "label": "Noen",
                    "description_1": "Ustabil snø finnes i terrengformasjoner med samme karakter.",
                    "description_2": "Faretegn forekommer med er ikke alltid tydelig."
                },
                "widespread": {
                    "label": "Mange",
                    "description_1": "Ustabil snø finnes i mange heng og terrengformasjoner.",
                    "description_2": "Det finnes mange og tydelige faretegn."
                }
            }
        },

        "avalanche_size": {
            "label": "Snøskredstørrelse",
            "classes": {
                "size_1": {
                    "label": "Str. 1",
                    "name": "Små",
                    "description": "Ufarlig ..."
                },
                "size_2": {
                    "label": "Str. 2",
                    "name": "Middels store",
                    "description": "Kan begrave, skade eller drepe et menneske..."
                },
                "size_3": {
                    "label": "Str. 3",
                    "name": "Store",
                    "description": "Når enden av henget ..."
                },
                "size_4": {
                    "label": "Str. 4",
                    "name": "Meget store",
                    "description": "Ødelegge..."
                },
                "size_5": {
                    "label": "Str. 5",
                    "name": "Ekstremt store",
                    "description": "Mother of all avalanches ..."
                }
            }

        }
    },
    {//EAWS [1]
        "background_color": "rgb(255, 0, 139)",
        "sensitivity_to_triggers": {
            "label": "Sensitivity to triggers",
            "natural_trigger": "Natural trigger",
            "human_trigger": "Human trigger",
            classes: {
                "unreactive": {
                    "label": "Generally from high additional load",
                    "natural_trigger": "No avalanches",
                    "human_trigger": "No avalanches"
                },
                "stubborn": {
                    "label": "Primarily from high additional load",
                    "natural_trigger": "Few",
                    "human_trigger": "Difficult to trigger"
                },
                "reactive": {
                    "label": "With low additional load possible",
                    "natural_trigger": "Several",
                    "human_trigger": "Easy to trigger"
                },
                "touchy": {
                    "label": "With low additional load probable",
                    "natural_trigger": "Numerous",
                    "human_trigger": " Triggering almost certain"
                }
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
                    "label": "Some",
                    "description_1": "The instability exists in terrain features with common characteristics.",
                    "description_2": "Evidence exists but is not always obvious."
                },
                "widespread": {
                    "label": "Many",
                    "description_1": "The instability is found in many locations and terrain features.",
                    "description_2": "Evidence is everywhere and easy to find."
                }
            }
        }
    }
];


var EAWS_def = {
    "background_color": "rgb(255, 0, 139)",
    "sensitivity_to_triggers": {
        "label": "Sensitivity to triggers",
        "natural_trigger": "Natural trigger",
        "human_trigger": "Human trigger",
        classes: {
            "unreactive": {
                "label": "Generally from high additional load",
                "natural_trigger": "No avalanches",
                "human_trigger": "No avalanches"
            },
            "stubborn": {
                "label": "Primarily from high additional load",
                "natural_trigger": "Few",
                "human_trigger": "Difficult to trigger"
            },
            "reactive": {
                "label": "With low additional load possible",
                "natural_trigger": "Several",
                "human_trigger": "Easy to trigger"
            },
            "touchy": {
                "label": "With low additional load probable",
                "natural_trigger": "Numerous",
                "human_trigger": " Triggering almost certain"
            }
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
                "label": "Some",
                "description_1": "The instability exists in terrain features with common characteristics.",
                "description_2": "Evidence exists but is not always obvious."
            },
            "widespread": {
                "label": "Many",
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
    $("#likelihood_matrix_l").text(ADAMlabels.likelihood_matrix);
    $("#danger_matrix_l").text(ADAMlabels.danger_matrix);

    //Spatial distribution
    $("#spatial_distribution_l").text(ADAMlabels.spatial_distribution.label);
    $("#widespread_l").text(ADAMlabels.spatial_distribution.classes.widespread.label);
    $("#specific_l").text(ADAMlabels.spatial_distribution.classes.specific.label);
    $("#isolated_l").text(ADAMlabels.spatial_distribution.classes.isolated.label);

    //Sensitivity to triggers
    $("#sensitivity_l").text(ADAMlabels.sensitivity_to_triggers.label);
    $("#touchy_l").html("<p data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click for definitions\">" + ADAMlabels.sensitivity_to_triggers.classes.touchy.label + "</p>");
    $("#reactive_l").text(ADAMlabels.sensitivity_to_triggers.classes.reactive.label);
    $("#stubborn_l").text(ADAMlabels.sensitivity_to_triggers.classes.stubborn.label);
    $("#unreactive_l").text(ADAMlabels.sensitivity_to_triggers.classes.unreactive.label);

    //Likelihood of triggering
    $('#likelihood_triggering_l').text(ADAMlabels.likelihoods.label)
    $(".vl").text(ADAMlabels.likelihoods.classes.very_likley);
    $(".li").text(ADAMlabels.likelihoods.classes.likely);
    $(".po").text(ADAMlabels.likelihoods.classes.possible);
    $(".ul").text(ADAMlabels.likelihoods.classes.unlikely);

    //Avalanche sizes
    $("#avalanche_size_l").text(ADAMlabels.avalanche_size.label);
    $("#size_1").text(ADAMlabels.avalanche_size.classes.size_1.label);
    $("#size_2").text(ADAMlabels.avalanche_size.classes.size_2.label);
    $("#size_3").text(ADAMlabels.avalanche_size.classes.size_3.label);
    $("#size_4").text(ADAMlabels.avalanche_size.classes.size_4.label);
    $("#size_5").text(ADAMlabels.avalanche_size.classes.size_5.label);

    $('.tbl_frame').css("background", ADAMlabels.background_color);


    $('.tbl_cell').mouseenter(function () {
        $(this).css({
            background: ADAMlabels.background_color
        });
        $('.dm_not_vl').css({
            background: ADAMlabels.background_color
        });
    });
    $('.tbl_cell').mouseleave(function () {
        $(this).css({
            background: 'rgb(50, 50, 50)'
        });
        // reset colors for DM cells
    });

    // TODO: remove the li-hover in adam.css and replace with the above solution - http://codepen.io/NatashaPrice/pen/ycFKv


// Setting up the modals
    //Spatial distribution
    var sdc = ADAMlabels.spatial_distribution.classes;
    var i;
    for (i in sdc) {

        $("body").append(
            "<div id=\"modal_" + i + "\" class=\"modal fade\" role=\"dialog\">" +
            "<div class=\"modal-dialog\">" +
            "<div class=\"modal-content\">" +
            "<div class=\"modal-header cmah_color\">" +
            "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>" +
            "<h4 class=\"modal-title\">" + ADAMlabels.spatial_distribution.label + ": <u>" + sdc[i].label + "</u></h4>" +
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


    //Spatial distribution
    var sttc = ADAMlabels.sensitivity_to_triggers.classes;
    for (i in sttc) $("body").append(
        "<div id=\"modal_" + i + "\" class=\"modal fade\" role=\"dialog\">" +
        "<div class=\"modal-dialog\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-header cmah_color\">" +
        "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>" +
        "<h4 class=\"modal-title\">" + ADAMlabels.sensitivity_to_triggers.label + ": <u>" + sttc[i].label + "</u></h4>" +
        "</div>" +
        "<div class=\"modal-body\">" +
        "<p><b>" + ADAMlabels.sensitivity_to_triggers.natural_trigger + ":</b> " + sttc[i].natural_trigger + "</p>" +
        "<p><b>" + ADAMlabels.sensitivity_to_triggers.human_trigger + ":</b> " + sttc[i].human_trigger + "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
}


$(document).ready(function () {

        setLabels(ADAM_NO[0]);

        $("#setCMAH").click(function () {
            setLabels(CMAH_def);
        });

        $("#setEAWS").click(function () {
            setLabels(EAWS_def);
        });

        $("#langNO").click(function () {
            setLabels(ADAM_NO[0]);
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