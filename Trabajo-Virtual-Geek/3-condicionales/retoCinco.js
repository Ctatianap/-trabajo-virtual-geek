'use strict'

const activableSection = document.querySelector ('.activable-section');
const activableSectionTitle = document.querySelector ('.title');
const activableSectionParagraph = document.querySelector ('.paragraph');

if (activableSection.classList.contains('warning')){

    activableSectionTitle.innerHTML = 'AVISO'
    activableSectionParagraph.innerHTML = 'Tenga cuidado'

}else if (activableSection.classList.contains('error')){
    activableSectionTitle.innerHTML = 'ERROR'
    activableSectionParagraph.innerHTML = 'Ha surgido un error'
    
}else if (activableSection.classList.contains('success')){

    activableSectionTitle.innerHTML = 'CORRECTO'
    activableSectionParagraph.innerHTML = 'Los datos son correctos'
}


