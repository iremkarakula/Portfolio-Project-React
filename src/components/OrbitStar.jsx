import React from 'react';

function OrbitStar({ children, orbitSize, starSize, rotation }) {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <div
                className="animate-spin inline-flex"
                style={{
                    width: `${orbitSize}px`,
                    height: `${orbitSize}px`,
                    animationDuration: '300s',
                    transform: `rotate(${rotation}deg)`,
                }}
            >

                <div className={`animate-spin inline-flex ${starSize}`} style={{ animationDuration: '30s' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default OrbitStar;
