import React, { useState } from 'react';
import Popup from '../../components/Popup/index.tsx'; 

const Home: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  return (
    <>
        <header className="header -sticky">
                    <div className="header__info">
                        <div className="container">
                            <div className="row">
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <div className="header__logo">
                                        <div className="logo">
                <img className="logo__image" src="/upload/iblock/f17/coeba6220qldj5bfpoknvbr8eimvxvek.png@1710344833"
                    alt="" width="136"/>
            </div>                        </div>
                                </div>
                                <div className="col d-none d-md-flex align-items-center justify-content-end header__address">
                                    <span className="d-inline">Новосибирск, ул. Курчатова, д.2/2</span>                    </div>
                                <div className="col d-flex  align-items-center justify-content-end">
                                    <div className="header__contacts">
                                        <div className="header__phone d-flex align-items-center" data-other-menu="phone">
                                            <div className="me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone-call" width="25" height="23">
                                                    <path d="M18 22C9.4 21.5 2.5 14.6 2 6.1 2 4.3 3.3 3 5 3h4c.4 0 .8.2.9.6l2 5c.2.5 0 1-.4 1.2l-1.7 1c.8 1.3 2 2.5 3.3 3.3l1-1.7c.3-.4.8-.6 1.2-.4l5 2c.4.2.6.5.6.9v4C21 20.7 19.7 22 18 22zM5 5c-.6 0-1 .4-1 1 .5 7.5 6.5 13.5 14.1 14 .5 0 .9-.5.9-1v-3.3l-3.6-1.4-1 1.7c-.3.4-.8.6-1.3.4-2.4-1.2-4.3-3.1-5.5-5.5-.2-.5-.1-1 .4-1.3l1.8-1.1L8.3 5H5z"/>
                                                    <path d="M17 10c-.6 0-1-.4-1-1s-.4-1-1-1-1-.4-1-1 .4-1 1-1c1.7 0 3 1.3 3 3 0 .6-.4 1-1 1z"/>
                                                    <path d="M21 10c-.6 0-1-.4-1-1 0-2.8-2.2-5-5-5-.6 0-1-.4-1-1s.4-1 1-1c3.9 0 7 3.1 7 7 0 .6-.4 1-1 1z"/>
                                                </svg>
                                            </div>
                                            <div className="contact-phone call_phone_1_1">
                <a className="js-phone" href="tel:+73833229081"><span>+7 (383) 322-90-81</span></a>
            </div>                            </div>
                                    </div>
                                    <div className="header__callback">
                                        <button  onClick={handleOpenModal} type="button"
                                                className="header-callback__button btn btn-sm btn-primary js-constructor-btn"
                                                data-name="Обратный звонок. Хедер. "
                                                data-title="Оставить заявку на обратный звонок">
                                            ЗАКАЗАТЬ ЗВОНОК
                                        </button>
                                    </div>
                                    <div className="header__burger">
                                        <button   onClick={handleOpenModal} type="button" className="header-burger-button" data-burger-menu
                                                title="Переключить меню">
                                            <svg width="25" height="23">
                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#menu"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__menu d-none">
                        <div className="container">
                            <nav className="header__navigation" data-main-menu>
                                <ul className="header-navigation__list">
                                    <li className="header-navigation__item">
                                        <a href="#countdown" className="header-navigation__link js-anchor">Промоакции</a>
                                    </li>
                                    <li className="header-navigation__item">
                                        <a href="#models" className="header-navigation__link js-anchor">Авто</a>
                                    </li>
                                    <li className="header-navigation__item">
                                        <a href="#calculator-section" className="header-navigation__link js-anchor">Калькулятор</a>
                                    </li>
                                    <li className="header-navigation__item">
                                        <a href="#contacts" className="header-navigation__link js-anchor">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <main className="site-main">
                <section className="index-banner" id="countdown">
                    <div className="index-banner__background">
                        <picture>
                            <source srcSet="/upload/resize_cache/iblock/e08/1440_680_1/zumtvwu9cj3irifyvklxfb3q8896pg8p.jpg, /upload/resize_cache/iblock/e08/1440_680_1/zumtvwu9cj3irifyvklxfb3q8896pg8p.jpg"
                                    media="(min-width: 768px)"/>
                            <img src="/upload/resize_cache/iblock/e08/1440_680_1/zumtvwu9cj3irifyvklxfb3q8896pg8p.jpg" srcSet="/upload/resize_cache/iblock/e08/1440_680_1/zumtvwu9cj3irifyvklxfb3q8896pg8p.jpg" alt="задний фон" className="index-banner__image"/>
                        </picture>
                    </div>
                    <div className="container position-relative">
                        <div className="index-banner__info">
                            <div className="index-banner-info__wrapper">
                                                    <h1>Только 7 дней небывалые условия <br/> на покупку Haval</h1>
                                <ul>
                                    <li>200 000 руб. бонус за Trade-In</li>
                                    <li>зимние шины в подарок</li>
                                    <li>при оформлении кредита дарим КАСКО!</li>
                                </ul>
                                <button   onClick={handleOpenModal}  onClick={handleOpenModal} className="btn btn-primary js-constructor-btn text-uppercase" data-title="Оставьте заявку и мы Вам перезвоним" data-name="Акции. Главная страница. ">Получить предложение </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="models standard-margin-top" id="models">
                    <div className="container">
                        <h2 className="visually-hidden">Модели</h2>
                        <div className="models__list">
                                                <a href="#jolion_new"></a>
                                <article className="models__item" id="jolion_new">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                Jolion Новый                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">1 214 000 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                1 999 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            785 000 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/b0b/tcm8blszxhzuq1czra6zkzq39qlogv7m.png, /upload/iblock/b0b/tcm8blszxhzuq1czra6zkzq39qlogv7m.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/b0b/576_432_1/tcm8blszxhzuq1czra6zkzq39qlogv7m.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/b0b/tcm8blszxhzuq1czra6zkzq39qlogv7m.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>9,923 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 1 214 000 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    1 999 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                785 000 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="291708"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="Jolion Новый"
                                                            data-price="1 214 000"
                                                                                                                data-price-base="1 999 000"
                                                                                                            data-month-pay="9,923"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="Jolion Новый"
                                                            data-price="1 214 000"
                                                                                                        data-price-base="1 999 000"
                                                                                                        data-month-pay="9,923"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#dargo"></a>
                                <article className="models__item" id="dargo">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                Dargo                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">2 044 000 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                3 049 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            1 005 000 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/cf0/qoknfk0d21aikq7n0jn6hjffht2qz4j6.png, /upload/iblock/cf0/qoknfk0d21aikq7n0jn6hjffht2qz4j6.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/cf0/576_432_1/qoknfk0d21aikq7n0jn6hjffht2qz4j6.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/cf0/qoknfk0d21aikq7n0jn6hjffht2qz4j6.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>16,708 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 2 044 000 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    3 049 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                1 005 000 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="207220"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="Dargo"
                                                            data-price="2 044 000"
                                                                                                                data-price-base="3 049 000"
                                                                                                            data-month-pay="16,708"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="Dargo"
                                                            data-price="2 044 000"
                                                                                                        data-price-base="3 049 000"
                                                                                                        data-month-pay="16,708"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_h3"></a>
                                <article className="models__item" id="haval_h3">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                H3                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">2 079 200 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                2 599 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            519 800 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/233/0u6v65kww2tuk4qijuji3f4xtpa395nb.png, /upload/iblock/233/0u6v65kww2tuk4qijuji3f4xtpa395nb.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/233/576_432_1/0u6v65kww2tuk4qijuji3f4xtpa395nb.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/233/0u6v65kww2tuk4qijuji3f4xtpa395nb.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>16,995 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 2 079 200 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    2 599 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                519 800 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="304407"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="H3"
                                                            data-price="2 079 200"
                                                                                                                data-price-base="2 599 000"
                                                                                                            data-month-pay="16,995"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="H3"
                                                            data-price="2 079 200"
                                                                                                        data-price-base="2 599 000"
                                                                                                        data-month-pay="16,995"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_f7_новый"></a>
                                <article className="models__item" id="haval_f7_новый">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                F7 Новый                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">2 159 200 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                2 699 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            539 800 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/resize_cache/iblock/930/600_388_1/qccdaably07o4dduklw7rjpuzsy43ef4.png, /upload/iblock/930/qccdaably07o4dduklw7rjpuzsy43ef4.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/930/576_432_1/qccdaably07o4dduklw7rjpuzsy43ef4.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/930/qccdaably07o4dduklw7rjpuzsy43ef4.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>17,649 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 2 159 200 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    2 699 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                539 800 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="306505"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="F7 Новый"
                                                            data-price="2 159 200"
                                                                                                                data-price-base="2 699 000"
                                                                                                            data-month-pay="17,649"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="F7 Новый"
                                                            data-price="2 159 200"
                                                                                                        data-price-base="2 699 000"
                                                                                                        data-month-pay="17,649"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_h9"></a>
                                <article className="models__item" id="haval_h9">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                H9                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">1 915 300 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                4 299 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            2 383 700 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/e5a/22hih0oo38jt1ttg0c1fc0l9xr2k7l3x.png, /upload/iblock/e5a/22hih0oo38jt1ttg0c1fc0l9xr2k7l3x.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/e5a/576_432_1/22hih0oo38jt1ttg0c1fc0l9xr2k7l3x.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/e5a/22hih0oo38jt1ttg0c1fc0l9xr2k7l3x.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>15,656 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 1 915 300 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    4 299 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                2 383 700 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="138301"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="H9"
                                                            data-price="1 915 300"
                                                                                                                data-price-base="4 299 000"
                                                                                                            data-month-pay="15,656"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="H9"
                                                            data-price="1 915 300"
                                                                                                        data-price-base="4 299 000"
                                                                                                        data-month-pay="15,656"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#dargo_x"></a>
                                <article className="models__item" id="dargo_x">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                Dargo X                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">2 314 000 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                3 349 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            1 035 000 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/74e/umq7dqmhmx4qyfsjo4k4gp1a6z1hihzm.png, /upload/iblock/74e/umq7dqmhmx4qyfsjo4k4gp1a6z1hihzm.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/74e/576_432_1/umq7dqmhmx4qyfsjo4k4gp1a6z1hihzm.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/74e/umq7dqmhmx4qyfsjo4k4gp1a6z1hihzm.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>18,914 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 2 314 000 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    3 349 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                1 035 000 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="215396"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="Dargo X"
                                                            data-price="2 314 000"
                                                                                                                data-price-base="3 349 000"
                                                                                                            data-month-pay="18,914"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="Dargo X"
                                                            data-price="2 314 000"
                                                                                                        data-price-base="3 349 000"
                                                                                                        data-month-pay="18,914"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_f7x"></a>
                                <article className="models__item" id="haval_f7x">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                F7X                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">1 290 300 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                2 449 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            1 158 700 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/065/i75muqgr4hyyalpxvjpp6a8hin9ultfb.png, /upload/iblock/065/i75muqgr4hyyalpxvjpp6a8hin9ultfb.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/065/576_432_1/i75muqgr4hyyalpxvjpp6a8hin9ultfb.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/065/i75muqgr4hyyalpxvjpp6a8hin9ultfb.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>10,547 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 1 290 300 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    2 449 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                1 158 700 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="138299"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="F7X"
                                                            data-price="1 290 300"
                                                                                                                data-price-base="2 449 000"
                                                                                                            data-month-pay="10,547"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="F7X"
                                                            data-price="1 290 300"
                                                                                                        data-price-base="2 449 000"
                                                                                                        data-month-pay="10,547"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_m6"></a>
                                <article className="models__item" id="haval_m6">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                M6                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">936 000 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                2 179 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            1 243 000 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/b79/v0j51u7zdf3guthi8gk2nk0mi4wev0rp.png, /upload/iblock/b79/v0j51u7zdf3guthi8gk2nk0mi4wev0rp.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/b79/576_432_1/v0j51u7zdf3guthi8gk2nk0mi4wev0rp.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/b79/v0j51u7zdf3guthi8gk2nk0mi4wev0rp.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>7,651 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 936 000 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    2 179 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                1 243 000 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="281967"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="M6"
                                                            data-price="936 000"
                                                                                                                data-price-base="2 179 000"
                                                                                                            data-month-pay="7,651"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="M6"
                                                            data-price="936 000"
                                                                                                        data-price-base="2 179 000"
                                                                                                        data-month-pay="7,651"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_h5"></a>
                                <article className="models__item" id="haval_h5">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                H5                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">2 959 200 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                3 699 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            739 800 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/b8a/812rfjjsbfe3k0b87ei1p2g08fsvjbni.png, /upload/iblock/b8a/812rfjjsbfe3k0b87ei1p2g08fsvjbni.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/b8a/576_432_1/812rfjjsbfe3k0b87ei1p2g08fsvjbni.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/b8a/812rfjjsbfe3k0b87ei1p2g08fsvjbni.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>24,188 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 2 959 200 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    3 699 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                739 800 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="306863"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="H5"
                                                            data-price="2 959 200"
                                                                                                                data-price-base="3 699 000"
                                                                                                            data-month-pay="24,188"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="H5"
                                                            data-price="2 959 200"
                                                                                                        data-price-base="3 699 000"
                                                                                                        data-month-pay="24,188"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#jolion"></a>
                                <article className="models__item" id="jolion">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                Jolion                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">864 000 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                1 949 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            1 085 000 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/227/0a231t7pqc5eq556si1b37kyd68qdlux.png, /upload/iblock/227/0a231t7pqc5eq556si1b37kyd68qdlux.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/227/576_432_1/0a231t7pqc5eq556si1b37kyd68qdlux.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/227/0a231t7pqc5eq556si1b37kyd68qdlux.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>7,063 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 864 000 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    1 949 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                1 085 000 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="138354"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="Jolion"
                                                            data-price="864 000"
                                                                                                                data-price-base="1 949 000"
                                                                                                            data-month-pay="7,063"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="Jolion"
                                                            data-price="864 000"
                                                                                                        data-price-base="1 949 000"
                                                                                                        data-month-pay="7,063"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                                <a href="#haval_f7"></a>
                                <article className="models__item" id="haval_f7">
                                    <div className="divider-wrapper">
                                        <div className="divider"></div>
                                    </div>
                                    <div className="models-item__row row">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="models-item__title">
                                                <h3 className="models-item__heading">
                                                                                                Haval                                                                                F7                                    </h3>
                                            </div>
                                            <div className="models-item__price d-block d-lg-none">
                                                <div className="models-item__price">
                                                    <div className="models-item-price__new">
                                                        Цена от<br/>
                                                        <span className="models-item-price__sale">1 293 300 ₽</span>
                                                                                                        <div className="models-item-price__old ">
                                                                2 449 000                                                </div>
                                                                                                </div>
                                                                                                <div className="models-item-price__profit" data-old-price="1">
                                                            <span>Выгода до<br/></span>
                                                            1 155 700 ₽                                            </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__gallery">
                                                                                                <div className="models-item__picture">
                                                            <picture>
                                                                <source srcSet="/upload/iblock/035/t6y7mrmtb2nrwo0vv0lyxx11nmbw7qeu.png, /upload/iblock/035/t6y7mrmtb2nrwo0vv0lyxx11nmbw7qeu.png 2x"
                                                                        media="(min-width: 992px)"/>
                                                                <img className="models-item__image"
                                                                    src="/upload/resize_cache/iblock/035/576_432_1/t6y7mrmtb2nrwo0vv0lyxx11nmbw7qeu.png" alt="" loading="lazy"
                                                                    srcSet="/upload/iblock/035/t6y7mrmtb2nrwo0vv0lyxx11nmbw7qeu.png 2x"/>
                                                            </picture>
                                                        </div>
                                                                                        </div>
                                            </div>
                                            <div className="models-item__credit col-12">
                                                <p>в кредит от <span>10,572 ₽</span> / мес</p>
                                                                                    <div className="models-item__advantages w-100">
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">от 0%</div>
                                                            <div className="models-item-advantages__name">первоначальный<br/> взнос</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">Без</div>
                                                            <div className="models-item-advantages__name">подтверждения<br/> дохода</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">8 лет</div>
                                                            <div className="models-item-advantages__name">максимальный срок кредита</div>
                                                        </div>
                                                                                                <div className="models-item-advantages__item">
                                                            <div className="models-item-advantages__value">30 000 ₽</div>
                                                            <div className="models-item-advantages__name">скидка при<br/> онлайн заявке</div>
                                                        </div>
                                                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
                                            <div className="col-12 d-none d-lg-block">
                                                <div className="models-item__price ">
                                                    <div className="models-item-price__new d-flex align-items-center">
                                                        <div className="me-2">
                                                            <svg width="36" height="36">
                                                                <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#coin"></use>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            Цена<br/>
                                                            <span className="models-item-price__sale"> от 1 293 300 ₽</span>
                                                                                                                <span className="models-item-price__old ms-2">
                                                                    2 449 000                                                    </span>
                                                                                                        </div>
                                                    </div>
                                                                                                <div className="models-item-price__profit d-flex align-items-center">
                                                            <div className="me-2">
                                                                <svg width="36" height="36">
                                                                    <use xlinkHref="/local/templates/superlending12/assets/images/sprite.svg?1700571072#wallet"></use>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span>Выгода до<br/></span>
                                                                1 155 700 ₽                                                </div>
                                                        </div>
                                                                                        </div>
                                                <p className="models-item-price__text">*спецусловие при обращении через сайт</p>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="models-item__info">
                                                    <div className="models-item__benefits col-12">
                                                        <ul>
                                                                                                                <li>Выгода при покупке в TRADE-IN</li>
                                                                                                                <li>Выгода при покупке в кредит</li>
                                                                                                                <li>Постановка автомобиля на учет</li>
                                                                                                                <li>Гарантия 5 лет</li>
                                                                                                                <li>Покупка одним днем</li>
                                                                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="models-item__buttons col-12">
                                                    <a className="models-item__button -credit btn btn-sm js-anchor-credit js-credit-goal"
                                                      href="#calculator-section"
                                                      data-model="138300"
                                                    >
                                                        РАССЧИТАТЬ <span>КРЕДИТ</span>
                                                    </a>
                                                    <button   onClick={handleOpenModal} className="models-item__button -test-drive btn btn-sm btn-outline-primary js-constructor-btn"
                                                            data-title="Воспользуйтесь услугой TRADE-IN"
                                                            data-name="Трейд-ин. Блок с моделями. "
                                                            data-mark="Haval"
                                                            data-model="F7"
                                                            data-price="1 293 300"
                                                                                                                data-price-base="2 449 000"
                                                                                                            data-month-pay="10,572"
                                                    >
                                                        ЗАЯВКА НА <span>TRADE-IN</span>
                                                    </button>
                                                    <button   onClick={handleOpenModal} className="models-item__button -sale btn btn-sm btn-primary js-constructor-btn"
                                                            data-title="Оставьте заявку и мы Вам перезвоним"
                                                            data-name="Акции. Блок с моделями. Узнать цену"
                                                            data-mark="Haval"
                                                            data-model="F7"
                                                            data-price="1 293 300"
                                                                                                        data-price-base="2 449 000"
                                                                                                        data-month-pay="10,572"
                                                    >
                                                        УЗНАТЬ ЦЕНУ ПО АКЦИИ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                        </div>
                    </div>
                    <button   onClick={handleOpenModal} className="models__scroll-up" style={{ display: 'none' }}
                            title="Вернуться в начало" data-models-scroll-up>
                        <span className="models-scroll-up d-flex align-items-center justify-content-center">
                            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="scroll-up">
                                <style>{`.st0{fill:#aa0d1b}`}</style>
                                <path d="M18 33c-.8 0-1.5-.7-1.5-1.5V8.1L8.6 16c-.6.6-1.5.6-2.1 0-.4-.2-.5-.6-.5-1s.1-.8.4-1.1L16.9 3.4c.1-.1.3-.2.5-.3.2-.1.4-.1.6-.1.2 0 .4 0 .6.1.2.1.3.2.5.3l10.5 10.5c.3.3.4.7.4 1.1s-.1.8-.4 1.1c-.6.6-1.5.6-2.1 0l-7.9-7.9v23.4c-.1.7-.8 1.4-1.6 1.4z" />
                            </svg>
                        </span>
                    </button>
                </section>

            <section className="calculator-section" id="calculator-section">
                <div className="container">
                    
            <div className="calculator" id="calculator">
                <div className="divider-wrapper">
                    <div className="divider"></div>
                </div>
                <div className="calculator__row row">
                    <div className="calculator__side  col-lg-7 p-0">
                        <h2 className="my-0">Рассчитайте кредит и проверьте одобрение</h2>
                        <p className="mt-2 mb-0">без визита в автосалон в течение 15 минут</p>
                        <div className="calculator-side__picture">
                            <picture>
                                <source srcSet="/local/templates/superlending12/assets/images/calculator-bg.webp" type="image/webp"/>
                                <source srcSet="/local/templates/superlending12/assets/images/calculator-bg.jpg" type="image/jpg"/>
                                <img src="/local/templates/superlending12/assets/images/calculator-bg.jpg" alt="задний фон в калькуляторе"/>
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-5 -form p-0">
                        <form action="#" method="post" autoComplete="off"
                              className="calculator__form needs-validation js-calc-form" noValidate>
                            <input type="hidden" name="name" value="Кредитный калькулятор"/>
                            <input type="hidden" name="property_price" data-field="price"/>
                            <div className="calculator-form__row row">
                                <div className="calculator-form__item col-sm-6 col-lg-12 form-group">
                                    <label className="form-label" htmlFor="calculator-model">Модель</label>
                                    <select value={selectedModel} onChange={handleChange} id="calculator-model" name="property_model" className="form-control"
                                            data-select="carModel" data-select-lead="carEquipment" data-select-slave="carBrand"
                                            data-select-fetch required>
                                        <option value="" data-display="Select"></option>
                                                                            <option value="Dargo" data-id="207220">Dargo</option>
                                                                                <option value="Dargo X" data-id="215396">Dargo X</option>
                                                                                <option value="F7" data-id="138300">F7</option>
                                                                                <option value="F7 Новый" data-id="306505">F7 Новый</option>
                                                                                <option value="F7X" data-id="138299">F7X</option>
                                                                                <option value="H3" data-id="304407">H3</option>
                                                                                <option value="H5" data-id="306863">H5</option>
                                                                                <option value="H9" data-id="138301">H9</option>
                                                                                <option value="Jolion" data-id="138354">Jolion</option>
                                                                                <option value="Jolion Новый" data-id="291708">Jolion Новый</option>
                                                                                <option value="M6" data-id="281967">M6</option>
                                                                    </select>
                                </div>
                                <div className="calculator-form__item col-sm-6 col-lg-12 form-group">
                                    <label className="form-label" htmlFor="calculator-complect">Комплектация</label>
                                    <select value={selectedModel} onChange={handleChange} id="calculator-complect" name="property_equipment" className="form-control" disabled
                                            data-select="carEquipment" data-select-lead="carLoanTerm" data-select-slave="carModel"
                                            required>
                                        <option value="" data-display="Select"></option>
                                    </select>
                                </div>
                                <div className="calculator-form__item col-sm-6 form-group">
                                    <label className="form-label" htmlFor="calculator-first-payment">Первый взнос</label>
                                    <input className="form-control" id="calculator-first-payment" name="property_pay"
                                          type="text" value="0 ₽"
                                          data-value="1056000" data-field="first-payment" disabled
                                          data-max="2376000"/>
                                </div>
                                <div className="calculator-form__item col-sm-6 form-group">
                                    <label className="form-label" htmlFor="calculator-term">Срок кредитования</label>
                                    <select value={selectedModel} onChange={handleChange} id="calculator-term" className="form-control" name="property_credit_term" data-field="loan-terms"
                                            data-select="carLoanTerm" data-select-slave="carLoanTerm"
                                            disabled>
                                        <option value="" data-display="Select"></option>
                                        <option value="6">6 месяцев (0,5 года)</option>
            <option value="12">12 месяцев (1 год)</option>
            <option value="18">18 месяцев (1,5 года)</option>
            <option value="24">24 месяца (2 года)</option>
            <option value="30">30 месяцев (2,5 года)</option>
            <option value="36">36 месяцев (3 года)</option>
            <option value="42">42 месяца (3,5 года)</option>
            <option value="48">48 месяцев (4 года)</option>
            <option value="54">54 месяца (4,5 года)</option>
            <option value="60">60 месяцев (5 лет)</option>
            <option value="66">66 месяцев (5,5 лет)</option>
            <option value="72">72 месяца (6 лет)</option>
            <option value="78">78 месяцев (6,5 лет)</option>
            <option value="84">84 месяца (7 лет)</option>
            <option value="90">90 месяцев (7,5 лет)</option>
            <option value="96">96 месяцев (8 лет)</option>                        </select>
                                </div>
                                <div className="calculator-form__item col-sm-6 form-group">
                                    <label className="form-label" htmlFor="calculator-name">Ваше имя</label>
                                    <input className="form-control" type="text" placeholder="Имя"
                                          name="property_name" id="calculator-name" required data-validate
                                          pattern="^[а-яА-ЯЁёa-zA-Z ]{2,30}$" autoComplete="off"/>
                                </div>
                                <div className="calculator-form__item col-sm-6 form-group">
                                    <label className="form-label" htmlFor="calculator-user-phone">Телефон</label>
                                    <input className="form-control" type="tel" placeholder="+7" autoComplete="off"
                                          name="property_phone" id="calculator-user-phone" required data-validate/>
                                </div>
                                <div className="calculator-form__item col-sm-6 col-lg-12 form-group">
                                    <button   onClick={handleOpenModal} className="btn btn-primary w-100 calculator-form__submit" type="submit">
                                        РАССЧИТАТЬ КРЕДИТ
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
                </div>
            </section>
            <section className="trade-in standard-padding-bottom" id="trade-in">
                <div className="divider-wrapper">
                    <div className="divider"></div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="trade-in__background">
                        <picture>
                            <source srcSet="/local/templates/superlending12/assets/images/trade-in-bg.webp" type="image/webp"/>
                            <source srcSet="/local/templates/superlending12/assets/images/trade-in-bg.jpg" type="image/jpg"/>
                            <img src="/local/templates/superlending12/assets/images/trade-in-bg.jpg" alt="задний фон раздел трейд-ин"/>
                        </picture>
                    </div>
                </div>

                <div className="container">
                    <h2>Искали, где <span>выгодно обменять</span> автомобиль?</h2>
                    <p>
                        Оставьте заявку и получите выгодное предложение на обмен Вашего старого автомобиля на новый
                                        Haval                    </p>
                    <form action="#" method="post" autoComplete="off"
                          className="form trade-in__form needs-validation js-calc-form" noValidate>
                        <input type="hidden" name="name" value="Трейд-ин. Главная страница. "/>
                        <input type="hidden" name="property_price" data-field="price" />
                        <div className="row justify-content-center">
                            <div className="trade-in-form__item col-lg-4 form-group pe-lg-0">
                                <input className="form-control" type="text" placeholder="Имя"
                                      name="property_name" id="trade-in-name" required data-validate
                                      pattern="^[а-яА-ЯЁёa-zA-Z ]{2,30}$" autoComplete="off"/>
                            </div>
                            <div className="trade-in-form__item col-lg-4 form-group pe-lg-0 ps-lg-2">
                                <input className="form-control" type="tel" placeholder="+7" autoComplete="off"
                                      name="property_phone" id="trade-in-user-phone" required data-validate/>
                            </div>
                            <div className="trade-in-form__item -button col-lg-4 form-group ps-lg-2">
                                <button   onClick={handleOpenModal} className="btn btn-primary w-100 trade-in-form__submit" type="submit">
                                    ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Popup isOpen={isModalOpen} onClose={handleCloseModal} />
            </main>
            
    </>
  );
};

export default Home;
