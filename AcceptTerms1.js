var url = 'c:/Users/sarai/Documents/Module 2 Project/PDF/AutonOfy Terms and Conditions.pdf';

function goTerms() { 
    window.location.href = url;   
    
}

pdf.getPage(1).then( function(page) {

    //We need to pass it a scale for "getViewport" to work
    var scale = 1;

    //Grab the viewport with original scale
    var viewport = page.getViewport( 1 );

    //Here's the width and height
    console.log( "Width: 200px " + viewport.width + ", Height: 300px" + viewport.height );
});

