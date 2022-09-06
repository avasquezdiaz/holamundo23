//Funcion para llenar dinamicamente
//la tienda

//export function llenarTienda() {


    let productos = [

        { 
            nombre: "Batimovil a escala", 
            precio: 400000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/batiMovil.webp?alt=media&token=36e23ad8-e16a-4c89-b2ca-fb562221bfd8"], 
            descripcion: "Batimovil a escala de la ultima pelicula",
        },
        
        { 
            nombre: "Camiseta Batman", 
            precio: 80000, 
            foto:["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/camisetaBatman.webp?alt=media&token=e8e22998-28c8-4d97-bc8d-9aea67c59d05"], 
            descripcion: "Camiseta original DC", 
        },

        { 
            nombre: "Gorra Batman", 
            precio: 50000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/gorraBatman.webp?alt=media&token=0f404e90-d15e-4852-9b81-72df1c67938c"], 
            descripcion: "Gorra original DC", 
        },

        { 
            nombre: "Bati termo DC", 
            precio: 35000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/batiTermo.webp?alt=media&token=1bfc45a1-f41c-43f7-9df2-3783b59addd5"], 
            descripcion: "Termo para bati chocolate", 
        },

        { 
            nombre: "Batmav v Superman", 
            precio: 300000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/batmavSuperman.webp?alt=media&token=859d55ea-327f-4201-b46b-c976edfb182d"], 
            descripcion: "Imagen a escala de la pelicula Batman v Superman",
        },

        { 
            nombre: "Bati morral Totto", 
            precio: 80000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/batiMorral.webp?alt=media&token=4e5f2cbe-94bf-4f1c-b5e7-de737e594006"], 
            descripcion: "Bolso original DC", 
        },
        
        { 
            nombre: "Silla Gaming Batman", 
            precio: 2000000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/sillaBatman.webp?alt=media&token=2ad0ef77-2705-41fe-9a99-5c27b9de0443"], 
            descripcion: "Silla comoda y original DC", 
        },
        
        { 
            nombre: "caja de comics Batman", 
            precio: 300000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/cajaBatman.webp?alt=media&token=53b38a2d-0a0c-4c3e-a896-7f430bf014e8"], 
            descripcion: "comics Batman originales", 
        },

        { 
            nombre: "Bati caja sorpresa", 
            precio: 250000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/cajaSorpresa.webp?alt=media&token=2839cf5a-df6c-4e11-8f70-1a689d21159e"], 
            descripcion: "Caja sorpresa con productos de batman", 
        },

        { 
            nombre: "Bati lonchera totto", 
            precio: 80000, 
            foto: ["https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/batiLonchera.webp?alt=media&token=442dd902-8bd6-48e1-9f65-c8b225f8dfac"], 
            descripcion: "Lonchera para llevar tus bati alimentos", 
        },

    ]

    //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

    //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
    let fila=document.getElementById("fila")    

    //2. Necesito recorrer un arreglo
    productos.forEach(function (producto) {

        //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100","card","shadow","text-center")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("p-3")
        imagen.classList.add("h-100")
        imagen.src = producto.foto

        let separador = document.createElement("h4")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")
        

        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.classList.add("mx-3")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center")
        precio.classList.add("text-muted")
        precio.textContent = producto.precio

        let descripcion=document.createElement("P")
        descripcion.classList.add("text-danger")
        descripcion.textContent=producto.descripcion

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("type", "button")
        botonAmpliarInfo.classList.add("btn")
        botonAmpliarInfo.classList.add("btn-outline-dark")
        botonAmpliarInfo.classList.add("mx-3")
        botonAmpliarInfo.classList.add("mb-3")
        botonAmpliarInfo.textContent = "Ver producto"


        //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
        //QUE ACABAMOS DE CREAR EN NUESTRA BASE
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(botonAmpliarInfo)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    })

//}

