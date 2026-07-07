const Auth = {
  get user() {
    try { return JSON.parse(localStorage.getItem('atlas_user') || 'null'); } catch { return null; }
  },
  set(u) { localStorage.setItem('atlas_user', JSON.stringify(u)); },
  logout() { localStorage.removeItem('atlas_user'); location.href = '../index.html'; },
  guard() {
    if (!this.user) { location.href = '../index.html'; return false; }
    return true;
  }
};
