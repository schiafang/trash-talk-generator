function generator (career) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model ', '找 VC 募錢']
  }
  const careers = ['工程師', '設計師', '創業家']
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let result = []

  function randomIndex (option) {
    return Math.floor(Math.random() * option.length)
  }

  for (let i = 0; i < careers.length; i++) {
    if (career === Object.keys(task)[i]) {
      const key = Object.keys(task)[i]
      result = '身為一個' + careers[i] + '，' + task[key][i] + phrase[randomIndex(phrase)] + '吧！'
    }
  }

  if (result.length === 0) { return '點選一個 你想對誰說幹話～' }
  else { return result }
}

module.exports = generator