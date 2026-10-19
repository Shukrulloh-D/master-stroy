import { useState } from 'react';
import { useCallbackForm } from '@/shared/api/queries';
import modalStyles from '@/shared/ui/modal/modal.module.css';

export function CallbackForm() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isPending } = useCallbackForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(phone, {
      onSuccess: () => {
        setIsSuccess(true);
        setTimeout(() => { setIsSuccess(false); setPhone(''); setName(''); }, 4000);
      }
    });
  };

  if (isSuccess) {
    return (
      <div className={modalStyles.successBox}>
        <div className={modalStyles.successIcon}>✓</div>
        <h3 style={{marginBottom: '10px'}}>Заявка отправлена!</h3>
        <p style={{color: '#777'}}>Наш менеджер перезвонит вам в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={modalStyles.title}>Заказать звонок</h3>
      <div className={modalStyles.formGroup}>
        <input type="text" placeholder="Ваше имя" className={modalStyles.input} value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className={modalStyles.formGroup}>
        <input type="tel" placeholder="Ваш телефон" className={modalStyles.input} value={phone} onChange={e => setPhone(e.target.value)} required />
      </div>
      <label className={modalStyles.checkbox}>
        <input type="checkbox" required defaultChecked />
        <span>Я согласен на обработку персональных данных</span>
      </label>
      <button type="submit" className={modalStyles.submitBtn} disabled={isPending}>
        {isPending ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
}
