// Simulamos tres operaciones asíncronas con promesas
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1 resuelta'), 1000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 2 resuelta'), 2000);
});

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            console.log(variableIndefinida); // Esto causará un error
            resolve('Promesa 3 resuelta');
        } catch (error) {
            reject(error); // Rechazamos la promesa si hay un error
        }
    }, 3000);
});



// Usamos Promise.all() para esperar que todas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log('Todas las promesas resueltas:', resultados);
    })
    .catch(error => {
        console.error('Alguna promesa falló:', error);
    });
