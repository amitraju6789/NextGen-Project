export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
export const getPasswordStrength = (password) => {
  let score = 0;
  if (!password) return { score: 0, label: 'Weak', color: 'bg-slate-800' };
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  switch (score) {
    case 1:
    case 2:
      return { score: 25, label: 'Weak', color: 'bg-rose-500' };
    case 3:
      return { score: 65, label: 'Medium', color: 'bg-amber-500' };
    case 4:
      return { score: 100, label: 'Strong', color: 'bg-emerald-500' };
    default:
      return { score: 0, label: 'Weak', color: 'bg-slate-800' };
  }
};
