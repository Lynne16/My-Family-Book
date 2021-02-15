var images=["Papa.jpg","Mama.jpg","Liam.jpg","Me.jpg"]

var names=["Jose Fernandes","Wijit Fernandes","Liam Fernandes","Lynne Fernandes"]

var i = 0;

function nextslide(){
    if( i == 4)
    {
        i=0;
    }
    document.getElementById("book_cover").src=images[i];
    document.getElementById("display_name").innerHTML=names[i];

i++}
