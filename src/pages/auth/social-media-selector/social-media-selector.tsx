import * as React from 'react';
import {Box} from '@material-ui/core';
import {SocialMediaButton} from '../social-media-button/social-media-button';
import './social-media-selector.scss';
import {SocialMediaType} from '../../../modules/project-constants';

interface SocialMediaSelectorProps {
    onSelect: (socialMedia: SocialMediaType) => void;
}

export const SocialMediaSelector = ({onSelect}: SocialMediaSelectorProps) => (
    <Box className="social-media-selector">
        <SocialMediaButton
            type={SocialMediaType.TELEGRAM}
            onClick={() => onSelect(SocialMediaType.TELEGRAM)}
        />
        <SocialMediaButton type={SocialMediaType.VK} onClick={() => onSelect(SocialMediaType.VK)} />
    </Box>
);
