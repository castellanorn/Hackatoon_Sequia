const Tips = () => {
  return (
    <div className="flex flex-col items-center container px-5 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Tips para Ahorrar Agua
      </h1>
      <p className="mb-8 text-center">
        En un mundo donde el agua es un recurso cada vez más escaso, cada gota
        cuenta. Implementar prácticas de ahorro de agua no solo es beneficioso
        para el medio ambiente, sino que también puede reducir tus costos de
        agua y contribuir a la sostenibilidad de nuestras comunidades. A
        continuación, te presentamos algunos consejos prácticos para conservar
        este valioso recurso:
      </p>

      <div
        className="  md:mb-0 md:w-1/2 double-border my-8 "
        style={{ borderColor: "var(--col-navbar)" }}
      >
        <h2 className="mb-6 text-3xl font-bold text-center">
          Cierra el grifo mientras te lavas los dientes
        </h2>
        <p className="mb-8 text-center">
          No dejes correr el agua innecesariamente. Utiliza solo la cantidad que
          necesitas
        </p>

        <img
          src="/src/assets/images/grifo.jpg"
          alt="Un grifo que gasta agua"
          className="w-96 mx-auto mb-4 rounded-lg md:w-1/2 lg:w-1/6"
        />
      </div>

      <div
        className="mb-8 md:mb-0 md:w-1/2 double-border mb-8"
        style={{ borderColor: "var(--col-navbar)" }}
      >
        <h2 className="mb-6 text-3xl font-bold text-center">
          Toma duchas más cortas
        </h2>
        <p className="mb-8 text-center">
          Limita tu tiempo en la ducha para reducir el consumo de agua.
        </p>

        <img
          src="/src/assets/images/ducha.jpg"
          alt="Tomar duchas mas cortas"
          className="w-96 mx-auto mb-4 rounded-lg md:w-1/2 lg:w-1/6"
        />
      </div>

      <div
        className="my-8  md:mb-0 md:w-1/2 double-border "
        style={{ borderColor: "var(--col-navbar)" }}
      >
        <h2 className="mb-6 text-3xl font-bold text-center">
          Riega las plantas temprano o tarde
        </h2>
        <p className="mb-8 text-center">
          Riega tus plantas durante las horas más frescas del día para reducir
          la evaporación y aumentar la absorción de agua.
        </p>

        <img
          src="/src/assets/images/regar.jpg"
          alt="regar plantas en horas adecuadas"
          className="w-96 mx-auto mb-4 rounded-lg md:w-1/2 lg:w-1/6"
        />
      </div>
    </div>
  );
};

export default Tips;
