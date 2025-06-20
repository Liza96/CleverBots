import { test, expect } from '@playwright/test';

//class="section_x section_x__companies"

test.describe('Группа тестов section_x section_x__companies', () => {
  test.describe.configure({ timeout: 130_000 });

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

  test('Проверка отображения элементов в section_x__companies', async ({ page }) => {
    await expect(page.getByText('Нам доверяют').first()).toBeVisible({ timeout: 55_000 });
  });

  test('Проверка наименования элементов в section_x__companies', async ({ page }) => {
    await expect(page.getByText('Нам доверяют').first()).toContainText('Нам доверяют');
  });

  test('Проверка отображения элементов в home__companies__inner', async ({ page }) => {
    await expect(page.locator('.home__companies__inner')).toBeVisible(); //общий блок
    await expect(
      page.locator('div:nth-child(3) > .home__company_item__inner > picture'),
    ).toBeVisible(); //для примера метро
    await expect(
      page.locator('div:nth-child(23) > .home__company_item__inner > picture > .attachment-medium'),
    ).toBeVisible(); //для примера ренесанс
    await expect(
      page.locator('div:nth-child(21) > .home__company_item__inner > picture'),
    ).toBeVisible(); //для примера фск
  });
});
