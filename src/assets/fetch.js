const fetchPost = (url,params)=>{
	return fetch(url,{
       method:'POST',
       header:{
       	 "Content-Type":"aalication/x-www-form-urlencode"
       },
       credentials:'include',//fetch默认不带cookie
       params:params
	}).then( (res)=>{
		if(!res.ok){
			throw Error(res.statusText)
		}
		return res.json
	})
}

export { fetchPost }