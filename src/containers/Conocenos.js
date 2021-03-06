import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/All.css';
import imgexport from '../imagenes/imgexport';
import axios from 'axios';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "reactstrap";


const url = "http://localhost:3001/Producto/";



export default class Conocenos extends Component {
    state = {
        data: [],
        count: 1,
        modalInsertar: false,
        modalEliminar: false,
        modalleermas: false,
        form: {
            id: '',
            Nombre: '',
            url_imagen: '',
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
                url_imagen: empresa.url_imagen,
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
            <html className="fondo">

                <body className="fondo" >
                    <header id="cabezera">
                        <div>
                            <img src={imgexport.logo} id="logo" />
                            <a id="carrito" href="/">Cerrar Sesion</a>
                            <a id="carrito" href="/loged_principal"><img src={imgexport.carrito} width="20" height="20" />  Volver al Catalogo</a>
                        </div>

                    </header >


                    {this.state.count === 1 && (
                        <div>
                            <div >
                                <button
                                    onClick={() => this.setState({ count: 1 })}
                                    class="seleccion" >
                                    NOSOTROS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 2 })}
                                    class="seccion">
                                    GARANTIAS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 3 })}
                                    class="seccion">
                                    METODOS DE PAGO
                                </button>
                            </div>
                            <body className="nosotros">
                                <h3>QUI??NES SOMOS</h3><br />
                                <br /><p>  All Tecnology es una empresa de computaci??n, fundada en Santiago, en el a??o 2019. Nacimos como un peque??o emprendimiento familiar, el cual se fue desarrollando y creciendo con el tiempo. Al d??a de hoy All Tecnology ofrece en su sitio web y brinda una experiencia de compra personalizada y segura.</p><br />

                                <h3>QU?? HACEMOS</h3><br />
                                <p> Vendememos difentes modelos de celulares de marcaso tales como APPLE , HUAWEI y SAMSUNG. Por otra parte tambien tenemos dentro de nuestro catalogo diferentes accesorios que podremos utilizar para complementar la experiencia del uso de los dispositivos mobiles.</p><br />

                                <h3> C??MO LO HACEMOS</h3><br />
                                <p>A trav??s de una constante innovaci??n y desarrollo de tecnolog??as, estudios de tendencias y una variada oferta de productos y servicios. Nuestra oferta incluye una atenci??n personalizada y precios competitivos.</p><br />
                            </body>

                        </div>
                    )}
                    {this.state.count === 2 && (
                        <div>
                            <div >
                                <button
                                    onClick={() => this.setState({ count: 1 })}
                                    class="seccion" >
                                    NOSOTROS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 2 })}
                                    class="seleccion">
                                    GARANTIAS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 3 })}
                                    class="seccion">
                                    METODOS DE PAGO
                                </button>
                            </div>
                            <body className="nosotros">
                                <h3>Plazo y Cobertura de Garantia</h3><br />
                                <br /><p>  3 meses (90 d??as) a partir de la fecha de compra, de acuerdo a la normativa legal. En general, cubre productos con fallas de f??brica. La forma en que aplica la garant??a depende del tipo de producto y la marca.</p><br />

                                <h3>??Y si mi producto falla despu??s de 90 d??as?</h3><br />
                                <p>All Tecnology podr?? enviar el producto al servicio t??cnico autorizado de la marca actuando s??lo como intermediario entre el cliente y el servicio t??cnico; el plazo de revisi??n, la aceptaci??n o rechazo de la garant??a ser?? responsabilidad del servicio t??cnico autorizado. En caso de hacer efectiva la garant??a, solo se podr?? solicitar una nueva unidad o cambio por otro producto. En cualquier caso, se entiende que el plazo de garant??a siempre ser?? de 90 d??as desde la fecha de compra del producto.</p><br />

                                <h3> ??Puedo devolver un Producto?</h3><br />
                                <p>S??, pues como cliente tienes Derecho a Retracto, el cual puedes utilizar dentro de 10 d??as, contados desde la fecha en que recibiste el producto.</p><br />
                            </body>

                        </div>
                    )}
                    {this.state.count === 3 && (
                        <div>
                            <div >
                                <button
                                    onClick={() => this.setState({ count: 1 })}
                                    class="seccion" >
                                    NOSOTROS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 2 })}
                                    class="seccion">
                                    GARANTIAS
                                </button>
                                <button
                                    onClick={() => this.setState({ count: 3 })}
                                    class="seleccion">
                                    METODOS DE PAGO
                                </button>
                            </div>
                            <body className="nosotros">
                                <img border="3px" border-radius="15px" src="https://www.spdigital.cl/img/pics/banner-mediodepago--2.png"></img>

                            </body>

                        </div>
                    )}


                    <section id="info">



                        <h3 class="parrafo" >
                            SIGUENOS y contactanos EN NUESTRAS REDES SOCIALES :
                            <a href="https://www.instagram.com/alltecnology.cl/"> <img align="middle" src={imgexport.redes} width="150" /></a>
                        </h3>

                    </section>
                </body>




            </html>
        );
    }
}
