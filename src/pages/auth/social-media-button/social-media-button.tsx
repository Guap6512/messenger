import * as React from 'react';
import {Paper} from '@material-ui/core';
import './social-media-button.scss';
import {SocialMediaType} from '../../../modules/project-constants';
import vkLogo from '../../../icons/vk-logo.svg';
import telegramLogo from '../../../icons/telegram-logo.svg';

interface SocialMediaButtonProps {
    type: SocialMediaType;
    onClick: () => void;
}

export const SocialMediaButton = ({type, onClick}: SocialMediaButtonProps) => {
    const icon = type === SocialMediaType.TELEGRAM ? telegramLogo : vkLogo;

    return (
        <Paper elevation={3} classes={{root: 'social-media-button'}} onClick={onClick}>
            <img alt="icon" className="social-media-button__icon" src={`${icon}`} />
        </Paper>
    );
};
