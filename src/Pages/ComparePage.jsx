import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Graph from '../Components/Graph';
import { auth, db } from '../firebaseConfig';

const ComparePage = () => {
    
    const {username} = useParams();
    const [loggedInUserData, setLoggedInUserData] = useState([]);
    const [compareUserData, setCompareUserData] = useState([]);
    const [loggedInUserGraphData, setLoggedInUserGraphData] = useState([]);
    const [compareUserGraphData, setCompareUserGraphData] = useState([]);

    const getUID = async()=>{
        const ref = db.collection('usernames').doc(`${username}`);
        const response = await ref.get();
        return response.data().uid;
    }

    const getData = async()=>{

        const userUID = await getUID();
        const {uid} = auth.currentUser;
        const resultRef = db.collection('Results');
        let tempData = [];
        let tempGraphData = [];

        resultRef.where('userId','==',uid).orderBy('timeStamp','desc').get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                tempData.push({...doc.data()});
                tempGraphData.push([doc.data().timeStamp,doc.data().wpm]);
                setLoggedInUserData(tempData);
                setLoggedInUserGraphData(tempGraphData);
            });
        });

        let tempData1 = [];
        let tempGraphData1 = [];
        resultRef.where('userId','==',userUID).orderBy('timeStamp','desc').get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                tempData1.push({...doc.data()});
                tempGraphData1.push([doc.data().timeStamp,doc.data().wpm]);
                setCompareUserData(tempData1);
                setCompareUserGraphData(tempGraphData1);
            });
        });
    }

    useEffect(()=>{
        getData();
    },[]);
console.log(loggedInUserData);
console.log(compareUserData);

  return (
    <div>
        <div className='compare'>
        <Graph  graphData={loggedInUserGraphData} type='date'/>
        
        <Graph  graphData={compareUserGraphData} type='date'/>
        </div>
        {/* <div className='compare'>
            {loggedInUserData&&loggedInUserData.map((item,i)=>(
                <div style={{pading:"1px"}}>
                    <h3 id="data-value">{item.wpm}</h3>
                <h3 id="data-value">{item.characters}</h3>
                </div>
            ))}
            <div className='compare'>
            {compareUserData&&compareUserData.map((item,i)=>(
                <div style={{pading:"1px"}}>
                    <h3 id="data-value">{item.wpm}</h3>
                <h3 id="data-value">{item.characters}</h3>
                </div>
            ))}
            </div>
             
        </div> */}
    </div>
  )
}

export default ComparePage