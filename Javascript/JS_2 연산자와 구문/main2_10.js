// while 문
// while (조건) {}

for(let i = 0; i <= 10; i++) {
const divEl_of = document.createElement('div')
divEl_of.textContent = i
document.body.append(divEl_of)
}

const word = document.createElement('div')
word.textContent = `----구분선----`
document.body.appendChild(word)

let count = 1
while(count <= 10) {
  const divEl = document.createElement('div')
  divEl.textContent = count
  document.body.appendChild(divEl)
  count += 1
}