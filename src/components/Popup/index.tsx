import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", { name, phone });
  };

  if (!isOpen) return null; // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className="fancybox__container is-animated -popup" role="dialog" aria-modal="true">
      <div className="fancybox__backdrop" onClick={onClose}></div>
      <div className="fancybox__carousel">
        <div className="fancybox__viewport">
          <div className="fancybox__track">
            <div className="fancybox__slide is-selected has-html">
              <div className="fancybox__content">
                <div className="popup -short">
                  <div className="popup__title mb-4">Оставить заявку на обратный звонок</div>
                  <form onSubmit={handleSubmit} className="popup__form needs-validation" noValidate autoComplete="off">
                    <div className="form-group">
                      <label htmlFor="property_name" className="form-label">Имя</label>
                      <input
                        type="text"
                        id="property_name"
                        className="form-control"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        minLength="2"
                        pattern="^[а-яА-ЯЁёa-zA-Z ]{2,30}$"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="property_phone" className="form-label">Телефон</label>
                      <input
                        type="tel"
                        id="property_phone"
                        className="form-control"
                        placeholder="+7"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary w-100">Отправить заявку</button>
                    </div>
                  </form>
                </div>
                <button className="carousel__button is-close" title="Закрыть" onClick={onClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 20L4 4m16 0L4 20"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
