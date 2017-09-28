(function(str){
  var xhr = new XMLHttpRequest()
  xhr.open("post","https://api.twitter.com/1.1/statuses/update.json",false)
  
  xhr.withCredentials=true;

  var cookies ={}
  document.cookie.split("; ").forEach(function(v){

    var kv=v.split("=")
    cookies[kv[0]]=kv[1]
  })

  var sessionId=cookies.ct0;

  xhr.setRequestHeader("X-Twitter-Active-User", "yes")
  //xhr.setRequestHeader("X-Requested-With","XMLHttpRequest")//because of xdomain
  xhr.setRequestHeader("x-csrf-token",sessionId)
  xhr.setRequestHeader("x-twitter-auth-type","OAuth2Session")
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhr.setRequestHeader("Authorization","Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA")


    var j={
      enable_dm_commands:true,
      fail_dm_commands:true,
      status: str,
      weighted_character_count:"true",
      tweet_mode:"extended"
    }

    var qst=""

    for (var i in j){
	    qst+=i+"="+j[i]+"&"
    }
    xhr.onreadystatechange = function() {
      switch ( xhr.readyState ) {
        case 4: // データ受信完了.
          if( xhr.status == 200 || xhr.status == 304 ) {
            alert("Tweeted!Count:"+str.length)
            
          } else {
            alert("(_　_|||)Sorry.")
          }
          break;
      }
    };
    xhr.send(qst)

})("str")
