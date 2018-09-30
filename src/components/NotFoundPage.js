import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div style={{display: 'flex', justifyContent: 'center', paddingTop: 40}}>
    <div style={{border: '1px solid #0080ff', borderRadius: 10, textAlign: 'center', padding: '50px'}}>
      <h1 style={{fontSize: '3em', color: '#F81894'}}>404</h1> Page is not found, go to <Link to="/" style={{color: '#0080ff'}}>Home</Link>
    </div>
  </div>
)

export default NotFoundPage;
