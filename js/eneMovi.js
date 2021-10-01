/**
* Contract: <movimientoEnemigo> <?> --> <?>
* Porpuse: se encarga de el movimiento del enemigo.
*/
function movimientoEnemigo(){

  if (level== 1 ){
    if( enemy.x == 3 && enemy.y == 2  ){
			enemy.dir = {x: 0, y:1} // y: 1= abajo
		}
		if( enemy.x == 3 && enemy.y == 17  ){
			enemy.dir = {x: 1, y: 0}  //x:1 = Derecha
		}
		if( enemy.x == 17 && enemy.y == 17  ){
			enemy.dir = {x: 0, y:-1 }  //y:-1= arriba
		}
		if( enemy.x == 17 && enemy.y == 2  ){
			enemy.dir = {x: -1, y: 0} //x:-1= Izquierda
		}
  }
  if (level==2 ){
    if( enemy.x == 3 && enemy.y == 2  ){
			enemy.dir = {x: 0, y:1} // 1 abajo // -1 arriba en Y
		}
		if( enemy.x == 3 && enemy.y == 17  ){
			enemy.dir = {x: 1, y: 0}  //x:1 = Derecha
		}
		if( enemy.x == 17 && enemy.y == 17  ){
			enemy.dir = {x: 0, y:-1 }  //y:-1= arriba
		}
		if( enemy.x == 17 && enemy.y == 2  ){
			enemy.dir = {x: -1, y: 0} //x:-1= Izquierda
		}
  }

  if (level==3 ){
    if( enemy.x == 3 && enemy.y == 2  ){
			enemy.dir = {x: 0, y:1} // 1 abajo // -1 arriba en Y
		}
		if( enemy.x == 3 && enemy.y == 17  ){
			enemy.dir = {x: 1, y: 0}  //x:1 = Derecha
		}
		if( enemy.x == 17 && enemy.y == 17  ){
			enemy.dir = {x: 0, y:-1 }  //y:-1= arriba
		}
		if( enemy.x == 17 && enemy.y == 2  ){
			enemy.dir = {x: -1, y: 0} //x:-1= Izquierda
		}
  }
}

