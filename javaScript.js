document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Formulário enviado com sucesso!');
    this.reset(); 
});
