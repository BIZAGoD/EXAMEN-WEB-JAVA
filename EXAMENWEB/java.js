function ejercicio1() {
    const personas = [
        { nombre: 'Ana', edad: 20 },
        { nombre: 'Luis', edad: 17 },
        { nombre: 'Marta', edad: 22 }
    ];
    const filtrarMayoresDeEdad = arr => arr.filter(persona => persona.edad >= 18);
    document.getElementById('output1').innerHTML = JSON.stringify(filtrarMayoresDeEdad(personas), null, 2);
}


    

function ejercicio2() {
    const numeros = [1, 5, 10, 15, 25];
    const transformarYFiltrar = arr => arr.map(num => num * num).filter(cuadro => cuadro > 20);
    document.getElementById('output2').innerHTML = JSON.stringify(transformarYFiltrar(numeros), null, 2);
}




async function ejercicio3() {
    const output = document.getElementById('output3');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Error en la solicitud');
        const data = await response.json();
        output.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        output.classList.add('error');
        output.innerHTML = `Error: ${error.message}`;
    }
}




function ejercicio4() {
    const output = document.getElementById('output4');
    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Agregar Nuevo Ítem';
    button.onclick = () => {
        const li = document.createElement('li');
        li.textContent = 'Nuevo ítem';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => li.remove();
        li.appendChild(deleteButton);
        ul.appendChild(li);
    };
    output.innerHTML = '';
    output.appendChild(button);
    output.appendChild(ul);
}




function ejercicio5() {
    const objetos = [
        { nombre: 'A', edad: 30 },
        { nombre: 'B', edad: 25 },
        { nombre: 'C', edad: 35 }
    ];
    const ordenarPorPropiedad = (arr, propiedad) => arr.slice().sort((a, b) => a[propiedad] - b[propiedad]);
    document.getElementById('output5').innerHTML = JSON.stringify(ordenarPorPropiedad(objetos, 'edad'), null, 2);
}


