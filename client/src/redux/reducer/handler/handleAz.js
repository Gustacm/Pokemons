const handleAz = (estate, back, clave) => {
    const copiaEstate = [...estate];
    const ordenaAz = copiaEstate.sort((a, b) => a.name.localeCompare(b.name));
    const ordenaZa = copiaEstate.slice().sort((a, b) => b.name.localeCompare(a.name));
  
    if (clave === "az") {
      return ordenaAz;
    } else if (clave === "za") {
      return ordenaZa;
    } else if (clave === "X") {
      return back;
    }
  };
  
  export default handleAz;
  