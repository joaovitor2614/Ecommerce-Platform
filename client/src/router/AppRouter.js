import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';






const AppRouter = () => {



   
    return(
    <Router >
        
        <Fragment>
      
       
           
            
  
                <Switch>
              
                    <Route exact path="/" component={Dashboard} />
                   
                </Switch >
              
       

        </Fragment>


    </Router>
)
    };

export default AppRouter;
