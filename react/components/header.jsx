import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { loadGallery } from '../actions/actions'

const Header = ({ onLoadGallery }) => {    
    return (
        <div className="header">
            <h1>Galería de imágenes</h1>
            <form 
                onSubmit={ e => {
                    e.preventDefault();
                    onLoadGallery();
                }}
            >
                <div>
                    <Button type='submit' color='primary'>Recargar galería</Button>
                </div>
            </form>
        </div>
    )
}

export default connect(
    null,
    dispatch => ({
        onLoadGallery: () => { dispatch(loadGallery('/images/prueba2.jpg')) }
    })
)(Header)
