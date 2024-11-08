
document.getElementById('continue-button').addEventListener('click', function() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('cinematic-screen').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('cinematic-text').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('cinematic-text').innerText = ''; // Limpiar el texto anterior
            document.getElementById('thermometer-screen').classList.remove('hidden'); // Mostrar la pantalla del termómetro
        }, 1000);
    }, 2000);
});

document.getElementById('ready-button').addEventListener('click', function() {
    const loveMeterValue = document.getElementById('love-meter').value;
    const resultMessage = document.getElementById('result-message');

    if (loveMeterValue > 70) {
        resultMessage.innerText = "¡Asuuu! Yo sabía que me querías mucho. Eres una mujer maravillosa, gracias por estar a mi lado, mi blanquita fría.";
    } else {
        resultMessage.innerText = "Sé que es muy poco, pero trataré de cambiar eso. Igual, gracias por seguir a mi lado, mi blanquita fría.";
    }

    document.getElementById('thermometer-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
});