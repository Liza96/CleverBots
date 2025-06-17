import { test, expect } from '@playwright/test';

test.describe('Группа тестов section сallback', () => {
  test.describe.configure({ timeout: 150_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');

    // Явное ожидание и клик по ссылкам
    const langEnLink = page.getByRole('link', { name: 'en EN' });
    await expect(langEnLink).toBeVisible();
    await langEnLink.click();

    const langRuLink = page.getByRole('link', { name: 'ru RU' });
    await expect(langRuLink).toBeVisible();
    await langRuLink.click();
  });

  /*test('Тест формы отправки обсуждения', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Ваше имя' }).click();
    await page.getByRole('textbox', { name: 'Ваше имя' }).fill('Елизавета');
    await page.getByRole('textbox', { name: 'Компания' }).click();
    await page.getByRole('textbox', { name: 'Компания' }).fill('CleverBots');
    await page.getByRole('textbox', { name: 'Ваш телефон' }).click();
    await page.getByRole('textbox', { name: 'Ваш телефон' }).fill('9194374496');
    await page.getByRole('textbox', { name: 'Ваш e-mail' }).click();
    await page
      .getByRole('textbox', { name: 'Ваш e-mail' })
      .fill('elizaveta.stolyarova@cleverbots.ru');
    await page.getByRole('textbox', { name: 'Ваш вопрос' }).click();
    await page.getByRole('textbox', { name: 'Ваш вопрос' }).fill('Test form');
    await page.getByRole('button', { name: 'Отправить' }).click();
  });*/

  //оптимизация
  test('Форма callback: отправка данных', async ({ page }) => {
    // Заполнение полей с явным ожиданием
    const nameInput = page.getByRole('textbox', { name: 'Ваше имя' });
    await expect(nameInput).toBeVisible();
    await nameInput.fill('Елизавета');

    const companyInput = page.getByRole('textbox', { name: 'Компания' });
    await expect(companyInput).toBeVisible();
    await companyInput.fill('CleverBots');

    const phoneInput = page.getByRole('textbox', { name: 'Ваш телефон' });
    await expect(phoneInput).toBeVisible();
    await phoneInput.fill('+79194374496');

    const emailInput = page.getByRole('textbox', { name: 'Ваш e-mail' });
    await expect(emailInput).toBeVisible();
    await emailInput.fill('elizaveta.stolyarova@cleverbots.ru');

    const questionInput = page.getByRole('textbox', { name: 'Ваш вопрос' });
    await expect(questionInput).toBeVisible();
    await questionInput.fill('Test form');

    const submitBtn = page.getByRole('button', { name: 'Отправить' });
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();
  });
});
