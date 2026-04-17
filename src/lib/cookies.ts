export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const cookieName = `${encodeURIComponent(name)}=`;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(cookieName));

  return match ? decodeURIComponent(match.slice(cookieName.length)) : null;
}

export function setCookie(name: string, value: string, days = 365) {
  if (typeof document === 'undefined') return;

  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`;
}
