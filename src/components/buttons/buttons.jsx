import Button from '../button/button'
//componentes estrutura, recebe props: sugestão title, função(pegar valor de color, label, transforma parágrafo em uppercase), label e cor

const teste = () => {
    return console.log("teste")
}


const Buttons = () => {
    return (
        <>
            <Button onClick = {teste} label='Tornar colorido'/>
            <Button onClick = {teste} label='Deixar em caixa alta'/>
            <Button onClick = {teste} label='Mostrar label'/>
        </>
    )
}

export { Buttons }