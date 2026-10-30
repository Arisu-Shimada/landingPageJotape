// Preenche o ano atual no rodapé dinamicamente
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const themeToggle = document.getElementById('themeToggle');
  const themeToggleLabel = document.getElementById('themeToggleLabel');
  const savedTheme = localStorage.getItem('jotape-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme =
    savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : prefersDark
        ? 'dark'
        : 'light';

  const setTheme = (theme) => {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Ativar modo claro' : 'Ativar modo escuro',
    );
    themeToggleLabel.textContent = isDark ? 'Claro' : 'Escuro';
  };

  setTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('jotape-theme', nextTheme);
  });
});