$(document).ready(function () {
    $('#ktdialog').dialog({
        autoOpen: false,
        resizeable: false,
        width: 'auto',
        height: 'auto',
        modal: true,
        show: {
            effect: 'blind',
            duration: 300
        },
        hide: {
            effect: 'blind',
            duration: 300
        },
    });

    $('.showDialog').click(function () {
         $('#ktdialog').load(this.href, function() {
            $(this).dialog('open');
        });
        return false; // ensures the browser is not redirected to the link's URL
    });

     $.fn.centerToWindow = function () {
        var obj = $(this);
        var obj_width = $(this).outerWidth(true);
        var obj_height = $(this).outerHeight(true);
        var window_width = window.innerWidth ? window.innerWidth : $(window).width();
        var window_height = window.innerHeight ? window.innerHeight : $(window).height();

        obj.css({
            "position": "fixed",
            "top": ((window_height / 2) - (obj_height / 2)) + "px",
            "left": ((window_width / 2) - (obj_width / 2)) + "px"
        });
    }
    
//TODO: Remove in PROD
// script for display a custom dialog form
    /*
    $('.showDialog').click(function () {
        //$('#overlay').show().effect('blind', null, 300, null);
        $.get(this.href, function (data, status) {
            if (status == "success") {
                alert(data);
                $('#ktdialog').html(data);
            }
            else {
                $('#ktdialog').html("error!");
            }
        });
        //el = document.getElementById('ktdialog');
        //el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        $('#ktoverlay').show();
        $('#ktdialog').centerToWindow();
        return false; // ensures the browser is not redirected to the link's URL
    });

    $(document).unbind('keypress');
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $('#ktoverlay').fadeOut(500);
        }
    });
    */

});