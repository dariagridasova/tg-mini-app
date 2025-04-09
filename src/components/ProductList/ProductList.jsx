import React from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../hooks/useTelegram';

const products = [
    {
        id: 1,
        title: "Футболка Oversize",
        price: 1999,
        description: "Мягкая хлопковая футболка свободного кроя, идеально подходит для повседневного стиля."
    },
    {
        id: 2,
        title: "Джинсы Slim Fit",
        price: 3499,
        description: "Классические джинсы суженного силуэта, выполнены из плотного денима."
    },
    {
        id: 3,
        title: "Пуховик Зимний",
        price: 8999,
        description: "Тёплый пуховик с капюшоном и водоотталкивающим покрытием. Отлично подойдёт для морозов."
    },
    {
        id: 4,
        title: "Кроссовки Urban",
        price: 5999,
        description: "Современные кроссовки для города, сочетают в себе комфорт и стиль."
    },
    {
        id: 5,
        title: "Свитшот Basic",
        price: 2599,
        description: "Минималистичный свитшот из мягкого трикотажа на каждый день."
    },
    {
        id: 6,
        title: "Шорты Спортивные",
        price: 1499,
        description: "Удобные спортивные шорты с эластичным поясом, идеальны для тренировок."
    },
    {
        id: 7,
        title: "Рубашка Клетчатая",
        price: 2999,
        description: "Классическая рубашка в клетку из 100% хлопка. Подходит как для офиса, так и для прогулок."
    },
    {
        id: 8,
        title: "Платье Летнее",
        price: 3999,
        description: "Лёгкое и воздушное платье, идеально для тёплых дней."
    },
    {
        id: 9,
        title: "Куртка Джинсовая",
        price: 4799,
        description: "Универсальная джинсовка на кнопках, с накладными карманами."
    },
    {
        id: 10,
        title: "Толстовка с капюшоном",
        price: 3299,
        description: "Уютная худи с начёсом и большим карманом 'кенгуру'."
    }
];

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const onAdd = (product) => {
        const alredyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alredyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {ProductList.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    )
}

export default ProductList;