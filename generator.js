function generator (career) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model ', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let result = []

  function randomIndex (option) {
    return Math.floor(Math.random() * option.length)
  }

  if (career === 'engineer') {
    result = task.engineer[randomIndex(task.engineer)] + phrase[randomIndex(phrase)]
  }
  if (career === 'designer') {
    result = task.designer[randomIndex(task.designer)] + phrase[randomIndex(phrase)]
  }
  if (career === 'entrepreneur') {
    result = task.entrepreneur[randomIndex(task.entrepreneur)] + phrase[randomIndex(phrase)]
  }

  return result
}

module.exports = generator