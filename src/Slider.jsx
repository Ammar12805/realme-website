export const Slider = ()=>{
 
 const styleObj = {
    height : '530px'
 }
 
 
 
    return(
    <div className="slide">
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={styleObj} src="https://image01.realme.net/general/20241212/17339677184375522816ea05448759b75ff71ccb7f35a.jpg.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={styleObj} src="https://image01.realme.net/general/20241125/1732502822846997d10f6e07b4df484c81b3f21b49b0e.jpg.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={styleObj} src="https://static2.realme.net/images/realme-gt-6/banner/bg.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
 )   
}