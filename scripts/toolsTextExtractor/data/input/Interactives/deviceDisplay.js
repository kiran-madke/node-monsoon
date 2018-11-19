$(document).ready(function () {
    setSectionWidth(screen.width);

    // show the sponsor image
    showSponsor();
});

$(window).on("orientationchange", function (event) {
    setSectionWidth(screen.width);
});

/**
 * function setting the width of the sections
 */
function setSectionWidth(deviceWidth) {

    // querying all the elements with class section
    var sections = document.querySelectorAll("div.section");
    // querying all the elements with class tool-div
    var toolDivs = document.querySelectorAll("div.tool-div");

    var node;

    if (deviceWidth >= 1000) {
        for (node = 0; node < sections.length; node++) {
            sections[node].style.width = "24%";
            sections[node].style.marginLeft = "8px";
            toolDivs[node].style.overflow = "auto";
            toolDivs[node].style.height = "96%";
        }
    } else {
        for (node = 0; node < sections.length; node++) {
            sections[node].style.width = "100%";
            sections[node].style.marginLeft = "0px";
            toolDivs[node].style.overflow = "initial";
        }
    }
}