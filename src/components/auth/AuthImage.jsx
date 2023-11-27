export default function AuthImage(props) {
    const {imageSrc} = props;

    return (
        <div style={{height: '100vh', overflow: 'hidden', position: 'relative'}}>
            <img
                alt="lo"
                src={imageSrc}
                style={{
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            />
        </div>
    )
}
