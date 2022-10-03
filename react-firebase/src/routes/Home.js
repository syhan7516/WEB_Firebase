import { React, useState } from 'react'
// Firebase 앱, 디비 객체 불러오기
import { dbService } from 'firebaseInfo';
// 디비에 데이터 추가 ( 폴더, 문서 )
import { collection, addDoc } from 'firebase/firestore';

const Home = () => {

    const [chat,setChat] = useState('');

    // 채팅 전송
    const submitContent = async (event) => {

        event.preventDefault();

        await addDoc(collection(dbService, 'chats'),
        {
            text : chat,
            createdAt : Date.now(),
        });

        setChat('');
    }

    const writeContent = (event) => { 
        setChat(event.target.value) 
    }

    return (
        <div>
            <h2>Home</h2>
            <form>
                <input type="text" placeholder="입력" value={chat} onChange={writeContent}/>
                <button onClick={submitContent}>전송</button>
            </form>
        </div>
    )
}

export default Home;