const registros =
  [
    { persona: "rosa morales", tipodevehiculo: "camioneta", valor: 20000, placa: "SUV-202", fecha_ingreso: "01-11-2026 08:00", fecha_salida: "01-11-2026 12:00" },
    { persona: "paola garcia", tipodevehiculo: "carro", valor: 10000, placa: "OFF-303", fecha_ingreso: "02-11-2026 10:00", fecha_salida: "02-11-2026 12:00" },
    { persona: "alejandro manyoma", tipodevehiculo: "carro", valor: 10000, placa: "TRK-505", fecha_ingreso: "03-11-2026 14:00", fecha_salida: "03-11-2026 16:00" },
    { persona: "felipe rojas", tipodevehiculo: "moto", valor: 25000, placa: "QWE-45A", fecha_ingreso: "04-11-2026 06:00", fecha_salida: "04-11-2026 18:00" },
    { persona: "Carolina ibarra", tipodevehiculo: "camioneta", valor: 50000, placa: "MNT-707", fecha_ingreso: "05-11-2026 08:00", fecha_salida: "05-11-2026 18:00" },
    { persona: "valentina ramirez", tipodevehiculo: "moto", valor: 5000, placa: "QWE-45A", fecha_ingreso: "06-11-2026 09:00", fecha_salida: "06-11-2026 11:00" },
    { persona: "laura ramirez", tipodevehiculo: "carro", valor: 30000, placa: "ADP-808", fecha_ingreso: "07-11-2026 12:00", fecha_salida: "07-11-2026 18:00" },
    { persona: "sofia lopez", tipodevehiculo: "camioneta", valor: 50000, placa: "HIL-111", fecha_ingreso: "01-11-2026 07:00", fecha_salida: "01-11-2026 18:00" },
    { persona: "juan miguel lopez", tipodevehiculo: "moto", valor: 25000, placa: "VBN-34G", fecha_ingreso: "02-11-2026 08:00", fecha_salida: "02-11-2026 18:00" },
    { persona: "santiago moreno", tipodevehiculo: "moto", valor: 10000, placa: "RTY-88B", fecha_ingreso: "03-11-2026 13:00", fecha_salida: "03-11-2026 17:00" },
    { persona: "johan rivera", tipodevehiculo: "moto", valor: 25000, placa: "JKL-56E", fecha_ingreso: "04-11-2026 06:00", fecha_salida: "04-11-2026 18:00" },
    { persona: "juan sebastian grisales", tipodevehiculo: "carro", valor: 20000, placa: "4X4-404", fecha_ingreso: "05-11-2026 15:00", fecha_salida: "05-11-2026 19:00" },
    { persona: "bryan gil", tipodevehiculo: "moto", valor: 10000, placa: "FGH-99D", fecha_ingreso: "06-11-2026 08:00", fecha_salida: "06-11-2026 12:00" },
    { persona: "lauren taborda", tipodevehiculo: "moto", valor: 5000, placa: "ZXC-78F", fecha_ingreso: "06-11-2026 14:00", fecha_salida: "06-11-2026 16:00" },
    { persona: "elver romero", tipodevehiculo: "carro", valor: 10000, placa: "TRK-505", fecha_ingreso: "07-11-2026 09:00", fecha_salida: "07-11-2026 11:00" },
    { persona: "julian guanume", tipodevehiculo: "moto", valor: 10000, placa: "MNT-707", fecha_ingreso: "01-11-2026 10:00", fecha_salida: "01-11-2026 14:00" },
    { persona: "alejandro gomez", tipodevehiculo: "carro", valor: 50000, placa: "HIL-111", fecha_ingreso: "02-11-2026 06:00", fecha_salida: "02-11-2026 18:00" },
    { persona: "brayan tangarife", tipodevehiculo: "moto", valor: 25000, placa: "ASD-12C", fecha_ingreso: "03-11-2026 08:00", fecha_salida: "03-11-2026 18:00" },
    { persona: "diego garcia", tipodevehiculo: "moto", valor: 10000, placa: "JKL-56E", fecha_ingreso: "04-11-2026 12:00", fecha_salida: "04-11-2026 16:00" },
    { persona: "paola garcia", tipodevehiculo: "carro", valor: 10000, placa: "OFF-303", fecha_ingreso: "02-11-2026 10:00", fecha_salida: "02-11-2026 12:00" },
    { persona: "helen sanchez", tipodevehiculo: "moto", valor: 25000, placa: "MTC-121", fecha_ingreso: "01-11-2026 06:00", fecha_salida: "01-11-2026 18:00" },
    { persona: "daicy sanchez", tipodevehiculo: "carro", valor: 20000, placa: "FGH-99D", fecha_ingreso: "01-11-2026 09:00", fecha_salida: "01-11-2026 13:00" },
    { persona: "miguel hernandez", tipodevehiculo: "moto", valor: 2500, placa: "PRD-222", fecha_ingreso: "01-11-2026 15:00", fecha_salida: "01-11-2026 16:00" },
    { persona: "angel augusto bernal", tipodevehiculo: "carro", valor: 50000, placa: "FOT-333", fecha_ingreso: "01-11-2026 06:00", fecha_salida: "01-11-2026 18:00" },
    { persona: "manuel ignacio rodriguez", tipodevehiculo: "moto", valor: 5000, placa: "VQP-35F", fecha_ingreso: "01-11-2026 10:00", fecha_salida: "01-11-2026 12:00" }
  ];


// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro) {
  return "La persona : " + registro.persona + " con placa: " + registro.placa + " pago un total de: " + registro.valor;
}

function listarTodo(datos) {
  for (const registro of datos) {
    console.log(mostrarRegistro(registro));
  };
}

function totalGeneral(registros) {
  let valor_total = 0;
  for (const registro of registros) {
    valor_total += registro.valor
  }
  return valor_total;
}

function promedio(registros) {

  let valor_total = (totalGeneral(registros)) / registros.length;

  return valor_total;
}

function registroMayor(registros) {
  if (registros.length === 0) return null;

  let ventaMayor = registros[0];

  for (const registro of registros) {
    if (registro.valor > ventaMayor.valor) {
      ventaMayor = registro;
    }
  }

  return ventaMayor;
}
function filtrarPorCategoria(registros, categoria) {
  let arregloCategoria = [];
  for (const registro of registros) {
    if (registro.tipodevehiculo === categoria) {
      arregloCategoria.push(registro);
    }
  }
  return arregloCategoria;
}

function totalesPorCategoria(datos) { 
  let totalCategorias = {};
  for (const registro of datos){
    totalCategorias[registro.tipodevehiculo] = (totalCategorias[registro.tipodevehiculo] || 0) + 1;
    
  }
  return totalCategorias;
}

// ---------- NIVEL 3 · Set y Map ----------

function personasUnicas(datos) { 
  const unica = new Set ();

  for(const registro of datos){ 
    unica.add (registro.persona);
  }
return unica;

}

function recurrentesLento(datos) {
   
}

function recurrentesRapido(datos) { }
function categoriaEstrella(datos) { }
function parQueSuma(datos, objetivo) { }

// ---------- NIVEL 4 · Cola y pila ----------


 class Vehiculo{
  constructor(){
    this.cola=[]
  }
    llegar(placa){
      this.cola.push(placa)
  }
    atender(){
      if (this.cola.length==0){
        return "No hay usuarios para atender"
      }
      return this.cola.shift()
  }
 }
  

 const colas=new Vehiculo()

 colas.llegar(registros[0]);
 colas.llegar(registros[1]);
 colas.llegar(registros[2]);
 colas.llegar(registros[3]);
 colas.llegar(registros[4]);
 colas.llegar(registros[5]);
 colas.llegar(registros[6]);
 colas.llegar(registros[7]);

console.log(colas.atender())

console.table(colas.cola)

const historial = [];

function agregarRegistro(datos, registro) {
  datos.push(registro);
  historial.push(registro);

  return registro;
}

function deshacer(datos) {
  if (historial.length === 0) {
    return null;
  }

  const ultimo = historial.pop();
  datos.pop();

  return ultimo;
}


/* console.log(filtrarPorCategoria(registros,"camioneta")); */
/* console.log(mostrarRegistro(registros[0])); */
/*  console.log(listarTodo(registros))  */
/* console.log(totalGeneral(registros)) */
/* console.log(promedio(registros)) */
/* console.log(registroMayor(registros)) */
/* console.log(filtrarPorCategoria(registros, "moto")) */
/* console.log  (totalesPorCategoria (registros))  */
/* console.log (personasUnicas (registros))  */

console.log("Registro agregado:",agregarRegistro(registros, { persona: "maria", placa: "ABC123", valor: 50000, tipodevehiculo: "carro" }));
console.log("Registro deshecho:",deshacer(registros));

 
