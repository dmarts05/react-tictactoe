export const getCurrentTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export const setDefaultOsTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
