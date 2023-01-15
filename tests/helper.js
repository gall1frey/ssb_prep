/*
===============================================================
                    Important Constants
===============================================================
Update these every time new pictures and stuff are added
*/
const num_ppdt = 1;
const num_tat = 1;
const num_wat = 1;
const num_srt = 1;
const ppdt_dir = '../resources/ppdt/';
const tat_dir = '../resources/tat/';
const wat_file = '../resources/wat.js';
const srt_file = '../resources/srt.js';

/*
===============================================================
                        Helper Functions
===============================================================
*/

// Check if window is fullscreen before starting test
window.matchMedia('(display-mode: fullscreen)').addEventListener('change', ({ matches }) => {
    if (matches) {
        window.isFullScreen=true;
        $('.start-test').addClass('active');
        console.log('fullscreen!');
    } else {
        window.isFullScreen=false;
        $('.start-test').removeClass('active');
        console.log('not fullscreen!');
    }
});

// Get a random image from directory
function getImg(dir) {
    picture_no = Math.floor(Math.random() * (num_ppdt-1));
    return dir+picture_no+'.jpg';
}

// Display an image on the screen
function displayImg(img_src,loc_query) {
    loc_query.html('<img src='+img_src+'>'+loc_query.html());
}

// Remove image from the screen
function removeImage(loc_query) {
    loc_query.remove();
}

// TODO: Implement function to play alert sound
function playAlert() {
    // TODO: FILL THIS
    location.reload();
}

/*
===============================================================
                        PPDT Test Code
===============================================================
*/
$('#start-ppdt').click(function(e) {
    $('#ppdt-rules').addClass('invisible');
    $('#ppdt-test').removeClass('invisible');
    setTimeout(function() {displayImg(getImg(ppdt_dir),$('#ppdt-test'))}, 5000);
    setTimeout(function() {removeImage($('img'))}, 5000+30000);
    setTimeout(function() {$('#instruction').removeClass('invisible')}, 5000+30000+30000);
    setTimeout(playAlert, 5000+30000+30000+4*60*1000);
});