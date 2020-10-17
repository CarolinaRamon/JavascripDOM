
      
      //DOM: DOCUMENT OBJECT MODEL

    //   window.onload = run;

    //   function run() {
    //   //document.getElementById("test").innerHTML = "found it";
    //   alert('Page fully loaded');
    //   }

    //   window.addEventListener('load', 
    //  function() { 
    //    alert('hello!');
    //  }, false);

      //ACCESO AL DOM A TRAVÉS DEL ID:
      let h1 = document.getElementById("titulo");
      //console.log(h1);
      //console.log(h1.innerHTML);
      h1.innerHTML = "Un nuevo texto";
      h1.style.color = "yellow";
      h1.style.background = "green";


      let boton = document.getElementById("boton");

      boton.onclick = function(){//función anonima: no tiene ningun nombre asociado
        let parrafo = document.getElementById("parrafo");
        parrafo.style.color = "green";
      }

      function cambiar(){
        let parrafo = document.getElementById("parrafo");
        parrafo.style.background = "orange";
      }
      boton2.onclick = cambiar;//OJO: si acá le pongo () a la funcion se ejecuta independientemente de que haga click o no

      //ACCESO AL DOM A TRAVÉS DE LA CLASE:
      let parrafos = document.getElementsByClassName("lead");
      console.log(parrafos);
      console.log(parrafos[0]);

      //QUERY SELECTOR:
      let paragraph = document.querySelectorAll("p");

      //EVENTOS:
      boton.addEventListener('click',function(){
        //console.log('Hiciste click');
        onclick=alert('Hiciste click')
      })

      boton.addEventListener('mouseover',function(){
        console.log('He detectado el mouse');//ATENCION: para que funcione hay que salir del modo responsive
      })
      
      boton.addEventListener('mouseout',function(){
        console.log('Adiós ratón');
      })