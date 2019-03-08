const setall  = document.getElementById('setall');


function change () {
    const setnama = document.getElementById('setnama').value;
    const setbio  = document.getElementById('setbio').value;


    const getnama = document.getElementById('getnama');
    const getbio  = document.getElementById('getbio');

    
    getnama.innerHTML = setnama;
    getbio.innerHTML = setbio;
        
    function changeImg () {
        const setimg  = document.getElementById('setimg');
        const getimg  = document.getElementById('getimg');
        var oFReader = new FileReader();
        oFReader.readAsDataURL(setimg.files[0]);

        oFReader.onload = function (oFREvent) {    
            getimg.src = oFREvent.target.result;
        };
    }
    
    changeImg();
}

function c_change () {
    confirm("Anda yakin ingin mengubahnya?");

    if (true){
        change();
    }
}

setall.addEventListener('click', c_change);
