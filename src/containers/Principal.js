import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/All.css';
import imgexport from '../imagenes/imgexport';
import Accesorios from '../componentes/Accesorios';
import Celulares from '../componentes/Celulares';

import axios from 'axios';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Box
} from "reactstrap";


const url = "http://localhost:3001/Producto";
export default class Principal extends Component {
    state = {
        data: [],
        count: 1,
        modalInsertar: false,
        modalEliminar: false,
        modalleermas: false,
        form: {
            id: '',
            Nombre: '',
            Precio: '',
            Cantidad: '',
            Caracteristicas: '',
            tipoModal: ''
        },
        tipoModal: ''
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post(url, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPut = () => {
        axios.put(url + this.state.form.id, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
            this.seleccionarEmpresa();
        })
    }

    peticionDelete = () => {
        axios.delete(url + this.state.form.id).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }


    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });

    }

    seleccionarEmpresa = (empresa) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: empresa.id,
                Nombre: empresa.Nombre,
                Precio: empresa.Precio,
                Cantidad: empresa.Cantidad,
                Caracteristicas: empresa.Caracteristicas,
                Tipo: empresa.Tipo
            }
        })

    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }
    
    render() {
        const { form } = this.state;

        return (
            <html>

                <head className="html">
                    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
                </head>
                <body className="html" >
                    <header id="cabezera">

                        <img src={imgexport.logo} id="logo" />
                        <a id="carrito" href="/register">Ir a Registrarme</a>
                        <a id="carrito" href="/" >Iniciar Sesion </a>

                    </header >

                    <div >
                        
                    {this.state.count === 1 && (
                        <div>
                            <div >
                                <button
                                    onClick={() => this.setState({ count: 1 })}
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
                            
                            <section id="categorias" >
                                {this.state.data.map(empresa => {
                                    return (
                                        <div>
                                            
                                            <div>
                                                <section class="uno">
                                                    <div>
                                                        <h5>{empresa.Nombre}</h5>
                                                        <img src={imgexport['foto ' + empresa.id]} width="130" height="130" className="imagenesprincipal" />
                                                        <p class="precio">
                                                            ${new Intl.NumberFormat("en-EN").format(empresa.Precio)}
                                                        </p>
                                                        <button onClick={() => { this.seleccionarEmpresa(empresa); this.setState({ modalleermas: true }) }} class="leer-mas">Leer más</button>
                                                        <br />
                                                        <a href="" class="Añadir">Añadir al carrito</a>
                                                    </div>

                                                </section>
                                                <div >
                                                    <Modal isOpen={this.state.modalleermas}>

                                                        <ModalBody >
                                                            Caracteristicas: <br /> <br /> {form && form.Caracteristicas}
                                                        </ModalBody>
                                                        <ModalFooter>

                                                            <button className="btn btn-secundary" onClick={() => this.setState({ modalleermas: false })}>cerrar</button>
                                                        </ModalFooter>
                                                    </Modal>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })}
                                </section>
                            </div>
                        </div>
                    )}
                    {this.state.count === 2 && (
                        <div>
                            <div >
                                <button
                                    onClick={() => this.setState({ count: 1 })}
                                    class="seccion" >
                                    OFERTAS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 2 })}
                                    class="seleccion">
                                    CELULARES
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 3 })}
                                    class="seccion">
                                    ACCESORIOS
                                </button>
                            </div>
                            <div>
                            <section id="categorias" >
                                {this.state.data.map(empresa => {
                                    return (
                                        
                                        <div>
                                            {empresa.Tipo === "Celular" && (
                                            <div>
                                                <section class="uno">
                                                    <div>
                                                        <h5>{empresa.Nombre}</h5>
                                                        <img src={imgexport['foto ' + empresa.id]} width="130" height="130" className="imagenesprincipal" />
                                                        <p class="precio">
                                                            ${new Intl.NumberFormat("en-EN").format(empresa.Precio)}
                                                        </p>
                                                        <button onClick={() => { this.seleccionarEmpresa(empresa); this.setState({ modalleermas: true }) }} class="leer-mas">Leer más</button>
                                                        <br />
                                                        <a href="" class="Añadir">Añadir al carrito</a>
                                                    </div>

                                                </section>
                                                <div >
                                                    <Modal isOpen={this.state.modalleermas}>

                                                        <ModalBody >
                                                            Caracteristicas: <br /> <br /> {form && form.Caracteristicas}
                                                        </ModalBody>
                                                        <ModalFooter>

                                                            <button className="btn btn-secundary" onClick={() => this.setState({ modalleermas: false })}>cerrar</button>
                                                        </ModalFooter>
                                                    </Modal>
                                                </div>
                                            </div>

                                            )}
                                        </div>
                                    )
                                })}
                                </section>
                            </div>
                        </div>
                    )}
                    {this.state.count === 3 && (
                        <div>
                            <div >
                                <button
                                    onClick={() => this.setState({ count: 1 })}
                                    class="seccion" >
                                    OFERTAS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 2 })}
                                    class="seccion">
                                    CELULARES
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 3 })}
                                    class="seleccion">
                                    ACCESORIOS
                                </button>
                            </div>
                            <div>
                            <section id="categorias" >
                                {this.state.data.map(empresa => {
                                    return (
                                        
                                        <div>
                                            {empresa.Tipo === "Accesorio" && (
                                            <div>
                                                <section class="uno">
                                                    <div>
                                                        <h5>{empresa.Nombre}</h5>
                                                        <img src={imgexport['foto ' + empresa.id]} width="130" height="130" className="imagenesprincipal" />
                                                        <p class="precio">
                                                            ${new Intl.NumberFormat("en-EN").format(empresa.Precio)}
                                                        </p>
                                                        <button onClick={() => { this.seleccionarEmpresa(empresa); this.setState({ modalleermas: true }) }} class="leer-mas">Leer más</button>
                                                        <br />
                                                        <a href="" class="Añadir">Añadir al carrito</a>
                                                    </div>

                                                </section>
                                                <div >
                                                    <Modal isOpen={this.state.modalleermas}>

                                                        <ModalBody >
                                                            Caracteristicas: <br /> <br /> {form && form.Caracteristicas}
                                                        </ModalBody>
                                                        <ModalFooter>

                                                            <button className="btn btn-secundary" onClick={() => this.setState({ modalleermas: false })}>cerrar</button>
                                                        </ModalFooter>
                                                    </Modal>
                                                </div>
                                            </div>

                                            )}
                                        </div>
                                    )
                                })}
                                </section>
                            </div>
                        </div>
                    )}
                    </div>
                    <section id="info">
                        <section id="center">


                            <h3 class="parrafo" >
                                SIGUENOS y contactanos EN NUESTRAS REDES SOCIALES :
                                <a href="https://www.instagram.com/alltecnology.cl/"> <img align="middle" src={imgexport.redes} width="150" /></a>
                            </h3>
                        </section>
                    </section>
                </body>
            </html>
        )
    }
}
