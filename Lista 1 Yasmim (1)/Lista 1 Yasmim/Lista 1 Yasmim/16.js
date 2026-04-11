let obj = { br: 'Brasil', us: 'EUA' }

let entries = Object.entries(obj)

for (let i = 0; i < entries.length; i++) {
  let sigla = entries[i][0]
  let pais = entries[i][1]

  console.log('A sigla ' + sigla + ' é do país ' + pais)
}
