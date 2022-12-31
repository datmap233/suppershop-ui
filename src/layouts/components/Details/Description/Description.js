function Description({ description }) {
    return (
        <div className="tab-content" style={{ display: 'block' }}>
            <p>
                {description!==undefined && description}
            </p>
        </div>
    );
}

export default Description;
