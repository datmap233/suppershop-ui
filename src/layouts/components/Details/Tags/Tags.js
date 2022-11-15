function Tags({ refTag }) {
    return (
        <div className="tab-content" style={{ display: 'none' }} ref={refTag}>
            <div className="tag">
                Add Tags :
                <input type="text" name="" />
                <input type="submit" value="Tag" />
            </div>
        </div>
    );
}

export default Tags;
