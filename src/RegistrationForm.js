import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    console.log('Регистрация: Номер телефона -', phoneNumber, 'Пароль -', password);
  };

  return (
    <div className="RegistrationForm">
      <h2>Регистрация</h2>
      <div>
        <label>Номер телефона:</label>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleRegistration}>Зарегистрироваться</button>
      <p>Есть аккаунт? <a href="#">Вход</a></p>
    </div>
  );
}

export default RegistrationForm;
