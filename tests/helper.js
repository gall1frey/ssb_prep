/*
===============================================================
                    Important Constants
===============================================================
Update these every time new pictures and stuff are added
*/
const num_ppdt = 1;
const num_tat = 11;
const num_wat = 60;
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
function getImg(dir, idx) {
    return dir+idx+'.jpg';
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

// Get tat images
function getRandomNos(max_num,samplesize) {
    var x = [];
    for (let i = 0; i < max_num; i ++) {
        x.push(i)
    }
    return _.sample(x, samplesize);
}

/*
===============================================================
                        PPDT Test Code
===============================================================
*/
$('#start-ppdt').click(function(e) {
    $('#ppdt-rules').addClass('invisible');
    $('#ppdt-test').removeClass('invisible');
    idx = Math.floor(Math.random() * (num_ppdt-1));
    setTimeout(function() {displayImg(getImg(ppdt_dir,idx),$('#ppdt-test'))}, 5000);
    setTimeout(function() {removeImage($('img'))}, 5000+30000);
    setTimeout(function() {$('#instruction').removeClass('invisible')}, 5000+30000+30000);
    setTimeout(playAlert, 5000+30000+30000+4*60*1000);
});


/*
===============================================================
                        TAT Test Code
===============================================================
*/
$('#start-tat').click(function(e) {
    $('#tat-rules').addClass('invisible');
    $('#tat-test').removeClass('invisible');
    imgs = getRandomNos(num_tat,11);
    imgs.push('blank');
    for (let i = 0; i < imgs.length; i++) {
        setTimeout(function() {$('#instruction').addClass('invisible');displayImg(getImg(tat_dir,imgs[i]),$('#tat-test'))}, (5*60*1000)*i+5000);
        setTimeout(function() {removeImage($('img'));$('#instruction').removeClass('invisible')}, (5*60*1000)*i+30000+5000);
    }
    setTimeout(playAlert, 5*60*1000*12+5000);
});


/*
===============================================================
                        WAT Test Code
===============================================================
*/
$('#start-wat').click(function(e) {
    $('#wat-rules').addClass('invisible');
    $('#wat-test').removeClass('invisible');
    wrds = getRandomNos(num_wat,60);
    for (let i = 0; i < wrds.length; i++) {
        setTimeout(function() {
            $('#instruction').html('<h5>'+wat_words[wrds[i]]+'</h5>')
        }, (15*1000)*i+5000);
    }
    setTimeout(playAlert, 15*1000*60+5000);
});
