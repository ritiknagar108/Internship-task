import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SideBar.css'
import { useState } from 'react';
export default function SideBar() {
    const styles = {
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid black', // Add a bottom border
        backgroundColor: 'transparent',
    };
    const[btn1,setBtn1]=useState(false);
    const[btn2,setBtn2]=useState(false);
    const[btn3,setBtn3]=useState(false);
    const[btn4,setBtn4]=useState(false);
    return (
        <>
            <div>
                <i class="bi bi-geo-alt"></i><input style={styles} type="text" placeholder="enter you location" /><i class="bi bi-x-lg"></i>
                <p className='suggestion-text'><i class="bi bi-exclamation-circle"></i>Your location will help us serve better<br />and extend a personalised experience.</p>
            </div>
            <div className='Groups'>
                <h6><i class="bi bi-hand-thumbs-up"></i>RECOMMENDED GROUPS</h6>
                <div className='Group'>
                    <div className="user">
                        <div className='User-group'></div>
                        <h7> &nbsp;&nbsp;leisure</h7>
                    </div>
                    <button className={btn1?'btn btn-dark':'btn btn-outline-secondary'} onClick={()=>setBtn1(!btn1)}>{btn1?<>followed</>:<>follow</>}</button>
                </div>
                <div className='Group'>
                    <div className="user">
                        <div className='User-group1'></div>
                        <h7> &nbsp;&nbsp;Activism</h7>
                    </div>
                    <button className={btn2?'btn btn-dark':'btn btn-outline-secondary'}onClick={()=>setBtn2(!btn2)}>{btn2?<>followed</>:<>follow</>}</button>
                </div><div className='Group'>
                    <div className="user">
                        <div className='User-group2'></div>
                        <h7> &nbsp;&nbsp;MBA</h7>
                    </div>
                    <button className={btn3?'btn btn-dark':'btn btn-outline-secondary'}onClick={()=>setBtn3(!btn3)}>{btn3?<>followed</>:<>follow</>}</button>
                </div>
                <div className='Group'>
                    <div className="user">
                        <div className='User-group3'></div>
                        <h7> &nbsp;&nbsp;Philosophy</h7>
                    </div>
                    <button className={btn4?'btn btn-dark':'btn btn-outline-secondary'}onClick={()=>setBtn4(!btn4)}>{btn4?<>followed</>:<>follow</>}</button>
                </div>
                <div className='More-Options'>
                    <a href='/' className='more'>see more...</a>
                </div>
            </div>
        </>
    );
}