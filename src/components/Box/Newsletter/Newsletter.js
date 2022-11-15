function Newsletter({ position }) {
    return (
        <div className={`get-newsletter ${position}`}>
            <h3 className="title">
                Get
                <strong>Newsletter</strong>
            </h3>
            <p>Casio G Shock Digital Dial Black.</p>
            <form>
                <input className="email" type="text" name="" placeholder="Your Email..." />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Newsletter;
