import React from 'react';
import AppBar from './Appbar'

const styles = {
    maxWidth: 570,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: 12,
    paddingLeft: 12,
}

const Layout = ({children}) => 
<div style={styles}>
    <AppBar/>
    <hr />
    {children}
</div>;

export default Layout;