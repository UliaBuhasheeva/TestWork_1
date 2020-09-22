$(document).ready(function () {
    $('div.block').addClass('new');
    $('p.line').addClass('new');
    $('body').on('click', '.new', function () {
        alert('it is me!');
    });
});