import React from 'react';
const Mtwlii = ({ mtwliis, deleteMtwlli }) => {
    const mtwliiList = mtwliis.map(mtwlii => {
        return (
            <div className="mtwlii" key={mtwlii.id}>
                <div>Name:{mtwlii.name}</div>
                <div>Age: {mtwlii.age}</div>
                <div>Belt: {mtwlii.belt}</div>
                <button onClick={() => { deleteMtwlli(mtwlii.id) }}>Delete Mtwlii</button>
            </div>
        );
    })
    return (
        <div className="mtwlii-list">
            {mtwliiList}
        </div>

    );

}
export default Mtwlii;