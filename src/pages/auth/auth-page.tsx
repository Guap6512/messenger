import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardContent, CircularProgress} from '@material-ui/core';
import {SocialMediaSelector} from './social-media-selector/social-media-selector';
import {
    setSocialMediaType as setSocialMediaTypeAction,
    getSocialMediaType,
    getAuthStage,
    AuthStage,
    getResponseCodeType,
} from '../../modules/auth';
import {SocialMediaType} from '../../modules/project-constants';
import {AuthForm} from './auth-form';
import {requestCode as requestCodeAction} from '../../modules/auth/auth-actions';
import {CodeType} from '../../modules/auth/auth-types';
import {getIsLoading} from '../../modules/auth/auth-selectors';

interface AuthPageProps {
    socialMediaType?: SocialMediaType;
    authStage: AuthStage;
    setSocialMediaType: (type: SocialMediaType) => void;
    requestCode: (phone: string) => void;
    responseCodeType?: CodeType;
    isLoading: boolean;
}

const AuthPageComponent = ({
    socialMediaType,
    setSocialMediaType,
    authStage,
    requestCode,
    responseCodeType,
    isLoading,
}: AuthPageProps) => {
    const renderPageBody = () => {
        if (authStage === AuthStage.SELECT_TYPE)
            return <SocialMediaSelector onSelect={type => setSocialMediaType(type)} />;
        if (socialMediaType !== undefined)
            return (
                <AuthForm
                    responseCodeType={responseCodeType}
                    isLoading={isLoading}
                    requestCode={requestCode}
                />
            );
        return <CircularProgress />;
    };

    return (
        <Card>
            <CardContent>{renderPageBody()}</CardContent>
        </Card>
    );
};

const mapStateToProps = state => ({
    socialMediaType: getSocialMediaType(state),
    authStage: getAuthStage(state),
    responseCodeType: getResponseCodeType(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
    setSocialMediaType: type => dispatch(setSocialMediaTypeAction(type)),
    requestCode: phone => dispatch(requestCodeAction(phone)),
});

export const AuthPage = connect(mapStateToProps, mapDispatchToProps)(AuthPageComponent);
