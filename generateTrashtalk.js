function generateTrashtalk(option){
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code','設計個幹話產生器'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計','變身幹話設計人'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢','當幹話老闆']
    }
    const phrase = ['很簡單吧','很容易吧','很快吧','很正常吧','不難吧']

    let trashWords = '身為一位';

    task.engineer[Math.floor(Math.random()*task.engineer.length)];
    if(option.job === 'engineer'){
        trashWords += '工程師' + task.engineer[Math.floor(Math.random() * task.engineer.length)];
    }else if(option.job === 'designer'){
        trashWords += '設計師' + task.designer[Math.floor(Math.random() * task.engineer.length)];
    }else if(option.job === 'entrepreneur'){
        trashWords += '企業家' + task.entrepreneur[Math.floor(Math.random() * task.engineer.length)];
    }

    if(trashWords.length === 4){
        return '選一個職業吧！';
    }
    trashWords += phrase[Math.floor(Math.random() * phrase.length)];
    return trashWords;
}

module.exports = generateTrashtalk;