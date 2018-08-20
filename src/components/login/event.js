import {getId} from '../../assets/ustis.js'
export default (opts  =  {}) =>{
  const $loginForm = getId('login-form')
  const $loginBtn = getId('login-btn')
  const $remember  = getId('login-rember')
  const $clearAccount = getId('clear-account')
  const $clearPassword = getId('clear-password')
  const $account = getId('login-account')
  const $password = getId('login-password')
  const $error = getId('login-error')

  $loginForm.onsubmit = () =>{
  	//点击登录

  }
  $account.oninput = () =>{

  }
  $clearAccount.onclick = () =>{

  }
  $password.oninput = () =>{
  	
  }
}