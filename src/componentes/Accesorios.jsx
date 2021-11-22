import React from "react";
import imgexport from "../imagenes/imgexport";
import '../css/All.css';

function Accesorios(){

    return(
    <>
        <section id="categorias" >
					
                    <section class="uno">
                        
                        
                        <h5>AIRPODS Pro</h5>
                        <img src={imgexport.airpodspro} width="130" height="150" className="imagenesprincipal"/>
                        
                        <p class="precio">
                            $ 250.000
                        </p>
                        
                        <a href="" class="leer-mas">Leer más</a>
                        <br />
                        <br />
                        
                        <a href="" class="Añadir">Añadir al carrito</a>
                    </section>
    
                    <section class="uno">
                        <h5>CARGADOR IPHONE</h5>
                        <img src={imgexport.cargador} width="150" height="150" className="imagenesprincipal"/>
                        
                        <p class="precio">
                            $ 15.000
                        </p>
    
                        <a href="" class="leer-mas">Leer más</a>
                        <br/>
                        <br />
                        
                        <a href="" class="Añadir">Añadir al carrito</a>
                    </section>
    
    
                    <section class="uno">
                        <h5>CARCASA IPHONE X</h5>
                        <img src={imgexport.carcasa} width="150" height="150" className="imagenesprincipal"/>					
                        <p class="precio">
                            $ 5.000
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
export default Accesorios;