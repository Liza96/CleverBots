import { test, expect } from '@playwright/test';

//class="section_x section_x__top"

test.describe('Группа тестов class section_x section_x__top', () => {
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

  test('Проверка отображения элементов навигации хедера', async ({ page }) => {
    await expect(page.getByTitle('You are here.')).toBeVisible();
    await expect(page.locator('.navbar__lisk').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'AI-аватары' })).toBeVisible();
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Маркетплейс' }),
    ).toBeVisible();
    await expect(
      page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Направления' }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'проекты', exact: true })).toBeVisible();
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Решения' }),
    ).toBeVisible();
    await expect(page.locator('a').filter({ hasText: 'О нас' }).first()).toBeVisible();
    await expect(page.locator('#to-callback-link')).toBeVisible();
    await expect(page.getByRole('link', { name: 'ru RU' })).toBeVisible();
  });

  test('Проверка названия элементов навигации хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'AI-аватары' })).toContainText('AI-аватары');
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Маркетплейс' }),
    ).toContainText('Маркетплейс');
    await expect(
      page.locator('#menu-glavnoe-menyu a').filter({ hasText: 'Направления' }),
    ).toContainText('Направления');
    await expect(page.getByRole('link', { name: 'проекты', exact: true })).toContainText('проекты');
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Решения' }),
    ).toContainText('Решения');
    await expect(page.locator('a').filter({ hasText: 'О нас' }).first()).toContainText('О нас');
    await expect(page.locator('#to-callback-link')).toContainText('Получить консультацию');
  });

  test('Проверка атрибутов href элементов навигации хедера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'AI-аватары' })).toHaveAttribute(
      'href',
      'https://studio.cleverbots.ru/avatar',
    );
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Маркетплейс' }),
    ).toHaveAttribute('href', 'https://marketplace.cleverbots.ru/');
    await expect(page.getByRole('link', { name: 'проекты', exact: true })).toHaveAttribute(
      'href',
      '/projects/',
    );
    await expect(
      page.locator('#menu-glavnoe-menyu').getByRole('link', { name: 'Решения' }),
    ).toHaveAttribute('href', '/products/');
    await expect(page.locator('#to-callback-link')).toHaveAttribute('href', '#callback-block');
    await expect(page.getByRole('link', { name: 'ru RU' })).toHaveAttribute('href', '#');
  });

  test('Проверка текста в section_x__top', async ({ page }) => {
    await expect(page.getByText('artificial intelligence', { exact: true }).first()).toBeVisible(); // artificial intelligence
    await expect(page.getByText('AI-based solutions for')).toBeVisible(); // AI-based solutions for business
    await expect(
      page.getByRole('heading', { name: 'Лидер в разработке диалоговых систем' }),
    ).toBeVisible();
    await expect(
      page.getByText('Создаём ботов с искусственным интеллектом промышленного масштаба'),
    ).toBeVisible();
  });

  test('Проверка отображения элементов в section_x__top__btns', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Получить консультацию' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Подобрать решение' })).toBeVisible();
  });

  test('Проверка названия элементов в section_x__top__btns', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Получить консультацию' }).nth(1)).toContainText(
      'Получить консультацию',
      { timeout: 60_000 },
    );
    await expect(page.getByRole('link', { name: 'Подобрать решение' })).toContainText(
      'Подобрать решение',
      { timeout: 60_000 },
    );
  });

  test('Проверка атрибутов href элементов в section_x__top__btns', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Получить консультацию' }).nth(1)).toHaveAttribute(
      'href',
      '#callback-block',
    );
    await expect(page.getByRole('link', { name: 'Подобрать решение' })).toHaveAttribute(
      'href',
      '/products/',
    );
  });
});
