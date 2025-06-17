import { test, expect } from '@playwright/test';

//class="top_news__line top_news__line--another_news"

test.describe('Группа тестов top_news__line top_news__line--another_news', () => {
  test.describe.configure({ timeout: 160_000 });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://cleverbots.ru/');
    await page.getByRole('link', { name: 'en EN' }).click({ timeout: 160_000 });
    await page.getByRole('link', { name: 'ru RU' }).click({ timeout: 90_000 });
  });

  test('Проверка отображения элементов в top_news__title', async ({ page }) => {
    await expect(page.getByText('Новости Cleverbots')).toBeVisible();
    await expect(page.getByText('Сегодня:')).toBeVisible();
  });

  test('Проверка наименования элементов в home__category__title', async ({ page }) => {
    await expect(page.getByText('Новости Cleverbots')).toContainText('Новости Cleverbots');
    await expect(page.getByText('Сегодня:')).toContainText('Сегодня:');
  });

  test('Проверка отображения элементов в simplebar-content', async ({ page }) => {
    await expect(
      page.getByText('мая, 2025 Автоматизация массового подбора с помощью ИИ 30 апреля, 2025'),
    ).toBeVisible(); //Целый блок
    await expect(
      page.locator('div:nth-child(2) > .section_x__new_item > .section_x__new_item__image'),
    ).toBeVisible(); //Часть блока AI
  });

  test('Проверка отображения элементов в section_x__new_item', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: 'Понимание намерений клиентов с помощью генеративного ИИ',
      }),
    ).toBeVisible(); // Текст части блока AI
  });
  test('Проверка отображения текста в section_x__new_item', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: 'Понимание намерений клиентов с помощью генеративного ИИ',
      }),
    ).toContainText('Понимание намерений клиентов с помощью генеративного ИИ');
  });
});
