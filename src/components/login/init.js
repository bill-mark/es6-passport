import '../../assets/polyfill.js'
import render  from './render.js'
import bindEvent from './event.js'

const login = (opts = {}) => {
    const defaultOpts = {
    	loginBtnText:'登 录',
    	accountPlaceholder:'手机号/邮箱/账号',
    	passwordPlaceholder:'请填写密码',
    	accountLabel:'',
    	passwordLabel:'',
    } 
    const options =Object.assign(defaultOpts,opts)
    render(options)
    bindEvent(options) 
}
    
export { login }