import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { fetchImages } from '../actions/actions'

const Header = ({ onLoadGallery }) => {    
    return (
        <div className="header mb-5">
            <h1>Galería de imágenes</h1>
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    onLoadGallery();
                }}
            >
                <div>
                    <Button type='submit' color='primary'>Mostrar galería</Button>
                </div>
            </form>
        </div>
    )
}

export default connect(
    null,
    dispatch => ({
        onLoadGallery: () => { dispatch(fetchImages()) }
    })
)(Header)
