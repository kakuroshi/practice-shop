import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import arrow from '../../../Images/Catalog/arrow.svg'
import up from '../../../Images/Catalog/up.svg'
import CardProduct from '../../Body/CardProduct/CardProduct'
import "./Catalog.css"
import image from '../../../Images/Catalog/image.jpg'
import image2 from '../../../Images/Catalog/image2.jpg'
import image3 from '../../../Images/Catalog/image3.jpg'
import image4 from '../../../Images/Catalog/image4.jpg'
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Catalog = () => {
    let path = localStorage.getItem("path") || '';
    let path2 = localStorage.getItem("subPath") || '';

    let path3;


if (path && path !== '' && path2 && path2 !== '') {
    path3 = `${path2.slice(2)} для ` + path.slice(2);
} else if (path && path !== '' && (!path2 || path2 === '')) {
    path3 = path.slice(2);
} else {
    path3 = "Главная";
}

    path === '' && path2 === '' ? path3 = "Главная" : path3 = `${path2.slice(2)} для `  + path.slice(2)
    if (path !== '' && path2 === '') {
        path3 = path.slice(2)
    }
 
    let products = [
        {
            name: "Блузка",
            newPrice: "50.00 Р",
            rating: 3,
            img: image,
            id: 0
        },
        {
            name: "Блузка",
            newPrice: "50.00 Р",
            rating: 3,
            img: image2,
            id: 1
        },
        {
            name: "Блузка",
            newPrice: "50.00 Р",
            rating: 4,
            img: image3,
            id: 2
        },

    ]

    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', 'Универсальный']
    const colors = ['white', '#000', '#A61F1F', '#3D7B52', '#EAD943', '#296297', '#C4C4C4', '#C4C4C4', '#C4C4C4', '#C4C4C4']

    const [size, setSize] = useState('none')
    const [color, setColor] = useState('none')

    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          window.scrollBy(0, -50);
          setTimeout(handlerScrollUp, 10);
        }
      }

    return (
        <main className="catalog-main">

            <div className="path-catalog">

                <NavLink className="nav-link-catalog"
                    onClick={() => {
                        localStorage.setItem("path", '')
                        localStorage.setItem("subPath", '')
                        window.location.reload()
                    }}               
                to="/Catalog">
                    <h3 className="catalog-path-text">Главная </h3>
                </NavLink>

                <NavLink className="nav-link-catalog" onClick={() => {
                    localStorage.setItem("subPath", '')
                    window.location.reload()
                }} to="/Catalog">
                    <h3 className="catalog-path-text">{path}</h3>
                </NavLink>
                
                <h3 className="catalog-path-text-help">{path2}</h3>

                
            </div>
            

            <h1 className="name-catalog-h1">{path3}</h1>

            <div className="main-catalog">
                <div className="left-filter-catalog">
                <h3 className="sort-catalog-text">Сортировать по:</h3>
                    <div className="filter-price">
                        <p>Цена, б.р</p>
                        <input type="range" />
                    </div>
                    
                    <div className="size-div-catalog">
                        <button onClick={size === 'none' ? () => setSize('block') : () => setSize('none')} className="size-button-catalog">
                            <label className="size-catalog-filter-btn">Размер</label>
                            <img style={size === 'block' ? {rotate: '180deg'} : {rotate: '0deg'}} src={arrow} alt=""></img>
                        </button>
                        <div style={{display: size}}>
                            {sizes.map(size => (
                                <div className="size-handler-catalog">
                                    <input type='checkbox' className="checkbox-colors-catalog"/>
                                    <label className="checkbox-label-colors-catalog">{size}</label>
                                </div>
                            ))}
                        </div>
                    </div>  

                    <div className="colors-catalog-div">
                        <button
                        onClick={color === 'none' ? () => setColor('flex') : () => setColor('none')}
                        className="colors-button-catalog">
                            <label className="colors-catalog-btn-filter">Цвета</label>
                            <img style={color === 'flex' ? {rotate: "180deg"} : {rotate: "0deg"}} src={arrow} alt="no img" />
                        </button>
                        <div style={{display: color}} className="color-handler-catalog">
                            {colors.map(color => (
                                <div className="catalog-color" style={{backgroundColor: color}}></div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handlerScrollUp} className="up-catalog-button">
                        <img src={up} alt="" />
                    </button>
                </div>

                <div className="right-block-catalog">

                  

                    <div className="catalog-sort-div">
                        <h3 className="sort-catalog-text">Популярности</h3>
                        <h3 className="sort-catalog-text">Рейтингу</h3>
                        <h3 className="sort-catalog-text">Цене</h3>
                        <h3 className="sort-catalog-text">Скидке</h3>
                        <h3 className="sort-catalog-text">Обновлению</h3>
                    </div>

                    <div className="products-catalog-div">
                    {
                            products.map(el =>
                            <CardProduct class="catalog-product" classImg="catalog-img-product" name={el.name} newPrice={el.newPrice} oldPrice={el.oldPrice} rating={el.rating} img={el.img} id={el.id} />
                            )
                        }
                    </div>
                </div>
                
            </div>

            <Footer class="footer-catalog" />
        </main>
    )
}

export default Catalog