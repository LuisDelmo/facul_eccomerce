function atualizarTotal() {
    const cartItems = document.querySelectorAll('#cart-items li');
    let total = 0;
    
    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        total += price;
    });
    
    document.getElementById('cart-total').innerText = `Total: R$ ${total.toFixed(2)}`;
}


function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const cartItems = document.getElementById('cart-items');
    

    const novoItem = document.createElement('li');
    novoItem.innerText = nomeProduto;
    novoItem.setAttribute('data-price', precoProduto);
    

    cartItems.appendChild(novoItem);
    
   
    atualizarTotal();
}


function esvaziarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    
    
    cartItems.innerHTML = '';
    
    
    document.getElementById('cart-total').innerText = 'Total: R$ 0,00';
}


document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        
        const produto = button.parentElement;
        const nomeProduto = produto.querySelector('h2, .rainbow-text').innerText;
        const precoProduto = produto.querySelector('p').innerText.replace('R$', '').trim();

        
        adicionarAoCarrinho(nomeProduto, parseFloat(precoProduto));
    });
});


document.getElementById('checkout').addEventListener('click', () => {
    
    esvaziarCarrinho();
    
    
    alert('Obrigado por comprar na SamuDelmo shop chama é us guri');
});