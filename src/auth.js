export default {
    setLogin: function(data){
        localStorage.setItem("userName",data.user.name);
        localStorage.setItem("userid",data.user._id);
        localStorage.setItem("token",data.token);
    } ,
    // getLogin: function(){
    //     return {
    //         name:localStorage.getItem("username"),
    //         id:localStorage.getItem("userid"),
    //         token:localStorage.getItem("token")
    //     }
    // },
    logout:function(){
         localStorage.removeItem("loggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        // localStorage.removeItem("token");
    }   
}