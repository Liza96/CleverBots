import { test, expect } from '@playwright/test';

//class="section_x section_x__smi"

test.describe('Группа тестов class section_x section_x__top', () => {
  test.describe.configure({ timeout: 80_000 });

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

  test('Проверка отображение элемента в home__company__title', async ({ page }) => {
    await expect(page.getByText('СМИ О НАС')).toBeVisible();
  });

  test('Проверка наименования элемента в home__company__title', async ({ page }) => {
    await expect(page.getByText('СМИ О НАС')).toContainText('СМИ О НАС');
  });

  test('Проверка отображение блока сми', async ({ page }) => {
    await expect(page.locator('.section_x__smi__wrap').first()).toBeVisible();
  });

  test('Проверка отображение href элемента в home__company__title', async ({ page }) => {
    await expect(
      page.getByRole('group', { name: '1 /' }).getByRole('link').first(),
    ).toHaveAttribute(
      'href',
      'https://www.cnews.ru/news/line/2025-05-13_cleverbots_stereotipysvyazannye',
    ); //NEWS для примера
    await expect(page.getByRole('group', { name: '1 /' }).getByRole('link').nth(2)).toHaveAttribute(
      'href',
      'https://pro.rbc.ru/news/60a329959a79479e78c4432a',
    );
  }); //РБКPRO для примера
});
