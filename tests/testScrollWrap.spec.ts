import { test, expect } from '@playwright/test';

//class="section_x section_x__news js__scroll_wrap"

test.describe('Группа тестов class section_x__news js__scroll_wrap', () => {
  test.describe.configure({ timeout: 100_000 });

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
  /*старый формат пока закомментирую
  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
    await page.getByRole('link', { name: 'en EN' }).click({ timeout: 160_000 });
    await page.getByRole('link', { name: 'ru RU' }).click({ timeout: 90_000 });
  });*/

  test('Проверка отображения элемента top_news__title', async ({ page }) => {
    await expect(page.locator('div').filter({ hasText: /^Проекты$/ })).toBeVisible();
  });

  test('Проверка названия элемента top_news__title', async ({ page }) => {
    await expect(page.locator('div').filter({ hasText: /^Проекты$/ })).toContainText('Проекты');
  });

  test('Проверка отображения элемента simplebar-content', async ({ page }) => {
    await expect(
      page.getByText('Чат-бот для оптимизации подбора персонала (МТС Design Bot) Подробнее 2022'),
    ).toBeVisible();
  });

  test('Проверка отображения подъелемента simplebar-content, servier', async ({ page }) => {
    await expect(
      page.locator(
        'div:nth-child(2) > .page_projects__featured__item > .page_projects__featured__item__image > .page_projects__featured__item__inner',
      ),
    ).toBeVisible();
  });

  test('Проверка отображения кнопки', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Смотреть все проекты' })).toBeVisible();
  });

  test('Проверка наименования кнопки', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Смотреть все проекты' })).toContainText(
      'Смотреть все проекты 74',
    );
  });
});
