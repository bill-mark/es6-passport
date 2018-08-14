export default(container) =>{
    const  tpl = '<form id="form"><input id="input" name="uname" type="text"><br/><input name="password" type="password"><br/><input id="submit" name="登录" type="submit"></form>';

    container.innerHTML = tpl;	
}