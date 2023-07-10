import React from "react";
import { ProductCategoryRow, ProductRow } from "./ProductCategory";

function ProductTableList({ products, filterField, inStockField }) {
    const tabs = [];
    let lastCategory = null;//pr stocker la var categorie et la comparer si elle existe si elle 
    //existe il ne laffiche qune fois 

    products.map((productItem, productIndex) => {//productItem produit,objet a afficher
        //on verifie si la pers a cocher et que le produit nest pas en stock on
        //retourne rien
        if (inStockField && !productItem.stocked) {
            return
        }
        //compare chaine de caractere si -1 comparaison pas aboutie
        if (productItem.name.indexOf(filterField) === -1) {
            return
        }
        if (lastCategory !== productItem.category) {//productIdex index auquelle se trouve le produit
            lastCategory = productItem.category;
            tabs.push(<ProductCategoryRow
                key={'category_' + productIndex}
                category={productItem.category} />)
        }
        //liste des produits de la categorie
        tabs.push(<ProductRow product={productItem}
            key={'product_' + productIndex} />)

    })
    return <>
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nom du produit</th>
                        <th>Prix unitaire</th>
                    </tr>
                </thead>
                <tbody>
                    {tabs}
                </tbody>
            </table>
        </div>

    </>
}

export default ProductTableList;