var listaProductos=[];
function crearProducto(nombre,precio){
    var odj={};
    odj.nombre=nombre;
    odj.precio=precio;
    return obj;
}

function cargarProducto(){
    let listaProductos=[    crearProducto('TV', 1500),
                            crearProducto('Lavadora',1000),
                            crearProducto('Licuadora',350),
                            crearProducto('Radio',50)]
    return listaProductos;
}

//cargar las tablas de los productos
function cargarListasProductos(){
    //TAREA POSICIONAR DEBAJO DE LA CABECERA
    var tabla = document.getElementById('tbl_listaProductos');
    var contador=0
    listaProductos=cargarProductos();//cargo y capturo el array
    console.log(listaProductos);
    listaProducto.forEach(producto => {
        contador++;
        consol.log(producto);
        var fila=tabla.insertRow(0);//creo la fila
        var celda0=fila.insertCell(0);//inserto la celda 0
        celda0.innerHTML=producto.nombre;//cargo el dato en la celda
        var celda1=fila.insertCell(1);
        celda1.innerHTML=producto.precio;
        var celda2=fila.insertCell(2);
        celda2.innerHTML='<input type="text" id="'+contador+'" disables/>';
        var celda3=fila.insertCell(3);
        celda3.innerHTML='<input tag="xxxx" type="checkbox" onclick"javascript'
        
    });
    return;
}

function habilitaTexto(odjeto){
    var tag=odjeto.getAttribute('tag');//aqui como el value trae en nombre el tag trae un atributo.
    var texto=Document.getElementById(tag);
    texto.disable=!(texto.disable);//operador monario=NIEGA
    console.log(texto);
    //TAREA BORRAR EL TEXTO UNA VEZ QUE SE VUELVA A DESHABILITAR
}
function calcularTotal(){
    var tabla=Document.getElementById('tbl_listaProductos');
    for(var i=1,fila;fila=tabla.rows[i],i++){//rows=fila, (fila=tabla.rows[i]--evalua a la existencia de la fila) mientras exista la fila va a sguir iterando

        console.log(fila.cell);
    }
}
