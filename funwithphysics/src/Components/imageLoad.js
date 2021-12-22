import React from 'react';
import ProgressiveImage from 'react-progressive-image';

function ImageLoad({className, main, placeholder, alt}) {
    return (
        <div>
            <ProgressiveImage src={main} placeholder={placeholder}>
            {(src, loading) => (
                <img className={className} style={{ backdropFilter: loading ? "blur(100px)" : "blur(0px)"}} src={src} alt={alt} />
            )}
            </ProgressiveImage>
        </div>
    )
};

export default ImageLoad;
