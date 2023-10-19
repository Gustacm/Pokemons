const imgDefault = (name, pokemonData, setPokemonData, errors, Img, SetImg, value) => {
    const imgDefaultUrl = 'https://www.apkonline.net/imagescropped/pokemonhdwallpaperlockscreenicon128.jpg.webp';
  
    if(name==="imagen"){


    const imageFormats = /\.(jpg|jpeg|png|gif|bmp)$/i;
  
    // Comprobar si la URL de la imagen tiene un formato válido
    if (!imageFormats.test(value)) {
      SetImg(["La URL de la imagen no tiene un formato de imagen válido"]);
      setPokemonData({...pokemonData,imagen: imgDefaultUrl})
    } else if (!value || value.length < 4 || value === imgDefaultUrl) {
      // Comprobar si la URL de la imagen no cumple con otros requisitos
      SetImg(["La imagen no cumple con los requisitos y se asignará una por defecto"]);
      setPokemonData({...pokemonData,imagen: imgDefaultUrl})
    } else {
      // La URL de la imagen es válida
      SetImg([]); 
// Vaciar el estado Img en caso de que no haya errores
    }
    }
        
    }

  
  export default imgDefault;
  


