import {getId} from '../../assets/util.js'
import {fetchPost} from '../../assets/fetch.js'
export default (opts = {}) =>{
  const $loginForm = getId('login-form')
  const $loginBtn = getId('login-btn')
 //const $remember  = getId('login-rember')
  const $clearAccount = getId('clear-account')
  const $clearPassword = getId('clear-password')
  const $account = getId('login-account')
  const $password = getId('login-password')
  const $error = getId('login-error')

  $loginForm.onsubmit = async () =>{
  	console.log('submiit')
    // let remember = '0'
    // if($remember.getAttribute('checked')){
    // 	remember = '1'
    // }
  	const data = await fetchPost('/login',{
  		account:$account.value,
  		password:$password.value,
  	})
 
  	console.log(data)

  }
  $account.oninput = () =>{

  }
  $clearAccount.onclick = () =>{

  }
  $password.oninput = () =>{

  }
}