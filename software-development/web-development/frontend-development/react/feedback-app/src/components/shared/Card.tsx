type CardProps = {
    children: React.ReactNode,
    invert?: boolean
}

function Card({ children, invert }: CardProps) {
    return (
        // Dynamic class name based on whether or not the invert prop is passed in
        <div className={ `card ${invert && 'invert'}` }>{ children }</div>
    )
}

export default Card