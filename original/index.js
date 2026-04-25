let supabaseUrl = "https://uvaujgunxnfhnkrkvjth.supabase.co/rest/v1/";
let supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2YXVqZ3VueG5maG5rcmt2anRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NTY5MDUsImV4cCI6MjA5MjMzMjkwNX0.OeSlwI1MYjxk_6rGl1YNUHLOCXVn4ILBcxDVjG_OLsE

let client = supabase.createClient(supabaseUrl,supabaseAnonKey);


console.log("Hola, aquí tienes la info completa de las cartas de clash royale")

// Funció que demana a Supabase totes les notícies i les pinta a la pàgina
async function cargarCartas() {
  // await = espera a tenir les dades abans de continuar; select("*") = agafa totes les columnes
  let resultat = await client.from("cartas").select("*");
  // resultat.data és l'array de notícies; si hi ha error, posem array buit
  let arrayCartas = resultat.data || [];
  // Passem l'array a la funció que genera l'HTML i el posa al div #llistaNoticies
  renderitzarNoticies(cartas);
}


let diVcartas = " "

const arrayCartas = [
  {
    id: 1,
    created_at: "2026-04-21 10:00:57.58142+00",
    nombre: "Espíritu de Hielo",
    elixir: "1",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/9/96/Espiritu_de_Hielo.png/revision/latest?cb=20160705173003&path-prefix=es"
  },
  {
    id: 2,
    created_at: "2026-04-21 10:01:45.08041+00",
    nombre: "Megacaballero",
    elixir: "7",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/8/8f/Megacaballero.png/revision/latest?cb=20170614194136&path-prefix=es"
  },
  {
    id: 3,
    created_at: "2026-04-21 10:02:17.389042+00",
    nombre: "Mago de Hielo",
    elixir: "3",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/3/39/Mago_de_hielo.png/revision/latest?cb=20180218172207&path-prefix=es"
  }

]

console.log(arrayCartas[2].id) //para acceder a los elementos de cada objeto individualmente.

function renderizarCartas(){
for(let i = 0; i < arrayCartas.length; i++){
    console.log(arrayCartas[i].nombre)
    diVcartas =
      diVcartas +
      ` <div class="carta border-1 w-[300px] h-[400px] rounded-[20px] shadow-xl">
        <img
          src="${arrayCartas[i].imagen}"
          alt=""
          class="w-full h-[400px] rounded-[20px]"
        />
      </div>`;
}

console.log(diVcartas)
document.querySelector("#contenedor").innerHTML=diVcartas
}