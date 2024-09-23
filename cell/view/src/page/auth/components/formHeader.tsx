import LogoImg from '../images/logo.jpeg';

export function FormHeader() {
  return (
    <div className="column-v_c mg-b_24">
      <img className="mg-h_a" src={LogoImg} width="120" alt="" />
      <p>Cell</p>
      <p>组织成长的最佳伙伴</p>
    </div>
  )
}