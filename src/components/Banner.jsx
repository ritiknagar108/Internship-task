import banner from '/src/assets/banner.jpeg';

export default function Banner() {

    return (
        <div className="Container">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '440px',
                    margin: '0 auto',
                }}
            ></div>
            <div style={{ position: 'absolute', top: '300px', left: '105px' }}>
                <p style={{ margin: '0',fontSize:'25px' }}><>Computer Engineering</></p>
                <p style={{ margin: '10px' }}>142,765 computer engineer follow this</p>
            </div>
        </div>
    );
}