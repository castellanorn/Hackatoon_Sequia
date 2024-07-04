import React from 'react';

const Home = () => {
  return (
    <>
    <h2 className="text-black mt-20 mb-0 p-4 font-normal text-[xx-large] " >
      SEQUIATRON
    </h2>
    <div className="flex flex-row mt-4 mb-0 w-[70%] h-[70%]">
      <div className="w-[45%] h-[45%] p-4 text-[x-large]">
      La sequía se puede mirar desde muchos puntos de vista: reservas de agua en los 
      embalses, déficit de lluvia, mirada larga oa corto plazo, futuro inmediato... En
       esta pieza encontrará indicadores climatológicos y sobre los embalses para 
       tener una visión actualizada y lo más completa posible de la grave sequía que vive Catalunya.      
       </div>
      <div className="w-full h-full p-4">
        <img
          alt="pagina1foto1"
          src="../sequida.jpg"
        />
      </div>
    </div>
    
    
    

    
    
    
    
    </>
  )
}

export default Home;