import React from 'react';
import Toast from '../Toast/Toast';
import './ToastList.css'

const ToastList = () => {
    return (
        <div className="toast-list">
            <Toast></Toast>
            <Toast></Toast>
            <Toast></Toast>
        </div>
    );
};

export default ToastList;