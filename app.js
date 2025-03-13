console.log('connected');
// ========== get toast container ========//
const toastBox= document.getElementById('toast-container');

// ========= set toast msg =======//
let successMsg = 'Success! This Success Text!';
let errorMsg = 'Error! This is Error Text!'
let warnMsg ='Warning! This is warning Text!'



// ============ display toast ==========//
const displayToast=(msg)=>{
    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast-div');
    const toast = document.createElement('p');
    if (msg==successMsg) {
        toastDiv.classList.add('success')
    }
    else if (msg==errorMsg){
    
    }
    toast.innerHTML= msg;
    toastDiv.appendChild(toast);
    toastBox.appendChild(toastDiv);


    setTimeout(()=>{
        toastDiv.remove()
    },5000)
}