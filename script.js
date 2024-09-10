function atualizarTotal() {
    const cartItems = document.querySelectorAll('#cart-items li');
    let total = 0;
    
    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        total += price;
    });
    
    document.getElementById('cart-total').innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const cartItems = document.getElementById('cart-items');
    
    // Criar um novo item de lista (li)
    const novoItem = document.createElement('li');
    novoItem.innerText = nomeProduto;
    novoItem.setAttribute('data-price', precoProduto);
    
    // Adicionar o item ao carrinho
    cartItems.appendChild(novoItem);
    
    // Atualizar o total do carrinho
    atualizarTotal();
}

// Função para esvaziar o carrinho
function esvaziarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    
    // Remove todos os itens do carrinho
    cartItems.innerHTML = '';
    
    // Atualiza o total para zero
    document.getElementById('cart-total').innerText = 'Total: R$ 0,00';
}

// Adiciona funcionalidade aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Obtém o nome e preço do produto
        const produto = button.parentElement;
        const nomeProduto = produto.querySelector('h2, .rainbow-text').innerText;
        const precoProduto = produto.querySelector('p').innerText.replace('R$', '').trim();

        // Adiciona o produto ao carrinho
        adicionarAoCarrinho(nomeProduto, parseFloat(precoProduto));
    });
});

// Adiciona funcionalidade ao botão "Finalizar Compra"
document.getElementById('checkout').addEventListener('click', () => {
    // Esvazia o carrinho
    esvaziarCarrinho();
    
    // Mensagem de confirmação (pode ser ajustado para abrir uma página de checkout real)
    alert('Obrigado por comprar na SamuDelmo shop chama é us guri');
});