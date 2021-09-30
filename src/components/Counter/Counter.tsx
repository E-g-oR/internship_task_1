import React from "react";
import { observer } from "mobx-react-lite";


interface ICounter {
   value: number,
   increaseValue: () => void,
   decreaseValue: () => void
}


const Counter: React.FC<{ counter: ICounter }> = observer(({ counter }) => {

   return (<>
      <div className="row">
         <div className="col s12 m4">
            <div className="card red darken-3">
               <div className="card-content white-text">
                  <span className="card-title">Simple MobX counter</span>
                  <p>Count: {counter.value}</p>
               </div>
               <div className="card-action">
                  <button
                     className="waves-effect waves-light black-text btn red accent-1"
                     onClick={() => { counter.increaseValue() }}
                  >
                     <i className="material-icons left">add_circle</i>
                     increase
                  </button>
                  <button
                     className="waves-effect waves-light black-text btn red accent-1"
                     onClick={() => { counter.decreaseValue() }}
                  >
                     <i className="material-icons left">remove_circle</i>
                     decrease
                  </button>
               </div>
            </div>
         </div>
      </div>
   </>)
})

export default Counter