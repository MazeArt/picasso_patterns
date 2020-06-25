$(document).ready(function () 
{
    $('.letter').keypress(function ()
    {
        $(this).next().select();
    });
});
