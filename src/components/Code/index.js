import React from 'react';
import './style.scss';
import {
    Grid
  } from 'semantic-ui-react';

const Code = () => (
<div id="codePart">
<div id="wrapperCode">
<h2>Code & passions</h2>
<hr/>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo esse amet soluta. In voluptate impedit, beatae inventore aliquid iusto exercitationem.
<Grid relaxed stackable>
<Grid.Column mobile={16} tablet={8} computer={8} >
<div className="boxCode">
<span>passions & centres d'interets</span>
<ul>
    <li>Photographie</li>
    <li>Ski</li>
    <li>Vtt</li>
    <li>High-Tech</li>
    <li>Voyages</li>
</ul>
</div>
</Grid.Column>
<Grid.Column mobile={16} tablet={8} computer={8} >
<div className="boxCode">
<span>Compétences techniques</span>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>React</li>
    <li>PHP</li>
    <li>SQL</li>
    <li>Responsive</li>
    <li>SCSS</li>
    <li>Git</li>
</ul>
</div>
</Grid.Column>
</Grid>
</div>
</div>
);

export default Code;