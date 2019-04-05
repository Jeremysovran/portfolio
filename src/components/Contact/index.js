import React from 'react';
import './style.scss';
import {
    Grid
  } from 'semantic-ui-react';

const Code = () => (
<section id="contact">
<div id="contact-intro">
<h2>Contact</h2>
<hr/>
<div id="contact-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste optio corrupti, soluta eaque harum.
</div>
<form action="https://formspree.io/jeremy.sov@gmail.com" method="POST">
  <input type="email" name="_replyto" placeholder="e-mail"/>
    <textarea name="name" id="" placeholder="votre message" ></textarea>
    <button type="submit">envoyer</button>
</form>
</div>
</section>
);

export default Code;