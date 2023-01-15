/*
===============================================================
                    Important Constants
===============================================================
Update these every time new pictures and stuff are added
*/
const num_ppdt = 10;
const num_tat = 15;
const num_wat = 578;
const num_srt = 76;
const ppdt_dir = '../resources/ppdt/';
const tat_dir = '../resources/tat/';
const wat_file = '../resources/wat.js';
const srt_file = '../resources/srt.js';

var darkMode = false;

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

// Dark Mode
$('#darkmodetoggle').change(function() {
    if ($('#darkmodetoggle').is(':checked')) {
        darkMode = true;
    } else {
        darkMode = false;
    }
})

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
    if (darkMode) $('#ppdt-test').addClass('dark');
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
    if (darkMode) $('#tat-test').addClass('dark');
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
    if (darkMode) $('#wat-test').addClass('dark');
    $('#wat-test').removeClass('invisible');
    wrds = getRandomNos(num_wat,60);
    words = []
    for (let i = 0; i < wrds.length; i++) words.push(wat_words[wrds[i]])
    for (let i = 0; i < wrds.length; i++) {
        setTimeout(function() {
            $('#instruction').html('<h5>'+words[i]+'</h5>')
        }, (15*1000)*i+5000);
    }
    setTimeout(playAlert, 15*1000*60+5000);
    setTimeout(function() {
        $('#wat-test').addClass('invisible');
        $('#wat-quest').removeClass('invisible');
        html = '<ol>';
        for (let i = 0; i < words.length; i++) {
            html += "<li>" + words[i]+ "</li>";
        }
        html += '</ol>';
        $('#questions').html(html);
    }, 15*1000*60+5000);
});


/*
===============================================================
                        SRT Test Code
===============================================================
*/
$('#start-srt').click(function(e) {
    $('#srt-rules').addClass('invisible');
    if (darkMode) $('#srt-test').addClass('dark');
    $('#srt-test').removeClass('invisible');
    sits = getRandomNos(num_srt,60);
    allsits = [];
    for(let i = 0; i < sits.length; i++) allsits.push(situations[sits[i]])
    for (let i = 0; i < sits.length; i++) {
        setTimeout(function() {
            console.log(sits[i]);
            $('#instruction').html('<h1>'+allsits[i]+'</h1>')
        }, (30*1000)*i+5000);
    }
    setTimeout(playAlert, 30*1000*60+5000);
    setTimeout(function() {
        $('#srt-test').addClass('invisible');
        $('#srt-quest').removeClass('invisible');
        html = '<ol>';
        for (let i = 0; i < allsits.length; i++) {
            html += "<li>" + allsits[i]+ "</li>";
        }
        html += '</ol>';
        $('#questions').html(html);
    }, 30*1000*60+5000);
});

/*
===============================================================
                        SD Test Code
===============================================================
*/
$('#start-sd').click(function(e) {
    $('#sd-rules').addClass('invisible');
    if (darkMode) $('#sd-test').addClass('dark');
    $('#sd-test').removeClass('invisible');
    setTimeout(playAlert, 30*1000*60+5000);
});
