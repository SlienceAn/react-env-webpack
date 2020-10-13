import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ReadMore = (props) => {
    const { id } = useParams()
    const article = props.BlogValue.filter(el => el.articleID === parseInt(id))
    return (
        <div style={{ width: '60%', margin: '2rem auto' }}>
            <h1>{article[0].title}</h1>
            <section className="d-flex mt-2 mb-2 align-items-end justify-content-between pt-4 pb-4" style={{ borderBottom: '.5px solid rgb(44, 62, 80)' }}>
                <img src={article[0].admin} alt="missing" style={{ borderRadius: '50%' }} />
                <div className="d-flex">
                    <div><strong>發佈人</strong> : Sam</div>
                    <div className="ml-2"><strong>發佈日期</strong> : 2020-04-25</div>
                </div>
            </section>
            <article>
                <p>
                    維出上類；了的是角驗病獎頭生頭少斯本又本能才感己學消其親想子小即落，分此連。
                </p>
                <p>
                    一的望！畫義開世今者子會況爭入……一中總馬毒選東同，得已效西卻像林課年意動資經在傳個為光座口持
                    元亞投說角子紙北叫是省要語人？決自顯程立口的去法合個。去雖到得社園必字球反頭現命城……有有有加
                    奇氣來草日到……兩機辦有異得件！和飯夫對黃覺一可比行的照富我。我沒議全一氣？
                </p>
                <p>
                    院程破馬嚴什的：多師是、子相品了？生事第受使子種字力記也氣初給草也深之趣光臺而到們有道有它看面、
                    成利的也頭新皮北現種……實住難元開；問因然北電意相保院的要民前孩少。時省腦上為語。漸型受收孩腳開不
                    天在治……料其這皮人的資；次帶天出在了回著些眾都院不成中失子而景戲吃表人相共成光請大陽，子手動達爭
                    一、應片白體不！完該山車主們不是及留林聽……力離他年開持過直球金技和許都臺去的的兒信：我稱朋司高，
                    視電對破民令人及連通。常打看上，民己書公自人產己生少車切知轉中統方時政病信企證來清樣想反都飛別反病解同
                </p>
                <p>
                    院程破馬嚴什的：多師是、子相品了？生事第受使子種字力記也氣初給草也深之趣光臺而到們有道有它看面、
                    成利的也頭新皮北現種……實住難元開；問因然北電意相保院的要民前孩少。時省腦上為語。漸型受收孩腳開不
                    天在治……料其這皮人的資；次帶天出在了回著些眾都院不成中失子而景戲吃表人相共成光請大陽，子手動達爭
                    一、應片白體不！完該山車主們不是及留林聽……力離他年開持過直球金技和許都臺去的的兒信：我稱朋司高，
                    院程破馬嚴什的：多師是、子相品了？生事第受使子種字力記也氣初給草也深之趣光臺而到們有道有它看面、
                    成利的也頭新皮北現種……實住難元開；問因然北電意相保院的要民前孩少。時省腦上為語。漸型受收孩腳開不
                    天在治……料其這皮人的資；次帶天出在了回著些眾都院不成中失子而景戲吃表人相共成光請大陽，子手動達爭
                    一、應片白體不！完該山車主們不是及留林聽……力離他年開持過直球金技和許都臺去的的兒信：我稱朋司高，

                </p>
            </article>
            <Link to="/blog">
                <button className="btn text-white" style={{background:'rgb(44, 62, 80)'}}>返回</button>
            </Link>
        </div>
    );
}

export default ReadMore;