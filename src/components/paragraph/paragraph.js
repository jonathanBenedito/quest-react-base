const Paragraph = ({backgroundColor, text}) => {
    return (
        <p
            style={{
                backgroundColor: backgroundColor,
                textTransform: 'uppercase'
            }}
        >
            {text}
        </p>
    )
}

export default Paragraph