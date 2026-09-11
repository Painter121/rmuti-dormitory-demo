(function () {
  try {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch {
    // ignore localStorage access errors in restricted environments
  }
})();
