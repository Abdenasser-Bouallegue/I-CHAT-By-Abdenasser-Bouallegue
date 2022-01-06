import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-info">Des Suggestions pour vous</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.8}} className="my-2" id='nasser' >
                <small className="d-block">
                Bienvenue sur notre site "I-CHAT=I Can Hear And Talk"
                </small>
                <small>
                   &copy; 2022 I-CHAT Créé par: <a href="https://www.linkedin.com/in/abd-enasser-bouallegue-132abb218/" target="_blank" rel="noreferrer"
                style={{wordBreak: 'break-all'}} >
                 Abd Enasser Bouallegue
                </a> ,tous les droits sont réservés.
                </small>
            </div>

        </div>
    )
}

export default RightSideBar
