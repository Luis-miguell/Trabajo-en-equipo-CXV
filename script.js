function Inicio(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const password= document.getElementById('password').value;
    
    if(nombre.trim() === "" || password === ""){
        alert('agrega tus datos')
    }else{
        alert(`Nombre: ${nombre}
            password:${password}`)
    }
}