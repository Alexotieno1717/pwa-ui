import axios from 'axios';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function useGameplay() {

    const [ sessionId , setSessionId ] = useState();
    const user = JSON.parse(localStorage.getItem('userSaved'))
    const navigate = useNavigate()

    const handleGamePlay = () =>{
        axios
        .get(`solo-play/get-solo-session&user_id=${user.data.id}`)
        .then(res => {
          // console.log(res.data.session.id)
        //   setSessionId(res.data.session)
    
          axios.get(`solo-play/fetch-questions&session_id=${res.data.session.id}`).then(response => {
            // console.log(`solo-play/fetch-questions&session_id=${sessionGameId}`)
            console.log(response.data)
            if (response.data.status === 200) {
                setSessionId(response.data.data)
                navigate('/questions');
            }
          }).catch((error) => console.log(error) )
        })
    }

    return [sessionId, handleGamePlay]
}
