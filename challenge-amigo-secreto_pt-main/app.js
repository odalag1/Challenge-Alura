let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = '';
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = '❌';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.cursor = 'pointer';
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    exibirResultado(sorteado);
    resetarTudo();
}

function exibirResultado(sorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3>O amigo sorteado foi: ${sorteado}</h3>`;
}

function resetarTudo() {
    amigos = [];
    setTimeout(() => {
        atualizarListaAmigos();
        document.getElementById('resultado').innerHTML = '';
    }, 5000);
}
