 <button
                                        onClick={() => this.state2.setState({ count: 1 })}
                                        class="seleccion" >
                                        OFERTAS
                                    </button>
                                    <button
                                        onClick={() => this.setState({ count: 2 })}
                                        class="seccion">
                                        CELULARES
                                    </button>
                                    <button
                                        onClick={() => this.setState({ count: 3 })}
                                        class="seccion">
                                        ACCESORIOS

                                    </button>
                                     {this.state.data.map(empresa => {
                                        return(
                                        <section class="uno">
                                            <h5>{empresa.Nombre}</h5>
                                            <img src={imgexport.airpodspro} width="130" height="150" className="imagenesprincipal" />
                                            <p class="precio">
                                            ${new Intl.NumberFormat("en-EN").format(empresa.Precio)}
                                            </p>
                                            <a href="" class="leer-mas">Leer más</a>
                                            <br />
                                            <br />
                                            <a href="" class="Añadir">Añadir al carrito</a>
                                            
                                        </section>
                                     )
                                    })}s