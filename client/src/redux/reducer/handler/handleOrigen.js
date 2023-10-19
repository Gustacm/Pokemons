

export const reiniciar = (back)=>{
    return back
}



const handleOrigen = (estado, back, clave) => {
    const copiastado= [...estado];
    const api = copiastado.filter(x => /^\d+$/.test(x.id));
    const db = copiastado.filter(x => !/^\d+$/.test(x.id));

  
    if (clave === "Api") {
        return api;
    } else if (clave === "DB") {
        return db;
    } else {
      return back;
    }
  };
  
  export default handleOrigen;
  
  
  