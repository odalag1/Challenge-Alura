# Amigo Secreto 🎉

Este projeto é um simples sorteador de **Amigo Secreto** desenvolvido com **HTML, CSS e JavaScript**. Ele permite que os usuários adicionem nomes à lista e façam o sorteio aleatório de um único amigo.

## 🛠 Tecnologias Utilizadas

- **HTML** → Estrutura da página.
- **CSS** → Estilização da interface.
- **JavaScript** → Lógica de funcionamento.

## 🚀 Como funciona o código

### 📌 Adicionar Amigo

1. O usuário digita um nome no campo de entrada.
2. Se o nome for válido e não repetido, ele é adicionado à lista.
3. A função `atualizarListaAmigos()` exibe os nomes na tela.

### 📌 Remover Amigo

- Cada nome na lista tem um botão ❌ para remover o amigo correspondente.

### 📌 Sorteio do Amigo Secreto

1. O botão "Sortear" escolhe **um nome aleatório** da lista.
2. O resultado é exibido como: **"O amigo sorteado foi: [Nome]"**.
3. Após **5 segundos**, tudo é apagado para um novo sorteio.

### 📌 Reset Automático

- A função `resetarTudo()` limpa a lista e o resultado automaticamente após o sorteio.

## 📷 Exemplo de Uso

```
[ Maria ] [❌]
[ João ] [❌]
[ Ana ] [❌]

(Sorteando...)

O amigo sorteado foi: João
(Após 5 segundos, tudo é apagado.)
```
