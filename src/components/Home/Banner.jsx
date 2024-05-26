const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/colorful-sneaker-is-being-spray-painted-with-purple-spray-paint_123827-23438.jpg?w=996&t=st=1716699053~exp=1716699653~hmac=c00662f61d6a6517c4adefc2950b5e5d4bbe8aca5ffd8bbbd8979e5faf805df4)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Step into Style</h1>
                        <p className="mb-5">Discover our latest collection of sneakers designed to elevate your style and comfort. Whether you&apos;re hitting the gym or the streets, we&apos;ve got the perfect pair for you. Shop now and step up your game!</p>
                        <button className="btn btn-primary text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
