import React from 'react';

const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
];

const ContentComponent = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ width: 150, height: 150, margin: 25 }}
                />
            ))}
        </div>
    );
};

export default ContentComponent;
