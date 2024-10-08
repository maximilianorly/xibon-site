const SsrThemeManagerScript = () => {
  const themeScript = `
      (function() {
        function getInitialTheme() {
          const storedTheme = sessionStorage.getItem('xibon_theme');
          if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches 
            ? 'dark' 
            : 'light';
        }
  
        const theme = getInitialTheme();
        document.documentElement.classList.add(theme);
      })();
    `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};

export default SsrThemeManagerScript;
