const template = (opts ={}) =>{
	const tpl = `
	   <div id="login-wrapper">
          <form id="login-form" onsubmit="return false">
              <label class="login-accout-wrapper">
                  <span  class="account-label">
                     ${opts.accountLabel}
                  </span>
                  <input id="login-account" name="account" type="text"  
                         placeholder="${opts.accountPlaceholder}">
                  <span  id="clear-account" class="del"></span>
              </label>

              <label class="login-accout-wrapper">
                  <span  class="password-label">
                     ${opts.passwordLabel}
                  </span>
                  <input id="login-password" name="password" type="password"  
                         placeholder="${opts.passwordPlaceholder}">
                  <span id="clear-password" class="del"></span>
              </label>

              <input id="login-btn" class="login-btn" type="submit" 
                     value="${opts.loginBtnText}">
          </form>
	   </div>
	`
	return tpl
}
  
export default (conf ={}) =>{
  // console.log(conf)
   conf.container.innerHTML = template(conf)
}