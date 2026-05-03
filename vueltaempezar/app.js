// 'async' indica que esta función hará algo que tarda tiempo (ir a internet)
async function cargarCartas() {
  
  // 'await' le dice al código: "Para aquí hasta que Supabase te responda"
  // .from("cartas") -> busca la tabla llamada cartas
  // .select("*")    -> elige todas las columnas (nombre, imagen, elixir...)
  let resultado = await client.from("cartas").select("*");

  // Supabase devuelve un objeto con dos cosas: 'data' (los datos) y 'error'
  if (resultado.error) {
    // Si algo sale mal, lo mostramos en la consola para saber qué pasa
    console.error("Error:", resultado.error);
  } else {
    // Si sale bien, pasamos los datos a la función que pinta en el HTML
    renderizarCartas(resultado.data);
  }
}

// Esta función recibe el array de objetos que viene de Supabase
function renderizarCartas(arrayDeCartas) {
  // Buscamos el div vacío que creamos en el HTML
  const contenedor = document.querySelector("#contenedor");
  
  // Creamos una variable vacía para ir "escribiendo" el HTML de las cartas
  let htmlFinal = "";

  // Bucle 'forEach': se ejecuta una vez por cada carta que haya en la lista
  arrayDeCartas.forEach(carta => {
    
    // El símbolo '+=' significa: "Añade esto a lo que ya tenías"
    // Usamos las comillas ladeadas (``) para poder meter variables con ${}
    htmlFinal += `
      <div class="border-2 bg-white rounded-xl p-4 w-64 shadow-lg">
        <img src="${carta.imagen}" class="w-full h-40 object-contain">
        
        <h2 class="text-center font-bold text-xl mt-2">${carta.nombre}</h2>
        
        <p class="text-center text-blue-600">Elixir: ${carta.elixir}</p>
      </div>
    `;
  });

  // Al final, "pegamos" todo el texto HTML acumulado dentro del div contenedor
  contenedor.innerHTML = htmlFinal;
}

// ÚLTIMA LÍNEA: Tienes que llamar a la función para que todo empiece a funcionar
cargarCartas();