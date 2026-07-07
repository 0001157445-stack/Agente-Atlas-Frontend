function renderShell(active) {
  if (!Auth.guard()) return;
  const u = Auth.user;
  const items = [
    ['dashboard', 'Dashboard', '◧'],
    ['produtos',  'Produtos',  '▥'],
    ['vendas',    'Vendas',    '↗'],
    ['estoque',   'Estoque',   '▦'],
    ['fornecedores','Fornecedores','◇'],
    ['agente',    'Agente Atlas','✦'],
  ];
  const nav = items.map(([k,l,i]) =>
    `<a href="./${k}.html" class="${active===k?'active':''}"><span class="ico">${i}</span>${l}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="app">
      <aside class="sidebar" id="sidebar">
        <div class="brand">
          <div class="brand-mark">A</div>
          <div class="brand-name">AGENTE ATLAS<small>STOCK SYSTEM</small></div>
        </div>
        <nav class="nav">${nav}</nav>
        <div class="foot">
          <div class="me"><b>${u.nome}</b>${u.email}</div>
          <button class="btn ghost small" onclick="Auth.logout()">Sair</button>
        </div>
      </aside>
      <main class="main" id="main"></main>
    </div>
  `);
  // mover conteúdo original para o main
  const tpl = document.getElementById('page');
  if (tpl) document.getElementById('main').appendChild(tpl.content.cloneNode(true));
  // botão mobile (insere no topo do main)
  document.getElementById('main').insertAdjacentHTML('afterbegin',
    `<button class="menu-btn" onclick="document.getElementById('sidebar').classList.toggle('open')">☰ Menu</button>`);
}

function fmtMoney(v){
  return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}
function fmtDate(s){
  if(!s) return '';
  const d = new Date(s); return d.toLocaleString('pt-BR');
}
