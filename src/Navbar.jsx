export const Navbar = ()=>{
//  const Narzo = document.getElementById('narzo')

// const narzo = ()=>{
//    ` <div>
//         <img src="/public/vite.svg" alt="" />
//         <img src="/public/vite.svg" alt="" />
//         <img src="/public/vite.svg" alt="" />
//     </div>
//    `
// }

const links = [
{
  label:"realme smartphone",
  link:"#",
},
{
  label:"realme smartphone",
  link:"#",
},
{
  label:"realme smartphone",
  link:"#",
},
{
  label:"realme smartphone",
  link:"#",
},
]


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3" href="#">realme</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ms-3 text-black" id="narzo" aria-current="page" href="#">realme smartphone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-3 text-black" id="narzo" href="#">narzo smartphone</a>
        </li>
         <li className="nav-item">
            <a className="nav-link ms-3 text-black " id="narzo" href="#">Audio</a>
         </li>
         <li className="nav-item">
            <a className="nav-link ms-3 text-black" id="narzo" href="#">Accessories</a>
         </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={{marginLeft :'450px'}}>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Brand</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Community</a>
        </li>
         </ul>
    </div>
    </div>
            </nav>
        </div>
        )
}