export let initialState=false;

export const reducer=(state,action)=>{
    if(action.type==="USER"){
        localStorage.setItem('loggedIn',action.payload);
        return action.payload;
    }
    return state;
}

let val;
if(localStorage.getItem('loggedIn')=='true'){
  val=1
}else{
  val=0
}
initialState =Boolean(val);
console.log(initialState);
