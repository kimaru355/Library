let inputRead = document.querySelector('#inputRead');	

inputRead.addEventListener('click', () => {
    if (inputRead.classList.toggle('bg-red-300')) {
    inputRead.textContent = 'Unread';
    inputRead.value = false;
    } else {
        inputRead.textContent = 'Read';
        inputRead.value = true;
    }
});