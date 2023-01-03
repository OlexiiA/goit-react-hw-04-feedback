import React from "react";
import PropTypes from 'prop-types';
import { Text } from "./Title.styled"

export const Title = ({ title }) => {
    return (
        <Text>{title}</Text>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}