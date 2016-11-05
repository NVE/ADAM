/**
 * Created by kmu on 04.11.2016.
 */


$(document).ready(function () {
    // Get JSON-formatted data from the server
    $.getJSON("adam.json", function (adam) {
        $('th').click(function () {

            //var ele = document.getElementById("specific_density");
            //$(ele).text(adam.ADAM.SpatialDistribution);
            $("div#modal_specific").html(
                "<div class='modal-dialog'> \
                    <!-- Modal content--> \
                    <div class='modal-content'> \
                        <div class='modal-header cmah_color'> \
                            <button type='button' class='close' data-dismiss='modal'>&times;</button> \
                            <h4 class='modal-title'>Spatial Distribution: <u>" + adam.ADAM.spatial_distribution.specific.name + "</u></h4> \
                        </div> \
                        <div class='modal-body'> \
                            <p id='specific_density'><b>Density:</b> " + adam.ADAM.spatial_distribution.specific.density + "</p> \
                            <p><b>Evidence:</b> " + adam.ADAM.spatial_distribution.specific.evidence + "</p> \
                        </div> \
                        <div class='modal-header eaws_color'> \
                            <h4 class='modal-title'>Spatial Distribution: <u>Some</u></h4> \
                        </div> \
                        <div class='modal-body'> \
                            <p>Over 30% of the potential avalanche terrain is considered unstable.</p> \
                        </div> \
                    </div> \
                </div>"
            );
            // console.log(adam);
            // $("div").hide();
        });
    });

    // change border color when hovering over a td element
    $("td").hover(function () {
            $(this).css("opacity", "0.5");
            // $(this).css("border-width", "5px");
        },
        function () {
            $(this).css("opacity", "1.0");
            // $(this).css("border-width", "1px");
        });
});