import { test, expect } from '@playwright/test';

//class="section_x section_x__category js_ancor__category"

test.describe('Группа тестов section_x section_x__category js_ancor__category', () => {
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

  test('Проверка отображения элементов в home__category__title', async ({ page }) => {
    await expect(
      page.getByText(
        'Получите сегодня преимущества будущего благодаря проверенным и эффективным техно',
      ),
    ).toBeVisible();
  });

  test('Проверка наименования элементов в home__category__title', async ({ page }) => {
    await expect(page.locator('body')).toContainText(
      'Получите сегодня преимущества будущего благодаря проверенным и эффективным технологиям',
    );
  });

  test('Проверка отображения элементов в skiptranslate', async ({ page }) => {
    await expect(
      page.getByText('Генеративный искусственный интеллект', { exact: true }).nth(2),
    ).toBeVisible();
    await expect(page.getByText('Разработка чат-ботов для бизнеса').nth(2)).toBeVisible();
    await expect(page.getByText('Разработка голосовых помощников').nth(2)).toBeVisible();
  });

  test('Проверка наименования элементов в home__category__list', async ({ page }) => {
    await expect(
      page.getByText('Генеративный искусственный интеллект', { exact: true }).nth(2),
    ).toContainText('Генеративный искусственный интеллект');
    await expect(
      page.getByText(
        'Генеративный искусственный интеллект (Генеративный ИИ) - это технология, которая',
      ),
    ).toContainText(
      'Генеративный искусственный интеллект (Генеративный ИИ) - это технология, которая позволяет компьютерным системам генерировать уникальный контент, имитируя творческий процесс человека.',
    );
    await expect(page.getByText('Разработка чат-ботов для бизнеса').nth(2)).toContainText(
      'Разработка чат-ботов для бизнеса',
    );
    await expect(
      page.getByText(
        'Виртуальный онлайн-консультант, имитирующий общение с реальным человеком в текст',
      ),
    ).toContainText(
      'Виртуальный онлайн-консультант, имитирующий общение с реальным человеком в текстовых каналах, для автоматизации службы поддержки',
    );
    await expect(page.getByText('Разработка голосовых помощников').nth(2)).toContainText(
      'Разработка голосовых помощников',
    );
    await expect(
      page.getByText(
        'Автоматизация голосовой коммуникации с помощью алгоритмов машинного обучения для',
      ),
    ).toContainText(
      'Автоматизация голосовой коммуникации с помощью алгоритмов машинного обучения для повышения качества обслуживания и лояльности клиентов',
    );
  });

  test('Проверка отображения кнопки в home__category__list', async ({ page }) => {
    await expect(
      page
        .locator('section')
        .filter({
          hasText:
            'Получите сегодня преимущества будущего благодаря проверенным и эффективным техно',
        })
        .getByRole('link')
        .first(),
    ).toBeVisible();
  });

  test('Проверка наименования кнопки в home__category__list', async ({ page }) => {
    await expect(
      page
        .locator('section')
        .filter({
          hasText:
            'Получите сегодня преимущества будущего благодаря проверенным и эффективным техно',
        })
        .getByRole('link')
        .first(),
    ).toContainText('Подробнее');
  });
});
