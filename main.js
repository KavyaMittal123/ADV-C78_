var images = ["https://i.postimg.cc/56gHZmV1/Family.jpg","https://i.postimg.cc/v4m1M6Yn/neelaksh.jpg", "https://i.postimg.cc/GB8HTwsh/Shipra.jpg" , "https://i.postimg.cc/XrDrv7qz/Kavya.jpg"];
var names = ["Family Book","Neelaksh Mittal (Father)", "Shipra Mittal (Mother)", "Kavya Mittal (Myself)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = [images];
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
