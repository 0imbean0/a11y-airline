import { useState } from 'react';
import classNames from 'classnames';

import styles from './SpinButton.module.css';

const ADULT_COUNT_MIN = 0;
const ADULT_COUNT_MAX = 3;

function SpinButton() {
  const [adultCount, setAdultCount] = useState(ADULT_COUNT_MIN);
  const isIncrementDisabled = adultCount >= ADULT_COUNT_MAX;
  const isDecrementDisabled = adultCount <= ADULT_COUNT_MIN;

  const increment = () =>
    setAdultCount((prevCount) => {
      if (prevCount >= ADULT_COUNT_MAX) {
        return prevCount;
      }

      const nextCount = prevCount + 1;
      const $ariaLive = document.querySelector('#AriaLive');

      $ariaLive.innerText = `성인 승객 추가 ${nextCount}`;
      return Math.min(nextCount, ADULT_COUNT_MAX);
    });
  const decrement = () =>
    setAdultCount((prevCount) => {
      if (prevCount <= ADULT_COUNT_MIN) {
        return prevCount;
      }

      const nextCount = prevCount - 1;
      const $ariaLive = document.querySelector('#AriaLive');

      $ariaLive.innerText = `성인 승객 감소 ${nextCount}`;
      return Math.max(nextCount, ADULT_COUNT_MIN);
    });
  const handleChangeAdultCount = (e) => {
    const inputValue = e.target.value;
    const $ariaLive = document.querySelector('#AriaLive');

    if (isNaN(inputValue)) {
      $ariaLive.innerText = `승객 인원은 숫자만 입력 가능합니다.`;
      return;
    }

    if (inputValue > ADULT_COUNT_MAX) {
      $ariaLive.innerText = `승객 인원은 최대 3명까지만 추가 가능합니다.`;
      return;
    }

    setAdultCount(Number(inputValue));
  };

  return (
    <section className={styles.PageSection}>
      <h1>승객 선택</h1>

      <section className={styles.AdultSection}>
        <h2>성인</h2>
        <button
          type="button"
          className={classNames(styles.Tooltip, styles.IconOnly)}
        >
          성인 기준 상세 안내
        </button>

        <div>
          <button
            className={classNames(
              styles.SpinButton,
              styles.SpinButtonMinus,
              styles.IconOnly
            )}
            aria-disabled={isDecrementDisabled}
            onClick={decrement}
          >
            성인 승객 한 명 줄이기
          </button>

          <input
            type="text"
            className={styles.AdultCountInput}
            aria-label={'성인 인원'}
            max={ADULT_COUNT_MAX}
            min={ADULT_COUNT_MIN}
            value={adultCount}
            onChange={handleChangeAdultCount}
          />

          <button
            className={classNames(
              styles.SpinButton,
              styles.SpinButtonPlus,
              styles.IconOnly
            )}
            aria-disabled={isIncrementDisabled}
            onClick={increment}
          >
            성인 승객 한 명 늘리기
          </button>

          <div
            id="AriaLive"
            className={styles.SpinButton_AriaLive}
            aria-live="assertive"
          />
        </div>
      </section>
    </section>
  );
}

export default SpinButton;
