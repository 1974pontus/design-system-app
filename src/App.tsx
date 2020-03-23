import React from "react";
import "./App.css";
import MainLayout from "./MainLayout";
// import { WelcomeScreen } from "./Welcomescreen";
// import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
// import { Monkey } from "./monkey";




function App() {
  // state: State = {
  //   isWelcomeScreenEnabled: false 
  // }

  // private removeWelcomeScreen = () => {
  //   this.setState({ isWelcomeScreenEnabled: false})
  // }
  // setState: any;

  // private get WelcomScreen() {
  //   if (this.state.isWelcomeScreenEnabled) {
  //     return <WelcomeScreen dismissed={this.removeWelcomeScreen}/>
  //   }
  // }

      return (
        // <Suspense fallback={<Spinner/>}>
        //   <Router>
        //     <ErrorBoundary>
        //       {this.WelcomScreen}
        //         <Suspense fallback={<Monkey/>}>
                  <div className='App'>     
                    <MainLayout />
                  </div>
      //           </Suspense>
      //       </ErrorBoundary>
      //     </Router>
      //   </Suspense> 
       );
    }
  
 export default App