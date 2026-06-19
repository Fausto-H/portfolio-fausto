document.addEventListener('DOMContentLoaded', () => {
    const emailButton = document.querySelector('#btn-copiar-email');
    const msg = document.getElementById("msg-copiado");

    if (emailButton) {
        emailButton.addEventListener('click', (event) => {
            event.preventDefault();
            navigator.clipboard.writeText("faustohcb@gmail.com");
            
            if (msg) {
                msg.textContent = "✓ E-mail copiado";
                setTimeout(() => { msg.textContent = ""; }, 2000);
            }
        });
    }
});
