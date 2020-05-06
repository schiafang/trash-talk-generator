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
    result = '身為一個工程師，' + task.engineer[randomIndex(task.engineer)] + phrase[randomIndex(phrase)] + '吧！'
  }
  if (career === 'designer') {
    result = '身為一個設計師，' + task.designer[randomIndex(task.designer)] + phrase[randomIndex(phrase)] + '吧！'
  }
  if (career === 'entrepreneur') {
    result = '身為一個創業家，' + task.entrepreneur[randomIndex(task.entrepreneur)] + phrase[randomIndex(phrase)] + '吧！'
  }

  if (result.length === 0) { return '點選一個 你想對誰說幹話～' }
  else { return result }
}

module.exports = generator