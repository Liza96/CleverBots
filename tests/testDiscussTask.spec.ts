import { test, expect } from '@playwright/test';

test.describe('Группа тестов section сallback', () => {
  test.describe.configure({ timeout: 120_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
    await page.getByRole('link', { name: 'en EN' }).click({ timeout: 120_000 });
    await page.getByRole('link', { name: 'ru RU' }).click({ timeout: 50_000 });
  });

  test('Тест формы отправки обсуждения', async ({ page }) => {
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
  });

  test('Проверка отображения элемента callback-block', async ({ page }) => {
    await expect(page.locator('#callback-block')).toBeVisible();
  });
  test('Проверка отображения блока callback__block__info', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({
          hasText:
            'Обсудить задачу У вас появились вопросы? Заполните форму обратной связи и наши м',
        })
        .nth(2),
    ).toBeVisible();
  });
  test('Проверка отображения блока callback__block__form', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({
          hasText: 'Ваше имя Компания Ваш телефон +7Russia (Россия)+7Afghanistan (‫افغانستان‬‎)+',
        })
        .nth(2),
    ).toBeVisible();
  });
  test('Проверка отображения информации в блоке в callback info', async ({ page }) => {
    await expect(
      page.getByText(
        'Обсудить задачу У вас появились вопросы? Заполните форму обратной связи и наши м',
      ),
    ).toBeVisible();
  });
  test('Проверка наименования элементов блоке в callback info', async ({ page }) => {
    await expect(page.getByText('Обсудить задачу')).toContainText('Обсудить задачу');
    await expect(
      page.getByText(
        'У вас появились вопросы? Заполните форму обратной связи и наши менеджеры свяжутс',
      ),
    ).toContainText(
      'У вас появились вопросы? Заполните форму обратной связи и наши менеджеры свяжутся с вами в ближайшее время.',
    );
    await expect(page.getByText('Cleverbots', { exact: true })).toContainText('Cleverbots');
  });
  test('Проверка отображения элементов в callback form', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Ваше имя' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Компания' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Ваш телефон' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Ваш e-mail' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Ваш вопрос' })).toBeVisible();
  });
  test('Проверка отображения элементов в подтверждении информации', async ({ page }) => {
    await expect(page.getByText('Нажимая отправить, вы даете')).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'согласие на обработку персональных данных' }),
    ).toBeVisible();
  });
  test('Проверка наименования элементов в подтверждении информации', async ({ page }) => {
    await expect(page.getByText('Нажимая отправить, вы даете')).toContainText(
      'Нажимая отправить, вы даете',
    );
    await expect(
      page.getByRole('link', { name: 'согласие на обработку персональных данных' }),
    ).toContainText('согласие на обработку персональных данных');
  });
  test('Проверка кнопки "Отправить"', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Отправить' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Отправить' })).toContainText('Отправить');
  });
});
