const API = (() => {
  const base = (typeof API_BASE_URL !== 'undefined') ? API_BASE_URL : '';
  async function req(method, path, body) {
    const opts = { method, headers: { 'Content-Type': 'application/json' } };
    if (body !== undefined) opts.body = JSON.stringify(body);
    const r = await fetch(base + path, opts);
    const text = await r.text();
    let data; try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!r.ok) throw new Error((data && data.erro) || ('Erro ' + r.status));
    return data;
  }
  return {
    get:  (p)    => req('GET', p),
    post: (p, b) => req('POST', p, b),
    put:  (p, b) => req('PUT', p, b),
    del:  (p)    => req('DELETE', p),
  };
})();
