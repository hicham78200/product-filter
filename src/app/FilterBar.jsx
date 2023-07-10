import React, { Component } from 'react'
import ProductTableList from './ProductTableListe'
import { PRODUCTS } from '../data/products'

export class FilterBar extends Component {
    constructor(props) {
        super(props)
        //envoi info ds onchange
        this.handleChangeFilterText = this.handleChangeFilterText.bind(this);
        this.handleChangeInStockCheck = this.handleChangeInStockCheck.bind(this)
    }
    handleChangeFilterText(e) {
        this.props.onFilterFieldChange(e.target.value)
    }

    handleChangeInStockCheck(e) {
        this.props.inStockFieldChange(e.target.checked)
    }

    render() {
        //destructuration du props
        const { filterField, inStockField } = this.props;
        return <>
            <div className='py-3'>
                <div className="form-group mb-3">
                    <input type="text" name='filterField' placeholder='filtrer...'
                        className='form-control'
                        value={filterField}
                        onChange={this.handleChangeFilterText}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="checkbox" name='inStockField'
                        className='form-check-input'
                        value={inStockField}
                        onChange={this.handleChangeInStockCheck}
                    />
                    <label htmlFor='inStockField' className='form-check-label'>
                        Produit en stock uniquement
                    </label>
                </div>

            </div>
        </>
    }
}
