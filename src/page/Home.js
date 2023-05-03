import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

import { 
    data1,
    data2,
    data3,
 } from './data';

import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function PageNavi() {
    const NaviItem = [
    'INFO', 'SUMMARY' , 'NOTICE'
    ]

    return (
        <div id='nav'>
        <Navbar>
        <Container>
        <Navbar.Brand>
            <Link to='/LOBOTOMY/home' 
            className='font-xl'
            style={{color:'rgb(252,58,58)'}}>LOBOTOMY</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {NaviItem.map((item)=>{
                return (
                    <Nav key={item}>
                        <Link to={'/LOBOTOMY/'+item} id='nav-item' className='font-lg'>
                            {item}
                        </Link>
                    </Nav>
                )})}
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

const PageHome = () => {
    return (
        <div id='pageHome' className="row justify-content-md-center text-center" >
            <img src='./HomeLogo.png' style={{objectFit:'scale-down', maxWidth:'620px'}} alt="LOGO"  />
            <h1>FACE THE FEAR, BUILD THE FUTURE.</h1>
            <h2 className='ko'>공포에 직면하여 미래를 창조하라.</h2>
            <div className='ko font-mid' style={{ marginTop :'30px'}}>
                당신이 상상할 수 없을 온갖 종류의 괴물들.<br/> 여러분은 괴물들을 격리시키는 로보토미 사의 관리자가 되어 다양한 종류의 괴물들을 관리하게 됩니다.<br/>
                여러분은 직원들에게 명령을 시키고 그 결과를 지켜볼 수 있을 겁니다.<br/> 환상체들로부터 에너지를 모아 시설을 확장하고 더 많은 괴물들을 관리하세요.
            </div>
        </div>
    )
}

const PageInfo = () =>{
    return(
        <div >
            <div className='page-info ko font-mid'>
                환상체는 신화, 도시전설, 동화, 민담 등 인간의 원초적 공포에서부터 탄생되었습니다. <br/>
                이들은 분류하기가 매우 조심스럽고 모호할 정도로 알려진 게 없으며 미스터리한 존재들입니다. <br/><br/>
                모든 환상체가 해로운 형태를 띠지는 않을 것입니다. <br/>
                온순하여 직원들에게 아무런 피해를 주지 않는 성질의 존재가 있는가 <br/>
                하면 매우 공격적이어서 신중에 신중을 요하는 작업이 필요한 존재들도 있습니다.
            </div>
            <PageInfoDetail />
        </div>
    )
}

const PageInfoDetail = () => {

    const itemDetails =[
        {name:'ZAYIN', info:
        '가장 낮은 공격성을 가진 ZAYIN 등급의 환상체는 직원들에게 끼치는 피해가 그나마 제일 낮을 것입니다. \
        대개 큰 피해를 주지 않으며 상황에 따라서는 직원들에게 긍정적인 영향을 줄 수도 있을 것입니다. \
        하지만 세상에 모든 환상체들이 ZAYIN에 그쳤다면 우리가 이렇게 거대한 규모의 격리소를 만들 필요도 없었겠죠.'},
                
        {name:'TETH', info:
        '이 환상체들은 직원에게 약한 상처에서부터 중상에 이르기까지 다양한 피해를 입힐 수 있을 것입니다. \
        하지만 직원들이 관리법을 잘 지킨다면 큰 피해를 입히지 않을 것입니다.'},
            
        { name:'HE', info:
        '직원 수 명 정도는 손쉽게 죽일 수 있을 등급입니다. \
        아마 관리자님은 ZAYIN이나 TETH에게 쏟는 관심의 두 배 이상을 쏟아야 할 것입니다. \
        상황이 나빠지면 피 흘리며 썰려 나가는 여러 직원들을 볼 수 있겠죠. 하지만 아직까지는 큰 걱정까지는 필요 없는 단계입니다. \
        관리자님의 우수한 능력이라면 충분히 통제할 수 있습니다.'},
            
        {name:'WAW', info:
        '해당 등급의 환상체를 맞닥뜨렸다면 슬슬 걱정해야 할 시기입니다. 이들은 위험성이 높으며 파괴력도 무시무시합니다. \
        아마 WAW 등급의 환상체들에게 있어서 부서들은 과자로 만든 집에 불과하겠죠. 사상자는 수십 명까지 도달할 것입니다. 그리고 대다수는 직원들에게 적대적일 것입니다.'},
            
        {name:'ALAPH', info:
        '가장 위험합니다. 이 환상체가 관리 대상에 포함되는 순간, 당신은 최대한 할 수 있는 엄청난 집중과 관심을 계속해서 기울여야 합니다. \
        해당 등급의 환상체를 격리하는 방법을 찾기 위해 어마어마한 자본이 소비되었습니다. 이 환상체가 부서 전체를 파괴하지 않고 제압이 끝났다면 \
        그걸로 다행일 것입니다. 당신과 직원들은 모두 극심한 스트레스를 느끼겠죠. 부디 우리의 경고가 과장된 것이라고 생각하지 않기를 바랍니다.'}
    ]

    const [content, setContent] = useState({info:null})

    const onClick = (event) => {
        setContent(itemDetails[event.target.id])
    }

    return(
        <div style={{textAlign: 'center'}}>
            <ButtonGroup aria-label="Basic example" style={{ width:'50%'}} >
                {itemDetails.map((item, index)=>{return (
                    <Button
                    key={item.name} 
                    variant="secondary" 
                    onClick={onClick} 
                    id={index} 
                    className={item.name}>
                        {item.name}
                    </Button>
                    )})}
            </ButtonGroup>
            <div id='groupInner'>
                {(content.info !== null)?
                    <img id='content-img' src={content.name+'.png'}/>:null}
                <div id='content-info' className='ko'>{content.info}</div>
            </div>
        </div>
    )
}

const Pagesummary = () => {

    const [ content , setContent ] = useState([]);

    const getData = () => {
        setContent(data1)
    }

    useEffect(function(){getData()},[]);

    const [ contentData, setContentData ] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setContentData( content[index] )
        setShow(true)
    }


    return (
    <>
        <Row>
            {content.map((item, number)=>{return(
                <Card key={number} onClick={()=>handleShow(number)}>
                    <Card.Img src={item.code+'.jpg'} style={{ marginTop:'12px' }} />
                    <Card.Body>
                        <Card.Title id='cardText'>
                            {item.code}
                        </Card.Title>
                    </Card.Body> 
                </Card>

            )})} 
        </Row>

        <Modal style={{backgroundColor: 'transparent'}}
        id='my-modal' show={show} onHide={handleClose} centered>
            <Modal.Title>
            <Card.Img id='modal-img' src={contentData.code+'.jpg'} />
            <div id='modal-name'>{contentData.name}</div>
            <div id='modal-deco' />
            </Modal.Title>
            <Modal.Body className='font-lg'>
                <span>
                {contentData.code}
                </span>
                <span className={contentData.risk_level}>
                {contentData.risk_level}
                </span>
            </Modal.Body>
        </Modal>
    </>
    )
}

const PageNotice = () => {

    const navigate = useNavigate()

    return(
        <div id='table' style={{margin:'20px'}}>
            <Table striped hover >
                <thead className='font-lg'>
                    <tr>
                        <th>INDEX</th>
                        <th colSpan={2}>RESEARCH PROJECT</th>
                        <th>TEAM</th>
                        <th>DAY</th>
                    </tr>   
                </thead>
                <tbody>
                    {data2.map((item)=>{
                        return(
                            <tr key={item.loc} id='trLine' className='font-mid'
                            onClick={()=>{
                                navigate(`/LOBOTOMY/NOTICE/${item.loc}`)
                            }}>
                                <td>{item.loc}</td>
                                <td colSpan={2}>{item.proj}</td>
                                <td>{item.team}</td>
                                <td>{item.day}</td>
                            </tr>
                    )})}
                </tbody>  
            </Table>
        </div>
    )
}

const PageNoticeDetail = () => {

    const number = useParams().number

    const [ noticeDetail , setNoticeDetail ] = useState([])

    const getData = () => {
        setNoticeDetail(data2[data2.length-number])
    }

    useEffect(function(){getData()},[])

    const [ comment , setComment ] = useState([])

    const getComment = () => {
        let result = []
        data3.forEach(element => {
            if(element.loc.toString() === number){
                result.push(element)
            }
        })

        for( let i = 0 ; i < result.length ; i++ ){
            let date = new Date(result[i].date)
            result[i].date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        }
        setComment(result)
    }

    useEffect(function(){getComment()},[])


    const now = new Date()


    let submitState = {
        nickName: "",
        contents: "",
        loc:number,
        date: "2023-1-23 10:10",
        id: comment.length + 1
    }

    const SubmitHandle = () => {

        if(submitState.nickName === "" || submitState.contents === ""){
            return
        }

        console.log(submitState.nickName, submitState.contents)

        let result = []

        for(let i = 0 ; i < comment.length ; i++){
            result.push(comment[i])
        }

        result.push(submitState)

        setComment(result)

        document.querySelector("#nick-name").value=""
        document.querySelector("#comment-content").value=""

    }

    return (
        <div>
            <div id='notice-in'>
                <div id='notic-detail'>
                    <h2>
                        {noticeDetail.proj}
                    </h2>
                    <h4>
                        {noticeDetail.detail}
                    </h4>
                </div>
                <div 
                style={{
                    textAlign: 'right',
                    height : '3rem'
                }}>
                    <Link to='/LOBOTOMY/NOTICE' id='back-btn'>◀ BACK</Link>
                </div>
            </div>
            

            <div id='bottem-comments'>

                {comment.map((item)=>{
                    
                    return(
                            <CommentContent item={item} key={item.id} />
                        )
                    })}

                <div id='comment-area'>
                    <div>
                        <Form.Control
                        id='nick-name'
                        className="comment-form"
                        as="textarea"
                        spellCheck="false"
                        placeholder="NAME"
                        style={{ height: '40px' }}
                        onChange={(e)=>{submitState.nickName = e.target.value}}/>

                        <Form.Control
                        id='comment-content'
                        className="comment-form"
                        as="textarea"
                        placeholder="Leave a comment here"
                        spellCheck="false"
                        style={{ height: '100px' }}
                        onChange={(e)=>{submitState.contents = e.target.value}}/>

                    </div>
                    <button className='font-lg' id='submit-btn' onClick={SubmitHandle}>
                        Submit
                    </button>
                </div>
            </div>

        </div>
    )
}

const CommentContent = (props) => {

    const delBtn = (event) => {
        const delArea = event.target.parentElement
        delArea.remove()
    }

    const [ showBtn, setShowBtn ] = useState(true)
    const showBtnToggle = (event) => { 
        setShowBtn(!showBtn)
    }

    const item = props.item

    return(
        <div className='commented'>
            <span>ID : {item.nickName} </span>
            <span>DATE : {item.date} </span>
            <button className='comment-btn' onClick={delBtn} >DEL</button>
            {
                showBtn
                ?<button className='comment-btn' onClick={showBtnToggle}>EDIT</button>
                :<button className='comment-btn' onClick={showBtnToggle}>COMPLET</button>
            }
            <div className='commented-text' contentEditable={!showBtn}>
            {item.contents}
            </div>
        </div>
    )
}


export {
    PageNavi,
    PageHome,
    PageInfo,
    PageInfoDetail,
    Pagesummary,
    PageNotice,
    PageNoticeDetail,

}