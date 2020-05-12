function apodImg(currentImage) {
    const imgShown = document.getElementById('currentImage')
    console.log(currentImage)}
   
 fetch(
     'https://api.nasa.gov/planetary/apod?api_key=NCxfot6WFRFirkO3ya6pfMzQ9C7U4OLTV4omd9sW'
   )
   .then((response) => {
           if (!response.ok) {
           throw new Error("Network response was not ok");
          }  
           return response.json(apodImg);
         
         })
         .then((currentImage)=> {
         apodImg(currentImage); 
   })
         .catch((error)=> {
         console.error(`Oops: ${error}`);
         
         });

         





