import React from "react";
import imgexport from "../imagenes/imgexport";
import '../css/All.css';

function Celulares(){

    return(
    <>
        <section id="categorias"  >
					
                    <section class="uno">
                        
                        
                        <h5>IPHONE X</h5>
                        <img src={imgexport.iphonex} width="150" height="150" className="imagenesprincipal"/>
                        
                        <p class="precio">
                            $ 440.000
                        </p>
                        
                        <a href="" class="leer-mas">Leer más</a>
                        <br />
                        <br />
                        
                        <a href="" class="Añadir">Añadir al carrito</a>
                    </section>
    
                    <section class="uno">
                        <h5>IPHONE 8 PLUS</h5>
                        <img src={imgexport.iphone7} width="150" height="150" className="imagenesprincipal"/>
                        
                        <p class="precio">
                            $ 380.000
                        </p>
    
                        <a href="" class="leer-mas">Leer más</a>
                        <br/>
                        <br />
                        
                        <a href="" class="Añadir">Añadir al carrito</a>
                    </section>
    
    
                    <section class="uno">
                        <h5>IPHONE 11</h5>
                        <img src={imgexport.iphone11} width="150" height="150" className="imagenesprincipal"/>					
                        <p class="precio">
                            $ 640.000
                        </p>
                        <a href="" class="leer-mas">Leer más</a> 
                        <br/>
                        <br />
                        <a href="" class="Añadir">Añadir al carrito</a>
                    </section>
    
                </section>
    </>

    );



}
export default Celulares;