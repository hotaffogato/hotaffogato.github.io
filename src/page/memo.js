import { useState } from "react"
import Button from "react-bootstrap/esm/Button"

const itemDetails =[
    {number:0, name:'ZAYIN', info:
    "가장 낮은 공격성을 가진 ZAYIN 등급의 환상체는 직원들에게 끼치는 피해가 그나마 제일 낮을 것입니다. \
    대개 큰 피해를 주지 않으며 상황에 따라서는 직원들에게 긍정적인 영향을 줄 수도 있을 것입니다. \
    하지만 세상에 모든 환상체들이 ZAYIN에 그쳤다면 우리가 이렇게 거대한 규모의 격리소를 만들 필요도 없었겠죠."},
            
    {number:1, name:'TETH', info:
    "이 환상체들은 직원에게 약한 상처에서부터 중상에 이르기까지 다양한 피해를 입힐 수 있을 것입니다. \
    하지만 직원들이 관리법을 잘 지킨다면 큰 피해를 입히지 않을 것입니다."},
        
    {number:2, name:'HE', info:
    "직원 수 명 정도는 손쉽게 죽일 수 있을 등급입니다. \
    아마 관리자님은 ZAYIN이나 TETH에게 쏟는 관심의 두 배 이상을 쏟아야 할 것입니다. \
    상황이 나빠지면 피 흘리며 썰려 나가는 여러 직원들을 볼 수 있겠죠. 하지만 아직까지는 큰 걱정까지는 필요 없는 단계입니다. \
    관리자님의 우수한 능력이라면 충분히 통제할 수 있습니다."},
        
    {number:3, name:'WAW', info:
    "해당 등급의 환상체를 맞닥뜨렸다면 슬슬 걱정해야 할 시기입니다. 이들은 위험성이 높으며 파괴력도 무시무시합니다. \
    아마 WAW 등급의 환상체들에게 있어서 부서들은 과자로 만든 집에 불과하겠죠. 사상자는 수십 명까지 도달할 것입니다. 그리고 대다수는 직원들에게 적대적일 것입니다."},
        
    {number:4, name:'ALAPH', info:
    "가장 위험합니다. 이 환상체가 관리 대상에 포함되는 순간, 당신은 최대한 할 수 있는 엄청난 집중과 관심을 계속해서 기울여야 합니다. \
    해당 등급의 환상체를 격리하는 방법을 찾기 위해 어마어마한 자본이 소비되었습니다. 이 환상체가 부서 전체를 파괴하지 않고 제압이 끝났다면 \
    그걸로 다행일 것입니다. 당신과 직원들은 모두 극심한 스트레스를 느끼겠죠. 부디 우리의 경고가 과장된 것이라고 생각하지 않기를 바랍니다."}
]


export const Test = () => {
    const [content, setContent] = useState({})

    return (
        <div>
            {itemDetails.map((item, index)=>{return(
                <Button onClick={()=>{
                    setContent(itemDetails[index])
                }}>
                    {item.name}
                </Button>
            )})}
            <div>
                {content.info}
            </div>
        </div>
    )
}

export const Test2 = () => {
    const [content, setContent] = useState({})
    
    // useEffect(()=>{
    //     console.log(content)
    // }, [content])

    function handleClick(event){
        setContent(itemDetails[event.target.id])
    }

    return (
        <div>
            {itemDetails.map((item)=>{return(
                <Button onClick={handleClick} id={item.number}>
                    {item.name}
                </Button>
            )})}
            <div>
                {content.info}
            </div>
        </div>
    )
}

export const Test3 = () => {
    return(
        <div id="my-icon"><img src="caret-down-fill.svg"/></div>
    )
}

export const myAccordian = () => {
    <>
    return(
        <div className="accordian" id="myAccordian">
            <div className="accordian-item">
                <div className="accordian-header">
                    <img src="caret-down-fill.svg" type="button" aria-expanded="true" className="accordian-button" />
                </div>
                <div className="accordian-collapse collaps show" style>
                    <div className="accordian-body">
                        <form>
                            <div>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="COMMENTS" rows="3" />
                                <textarea className="form-control" type="text" placeholder="NAME" rows="1" />
                            </div>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    </>
}