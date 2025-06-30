//Тест перехода в сценарий "DAboutUs"
import { test, expect } from '@playwright/test';

test.describe('Тест на вход в  "AboutUs"', () => {
  test.describe.configure({ timeout: 90_000 });

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

  test('Вход в "AboutUs-О нас"', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'О нас' }).first().click();
    await page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'О нас' }).click();
  });
  test('Вход в "AboutUs-Вакансии"', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'О нас' }).first().click();
    await page.getByRole('link', { name: 'Вакансии' }).click();
  });
  test('Вход в "AboutUs-Блог"', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'О нас' }).first().click();
    await page.getByRole('link', { name: 'Блог' }).click();
  });
  test('Вход в "AboutUs-Контакты"', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'О нас' }).first().click();
    await page.getByRole('link', { name: 'Контакты' }).click();
  });
});
