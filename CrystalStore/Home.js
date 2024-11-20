function Initial(){
    for(let i = 0; i < 3; i++){
        let card = document.createElement('div');
        card.className = 'gridHelper';
        for(let j = 0; j < 3; j++){
            let product = document.createElement('div');
            product.className = 'Card';
            product.innerHTML = j * i;
            card.appendChild(product);
        }
        document.getElementById('products').appendChild(card);
    }
}