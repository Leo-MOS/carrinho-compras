limpar();

function adicionar() {
    console.clear();

    //Recuperar a quantidade
    let campoQtd = document.getElementById('quantidade');
    let quantidade = parseInt(campoQtd.value);
    console.log(`Quantidade: ${quantidade}`); //OK

    
    if (quantidade == '' || quantidade <= 0 || Number.isFinite(quantidade) == false) { //quantidade precisa ser maior zero e não pode ser vazia
        alert('Quantidade precisa ser um valor numérico inteiro maior que 0.');
        return
    }

    //Recuperar o produto
    let produtoEscolhido = document.getElementById('produto'); //retorna uma string com o nome do produto e o valor
    console.log(`Produto escolhido: ${produtoEscolhido.value}`); //OK

    //Separar o nome do produto e o valor
    let nomeProduto = produtoEscolhido.value.split(' - ')[0];
    let valorProduto = parseFloat(produtoEscolhido.value.split(' - R$')[1]) * quantidade;
    console.log(`Nome do produto ${nomeProduto}, valor total: R$ ${valorProduto}`); //OK

    criarNovaSecao(quantidade, nomeProduto, valorProduto); //cria a nova seção que será exibida no carrinho

    //Agora precisa limpar a quantidade
    campoQtd.value = '';

    //O próximo passo é recuperar o total anterior.
    let totalAnterior = document.getElementById('valor-total'); //recupera todo o elemento deste ID
    let valorTotalAnterior = totalAnterior.textContent.replace('R$',''); //remove o símbolo 'R$' da string
    valorTotalAnterior = parseFloat(valorTotalAnterior); //converte a string em número
    let valorTotalAtualizado = valorTotalAnterior + valorProduto;
    totalAnterior.textContent = `R$${valorTotalAtualizado}`;
}

function criarNovaSecao(quantidade, nomeProduto, valorProduto) {
    
    //recuperar lista de produtos no carrinho {id = lista-produtos}
    let carrinho = document.getElementById('lista-produtos');
    let novaSecao = document.createElement('section'); //nova secão criada, mas ainda não "pendurada" no carrinho

    novaSecao.classList.add('carrinho__produtos__produto'); //classe inserida

    let novoItemQtd = document.createElement('span'); //cria o elemento que exibirá a quantidade na tela
    novoItemQtd.classList.add('texto-azul'); //a quantidade deve ser exibida em azul
    novoItemQtd.textContent = `${quantidade}x`; //insere o texto

    let novoItemNome = document.createElement('span'); //cria o elemento que exibirá o nome do produto na tela
    novoItemNome.textContent = ` ${nomeProduto} `;

    let novoItemValor = document.createElement('span'); //cria o elemento que exibirá o valor do produto na tela
    novoItemValor.textContent = `R$${valorProduto}`;
    novoItemValor.classList.add('texto-azul'); //o valor deve ser exibido em azul

    //"pendurar" os novos itens à seção
    novaSecao.appendChild(novoItemQtd);
    novaSecao.appendChild(novoItemNome);
    novaSecao.appendChild(novoItemValor);

    //"pendurar" a seção no carrinho
    carrinho.appendChild(novaSecao);

}

function limpar() {
    let listaCarrinho = document.getElementById('lista-produtos');
    
    while (listaCarrinho.firstChild) { //Conforme explicado pela Luri: "Em JavaScript, qualquer valor que não seja null, undefined, 0, false, NaN ou uma string vazia é considerado verdadeiro."
        listaCarrinho.removeChild(listaCarrinho.firstChild); //remove o primeiro filho
    } //repete enquanto houver algum filho

    document.getElementById('valor-total').textContent = 'R$0';
}

function verificarRepeticao() {
    
}