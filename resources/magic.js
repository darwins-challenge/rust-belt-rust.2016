$(function() {
    var img = $('#fitness-demo img');
    var y = 0;

    function update() {
        var max = $('#fitness-demo').height() - img.height();
        var top = Math.min(y, max);
        img.css({ 'top': top });

        $('#fitness-score').text((top * 23).toFixed(0));

        y += 4;
        if (y > max + img.height() * 2) y = 0;

        if ($('html').hasClass('fitness')) schedule();
    }

    function schedule() {
        setTimeout(update, 30);
    }

    Reveal.addEventListener('fitness', function() {
        schedule();
    }, false);
});
