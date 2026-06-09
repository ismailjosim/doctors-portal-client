import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'darktheme';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="btn btn-circle btn-ghost h-11 w-11 border border-primary/15"
      onClick={() => setTheme(isDark ? 'mytheme' : 'darktheme')}
    >
      {mounted && isDark ? (
        <FaSun className="text-lg text-warning" />
      ) : (
        <FaMoon className="text-lg text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
