
const { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

// Setup code
var mapa = [ //matrix bidimencional
];
let Mundo = {} // mundo inicial 
var score = 0 // contador de puntos 
var level = 1 // 
//// EFECTOS DE SONIDO ////
var startmusic = new Audio("../Sonidos/fondoo.mp3")
var nextlevel = new Audio ("../Sonidos/nivel1.mp3")

////////////////////////////////
let bloque = 30
const WIDTH = 500 // ancho del juego
const HIGTH = 500 // largo del juego
let velocidad = 5;//velocidad del recorrido de la serpiente
let totalCola = 1
var totalComida = 0 // cantidad de comida que aparecera en el canvas
var cola = [] // lista que almacena solo las posiciones de la cola 
var time = { // el tiempo es una variable que a travez del draw va incrementando en 1 cada vez  
	s: 0, // segundos
	m: 0, // minutos
	h: 0 // horas
}
var vida = 5 // vidas de snake 
//SKINS DE LOS PERSONAJES
// son variables que estan apuntando a nulo para luego almacenar una imagen 
let imgCola; //imagen de la cola
let imgCabezaU; //imagen cabeza arriba
let imgCabezaD; //imagen  cabeza abajo
let imgCabezaL; //imagen cabeza izquerda
let imgCabezaR; //imagen cabeza derecha
let imgFinCola; // imagen cola 
let imgLadrillo; // imagen ladrillo
///
let imgCola2; // imagen segundo snake, imagen cola 
let imgCabeza2U; //imagen segundo snake, cabeza arriba
let imgCabeza2D;//imagen segundo snake, cabeza abajo
let imgCabeza2L;//imagen segundo snake, cabeza izquerda 
let imgCabeza2R;//imagen segundo snake, cabeza derecha
///
let imgCola3; // imagen tercer snake, imagen cola
let imgCabeza3U; //imagen tercer snake, cabeza arriba
let imgCabeza3D;//imagen tercer snake, cabeza abajo
let imgCabeza3L;//imagen tercer snake, cabeza izquierda
let imgCabeza3R;//imagen tercer snake, cabeza derecha
///
let imgCola4; //imagen cuarto snake, imagen cola
let imgCabeza4U;//imagen cuarto snake,cabeza arriba
let imgCabeza4D;//imagen cuarto snake,cabeza abajo
let imgCabeza4L;//imagen cuarto snake, cabeza izquierda
let imgCabeza4R;//imagen cuarto snake, cabeza derecha
let imgGameOver; // imagen que muestra la figura gameover
///
let imgCola5; //imagen quinto snake, imagen cola
let imgCabeza5U;//imagen quinto snake, cabeza arriba
let imgCabeza5D;//imagen quinto snake, cabeza abajo
let imgCabeza5L;//imagen quinto snake, cabeza izquerda
let imgCabeza5R;;//imagen quinto snake, cabeza derecha
let imgEnter;// imagen del enter para recargar
///
let imgmalito;//imagen que muestra al malito(el hongo enemigo)
let cereza; // imagen de la cereza (comida)
let bomba; //imagen de la bomba(comida2)



// estructuras u objetos que sirven para guardar informacion de acuerdo a una llave
var snake = {  //dir: llave
               //{
                // valor de la llave
               //}
  dir: { // da la dirrecion
    xD: 0,
    yD: 0
  },
  x: 9,//posicion inicial de la snake en x
  y: 9,//posicion inicial de la snake en y
	d: "L" //direccion en donde inicia mirando la snake(izquierda)
}

var comida = { // posicion de la comida
  x: 0, 
  y: 0
}
var comida2 = {
  x:0,
  y:0
}
var enemy = {  // posicion del enemigo
	x: 3,
	y: 2,
	dir:{ // direccion 
		x:0,
		y:0,
	}
}



function setup() { //inicializar variables, se ejecuta una sola vez durante todo el programa
  //frameRate(5)
  createCanvas(WIDTH, HIGTH);
  ////////SONIDOS////////////////////
  //startmusic.play() //comienza la musica
  //startmusic.volume=0.7 // manejar volumen del juego
  
   // Skin 1 del snake
	imgCabezaU = loadImage("../Imagenes/cabeza1arriba.png"); 
	imgCabezaD = loadImage("../Imagenes/cabeza1abajo.png"); 
	imgCabezaL = loadImage("../Imagenes/cabeza1izquierda.png"); 
	imgCabezaR = loadImage("../Imagenes/cabeza1derecha.png");
  //////////Skin 2 del snake/////////////////////////////////////////////////////
  imgCabeza2U = loadImage("../Imagenes/cabeza2arriba.png"); 
	imgCabeza2D = loadImage("../Imagenes/cabeza2abajo.png"); 
	imgCabeza2L = loadImage("../Imagenes/cabeza2izquierda.png"); 
	imgCabeza2R = loadImage("../Imagenes/cabeza2derecha.png"); 
  ///////////////SKINS//3//////////////////////////////////////////////
  imgCabeza3U = loadImage("../Imagenes/cabeza3arriba.png"); 
	imgCabeza3D = loadImage("../Imagenes/cabeza3abajo.png"); 
	imgCabeza3L = loadImage("../Imagenes/cabeza3izquierda.png"); 
	imgCabeza3R = loadImage("../Imagenes/cabeza3derecha.png"); 
  /////////////SKIN 4/////////////////////////////
  imgCabeza4U = loadImage("../Imagenes/cabeza4arriba.png"); 
	imgCabeza4D = loadImage("../Imagenes/cabeza4abajo.png"); 
	imgCabeza4L = loadImage("../Imagenes/cabeza4izquierda.png"); 
	imgCabeza4R = loadImage("../Imagenes/cabeza4derecha.png"); 
  ////////////////SKIN 5//////////////////////////
  imgCabeza5U = loadImage("../Imagenes/cabeza5arriba.png"); 
	imgCabeza5D = loadImage("../Imagenes/cabeza5abajo.png"); 
	imgCabeza5L = loadImage("../Imagenes/cabeza5izquierda.png"); 
	imgCabeza5R = loadImage("../Imagenes/cabeza5derecha.png"); 
  imgLadrillo = loadImage("../Imagenes/ladrillo.png");
  ///////////////////////COlAS ///////////
  imgCola = loadImage("../Imagenes/cuerpo.png");
  imgCola2 = loadImage("../Imagenes/cuerpo2.png");
  imgCola3 = loadImage("../Imagenes/cuerpo3.png");
  imgCola4 = loadImage("../Imagenes/cuerpo4.png");
  imgCola5 = loadImage("../Imagenes/cuerpo5.png");
  
  imgmalito = loadImage("../Imagenes/malito.png");
	cereza = loadImage("../Imagenes/cereza.png"); 
  bomba = loadImage("../Imagenes/bomba.png")
	imgGameOver = loadImage("../Imagenes/gameover.png"); 
	imgEnter  = loadImage("../Imagenes/pressenter.png"); 
	posicionComida()
  posicionComida2()
	textFont('Verdana');//tipo de letra del gameOver
  strokeWeight(2) //borde del canvas del gameover
  strokeWeight(2) //Borde de cuadricula del canvas juego
  textSize(40); //tamaño del canvas del gameover
  textStyle(BOLD) //Letra tipo bold
}

////////////////////////////////////////////////////////////////////////
// es una funcion que se ejecuta cada frame, se ejecuta constantemente.
function draw() { //la pantalla siempre se esta pintando en negro para pintar por encima de lo demas.
	frameRate(velocidad) // velocidad de la culebra 
  background(0,0,0);//
  time.s = time.s + 1   // empieza del 

  pintarMapa();
  var gamefal = new Audio("../Sonidos/gameOver.mp3")
  
	if(vida <= 0){  //GAME OVER
		frameRate(5)                 
		gamefal.play()
    snake.dir = {x:0,y:0}
		//leve = 1
		//score = 0
		//vida=5
		fill(255,255,255)
		stroke(0,0,0) 
		image(imgGameOver, 0, 0, 500, 500)
		if(time.s % 2 == 0){
			image(imgEnter, 0, 455, 500, 56)
		}else{
			image(imgEnter, 0, 450, 500, 56)
		}
		text("Your Score: " + score, 100, 450) 
		//alert("Game Over")
	}
   
	if( time.s % 2 == 0 ){ // para poner la comida en el mapa que no sean bloques
		image(cereza, comida.x * bloque, comida.y * bloque - 2, bloque, bloque) //recibe una imagen, una posicion en x y otra en y, su alto y ancho,la razon ppor la que se divide la posicion por el bloque es para que pueda tomar un apocision en el mapa 
	}else{
		image(cereza, comida.x * bloque, comida.y * bloque, bloque, bloque)
	}

  if( time.s % 2 == 0 ){ // para poner la comida en el mapa que no sean bloques
		image(bomba, comida2.x * bloque, comida2.y * bloque - 2, bloque, bloque) //recibe una imagen, una posicion en x y otra en y, su alto y ancho,la razon ppor la que se divide la posicion por el bloque es para que pueda tomar un apocision en el mapa 
	}else{
		image(bomba, comida2.x * bloque, comida2.y * bloque, bloque, bloque)
	}	

	if(score != 0 && score %  3 == 0){
		//console.log("Debo cambiar posicion")
		totalComida += 1
	}

	if(totalComida == 3){
		posicionComida2()
		totalComida = 0
	}
	
  if( level == 2){
      if(score % score == 0){
        	enemy.x += enemy.dir.x // 
		enemy.y += enemy.dir.y
    
	if( time.s % 2 == 0 ){
			image(imgmalito, enemy.x*bloque, enemy.y*bloque-3, bloque, bloque)
		}
		else{
			image(imgmalito, enemy.x*bloque, enemy.y*bloque, bloque, bloque)
		}	
      }
}
  if( level == 3){
      if(score % score == 0){
        	enemy.x += enemy.dir.x // ubicaciion del enemigo en eje X y Y 
		enemy.y += enemy.dir.y
    
	if( time.s % 2 == 0 ){
			image(imgmalito, enemy.x*bloque, enemy.y*bloque-3, bloque, bloque)
		}
		else{
			image(imgmalito, enemy.x*bloque, enemy.y*bloque, bloque, bloque)
		}	
      }
	
	}
  

  //se llaman a las funciones
	crearCola()
	recorreCola(cola);
	dibujarSnake()
	movimientoEnemigo();
	colisionenemy();
  onKeyEvent();
  colisiones()
	transport()
  snake.x += snake.dir.xD
  snake.y += snake.dir.yD
  cambiarMapa()
	mensaje();
 
}

/**muestra los contadores como mensajes flotantes */
function mensaje(){
  var canvas = document.getElementById("canvas");
  var lapiz = canvas.getContext("2d");
	lapiz.clearRect(0,0,500,30)
  lapiz.font="20px Verdana";
  lapiz.fillStyle = "white";
  //lapiz.fillText( valorImp, ejex, ejey );
	if( time.s == 60 ){
		time.m++;
		time.s = 0
	}
	if( time.m == 60 ){
		time.h++;
		time.m = 0
	}
	lapiz.fillText("Time: " + time.h+":"+time.m+":"+time.s, 5, 25) //Pinta el tiempo en pantalla
	lapiz.fillText("Vida: " + vida, 300, 25)//Pinta la vida en pantalla
	lapiz.fillText("Score: " + score, 400, 25)//Pinta el puntaje en pantalla
}

/**dibuja la serpiente */
function dibujarSnake(){
	if( snake.d == "U" ){
		image(imgCabezaU, snake.x * bloque, snake.y * bloque, bloque, bloque);
    if(level==2){
      image(imgCabeza2U, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==3){
      image(imgCabeza3U, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==4){
      image(imgCabeza4U, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==5){
      image(imgCabeza5U, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
	}
	else if( snake.d == "D" ){
		image(imgCabezaD, snake.x * bloque, snake.y * bloque, bloque, bloque);
    if(level==2){
      image(imgCabeza2D, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==3){
      image(imgCabeza3D, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==4){
      image(imgCabeza4D, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==5){
      image(imgCabeza5D, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
	}
	else if( snake.d == "L" ){
		image(imgCabezaL, snake.x * bloque, snake.y * bloque, bloque, bloque);
    if(level==2){
      image(imgCabeza2L, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==3){
      image(imgCabeza3L, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==4){
      image(imgCabeza4L, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==5){
      image(imgCabeza5L, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
	}
	else if( snake.d == "R" ){
		image(imgCabezaR, snake.x * bloque, snake.y * bloque, bloque, bloque);
    if(level==2){
      image(imgCabeza2R, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==3){
      image(imgCabeza3R, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==4){
      image(imgCabeza4R, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
    if(level==5){
      image(imgCabeza5R, snake.x * bloque, snake.y * bloque, bloque, bloque);
    }
	}
}

//
function crearCola(){
	if (totalCola === cola.length) {
    for(var i = 0; i < cola.length-1; i++) {  //crea una variable; tiene una condicion;aumenta el valor
     cola[i] = cola[i+1]; //crea un nuevo elemento en la lista de COLA[]
		}
  }
  cola[totalCola-1] = {x: snake.x, y: snake.y, d: snake.d} //Pinta el movimiento de la cola despues de la cabeza
}

function cambiarMapa() { //condiciona en que punto cambia el mapa
	if( score == 0 ){
		level = 1
		velocidad = 5
		bloque = 25
    startmusic.play()
    startmusic.volume=0.7
    enemy = {
			x: 3,
			y: 2,
			dir:{ // direccion 
				x:0,
				y:0, 
			} 
    }
		mapa = mapa = [ // x:filas →  y:columnas ↓
      [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2], // 0
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 2
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 3
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 4
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 6
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 12
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 13
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 14
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 15
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 16 
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 17
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 18
      [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2], // 19
		// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 
    ];
	}
  if (score == 5) {
    bloque = 25
		level = 2
    vida = 5 
		velocidad = 7
    nextlevel.play()
    startmusic.play()
    startmusic.volume=0.7
    enemy = {
			x: 3,
			y: 2,
			dir:{ // direccion 
				x:0,
				y:0, 
			} 
    }
    mapa = [ // x:filas →  y:columnas ↓
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 0
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 2
      [2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2], // 3
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 4
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 6
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 7
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 11
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 12
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 13
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 14
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 15
			[2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2], // 16 
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 17
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 18
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 19
		// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 
    ];
  }
  if (score == 10) {
    bloque = 25
		level = 3
    vida = 5
    velocidad = 9
		score += 1
    nextlevel.play()
    startmusic.play()
    startmusic.volume=0.7
		enemy = {
			x: 3,
			y: 2,
			dir:{ // direccion 
				x:0,
				y:0,
			}
		}
    mapa = [  // x:filas →  y:columnas ↓
      [2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2], // 0
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 2
      [2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2], // 3
      [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 4
      [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
      [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 6
      [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 7
      [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 8
      [2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2], // 9
      [2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2], // 10
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2], // 11
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2], // 12
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2], // 13
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2], // 14
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2], // 15
			[2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2], // 16 
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 17
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 18
      [2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2], // 19
		// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 
    ];
  }
  if (score == 15) {
    bloque = 25
		level = 4
    vida = 5
    velocidad = 11
    nextlevel.play()
    startmusic.play()
    startmusic.volume=0.7
    mapa = [  // x:filas →  y:columnas ↓
      [2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2], // 0
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 2
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 3
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 4
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 5
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 6
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 7
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 8
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 9
      [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2], // 10
			[2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 11
			[2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 12
			[2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2], // 13
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2], // 14
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2], // 15
			[2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2], // 16 
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 17
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 18
      [2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2], // 19
    // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19
    ];
	}
  if (score == 20) {
    bloque = 25
		level = 5
    vida = 5
    velocidad = 6
    nextlevel.play()
    startmusic.play()
    startmusic.volume=0.7
    mapa = [  // x:filas →  y:columnas ↓
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 0
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1
      [2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2], // 2
      [2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2], // 3
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 4
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
      [2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2], // 6
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 7
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 8
      [2, 0, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2], // 9
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 10
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 11
			[2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2], // 12
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 13
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 14
			[2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2], // 15
			[2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2], // 16 
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 17
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 18
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 19
    // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19
    ];
  }
}


/**ejecutar los efectos secundarios al final de la cadena. */
function forEach(list, fun, index = 0) {
  if (!isEmpty(list)) {
    fun(first(list), index)
    forEach(rest(list), fun, index + 1)
  }
}

/**dibuja en el canvas todo lo que se ponga en esta funcion   */
function pintarMapa() {
  forEach(mapa, (fila, i) => {
    forEach(fila, (block, j) => {
      if (block == 0) {
        fill(0)
        stroke(202, 126, 109) // color cuadricula mapa
        rect(j * bloque, i * bloque, bloque, bloque)
      }
      if (block == 2) {
        fill(0,0,255) 
				//stroke(255,255,255) //Estos son los bordes
        //rect(j * bloque, i * bloque, bloque, bloque)
				image(imgLadrillo, j*bloque, i*bloque, bloque, bloque)
      }
    })
  })
}

/**determina la poscicion de la comida en el mapa /*/
function posicionComida() {
  comida.x = Math.round(Math.random()* ((WIDTH / bloque) - 1) + 1 )
  comida.x = Math.round(Math.random()* ((HIGTH / bloque) - 1) + 1 )
  if( comida.x < bloque || comida.x > 15 ){
		comida.x = Math.round(Math.random()*(15 - 1) + 1)
	}
	if( comida.y < bloque || comida.y > 14 ){
		comida.y = Math.round(Math.random()*(14 - 1) + 1)
	}
}

function posicionComida2() {
	console.log("Cambiar posicion C2")
	comida2.x = Math.round(Math.random()* ((WIDTH / bloque) - 1) + 1 )
	comida2.x = Math.round(Math.random()* ((HIGTH / bloque) - 1) + 1 )
	if( comida2.x < bloque || comida2.x > 15 ){
		comida2.x = Math.round(Math.random()*(15 - 1) + 1)
	}
	if( comida2.y < bloque || comida2.y > 14 ){
		comida2.y = Math.round(Math.random()*(14 - 1) + 1)
	}
}

// funcion que dibuja la cola
function dibujarCola( dCola ){ 
  
  if(level==1){
    image(imgCola, dCola.x * bloque, dCola.y * bloque, bloque, bloque);
  }
  if(level==2){
    image(imgCola2, dCola.x * bloque, dCola.y * bloque, bloque, bloque);
  }
  if(level==3){
    image(imgCola3, dCola.x * bloque, dCola.y * bloque, bloque, bloque);
  }
  if(level==4){
    image(imgCola4, dCola.x * bloque, dCola.y * bloque, bloque, bloque);
  }
  if(level==5){
    image(imgCola5, dCola.x * bloque, dCola.y * bloque, bloque, bloque);
  }
}
// recorre la lista para dibujar el resto de la cola
function recorreCola(list){
	if(isEmpty(list)){
		return []
	}
	else{
		dibujarCola( first(list) )
		return recorreCola(rest(list))
	}
}

function onKeyEvent(keyCode) { // movimientos con el teclado 
  if (keyIsDown(LEFT_ARROW)) {
    snake.dir = { xD: -1, yD: 0 } //dice que movimiento hara si presiona a la izquierda
		snake.d = "L" // izquierda
  }
  if (keyIsDown(RIGHT_ARROW)) {
    snake.dir = { xD: 1, yD: 0 } //dice que movimiento hara si presiona a la derecha
		snake.d = "R" //derecha
  }
  if (keyIsDown(UP_ARROW)) { 
    snake.dir = { xD: 0, yD: -1 } //dice que movimiento hara si presiona arriba
		snake.d = "U" //arriba
  }
  if (keyIsDown(DOWN_ARROW)) {
    snake.dir = { xD: 0, yD: 1 }  //dice que movimiento hara si presiona abajo
		snake.d = "D" //abajo
  }
  if(keyIsDown(ENTER) && vida == 0){
    //location.reload();
    vida=5
    score=0
    leve=1
		snake = {  //dir: llave
									//{
										// valor de la llave
									//}
			dir: { // da la dirrecion
				xD: 0,
				yD: 0
			},
			x: 9,
			y: 9,
			d: "U"
		}
    time = { // el tiempo es una variable que a travez del draw va incrementando en 1 cada vez  
				s: 0, // segundos
				m: 0, // minutos
				h: 0 // horas*/
		}
    
  }
  
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent(event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
 return 1
}


function transport(){ // Teletransporta de un borde a otro
	if(snake.y<=0){
		snake.y = 19 // si la posicion de snake en y es menor o igual al bloque 0 cuando la serpiente colisione aparecera en el bloque 19
	}
	if(snake.y>19){
		snake.y = 0 // si la posicion de snake en y es mayor o igual al bloque 19 cuando la serpiente colisione aparecera en el bloque 0
	}
	if(snake.x<=0){
		snake.x = 19  // si la posicion de snake en x es menor o igual al bloque 0 cuando la serpiente colisione aparecera en el bloque 19
	}
	if(snake.x>19){
		snake.x = 0  // si la posicion de snake en x es mayor o igual al bloque 19 cuando la serpiente colisione aparecera en el bloque 0
	}
}
