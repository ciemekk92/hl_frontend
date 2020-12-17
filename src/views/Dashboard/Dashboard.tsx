import React from 'react';
import { Wrapper } from './Dashboard.styled';
import { authService } from '../../services';

const Dashboard: React.FC = (props) => {
    const currentUser = authService.currentUserValue;
    return (
        <Wrapper>
            <p>{`Witaj, ${currentUser.name}`}</p>
            <p>Wybierz jedną z kategorii w menu po lewej stronie</p>
        </Wrapper>
    );
};

export default Dashboard;
