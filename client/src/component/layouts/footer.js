import React  from "react";
import './footer.css'
export default function footer() {
    return(
        <div className="final">
        <div className="footer">
            <div className="section1">
                <h1>LOGO</h1>
                <h3>Renseignement</h3>
                <p>Dépannage d’urgence à domicile pour toutes vos pannes électriques, 
                    pannes de chauffage et sanitaires en tunisie. Construction Bâtiment, 
                    Plomberie, Electricité, chauffage, 
                    Climatisation</p>
            </div>
            <hr></hr>
            <div className="section2">
            <h5 >Nous Joindre</h5>

                <ul>
                <li>
            <a href="#!" style={{textDecoration:"none",color:"#002F36"}}>adress:tunis</a>
          </li>
          <li>
            <a href="#!" style={{textDecoration:"none",color:"#002F36"}}>Email:sercive@contact.tn</a>
          </li>
          <li>
            <a href="#!"style={{textDecoration:"none",color:"#002F36"}}>tel:71000071</a>
          </li>
                </ul>


            </div>

        </div>
        <div className="end"><p>© 2020 Copyright</p>
        </div>
        </div>
    )
    
}
