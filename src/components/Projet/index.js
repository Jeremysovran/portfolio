import React from 'react';
import './style.scss';
import {
    Grid
  } from 'semantic-ui-react';
  import { FaLink } from "react-icons/fa";

const Projet = () => (
<section id="projectPart">
<div className="projectIntro">
<h2>Mes projets</h2>
<hr/>
<div id="projectDescription">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste optio corrupti, soluta eaque harum.
</div>
</div>
<Grid relaxed stackable className="projectWrap">
<Grid.Column mobile={16} tablet={8} computer={8} className="noPadding">
    <a className="projectBloc" href="https://github.com/Jeremysovran/food-family" target="_blank">
    <div className="projectBlockTitle">
    <FaLink className="projectIcon" />
    <div className="projectTitle">The food family <span>- 2019</span></div>
    </div>
    <div className="projectText">Développement front-end React avec de l'état l'application via Redux. Intégration réalisée avec l'aide de la librairie Semantic UI</div>
    </a>
</Grid.Column>
<Grid.Column mobile={16} tablet={8} computer={8} className="noPadding">
    <a className="projectBloc" href="https://github.com/Jeremysovran/Weather-app-react" target="_blank">
    <div className="projectBlockTitle">
    <FaLink className="projectIcon" />
    <div className="projectTitle">Weather app <span>- 2019</span></div>
    </div>
    <div className="projectText">Développement front-end React utilsant une API météo. Intégration réalisée en flexbox</div>
    </a>
</Grid.Column>
<Grid.Column mobile={16} tablet={8} computer={8} className="noPadding">
    <a className="projectBloc" href="https://github.com/Jeremysovran/drum-JS" target="_blank">
    <div className="projectBlockTitle">
    <FaLink className="projectIcon" />
    <div className="projectTitle">Drum kit <span>- 2019</span></div>
    </div>
    <div className="projectText">Exercice d'entrainement javascript provenant wesbos.com</div>
    </a>
</Grid.Column>
<Grid.Column mobile={16} tablet={8} computer={8} className="noPadding">
    <a className="projectBloc" href="https://github.com/Jeremysovran/training-lumen" target="_blank">
    <div className="projectBlockTitle">
    <FaLink className="projectIcon" />
    <div className="projectTitle">Clone facebook profile <span>- 2019</span></div>
    </div>
    <div className="projectText">Exercice utilisant le framework Lumen afin de reproduire la page profile de Facebook. Intégration réalisée avec Bootstrap</div>
    </a>
</Grid.Column>
</Grid>
</section>
);

export default Projet;