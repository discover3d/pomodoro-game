import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';import { ChallengeBox } from './ChallengeBox';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="profile.png" alt="Rafael Costa"/>
            <div>
                <strong>Rafael Costa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>  
    );
}