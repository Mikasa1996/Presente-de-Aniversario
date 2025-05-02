let currentMessage = 0;
const messages = document.querySelectorAll('.mensagem');

function showNextMessage() {
    messages[currentMessage].classList.remove('active');
    messages[currentMessage].style.display = 'none'; // esconde a anterior
  
    currentMessage++;
  
    if (currentMessage < messages.length) {
      messages[currentMessage].classList.add('active');
      messages[currentMessage].style.display = 'block';
    } else {
      clearInterval(interval);
    }
  }

// Exibe automaticamente a próxima mensagem a cada 10 segundos
const interval = setInterval(showNextMessage, 20000);

