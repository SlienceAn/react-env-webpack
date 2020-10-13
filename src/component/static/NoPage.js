import React from 'react';

const NoPage = () => {
    return (
        <div style={{minHeight:'80vh'}} className="w-100 d-flex align-items-center justify-content-center">
            <i className="fas fa-times mr-2" style={{ fontSize: '5rem', color: 'red' }} />
            <h1>網址發生錯誤，找不到路徑</h1>
        </div>
    );
};

export default NoPage;