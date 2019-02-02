
    /* global $ */
    
    if (window.location.hash.search('/') !== -1) {
        var re = window.location.hash.split('/')[1];
        if (re) {
            $('#mailto').attr('href', encodeURI('mailto:spfendeavor@gmail.com?subject=Under Constuction Error&body=An error occured while loading the "' + re + '" page on the Sloan Store website.'));
        } else {
            window.location.href = '../';
        }
    } else {
        window.location.href = '../';
    }