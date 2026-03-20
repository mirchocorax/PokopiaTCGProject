const STORAGE_KEY = pokemon_data;

alerts("JS Cargando")

function cargarDatos() {
  const guardado = localStorage.getItem(STORAGE_KEY);

  if (guardado) {
    return JSON.parse(guardado);
  }

  return [
    {
      numero 1,
      nombre Pikachu,
      especialidad1 organizar,
      especialidad2 ,
      produce energia,
      procesa ,
      obtiene ,
      tengo false
    },
    {
      numero 2,
      nombre Machop,
      especialidad1 ,
      especialidad2 ,
      produce ,
      procesa energia,
      obtiene hierro,
      tengo true
    }
  ];
}

function guardarDatos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let data = cargarDatos();

function mostrar(pantalla) {
  document.getElementById(base).classList.add(hidden);
  document.getElementById(produccion).classList.add(hidden);

  document.getElementById(pantalla).classList.remove(hidden);
}

function cargarBase() {
  const cont = document.getElementById(listaBase);
  cont.innerHTML = ;

  data.forEach((p, i) = {
    const div = document.createElement(div);

    div.innerHTML = `
      ${p.numero} - ${p.nombre}
      button onclick=toggle(${i})
        ${p.tengo  Sí  No}
      button
    `;

    cont.appendChild(div);
  });
}

function toggle(i) {
  data[i].tengo = !data[i].tengo;
  guardarDatos();
  cargarBase();
}

function cargarMateriales() {
  const sel = document.getElementById(material);
  sel.innerHTML = ;

  const materiales = new Set();

  data.forEach(p = {
    if (p.produce) materiales.add(p.produce);
    if (p.obtiene) materiales.add(p.obtiene);
  });

  materiales.forEach(m = {
    const opt = document.createElement(option);
    opt.value = m;
    opt.textContent = m;
    sel.appendChild(opt);
  });
}

function buscarCadena(material, filtro, cadena = []) {
  let res = [];

  data.forEach(p = {

    if (filtro === si && !p.tengo) return;

    if (p.produce === material) {
      res.push([...cadena, p.nombre]);
    }

    if (p.obtiene === material) {
      res = res.concat(
        buscarCadena(p.procesa, filtro, [...cadena, p.nombre])
      );
    }

  });

  return res;
}

function calcular() {
  const material = document.getElementById(material).value;
  const filtro = document.getElementById(filtro).value;

  const cadenas = buscarCadena(material, filtro);

  const divCadenas = document.getElementById(cadenas);
  divCadenas.innerHTML = ;

  cadenas.forEach(c = {
    const div = document.createElement(div);
    div.textContent = c.join( → );
    divCadenas.appendChild(div);
  });

  const org = data.filter(p = {
    if (filtro === si && !p.tengo) return false;
    return p.especialidad1 === organizar  p.especialidad2 === organizar;
  });

  const divOrg = document.getElementById(organizadores);
  divOrg.innerHTML = ;

  org.forEach(o = {
    const div = document.createElement(div);
    div.textContent = o.nombre;
    divOrg.appendChild(div);
  });
}

cargarBase();
cargarMateriales();
