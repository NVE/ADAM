/**
 * Created by kmu on 01.11.2016.
 */

var ADAMcolors = {
    "CMAH_background": "rgb(0, 176, 240)",
    "EAWS_background": "rgb(255, 0, 139)",
    "selected": "rgb(237, 128, 136)",
    "dl1_background": "rgb(80, 184, 72)",
    "dl2_background": "rgb(255, 242, 0)",
    "dl3_background": "rgb(247, 148, 30)",
    "dl4_background": "rgb(237, 28, 36)",
    "dl5_background": "rgb(35, 31, 32)",
    "vl_background": "rgb(50, 50, 50)",
    "li_background": "rgb(100, 100, 100)",
    "po_background": "rgb(150, 150, 150)",
    "ul_background": "rgb(200, 200, 200)"
};

var ADAM_EN = [
    {//CMAH
        "background_color": ADAMcolors.CMAH_background,
        "drop_term": "Terminology",
        "drop_lang": "Language",
        "likelihood_matrix": "Likelihood Matrix",
        "danger_matrix": "Danger Matrix",

        "likelihoods": {
            "label": "Likelihood of triggering",
            "classes": {
                "very_likley": "Very likley",
                "likely": "Likely",
                "possible": "Possible",
                "unlikely": "Unlikely"
            }
        },
        "sensitivity_to_triggers": {
            "label": "Sensitivity to triggers",
            "natural_trigger": "Natural trigger",
            "human_trigger": "Human trigger",
            "classes": {
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
        },

        "avalanche_size": {
            "label": "Avalanche size",
            "description_1": "Damage potential",
            "description_2": "Run-out",
            "classes": {
                "size_1": {
                    "label": "Size 1",
                    "name": "Small",
                    "description_1": "Minimal danger of burying (danger of falling).",
                    "description_2": "Snow relocation typically stops before the end of a slope."
                },
                "size_2": {
                    "label": "Size 2",
                    "name": "Medium",
                    "description_1": "Could bury, injure or kill a person.",
                    "description_2": "Snow avalanche stops typically at the end of a slope."
                },
                "size_3": {
                    "label": "Size 3",
                    "name": "Large",
                    "description_1": "Could bury and destroy a car, damage a truck; destroy a small building or break a few trees.",
                    "description_2": "Snow avalanche could traverse flat terrain (considerably below 30°) over distances of less than 50 m."
                },
                "size_4": {
                    "label": "Size 4",
                    "name": "Very large",
                    "description_1": "Could bury and destroy a railway car, large truck, several buildings or a piece of forest.",
                    "description_2": "Snow avalanche traverses flat terrain (considerably below 30°) over distances more than 50 m and can reach valley ground."
                },
                "size_5": {
                    "label": "Size 5",
                    "name": "Extreme",
                    "description_1": "Could gouge the landscape; disastrous damage potential.",
                    "description_2": "Snow avalanche reaches valley ground; largest runout distance known."
                }
            }

        }
    },
    {//EAWS
        "background_color": ADAMcolors.EAWS_background,
        "drop_term": "Terminology",
        "drop_lang": "Language",
        "likelihood_matrix": "Likelihood Matrix",
        "danger_matrix": "Danger Matrix",

        "likelihoods": {
            "label": "Likelihood of triggering",
            "classes": {
                "very_likley": "Very likley",
                "likely": "Likely",
                "possible": "Possible",
                "unlikely": "Unlikely"
            }
        },
        "sensitivity_to_triggers": {
            "label": "Additional loading",
            "natural_trigger": "Natural trigger",
            "human_trigger": "Human trigger",
            "classes": {
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
        },
        
        "avalanche_size": {
            "label": "Avalanche size",
            "description_1": "Damage potential",
            "description_2": "Run-out",
            "classes": {
                "size_1": {
                    "label": "Size 1",
                    "name": "Small",
                    "description_1": "Minimal danger of burying (danger of falling).",
                    "description_2": "Snow relocation typically stops before the end of a slope."
                },
                "size_2": {
                    "label": "Size 2",
                    "name": "Medium",
                    "description_1": "Could bury, injure or kill a person.",
                    "description_2": "Snow avalanche stops typically at the end of a slope."
                },
                "size_3": {
                    "label": "Size 3",
                    "name": "Large",
                    "description_1": "Could bury and destroy a car, damage a truck; destroy a small building or break a few trees.",
                    "description_2": "Snow avalanche could traverse flat terrain (considerably below 30°) over distances of less than 50 m."
                },
                "size_4": {
                    "label": "Size 4",
                    "name": "Very large",
                    "description_1": "Could bury and destroy a railway car, large truck, several buildings or a piece of forest.",
                    "description_2": "Snow avalanche traverses flat terrain (considerably below 30°) over distances more than 50 m and can reach valley ground."
                },
                "size_5": {
                    "label": "Size 5",
                    "name": "Extreme",
                    "description_1": "Could gouge the landscape; disastrous damage potential.",
                    "description_2": "Snow avalanche reaches valley ground; largest runout distance known."
                }
            }

        }
    }
];


var ADAM_NO = [
    {//CMAH [0]
        "background_color": ADAMcolors.CMAH_background,
        "drop_term": "Terminologi",
        "drop_lang": "Språk",
        "likelihood_matrix": "Utløsningssannsynlighet",
        "danger_matrix": "Faregrad",

        "likelihoods": {
            "label": "Utløsnings- sannsynlighet",
            "classes": {
                "very_likley": "Meget sannsynlig",
                "likely": "Sannsynlig",
                "possible": "Mulig",
                "unlikely": "Lite sannsynlig"
            }
        },
        "sensitivity_to_triggers": {
            "label": "Snødekke- stabilitet",
            "natural_trigger": "Naturlig utløste snøskred",
            "human_trigger": "Menneske utløste snøskred",
            "classes": {
                "unreactive": {
                    "label": "God",
                    "natural_trigger": "Ingen snøskred",
                    "human_trigger": "Lite sannsynlig"
                },
                "stubborn": {
                    "label": "Sånn passe",
                    "natural_trigger": "Få / et par",
                    "human_trigger": "Vanskelig å løse ut"
                },
                "reactive": {
                    "label": "Dårlig",
                    "natural_trigger": "Flere",
                    "human_trigger": "Lett å løse ut"
                },
                "touchy": {
                    "label": "Elendig",
                    "natural_trigger": "Mange / tallrike",
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
                    "description_2": "Faretegn forekommer men er ikke alltid tydelig."
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
            "description_1": "Beskrivelse",
            "description_2": "Utløpsklassifisering",
            "classes": {
                "size_1": {
                    "label": "Str. 1",
                    "name": "Små",
                    "description_1": "Liten fare for å bli begravet (fare for å falle/bli revet med)",
                    "description_2": "Utglidning (sluff)"
                },
                "size_2": {
                    "label": "Str. 2",
                    "name": "Middels store",
                    "description_1": "Kan begrave, skade eller drepe et menneske.",
                    "description_2": "Stopper i selve henget"
                },
                "size_3": {
                    "label": "Str. 3",
                    "name": "Store",
                    "description_1": "Kan begrave og ødelegge biler, ødelegge hus eller knekke trær.",
                    "description_2": "Når enden av henget"
                },
                "size_4": {
                    "label": "Str. 4",
                    "name": "Svært store",
                    "description_1": "Kan ødelegge tog, flere hus eller skog.",
                    "description_2": "Krysser flate partier (<<30º) over avstander lengre enn 50 m; kan nå dalbunnen"
                },
                "size_5": {
                    "label": "Str. 5",
                    "name": "Ekstremt store",
                    "description_1": "Kan ødelegge bebyggelse og skog.",
                    "description_2": "Når dalbunnen."
                }
            }

        }
    },
    {//EAWS [1]
        "background_color": ADAMcolors.CMAH_background,
        "drop_term": "Terminologi",
        "drop_lang": "Språk",
        "likelihood_matrix": "Utløsningssannsynlighet",
        "danger_matrix": "Faregrad",

        "likelihoods": {
            "label": "Utløsnings- sannsynlighet",
            "classes": {
                "very_likley": "Meget sannsynlig",
                "likely": "Sannsynlig",
                "possible": "Mulig",
                "unlikely": "Lite sannsynlig"
            }
        },
        "sensitivity_to_triggers": {
            "label": "Nødvendig tilleggs- belastning",
            "natural_trigger": "Naturlig utløste snøskred",
            "human_trigger": "Menneske utløste snøskred",
            "classes": {
                "unreactive": {
                    "label": "Utløsning generelt kun mulig ved stor tilleggsbelastning",
                    "natural_trigger": "Ingen snøskred",
                    "human_trigger": "Lite sannsynlig"
                },
                "stubborn": {
                    "label": "Utløsning mulig, spesielt ved stor tilleggsbelastning",
                    "natural_trigger": "Få / et par",
                    "human_trigger": "Vanskelig å løse ut"
                },
                "reactive": {
                    "label": "Utløsning mulig, selv ved liten tilleggsbelastning",
                    "natural_trigger": "Flere",
                    "human_trigger": "Lett å løse ut av en person"
                },
                "touchy": {
                    "label": "Utløsning sannsynlig selv ved liten tilleggsbelastning",
                    "natural_trigger": "Mange / tallrike",
                    "human_trigger": "Veldig lett å løse ut av en person"
                }
            }
        },

        "spatial_distribution": {
            "label": "Utbredelse",
            "classes": {
                "isolated": {
                    "label": "I få brattheng",
                    "description_1": "Ustabil snø er lite utbredt og finnes kun i få (ofte ekstreme) heng.",
                    "description_2": "Faretegn er sjelden og/eller vanskelig å se."
                },
                "specific": {
                    "label": "I noen brattheng",
                    "description_1": "Ustabil snø finnes i terrengformasjoner med samme karakter.",
                    "description_2": "Faretegn forekommer men er ikke alltid tydelig."
                },
                "widespread": {
                    "label": "I mange brattheng",
                    "description_1": "Ustabil snø finnes i mange heng og terrengformasjoner.",
                    "description_2": "Det finnes mange og tydelige faretegn."
                }
            }
        },

        "avalanche_size": {
            "label": "Snøskredstørrelse",
            "description_1": "Beskrivelse",
            "description_2": "Utløpsklassifisering",
            "classes": {
                "size_1": {
                    "label": "Str. 1",
                    "name": "Små",
                    "description_1": "Liten fare for å bli begravet (fare for å falle/bli revet med)",
                    "description_2": "Utglidning (sluff)"
                },
                "size_2": {
                    "label": "Str. 2",
                    "name": "Middels store",
                    "description_1": "Kan begrave, skade eller drepe et menneske.",
                    "description_2": "Stopper i selve henget"
                },
                "size_3": {
                    "label": "Str. 3",
                    "name": "Store",
                    "description_1": "Kan begrave og ødelegge biler, ødelegge hus eller knekke trær.",
                    "description_2": "Når enden av henget"
                },
                "size_4": {
                    "label": "Str. 4",
                    "name": "Svært store",
                    "description_1": "Kan ødelegge tog, flere hus eller skog.",
                    "description_2": "Krysser flate partier (<<30º) over avstander lengre enn 50 m; kan nå dalbunnen"
                },
                "size_5": {
                    "label": "Str. 5",
                    "name": "Ekstremt store",
                    "description_1": "Kan ødelegge bebyggelse og skog.",
                    "description_2": "Når dalbunnen."
                }
            }

        }
    }
];


function setLabels(ADAMlabels) {
    /////////////////////
    // Setting up ADAM //
    /////////////////////
    $("#likelihood_matrix_l").text(ADAMlabels.likelihood_matrix);
    $("#danger_matrix_l").text(ADAMlabels.danger_matrix);

    //Spatial distribution
    $("#spatial_distribution_l").text(ADAMlabels.spatial_distribution.label);
    $("#widespread_l").text(ADAMlabels.spatial_distribution.classes.widespread.label);
    $("#specific_l").text(ADAMlabels.spatial_distribution.classes.specific.label);
    $("#isolated_l").text(ADAMlabels.spatial_distribution.classes.isolated.label);

    //Sensitivity to triggers
    $("#sensitivity_l").text(ADAMlabels.sensitivity_to_triggers.label);
    //$("#touchy_l").html("<p data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click for definitions\">" + ADAMlabels.sensitivity_to_triggers.classes.touchy.label + "</p>");
    $("#touchy_l").text(ADAMlabels.sensitivity_to_triggers.classes.touchy.label);
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


    // $('[data-toggle="collapse"]').click(function (e) {
    //     $(e.target).find('.icon-minus-sign, .icon-plus-sign').toggleClass("icon-minus-sign icon-plus-sign");
    // });


    ///////////////////////////////////////////////
    // Marking selected cells                    //
    // Uncomment lines below - work in progress  //
    ///////////////////////////////////////////////

    // $('#touchy-widespread').click(function () {
    //     $(this).css({border: "2px solid red"});
    //     //$('.li, .po, .ul').css({opacity: 0.2});
    //     $('#widespread_l, #touchy_l, #verylikely_l').css({background: ADAMcolors.selected});
    // });
    // $('td.vl').mouseleave(function () {
    //     //$(this).css({border: "1px solid black"});
    //     //$('.li, .po, .ul').css({opacity: 1});
    //     $('#widespread_l, #touchy_l, #verylikely_l').css({border: 1px solid red});
    //     // $('.dl1').css({background: ADAMcolors.dl1_background});
    //     // $('.dl2').css({background: ADAMcolors.dl2_background});
    //     // $('.dl3').css({background: ADAMcolors.dl3_background});
    //     // $('.dl4').css({background: ADAMcolors.dl4_background});
    //     // $('.dl5').css({background: ADAMcolors.dl5_background});
    // });

    ////////////////////////////////
    // Control text in info-panel //
    ////////////////////////////////

    // Spatial distribution
    $('#isolated_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.spatial_distribution.label +
            ": <u>" + ADAMlabels.spatial_distribution.classes.isolated.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.spatial_distribution.classes.isolated.description_1 + "</p>" +
            "<p>" + ADAMlabels.spatial_distribution.classes.isolated.description_2 + "</p>"
        );
    });
    $('#isolated_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#specific_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.spatial_distribution.label +
            ": <u>" + ADAMlabels.spatial_distribution.classes.specific.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.spatial_distribution.classes.specific.description_1 + "</p>" +
            "<p>" + ADAMlabels.spatial_distribution.classes.specific.description_2 + "</p>"
        );
    });
    $('#specific_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#widespread_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.spatial_distribution.label +
            ": <u>" + ADAMlabels.spatial_distribution.classes.widespread.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.spatial_distribution.classes.widespread.description_1 + "</p>" +
            "<p>" + ADAMlabels.spatial_distribution.classes.widespread.description_2 + "</p>"// +
            // "<img src='images/distr_widespread.png'>"
        );
    });
    $('#widespread_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    // Sensitivity
    $('#touchy_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.sensitivity_to_triggers.label +
            ": <u>" + ADAMlabels.sensitivity_to_triggers.classes.touchy.label + "</u>"
        );
        $('#info-box-body').html(
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.natural_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.touchy.natural_trigger + "</p>" +
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.human_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.touchy.human_trigger + "</p>"
        );
    });
    $('#touchy_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#reactive_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.sensitivity_to_triggers.label +
            ": <u>" + ADAMlabels.sensitivity_to_triggers.classes.reactive.label + "</u>"
        );
        $('#info-box-body').html(
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.natural_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.reactive.natural_trigger + "</p>" +
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.human_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.reactive.human_trigger + "</p>"
        );
    });
    $('#reactive_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#stubborn_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.sensitivity_to_triggers.label +
            ": <u>" + ADAMlabels.sensitivity_to_triggers.classes.stubborn.label + "</u>"
        );
        $('#info-box-body').html(
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.natural_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.stubborn.natural_trigger + "</p>" +
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.human_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.stubborn.human_trigger + "</p>"
        );
    });
    $('#stubborn_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#unreactive_l').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.sensitivity_to_triggers.label +
            ": <u>" + ADAMlabels.sensitivity_to_triggers.classes.unreactive.label + "</u>"
        );
        $('#info-box-body').html(
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.natural_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.unreactive.natural_trigger + "</p>" +
            "<p><b>" + ADAMlabels.sensitivity_to_triggers.human_trigger + ":</b> " + ADAMlabels.sensitivity_to_triggers.classes.unreactive.human_trigger + "</p>"
        );
    });
    $('#unreactive_l').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    // Avalanche size
    $('#size_1').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.avalanche_size.label +
            ": <u>" + ADAMlabels.avalanche_size.classes.size_1.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.avalanche_size.classes.size_1.description_1 + "</p>" +
            "<p>" + ADAMlabels.avalanche_size.classes.size_1.description_2 + "</p>"
        );
    });
    $('#size_1').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#size_2').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.avalanche_size.label +
            ": <u>" + ADAMlabels.avalanche_size.classes.size_2.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.avalanche_size.classes.size_2.description_1 + "</p>" +
            "<p>" + ADAMlabels.avalanche_size.classes.size_2.description_2 + "</p>"
        );
    });
    $('#size_2').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#size_3').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.avalanche_size.label +
            ": <u>" + ADAMlabels.avalanche_size.classes.size_3.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.avalanche_size.classes.size_3.description_1 + "</p>" +
            "<p>" + ADAMlabels.avalanche_size.classes.size_3.description_2 + "</p>"
        );
    });
    $('#size_3').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#size_4').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.avalanche_size.label +
            ": <u>" + ADAMlabels.avalanche_size.classes.size_4.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.avalanche_size.classes.size_4.description_1 + "</p>" +
            "<p>" + ADAMlabels.avalanche_size.classes.size_4.description_2 + "</p>"
        );
    });
    $('#size_4').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });

    $('#size_5').mouseenter(function () {
        $('#info-box').css({visibility: "visible"});
        $('#info-box-heading').html(
            ADAMlabels.avalanche_size.label +
            ": <u>" + ADAMlabels.avalanche_size.classes.size_5.label + "</u>"
        );
        $('#info-box-body').html(
            "<p>" + ADAMlabels.avalanche_size.classes.size_5.description_1 + "</p>" +
            "<p>" + ADAMlabels.avalanche_size.classes.size_5.description_2 + "</p>"
        );
    });
    $('#size_5').mouseleave(function () {
        $('#info-box').css({visibility: "hidden"});
    });


    /////////////////////////////
    // Set the drop-down menus //
    /////////////////////////////
    $("#drop_term").html(ADAMlabels.drop_term + '<span class=\"caret\"></span>');
    $("#drop_lang").html(ADAMlabels.drop_lang + '<span class=\"caret\"></span>');

}


$(document).ready(function () {
        var term_select = 0;
        var ADAMlabels = ADAM_NO;

        $('#info-box').css({visibility: "hidden"});

        setLabels(ADAMlabels[term_select]);

        $("#setCMAH").click(function () {
            term_select = 0;
            setLabels(ADAMlabels[term_select]);
        });

        $("#setEAWS").click(function () {
            term_select = 1;
            setLabels(ADAMlabels[term_select]);
        });

        $("#langEN").click(function () {
            ADAMlabels = ADAM_EN;
            setLabels(ADAMlabels[term_select]);
        });

        $("#langNO").click(function () {
            ADAMlabels = ADAM_NO;
            setLabels(ADAMlabels[term_select]);
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