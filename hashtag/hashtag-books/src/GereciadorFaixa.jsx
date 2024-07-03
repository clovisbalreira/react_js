const GerenciadorFaixa = ({faixa, referencia}) => {
    return <audio src={faixa} ref={referencia}/>
}

export default GerenciadorFaixa