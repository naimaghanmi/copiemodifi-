import React from 'react'
import './quiSomme.css'
import {image} from '../const/data'
export default function Propos() {
    return (
  <div class="mainn">
      <div className="somme">

      <div className='title'>
          <span> Qui Sommes Nous??</span>
      </div>
  <div className="service">
  <div className='text-description'>

         <p >
          Nous sommes une société de service à domicile.
          Nous participons d’une manière très active au dépannage à domicile 
          dans divers domaine(réparation électrique, blomberie, jardinnage, 
          climatisation, ... ).
          la saticfaction clientéle et la rapidité sont nos principaux 
          objectifs.
          </p>
          </div>
     
           <div className='text-description'>
          <p >Notre société a mis en place le service 
          <b> Rapido services </b>
          .C’est une plate-forme spécialisée dans le 
        <b> dépannage d’urgence </b>
          . En effet, si vous avez un problème au niveau de l’installation 
          (plomberie, chauffage, climatisation, électricité,…) de votre maison, Rapido Services se charge de vous dépêcher un spécialiste pour intervenir dans les meilleurs délais avec la garantie de l’efficacité,
           la qualité et la transparence.
          </p>
          </div>
      </div>
     
      <div className="Sections">

        <div className="depannage">
            <h3>Dépannage à Domicile</h3> 
             <p>Prmier Dpannage  D'URGENCE EN TUNISIE
Dépannage d'urgence pour toutes vos pannes électriques,pannes de chauffage & sanitaires en tunisie.   Aussi Notre service est a votre disposition <b>7/7j </b>& <b>24/24h</b> ,n'heziter à y accéder</p>
       
       </div>
       <div className="Services">
       {image.map(el =>
       <div>
         <div  className="cont">
        <img width="280px"  height="300px" src={el.src}/>
        <div className="title"> <p>{el.title}</p> </div>
        </div>
      </div>
       )};
  </div>
  </div>
  </div>
  </div>
    );
}