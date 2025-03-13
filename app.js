
// ========== get toast container ========//
const toastBox= document.getElementById('toast-container');

// ========= set toast msg =======//
let successMsg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1024 1024">
	<path fill="green" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z" />
</svg> Success! This Success Text!`;
let errorMsg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
	<path fill="red" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
</svg> Error! This is Error Text!`
let warnMsg =`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
	<path fill="darkgoldenrod" d="M5.214 1.459a.903.903 0 0 1 1.572 0l4.092 7.169c.348.61-.089 1.372-.787 1.372H1.91c-.698 0-1.135-.762-.787-1.372zM5.5 4.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0M6 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" />
</svg> Warning! This is warning Text!`



// ============ display toast ==========//
const displayToast=(msg)=>{
    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast-div');
    const toast = document.createElement('p');
    toast.classList.add('toast')
    if (msg==successMsg) {
        toastDiv.classList.add('success')
    }
    else if (msg==errorMsg){
        toastDiv.classList.add('error')
    }
    else {
        toastDiv.classList.add('warning')
    }
    toast.innerHTML= msg;
    toastDiv.appendChild(toast);
    toastBox.appendChild(toastDiv);


    setTimeout(()=>{
        toastDiv.remove()
    },5000)
}