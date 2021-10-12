let estudiantes = [];
        
        const agregarEstud = (ev)=>{
            ev.preventDefault();  //para detener el envio de formulario
            let estudiante = {
                
		id: "1",
                carnet: document.getElementById('carneti').value,
                nombre: document.getElementById('nombrei').value,
                apellidos: document.getElementById('apellidosi').value,
                tel: document.getElementById('numt').value,
                correo: document.getElementById('correoe').value

            }
            estudiantes.push(estudiante);
            document.forms[0].reset(); //limpia el formulario para las próximas entradas
           

            
            console.warn('added' , {estudiantes} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(estudiantes, '\t', 2);

            //Para guardarlo en el localStorage
            localStorage.setItem('Estudiantes', JSON.stringify(estudiantes) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', agregarEstud);
        });