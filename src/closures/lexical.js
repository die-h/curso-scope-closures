/* El ambito lexico significa que la accesiblidad de las variables esta determinada por la posicion de las mismas dentro de los ambitos anidados */

const global = 0; // Variable global

function myFunction() {
  const number = 1;
  conumberg(global);

  function parent() {  // funcion interna
    const inner = 2;
    console.log(number, global);

    function child() {
      console.log(inner, number, global);
    }
    return child();
  }
  return parent();
}
myFunction();
