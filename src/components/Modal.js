import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
 

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.mostrarIngredientes = this.mostrarIngredientes.bind(this);
  }

  mostrarIngredientes = informacion => {
    let ingredientes = [];
    for(let i = 1; i < 16; i++){
        if( informacion[`strIngredient${i}`] ) {
            ingredientes.push(
                <li> { informacion[`strIngredient${i}`] }  { informacion[`strMeasure${i}`] }</li>
            )
        }
    }
  
    return ingredientes;
  }


toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle} color="danger" type="button" className="btn btn-block btn-primary">Ver Receta</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>{this.props.informacion.strDrink}</MDBModalHeader>
        <MDBModalBody>
        
              <h3 className="mt-4">Instrucciones</h3>
              <p>
                  {this.props.informacion.strInstructions}
              </p>

              <img className="img-fluid my-4" alr="Imagen bebida" src={this.props.informacion.strDrinkThumb} />

              <h3>Ingredientes y cantidades</h3>
              <ul>
                  { this.mostrarIngredientes(this.props.informacion) }
              </ul> 
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={this.toggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;
