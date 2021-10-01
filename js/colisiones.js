var muerte = new Audio("../Sonidos/muerteSnake.mp3")
var choque =new Audio("../Sonidos/choque.mp3")
var comer = new Audio("../Sonidos/comer.mp3")
var bomb = new Audio("../Sonidos/bomba.mp3")
function colisiones(){ 
	colisionMuroComida() //
  colisionmurocomida2() 
  colisioncomida()
  colisioncomida2()
	colisionMuro()
  
}

function colisioncomida(){ //colision de snake y comida en eje X y Y
   
	if( snake.x == comida.x && snake.y == comida.y){ 
		score++; 
    comer.play()
		console.log("Puntos: " + score)
		totalCola++;
		posicionComida()
    
	}
}

function colisionMuroComida(){     // colision de la comida con un muro  
	forEach(mapa, (fila, i)=>{       //Para que la comida no quede dentro de un muro
		forEach(fila, (valor, j)=>{
			if( valor == 2 && (i == comida.y && j == comida.x) ){
				posicionComida()
				i = mapa.length
				j = fila.length
			}
		})
	})
}

function colisioncomida2(){ //Colision de la culebra con bomba
   
	if( snake.x == comida2.x && snake.y == comida2.y){
    bomb.play()
		score--;
		console.log("Puntos: " + score)
		totalCola=1;
    cola = [];
		posicionComida2()
	}
}

function colisionmurocomida2(){ // Colision de la bomba con el muro
	forEach(mapa, (fila, i)=>{
		forEach(fila, (valor, j)=>{
			if( valor == 2 && (i == comida.y && j == comida.x) ){
				posicionComida2()
				i = mapa.length // Columna
				j = fila.length //Fila
        console.log ("colision con la bomba")
			}
		})
	})
}


function colisionMuro(){ // colision de la culebra con un muro
	forEach(mapa, (fila, i)=>{
		forEach(fila, (valor, j)=>{
			if( valor == 2 && (i == snake.y+snake.dir.yD && j == snake.x+snake.dir.xD) ){
				console.log("Colision con un muro")
        muerte.play()
				vida -= 1
        totalCola = 1;
        cola = [];
        //score = 0
        snake.dir.xD = 0
        snake.dir.yD = 0 
				i = mapa.length
				j = fila.length
			}
		})
	})
}

/**colision de la serpiente con el enemigo */
function colisionenemy(){
  if(snake.x == enemy.x && snake.y == enemy.y && ( level == 2 || level == 3)){
   if(score % score == 0 || score % score == 1){
    choque.play()
		vida--;
    console.log("Colision con enemigo")
    totalCola = 1;
    cola = [];
    score = 0
	}
}
}


