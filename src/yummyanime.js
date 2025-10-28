class yummyanime{
    constructor(){
        this.api = "https://api.yani.tv"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json",'Accept': 'image/avif,image/webp','Vary':"json"}
    }
    async login(email,password){
        let req=await fetch(`${this.api}/profile/login`,{method:"POST",headers: this.headers,body:JSON.stringify({"login":email,"password":password})});
        this.headers["cookie"]=req.headers.get("set-cookie")
        return req.json();
    }
    async search(q){
        let req=await fetch(`${this.api}/search?q=${q}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async dialogs_list(offset){
        let req=await fetch(`${this.api}/dialogs?offset=${offset}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async dialogs_list(offset){
        let req=await fetch(`${this.api}/profile/notifications`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async dialogs_list(offset){
        let req=await fetch(`${this.api}/profile/notifications`,{method:"DELETE",headers: this.headers});
        return req.json();
    }
    async rate(id,rate){
        let req=await fetch(`${this.api}/anime/${id}/rate`,{method:"POST",headers: this.headers,body:JSON.stringify({"rate":rate})});
        return req.json();
    }
    async submit_comment(id,message){
        let req=await fetch(`${this.api}/comments/anime/${id}`,{method:"POST",headers: this.headers,body:JSON.stringify({"text":message})});
        return req.json();
    }
    async comment_list(id,sort){
        let req=await fetch(`${this.api}/comments/anime/${id}?skip=0&sort=${sort}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async edit_bg_color(id){
        let req=await fetch(`${this.api}/profile`,{method:"POST",headers: this.headers,body:JSON.stringify({"bg_color":id})});
        return req.json();
    }
    async edit_bg_img(id){
        let req=await fetch(`${this.api}/profile`,{method:"POST",headers: this.headers,body:JSON.stringify({"profile_bg_img":id})});
        return req.json();
    }
    async anime_reviews(id,offset,sort){
        let req=await fetch(`${this.api}/anime/${id}/reviews?offset=${offset}&sort={sort}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async recommendations_list(id){
        let req=await fetch(`${this.api}/anime/${id}/recommendations`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async user_coments_list(offset){
        let req=await fetch(`${this.api}/comments/user/{id}?skip=0&sort={sort}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async user_frends_list(id){
        let req=await fetch(`${this.api}/users/${id}/friends/friends`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async send_message(id,message,answer_id=null){
        let data={"message":message,"answer_msg_id":null}
        if (answer_id){data["answer_msg_id"]=answer_id}
        let req=await fetch(`${this.api}/profile`,{method:"POST",headers: this.headers,body:JSON.stringify(data)});
        return req.json();
    }
}
module.exports = {yummyanime};