import React from "react";
import PropTypes from 'prop-types';
import { RiEmotionSadLine } from 'react-icons/ri';
import { Wrapper, Paragraf } from './Notification.styled'

export const Notification = ({ message }) => {
    return (
        <Wrapper>
            <Paragraf>{message}
                <RiEmotionSadLine style={{ color: 'red', marginLeft: '5px', }} />
            </Paragraf>
        </Wrapper>)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};